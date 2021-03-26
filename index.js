"use strict";
const prompt = require("prompt-sync")();
const { getBalance: checkMoney } = require("./atm");
const { withdraw: takeMoneyOutDaBank } = require("./atm");
const { deposit: putMoneyInDaBank } = require("./atm");
const { validatePin: checkPin } = require("./atm");
const { getWalletBalance: checkWallet } = require("./atm");
const helloMessage = `___/<^>\\___ SUPER RAD BANK ___/<^>\\___`;
const goodbyeMessage = "Thank you for using our services!\n___/<^>\\___ SUPER RAD BANK ___/<^>\\___";
const invalidMessage = ":::::ALERT:::::\nYOUR ENTRY IS NOT VALID\nPLEASE, RETRY OR TYPE EXIT";
const atmMainMenu =
  "\n\n========= ATM MAIN MENU ==========\n---Choose your desired action---\n1: Check available balance.\n2: Make a deposit.\n3: Withdraw funds.\n4: Check my wallet.\n5: Exit ATM Session\n\n";

function app() {
  console.log(helloMessage);
  let validate = checkPin();
  if (validate === true) {
    ATM();
  } else if (validate === "exit") {
    console.log(goodbyeMessage);
    return;
  } else {
    console.log(invalidMessage);
    return app();
  }
}

function ATM() {
  let action;
  console.log(atmMainMenu);
  action = parseInt(prompt("Selection: "));
  switch (action) {
    case 1:
      checkMoney();
      break;
    case 2:
      putMoneyInDaBank();
      checkMoney();
      break;
    case 3:
      takeMoneyOutDaBank();
      checkMoney();
      break;
    case 4:
      checkWallet();
      break;
    case 5:
      console.log(goodbyeMessage);
      return;
    default:
      console.log("That choice is not one of the available options, please try again.");
      ATM();
      break;
  }
  if (continueATM(prompt("Do you want to return to the main menu? (y/n)").toLowerCase()) === "mainMenu") {
    ATM();
  } else {
    console.log(goodbyeMessage);
  }
}

function continueATM(callbackAnswer) {
  return callbackAnswer === "y" ? "mainMenu" : callbackAnswer === "n" ? "exit" : continueATM(prompt("Do you want to return to the main menu? (y/n)").toLowerCase());
}

app();
