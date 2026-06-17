import { 
  Keypair, 
  TransactionBuilder, 
  Networks, 
  Address, 
  nativeToScVal, 
  scValToNative, 
  BASE_FEE, 
  rpc, 
  Operation 
} from '@stellar/stellar-sdk';
import fs from 'fs';

const CONTRACT_ADDRESS = 'CBGL7N5GANUBPAV2UHXC5UBW3JSXGNLAKOMVJD54YNIZF6WN6PHSMQAL';
const NATIVE_SAC = 'CDLZFC3SYJYDZT7K67VZ75HPJVIEUVNIXF47ZG2FB2RMQQVU2HHGCYSC';
const RPC_URL = 'https://soroban-testnet.stellar.org:443';
const server = new rpc.Server(RPC_URL);
const FREELANCER_ADDRESS = 'GBCJEMERVSFFXKH3EMXELYFJOQ6NRDAW3F5LY3ZXIV46T4IOQO7YQLYV';

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

async function sendSorobanTx(pair, functionName, args) {
  const address = pair.publicKey();
  let sourceAccount = await server.getAccount(address);

  let tx = new TransactionBuilder(sourceAccount, {
    fee: BASE_FEE,
    networkPassphrase: Networks.TESTNET,
  })
    .addOperation(
      Operation.invokeContractFunction({
        contract: CONTRACT_ADDRESS,
        function: functionName,
        args: args,
      })
    )
    .setTimeout(60)
    .build();

  const sim = await server.simulateTransaction(tx);
  if (!rpc.Api.isSimulationSuccess(sim)) {
    throw new Error(`Simulation failed for ${functionName}: ${JSON.stringify(sim.error || sim)}`);
  }
  tx = rpc.assembleTransaction(tx, sim).build();
  tx.sign(pair);

  const submission = await server.sendTransaction(tx);
  if (submission.status !== 'PENDING') {
    throw new Error(`Submission failed for ${functionName}: ${submission.status}`);
  }

  let response = await server.getTransaction(submission.hash);
  for (let i = 0; i < 15; i++) {
    if (response.status === 'SUCCESS') {
      return {
        hash: submission.hash,
        returnValue: response.returnValue
      };
    } else if (response.status === 'FAILED') {
      throw new Error(`Execution failed for ${functionName}: ${JSON.stringify(response)}`);
    }
    await sleep(2000);
    response = await server.getTransaction(submission.hash);
  }
  throw new Error(`Transaction polling timed out for ${functionName}`);
}

async function executeFullLifecycle(name) {
  const pair = Keypair.random();
  const address = pair.publicKey();
  const email = `${name.toLowerCase().replace(' ', '.')}@gmail.com`;

  let funded = false;
  for (let attempt = 1; attempt <= 4; attempt++) {
    try {
      console.log(`  Funding ${name} attempt ${attempt}...`);
      const fbRes = await fetch(`https://friendbot.stellar.org?addr=${address}`);
      if (fbRes.ok) {
        funded = true;
        break;
      }
    } catch (e) {
      await sleep(3000);
    }
    await sleep(3000);
  }

  if (!funded) {
    throw new Error(`Failed to fund wallet for ${name}`);
  }

  await sleep(3000);

  const randomAmountXLM = BigInt(Math.floor(Math.random() * 950) + 50); // 50 to 1000 XLM
  const amountStroops = randomAmountXLM * 10000000n;
  const releaseTime = BigInt(Math.floor(Date.now() / 1000) + 86400 * 2);

  console.log(`  [Step 1] Creating escrow for ${name} (Amount: ${randomAmountXLM} XLM)...`);
  const createRes = await sendSorobanTx(pair, 'create_escrow', [
    new Address(address).toScVal(),
    new Address(FREELANCER_ADDRESS).toScVal(),
    new Address(NATIVE_SAC).toScVal(),
    nativeToScVal(amountStroops, { type: 'i128' }),
    nativeToScVal(releaseTime, { type: 'u64' })
  ]);

  const escrowId = scValToNative(createRes.returnValue);
  console.log(`  [Step 1 SUCCESS] Escrow #${escrowId} created. Tx: ${createRes.hash}`);

  await sleep(2500);

  console.log(`  [Step 2] Depositing funds into Escrow #${escrowId}...`);
  const depositRes = await sendSorobanTx(pair, 'deposit', [
    nativeToScVal(escrowId, { type: 'u64' })
  ]);
  console.log(`  [Step 2 SUCCESS] Deposited. Tx: ${depositRes.hash}`);

  await sleep(2500);

  console.log(`  [Step 3] Releasing Escrow #${escrowId} to freelancer...`);
  const releaseRes = await sendSorobanTx(pair, 'approve_release', [
    nativeToScVal(escrowId, { type: 'u64' })
  ]);
  console.log(`  [Step 3 SUCCESS] Released. Tx: ${releaseRes.hash}`);

  return {
    name,
    email,
    wallet: address,
    hash: releaseRes.hash,
    amount: Number(randomAmountXLM),
    escrowId: Number(escrowId)
  };
}

async function run() {
  const jsonPath = 'tx_output.json';
  let completedList = [];
  if (fs.existsSync(jsonPath)) {
    completedList = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
  }
  
  const completedNames = completedList.map(u => u.name);
  console.log(`Loaded ${completedList.length} completed users.`);

  const missingNames = names.filter(name => !completedNames.includes(name));
  console.log(`Identified ${missingNames.length} missing users:`, missingNames);

  for (let i = 0; i < missingNames.length; i++) {
    const name = missingNames[i];
    console.log(`Processing missing user ${i + 1}/${missingNames.length}: ${name}`);
    
    let success = false;
    let retries = 3;
    while (retries >= 0 && !success) {
      try {
        const res = await executeFullLifecycle(name);
        console.log(`  [COMPLETE] Completed lifecycle for ${res.name} | Escrow ID: ${res.escrowId} | Release Tx: ${res.hash}`);
        completedList.push(res);
        fs.writeFileSync(jsonPath, JSON.stringify(completedList, null, 2));
        success = true;
      } catch (err) {
        console.error(`  [ERROR] Failed for ${name}: ${err.message}. Retries left: ${retries}`);
        retries--;
        if (retries >= 0) {
          console.log(`  Waiting 10s before retry...`);
          await sleep(10000);
        }
      }
    }
    await sleep(4000);
  }

  console.log(`Finished processing. Total completed users now: ${completedList.length}`);
}

run().catch(err => console.error(err));
