// const account = require("./account.js");
const prompt = require("prompt-sync")();
const wallet = {
  balance: 0,
};
const invalidMessage = ":::::ALERT:::::\nYOUR ENTRY IS NOT VALID\nPLEASE, RETRY OR TYPE QUIT TO EXIT";

const getBalance = function (source) {
  console.log("\n\nHere is your available account balance\n\n" + source);
};

const withdraw = function (source) {
  let withdrawal = parseFloat(prompt("Enter the amount you would like to take out:"));
  if (isNaN(withdrawal) || withdrawal === "") {
    console.log(invalidMessage);
    withdraw();
  } else {
    return source - withdrawal;
  }
};

const deposit = function (source) {
  let deposit = parseFloat(prompt("Enter the amount you would like to deposit:"));
  if (isNaN(deposit) || deposit === "") {
    console.log(invalidMessage);
    deposit();
  } else {
    return source + deposit;
  }
};

const validatePin = function (input, validNumber) {
  if (parseInt(input) === validNumber) {
    return true;
  } else {
    return false;
  }
};

module.exports = {
  getBalance: getBalance,
  withdraw: withdraw,
  deposit: deposit,
  validatePin: validatePin,
  wallet: wallet,
};
