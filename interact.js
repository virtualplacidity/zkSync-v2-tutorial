const Web3 = require('web3');
const web3 = new Web3(LOCAL_TESTNET_PROVIDER_URL);

const contract = new web3.eth.Contract(ABI, CONTRACT_ADDRESS);
const ADMIN_ADDRESS = "0x...";  // replace with the admin's address

// Set the daily spending limit for the account
contract.methods.setDailyLimit(1000).send({
  from: ADMIN_ADDRESS
}).then(function(receipt) {
  console.log('Daily limit set');
});

// Get the daily spending limit for the account
contract.methods.getDailyLimit().call().then(function(limit) {
  console.log('Daily limit
