const account = require("./account.js");
const wallet = require("./wallet.js");

const getBalance = function (source) {
  return source.acctBal;
};

const withdraw = function (source, amt) {
  return source - amt;
};

const deposit = function (source, amt) {};

const validatePin = function (input) {};

module.exports = {
  getBalance: getBalance,
  withdraw: withdraw,
  deposit: deposit,
  validatePin: validatePin,
};
