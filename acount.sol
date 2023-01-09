pragma solidity ^0.6.0;

contract Account {
  uint256 public dailyLimit;
  uint256 public totalSpent;
  
  constructor() public {
    // Set the initial daily limit to 1000 units
    dailyLimit = 1000;
  }
  
  function setDailyLimit(uint256 _limit) public {
    // Only the admin can change the daily limit
    require(msg.sender == ADMIN_ADDRESS, "Only the admin can change the daily limit");
    dailyLimit = _limit;
  }
  
  function getDailyLimit() public view returns (uint256) {
    return dailyLimit;
  }
  
  function transfer(address _recipient, uint256 _amount) public {
    // Check if the daily limit has been exceeded
    require(totalSpent + _amount <= dailyLimit, "Daily limit exceeded");
    // Make the transfer
    _recipient.transfer(_amount);
    totalSpent += _amount;
  }
}
