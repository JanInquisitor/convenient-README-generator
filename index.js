const inquirer = require("inquirer");

const generateMarkdown = require('./utils/generateMarkdown');
const writeToFile = require('./utils/fileGenerator')
const welcome = require('./utils/welcomeMessage');


// Questions array
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your github username?',
    },
    {
        type: 'input',
        name: 'title',
        message: "What is the title of your README?"
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe your project:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please add the installation commands:',
    }, {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions and examples for usage:',
    }, {
        type: 'input',
        name: 'collaborators',
        message: 'Please list your collaborators:'
    }, {
        type: 'input',
        name: 'features',
        message: 'Please list the program features:'
    }, {
        type: 'input',
        name: 'contribution',
        message: 'Please tell others how to contribute to your project:'
    }];


function init() {
    welcome();

    inquirer.prompt(questions)
        .then((answers) => {
            console.log(answers)


            let markdown = generateMarkdown(answers)
            writeToFile('dist', 'README.md', markdown)

        })
        .catch((error) => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                // Something else went wrong
            }
        });

}

// Function call to initialize app
init();

