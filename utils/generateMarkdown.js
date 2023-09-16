// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
//function generateMarkdown(data) {
//return `# ${data.title}
function generateMarkdown({
  title,
  description,
  description2,
  installation,
  usage,
  credits,
  github,
  email,
  license,
}) {
  return `
# <${title}>

##  Description

- ${description}

- ${description2}

## Table of Contents (Optional)

- 1. [Installation](#1.)
- 2. [Usage](#2.)
- 3. [Credits](#3.)
- 4. [Github](#4.)
- 5. [Email](#5.)
- 6. [License](#6.)

## 1. Installation

- ${installation}

## 2. Usage

To add a screenshot, create an assets/images folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

    ![alt text](assets/images/screenshot.png)
    
link to your website
${usage}

## 3. Credits
-  ${credits}

## 4. Github
-  My Github link: [${github}]

## 5. Email
-  My Email: ${email}


## 6. License

 If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).

--- - ${license}
  
  

`;
}

module.exports = generateMarkdown;
