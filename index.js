"use strict";

const { getBalance: checkMoney } = require("./atm.js");
const { withdraw: getMoney } = require("./atm.js");
const { deposit: saveMoney } = require("./atm.js");
const { validatePin: validateMe } = require("./atm.js");

console.log(checkMoney, getMoney, saveMoney, validateMe);
