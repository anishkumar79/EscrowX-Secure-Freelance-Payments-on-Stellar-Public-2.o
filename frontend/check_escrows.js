import { 
  rpc, 
  Account, 
  nativeToScVal, 
  scValToNative, 
  TransactionBuilder, 
  Networks, 
  BASE_FEE, 
  Operation 
} from '@stellar/stellar-sdk';

const CONTRACT_ADDRESS = 'CBGL7N5GANUBPAV2UHXC5UBW3JSXGNLAKOMVJD54YNIZF6WN6PHSMQAL';
const RPC_URL = 'https://soroban-testnet.stellar.org:443';
const server = new rpc.Server(RPC_URL);

async function run() {
  const mockAccount = new Account('GATU5I4FA4XAD73GFLA4OM5VENVNVGQI3UBAR2ALUVMW23SUYOKVC2KK', '0');
  
  async function invokeContractReadOnly(functionName, args = []) {
    let tx = new TransactionBuilder(mockAccount, {
      fee: BASE_FEE,
      networkPassphrase: Networks.TESTNET,
    })
      .addOperation(
        Operation.invokeContractFunction({
          contract: CONTRACT_ADDRESS,
          function: functionName,
          args: args
        })
      )
      .setTimeout(60)
      .build();

    const simulation = await server.simulateTransaction(tx);
    if (!rpc.Api.isSimulationSuccess(simulation)) {
      throw new Error(`Simulation failed: ${simulation.error || 'Unknown error'}`);
    }
    return scValToNative(simulation.result.retval);
  }

  console.log("Fetching escrows count from contract...");
  const count = await invokeContractReadOnly('get_counter', []);
  console.log(`Total escrows count on contract: ${count}`);

  const active = [];
  const completed = [];
  const created = [];
  const refunded = [];

  for (let id = 1; id <= count; id++) {
    try {
      const details = await invokeContractReadOnly('get_escrow', [
        nativeToScVal(BigInt(id), { type: 'u64' })
      ]);
      if (details) {
        const item = {
          id,
          client: details.client,
          freelancer: details.freelancer,
          amount: Number(details.amount) / 10000000,
          status: Number(details.status)
        };
        if (item.status === 0) created.push(item);
        else if (item.status === 1 || item.status === 2) active.push(item);
        else if (item.status === 3) completed.push(item);
        else if (item.status === 4) refunded.push(item);
      }
    } catch (err) {
      console.error(`Error fetching escrow #${id}:`, err.message);
    }
  }

  console.log(`\n--- Summary ---`);
  console.log(`Created (Status 0): ${created.length}`);
  console.log(`Active (Status 1 or 2): ${active.length}`);
  console.log(`Completed (Status 3): ${completed.length}`);
  console.log(`Refunded (Status 4): ${refunded.length}`);

  console.log(`\n--- List of Active/Deposited/Requested (Status 1 or 2) ---`);
  console.log(JSON.stringify(active, null, 2));

  console.log(`\n--- List of Completed/Released (Status 3) ---`);
  console.log(JSON.stringify(completed, null, 2));
}

run().catch(err => console.error(err));
