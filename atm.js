// const account = require("./account.js");
const prompt = require("prompt-sync")();
const wallet = require("./wallet");
const invalidMessage = ":::::ALERT:::::\nYOUR ENTRY IS NOT VALID\nPLEASE, RETRY";

const getBalance = (source) => console.log("\n\nHere is your available account balance\n\n" + `$${source}\n\n`);

const withdraw = function (source) {
  let withdrawal = parseFloat(prompt("Enter the amount you would like to take out:"));
  if (isNaN(withdrawal) || withdrawal === "") {
    console.log(invalidMessage);
    return withdraw(source);
  } else {
    wallet.cash += withdrawal;
    return source - withdrawal;
  }
};

const deposit = function (source) {
  let depositAmount = parseFloat(prompt("Enter the amount you would like to deposit:"));
  if (isNaN(depositAmount) || depositAmount === "") {
    console.log(invalidMessage);
    return deposit(source);
  } else {
    wallet.cash -= depositAmount;
    return source + depositAmount;
  }
};

const validatePin = (input, validNumber) => (parseInt(input) === validNumber ? true : false);

const getWalletBalance = () => console.log(`You're current wallet balance is $${wallet.cash}`);

module.exports = {
  wallet: wallet,
  getBalance: getBalance,
  withdraw: withdraw,
  deposit: deposit,
  validatePin: validatePin,
  getWalletBalance: getWalletBalance,
};
