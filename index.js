// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  //title
  {
    type: "input",
    message: "What is the name of your project: ",
    name: "title",
  },
  //##description
  {
    type: "input",
    message: "Please Provide a description of your project: ",
    name: "description",
  },
  {
    type: "input",
    message: "what was your motivation behind your project: ",
    name: "description2",
  },
  //##installation
  {
    type: "input",
    message:
      "Please Provide a step-by-step description of how to get the development environment running: ",
    name: "installation",
  },
  //##usage
  {
    type: "input",
    message: "Include screenshots, Examples, link using a relative filepath: ",
    name: "usage",
  },
  //##credits
  {
    type: "input",
    message:
      "List your collaborators, if any, with links to their GitHub profiles: ",
    name: "credits",
  },
  //GitHub username,
  {
    type: "input",
    message: "Provide Github UserName: ",
    name: "githubUser",
  },
  {
    type: "input",
    message: "Provide Github URL: ",
    name: "github",
  },
  //email address,
  {
    type: "input",
    message: "Provide Email address: ",
    name: "email",
  },
  //license,
  {
    type: "list",
    message: "Choose a license for your project: ",
    name: "license",
    choices: ["MIT", "BSD", "GNU", "none"],
  },
];

// TODO: Create a function to write README file
function createFile(fileName, data) {
  const myMarkdown = generateMarkdown(data);
  fs.writeFile(fileName, myMarkdown, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(
        "Thank you! your README.md file is in the output folder!...."
      );
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    createFile("./output/README.md", data);
  });
}

// Function call to initialize app
init();
