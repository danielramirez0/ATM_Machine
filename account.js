const account1 = {
  accountNumber: 123456,
  accountBalance: require("./wallet.js").balance,
  accountPin: 1234,
};
console.log(account1);

module.exports.acctNum = account1.accountNumber;
module.exports.acctBal = account1.accountBalance;
module.exports.acctPin = account1.accountPin;
