const account = require("./account.js");

const getBalance = function (source) {
  return source.acctBal;
};

const withdraw = function (source, amt) {
  return source - amt;
};

const deposit = function (source, amt) {};

module.exports = {
  getBalance: getBalance,
  withdraw: withdraw,
  deposit: deposit,
};
