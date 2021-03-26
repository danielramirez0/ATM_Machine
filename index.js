"use strict";
const prompt = require("prompt-sync")();
const { getBalance: checkMoney } = require("./atm");
const { withdraw: takeMoneyOutDaBank } = require("./atm");
const { deposit: putMoneyInDaBank } = require("./atm");
const { validatePin: checkPin } = require("./atm");
const accountInfo = require("./account.js");
const helloMessage = `___/<^>\\___ SUPER RAD BANK ___/<^>\\___\nAttemping to access account# ${accountInfo.acctNum}`;
const goodbyeMessage = "Thank you for using our services!\n___/<^>\\___ SUPER RAD BANK ___/<^>\\___";
const invalidMessage = ":::::ALERT:::::\nYOUR ENTRY IS NOT VALID\nPLEASE, RETRY OR TYPE QUIT TO EXIT";
const atmMainMenu =
  "\n\n========= ATM MAIN MENU ==========\n---Choose your desired action---\n1: Check available balance.\n2: Make a deposit.\n3: Withdraw funds.\n4: Change account pin.\n5: Exit ATM Session\n\n";

function app(data) {
  //   console.log("___/<^>\\___ SUPER RAD BANK ___/<^>\\___");
  //   console.log(`Attemping to access account# ${data.acctNum}`);
  console.log(helloMessage);
  let response = prompt("Please enter your pin: ").toLowerCase();
  if (checkPin(response, data.acctPin) === true) {
    ATM(data);
  } else if (response === "quit") {
    // console.log("Thank you for using our services!");
    // console.log("___/<^>\\___ SUPER RAD BANK ___/<^>\\___");
    console.log(goodbyeMessage);
    return;
  } else {
    console.log(invalidMessage);
    return app(data);
  }
}

function ATM(data) {
  let action;
  console.log(atmMainMenu);
  action = parseInt(prompt("Selection: "));
  switch (action) {
    case 1:
      checkMoney(data.acctBal);
      break;
    case 2:
      data.acctBal = putMoneyInDaBank(data.acctBal);
      checkMoney(data.acctBal);
      break;
    case 3:
      data.acctBal = takeMoneyOutDaBank(data.acctBal);
      checkMoney(data.acctBal);
      break;
    case 4:
      changePin();
      break;
    case 5:
      console.log(goodbyeMessage);
      return;
    default:
      console.log("That choice is not one of the available options, please try again.");
      ATM(data);
      break;
  }
  if (continueATM(prompt("Do you want to return to the main menu? (y/n)").toLowerCase()) === "mainMenu") {
    ATM(data);
  } else {
    console.log(goodbyeMessage);
  }
}

function continueATM(callbackAnswer) {
  return callbackAnswer === "y" ? "mainMenu" : callbackAnswer === "n" ? "exit" : continueATM(prompt("Do you want to return to the main menu? (y/n)").toLowerCase());
}

app(accountInfo);
