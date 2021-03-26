"use strict";
const prompt = require("prompt-sync")();
const { getBalance: checkMoney, deposit } = require("./atm");
const { withdraw: getMoney } = require("./atm");
const { deposit: putMoney } = require("./atm");
const { validatePin: checkPin } = require("./atm");
const accountInfo = require("./account.js");

function app(data) {
  console.log("___/<^>\\___ SUPER RAD BANK ___/<^>\\___");
  console.log(`Attemping to access account# ${data.acctNum}`);
  let response = prompt("Please enter your pin: ").toLowerCase();
  if (checkPin(response, data.acctPin) === true) {
    ATM(data);
  } else if (response === "quit") {
    console.log("Thank you for using our services!");
    console.log("___/<^>\\___ SUPER RAD BANK ___/<^>\\___");
    return;
  } else {
    console.log(":::::ALERT:::::\nYOUR ENTRY IS NOT VALID\nPLEASE, RETRY OR TYPE QUIT TO EXIT");
    return app(data);
  }
}

function ATM(data) {
  let action;
  console.log(
    "\n\n========= ATM MAIN MENU ==========\n---Choose your desired action---\n1: Check available balance.\n2: Make a deposit.\n3: Withdraw funds.\n4: Change account pin.\n5: Exit ATM Session\n\n"
  );
  action = parseInt(prompt("Selection: "));
  switch (action) {
    case 1:
      checkMoney(data.acctBal);
      break;
    case 2:
      data.acctBal = putMoney(data.acctBal);
      checkMoney(data.acctBal);
      break;
    case 3:
      data.acctBal = getMoney(data.acctBal);
      checkMoney(data.acctBal);
      break;
    case 4:
      changePin();
      break;
    case 5:
      console.log("Thank you for using our services!");
      console.log("___/<^>\\___ SUPER RAD BANK ___/<^>\\___");
      return;
    default:
      console.log("That choice is not one of the available options, please try again.");
      ATM(data);
      break;
  }
  ATM(data);
}

app(accountInfo);
