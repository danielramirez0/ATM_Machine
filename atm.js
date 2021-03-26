// const account = require("./account.js");
const prompt = require("prompt-sync")();
const wallet = require("./wallet");
const invalidMessage = ":::::ALERT:::::\nYOUR ENTRY IS NOT VALID\nPLEASE, RETRY";
const account = require("./account");

const getBalance = () => console.log("\n\nHere is your available account balance\n\n" + `$${account.acctBal}\n\n`);

const withdraw = function () {
  let withdrawal = parseFloat(prompt("Enter the amount you would like to take out:"));
  if (isNaN(withdrawal) || withdrawal === "") {
    console.log(invalidMessage);
    return withdraw();
  } else {
    wallet.cash += withdrawal;
    return account.acctBal - withdrawal;
  }
};

const deposit = function () {
  let depositAmount = parseFloat(prompt("Enter the amount you would like to deposit:"));
  if (isNaN(depositAmount) || depositAmount === "") {
    console.log(invalidMessage);
    return deposit();
  } else {
    wallet.cash -= depositAmount;
    return account.acctBal + depositAmount;
  }
};

const getReponse = (msg = "Please enter your pin: ") => prompt(msg);
const validatePin = (response = getReponse()) => (parseInt(response) === account.acctPin ? true : response.toLowerCase() === "exit" ? "exit" : false);

const getWalletBalance = () => console.log(`You're current wallet balance is $${wallet.cash}`);

module.exports = {
  wallet: wallet,
  getBalance: getBalance,
  withdraw: withdraw,
  deposit: deposit,
  validatePin: validatePin,
  getWalletBalance: getWalletBalance,
};
