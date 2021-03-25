"use strict";
let accountInfo = require("./account.js");
const prompt = require("prompt-sync")();

const validatePin = function (input, valid) {
  if (parseInt(input) === valid) {
    return true;
  } else {
    return false;
  }
};

function app(data) {
  console.log("___/<^>\\___ SUPER RAD BANK ___/<^>\\___");
  console.log(`Attemping to access account# ${data.acctNum}`);
  let response = prompt("Please enter your pin: ").toLowerCase();
  if (validatePin(response, data.acctPin) === true) {
    ATM(data);
  } else if (response === "quit") {
    console.log("Thank you for using our services!");
    console.log("___/<^>\\___ SUPER RAD BANK ___/<^>\\___");
    return;
  } else {
    console.log(":::::ALERT:::::\nTHAT PIN IS NOT VALID\nPLEASE, RETRY OR TYPE QUIT TO EXIT");
    return app(data);
  }
}

function ATM(data) {
  const { getBalance: checkMoney } = require("./atm.js");
  const { withdraw: getMoney } = require("./atm.js");
  const { deposit: saveMoney } = require("./atm.js");
  console.log("========= ATM MAIN MENU ==========\n---Choose your desired action---\n");
  const mainMenu = "1: Check available balance.\n2: Make a deposit.\n3: Withdraw funds.\n4: Change account pin.\n5: Exit ATM Session";
  console.log(mainMenu);
  let action = parseInt(prompt("Selection: "));
  switch (action) {
    case 1:
      console.log("\n\nHere is your available account balance\n\n");
      console.log(`$${checkMoney(accountInfo)}\n\n`);
      break;
    case 2:
      console.log("mk dep");
      break;
    case 3:
      console.log("mk with");
      break;
    case 4:
      console.log("chng pin");
      break;
    case 5:
      console.log("exit");
      return;
      break;
    default:
      console.log("That choice is not one of the available options, please try again.");
      ATM(data);
      break;
  }
  ATM(data);
}

function mainMenu(action) {}

app(accountInfo);
