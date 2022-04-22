// https://enterprise.github.com/downloads/en/markdown-cheatsheet.pdf

const inquirer = require("inquirer");
const fs= require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

// questions to the user 
const questions = () =>
inquirer.prompt([
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'username',
        },
        {
            type: 'input',
            message: 'What is your email address? ',
            name: 'email',
        },
        {
            type: 'input',
            message: `What is your project's name?`,
            name: 'project'
        },

        {
            type: 'input',
            message: 'Please write a short description of your project? ',
            name: 'descrip',
        },
        {
            type: 'list',
            name: 'license',
            message: 'What kind of license should your project have?',
            choices: [
                "MIT",
                "APACHE 2.0",
                "GPL 3.0", 
                "None"
            ],
        },
        {
            type: 'input',
            message: 'What command should be run to install dependencies?',
            name: ' install',
        },
        {
            type: 'input',
            message: 'What command should be run to rub tests?',
            name: ' test',
        },

        {
            type: 'input',
            message: 'What does the user need to know about using the repo?',
            name: ' usingrepo',
        },
        {
            type: 'input',
            message: 'What does the user need to know about contributing to the repo?',
            name: ' contributing',
        }

    ]);

//const generatemardown = ({ username, email, project, descrip, license, install, test, usingrepo, contributing }) => {}
  
function generateMarkdown(data){
    return
    `    
# ProjectTitle: ${data.title}
${data.description}

## Table Of Contents
*[Installation](#installation)
*[Usage](#usingrepo)
*[License](#license)
*[Contributing](#contributing)
*[Tests](#test)
*[Questions](#questions)
### Installation:
\`\`\`${data.install}\`\`\`
### Usage:
${data.usingrepo}
### License:
This project is licensed under:
${data.license}
### Contributing:
${data.contributing}
### Tests:
\`\`\`${data.test}\`\`\`
### Questions:
If you have any questions contact me on [GitHub](https://github.com/${data.email}) or contact${data.username} , ${data.email}.
`
}

questions()
.then ((data) => writeFileAsync('generatedREADME.md','generateMarkdown(data)'))
.then(() => console.log('Successfully wrote to index.html'))
.catch((err)=> console.error(err));

