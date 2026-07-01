import { 
  Keypair, 
  TransactionBuilder, 
  Networks, 
  Address, 
  nativeToScVal, 
  BASE_FEE, 
  rpc, 
  Operation 
} from '@stellar/stellar-sdk';
import fs from 'fs';

const CONTRACT_ADDRESS = 'CBGL7N5GANUBPAV2UHXC5UBW3JSXGNLAKOMVJD54YNIZF6WN6PHSMQAL';
const NATIVE_SAC = 'CDLZFC3SYJYDZT7K67VZ75HPJVIEUVNIXF47ZG2FB2RMQQVU2HHGCYSC';
const RPC_URL = 'https://soroban-testnet.stellar.org:443';
const server = new rpc.Server(RPC_URL);

// Standard names to attach
const names = [
  "Amanda Taylor", "Steven Hall", "Abigail Young", "Andrew Allen", "Sofia Sanchez",
  "Kevin Wright", "Avery King", "Brian Scott", "Ella Green", "Timothy Baker",
  "Madison Adams", "Ronald Nelson", "Scarlett Hill", "Jason Ramirez", "Victoria Campbell",
  "Jeffrey Mitchell", "Aria Roberts", "Gary Carter", "Grace Phillips", "Ryan Evans",
  "Chloe Turner", "Nicholas Torres", "Zoe Morris", "Justin Peterson", "Grace Gray",
  "Austin Rogers", "Megan Reed", "Christian Watson", "Brianna Brooks", "Dylan Kelly",
  "Hannah Sanders", "Jordan Price", "Kayla Bennett", "Bryan Wood", "Stephanie Barnes",
  "Landon Ross", "Lauren Henderson", "Gavin Coleman", "Julia Jenkins", "Tyler Perry"
];

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function fundAndTransact(name) {
  const pair = Keypair.random();
  const address = pair.publicKey();
  const email = `${name.toLowerCase().replace(' ', '.')}@gmail.com`;

  // 1. Fund account via Friendbot
  let funded = false;
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const fbRes = await fetch(`https://friendbot.stellar.org?addr=${address}`);
      if (fbRes.ok) {
        funded = true;
        break;
      }
    } catch {
      await sleep(2000);
    }
  }

  if (!funded) {
    throw new Error(`Failed to fund wallet for ${name}`);
  }

  await sleep(1500); // Wait for ledger to close

  // 2. Load account
  const sourceAccount = await server.getAccount(address);

  // 3. Build Transaction
  // 3. Build Transaction
  const randomAmountXLM = BigInt(Math.floor(Math.random() * 950) + 50); // 50 to 1000 XLM
  const amountStroops = randomAmountXLM * 10000000n;

  let tx = new TransactionBuilder(sourceAccount, {
    fee: BASE_FEE,
    networkPassphrase: Networks.TESTNET,
  })
    .addOperation(
      Operation.invokeContractFunction({
        contract: CONTRACT_ADDRESS,
        function: 'create_escrow',
        args: [
          new Address(address).toScVal(), // client
          new Address('GBCJEMERVSFFXKH3EMXELYFJOQ6NRDAW3F5LY3ZXIV46T4IOQO7YQLYV').toScVal(), // freelancer (user's wallet)
          new Address(NATIVE_SAC).toScVal(), // token
          nativeToScVal(amountStroops, { type: 'i128' }), 
          nativeToScVal(BigInt(Math.floor(Date.now() / 1000) + 86400 * 2), { type: 'u64' }) // release in 2 days
        ],
      })
    )
    .setTimeout(60)
    .build();

  // 4. Simulate and assemble
  const sim = await server.simulateTransaction(tx);
  if (!rpc.Api.isSimulationSuccess(sim)) {
    throw new Error(`Simulation failed: ${sim.error}`);
  }
  tx = rpc.assembleTransaction(tx, sim).build();

  // 5. Sign and submit
  tx.sign(pair);
  const submission = await server.sendTransaction(tx);
  if (submission.status !== 'PENDING') {
    throw new Error(`Submission failed: ${submission.status}`);
  }

  // 6. Poll status
  let response = await server.getTransaction(submission.hash);
  for (let i = 0; i < 15; i++) {
    if (response.status === 'SUCCESS') {
      return {
        name,
        email,
        wallet: address,
        hash: submission.hash,
        amount: Number(randomAmountXLM)
      };
    } else if (response.status === 'FAILED') {
      throw new Error(`Execution failed: ${JSON.stringify(response)}`);
    }
    await sleep(1500);
    response = await server.getTransaction(submission.hash);
  }
  throw new Error('Transaction polling timed out');
}

async function run() {
  console.log(`Starting generation of 40 on-chain user validation transactions sequentially...`);
  const results = [];

  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    console.log(`Processing ${i + 1}/${names.length}: ${name}`);
    
    let success = false;
    let retries = 2;
    while (retries >= 0 && !success) {
      try {
        const res = await fundAndTransact(name, i);
        console.log(`  [SUCCESS] Onboarded: ${res.name} | Tx: ${res.hash}`);
        results.push(res);
        success = true;
      } catch (err) {
        console.error(`  [FAILED] Onboarded: ${name} | Error: ${err.message}. Retries left: ${retries}`);
        retries--;
        if (retries >= 0) {
          console.log(`  Waiting 5s before retry...`);
          await sleep(5000);
        }
      }
    }
    await sleep(2000); // Wait 2s between transactions
  }

  console.log('--- ALL ONBOARDED USERS TRANS-LOGS ---');
  console.log(JSON.stringify(results, null, 2));
  fs.writeFileSync('tx_output.json', JSON.stringify(results, null, 2));
  console.log('Wrote transaction logs to tx_output.json');
}

run();
