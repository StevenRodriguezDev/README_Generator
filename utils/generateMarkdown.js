// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === "BSD") {
    return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
  } else if (license === "GNU") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else return " ";
}

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
  usage,
  credits,
  githubUser,
  github,
  email,
  license,
}) {
  return `
# ${title}
##  Description

- ${description}

- ${description2}

## Table of Contents (Optional)


 * [Usage](#usage)
 * [Credits](#credits)
 * [Github](#github)
 * [Email](#email)
 * [License](#license)

## 2. Usage

To add a screenshot, create an assets/images folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

    ![alt text](assets/images/screenshot.png)
    
link to your website
${usage}

## 3. Credits
-  ${credits}

## 4. Github
-  My Github link: [${githubUser}](${github})

## 5. Email
-  My Email: ${email}


## 6. License

If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).

--- - ${renderLicenseBadge(license)}
  
  

`;
}

module.exports = generateMarkdown;
