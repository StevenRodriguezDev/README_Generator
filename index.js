// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  //title
  {
    type: "input",
    message: "What is the name of your project",
    name: "title",
  },
  //##description
  {
    type: "input",
    message: "What was your motivation",
    name: "description",
  },
  //##installation
  {
    type: "input",
    message: "What is your name?",
    name: "installation instructions",
  },
  {
    type: "input",
    message: "What is your name?",
    name: "usage information",
  },
  {
    type: "input",
    message: "What is your name?",
    name: "contribution guidelines",
  },
  {
    type: "input",
    message: "What is your name?",
    name: "test instructions",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const myMarkdown = generateMarkdown(data);
  fs.writeToFile(fileName, myMarkdown, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Thank you! Generating your README.md file!....");
    }
  });
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
