// https://enterprise.github.com/downloads/en/markdown-cheatsheet.pdf

const inquirer = require("inquirer");
const fs= require("fs")



const generatemardown = ({ username, email, project, descrip, license, install, test, usingrepo, contributing }) => {
    return (
        `
        
# ProjectTitle: ${data.title}

## Table Of Contents
*[Installation]${data.install}
*[License]${data.license}
* [Description](#description)




* [Contact](#contact)
### Description
${description}

        `)

}
// questions to ask the user 
let questions = [
inquirer
    .prompt([
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

    ])
];

    .then(answers => {
        return htmlPageContent = generateHTML(answers);

    }).then((response) =>

        fs.writeFile('index.html', response, (err) => {
            err ? console.log(err) : console.log('You created a HTML')
        }
        ))