// const account = require("./account.js");

const getBalance = function (source) {
  return source.acctBal;
};

const withdraw = function (source, amt) {
  return source.acctBal - amt;
};

const deposit = function (source, amt) {
  return source.acctBal + amt;
};

module.exports = {
  getBalance: getBalance,
  withdraw: withdraw,
  deposit: deposit,
};
