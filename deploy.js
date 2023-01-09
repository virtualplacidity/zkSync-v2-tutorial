const Web3 = require('web3');
const fs = require('fs');

const web3 = new Web3(LOCAL_TESTNET_PROVIDER_URL);

const contractSource = fs.readFileSync('./account.sol', 'utf-8');
const compiledContract = solc.compile(contractSource, 1);
const contractAbi = compiledContract.contracts[':Account'].interface;
const contractBytecode = compiledContract.contracts[':Account'].bytecode;

const contract = new web3.eth.Contract(JSON.parse(contractAbi));

contract.deploy({
  data: contractBytecode
}).send({
  from: ADMIN_ADDRESS,
  gas: 1500000,
  gasPrice: '30000000000000'
}).then(function(newContractInstance) {
  console.log('Contract deployed at:', newContractInstance.options.address);
});
