// const account = require("./account.js");
const prompt = require("prompt-sync")();
const getBalance = function (source) {
  console.log("\n\nHere is your available account balance\n\n" + source);
};

const withdraw = function (source) {
  let withdrawal = parseFloat(prompt("Enter the amount you would like to take out:"));
  if (isNaN(withdrawal) || withdrawal === "") {
    console.log(":::::ALERT:::::\nINVALID ENTRY\nPLEASE, RETRY USING NUMBERS ONLY");
    withdraw();
  } else {
    return source - withdrawal;
  }
};

const deposit = function (source) {
  let deposit = parseFloat(prompt("Enter the amount you would like to deposit:"));
  if (isNaN(deposit) || deposit === "") {
    console.log(":::::ALERT:::::\nINVALID ENTRY\nPLEASE, RETRY USING NUMBERS ONLY");
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
};
