"use strict";
let accountInfo = require("./account.js");
let { balance } = require("./wallet.js");
const prompt = require("prompt-sync")();
const dataset = {
  accountInfo: accountInfo,
  balance: balance,
};

const validatePin = function (input, valid) {
  if (input === valid) {
    return true;
  } else {
    return false;
  }
};

const { getBalance: checkMoney } = require("./atm.js");
const { withdraw: getMoney } = require("./atm.js");
const { deposit: saveMoney } = require("./atm.js");
const atm = require("./atm.js");

function app(data) {
  //   console.log("Please enter your account pin");
  if (validatePin(prompt("Please enter your account pin: "), accountInfo.acctPin)) {
    ATM(data);
  }
}

function ATM(data) {
  console.log("Welcome to the ATM ");
  console.log(data);
}

app(dataset);
