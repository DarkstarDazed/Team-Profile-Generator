const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = require('./src/generateHTML');

const teamArray = [];

function newManager() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the team managers name?',
            name: 'name',
        },

        {
            type: 'input', 
            message: 'What is the team managers email?',
            name: 'email',
        },

        {
            type: 'input', 
            message: 'What is the team managers id?',
            name: 'id',
        },

        {
            type: 'input', 
            message: 'What is the team managers office number?',
            name: 'officeNumber',
        },
    
    ]) .then(function(data) {
        console.log(data)
        const manager = new Manager(data.name, data.email, data.id, data.officeNumber)
        console.log(manager)
        teamArray.push(manager)
        newPrompt()
    })
}

function newEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the engineers name?',
            name: 'name',
        },

        {
            type: 'input', 
            message: 'What is the engineers email?',
            name: 'email',
        },

        {
            type: 'input', 
            message: 'What is the engineers id?',
            name: 'id',
        },

        {
            type: 'input', 
            message: 'What is the engineers GitHub?',
            name: 'github',
        },
    
    ]) .then(function(data) {
        console.log(data)
        const engineer = new Engineer(data.name, data.email, data.id, data.github)
        console.log(engineer)
        teamArray.push(engineer)
        newPrompt()
    })
}

function newIntern() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the interns name?',
            name: 'name',
        },

        {
            type: 'input', 
            message: 'What is the interns email?',
            name: 'email',
        },

        {
            type: 'input', 
            message: 'What is the interns id?',
            name: 'id',
        },

        {
            type: 'input', 
            message: 'Where did the intern go to school?',
            name: 'school',
        },
    
    ]) .then(function(data) {
        console.log(data)
        const intern = new Intern(data.name, data.email, data.id, data.school)
        console.log(intern)
        teamArray.push(intern)
        newPrompt()
    })
}

function quit() {
    console.log(employees)
    const html = generateHTML(employees)
    writeToFile('./dist/index.html', html)
}

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('Success!')
    );
}

function newPrompt() {
    inquirer.prompt([
        {
            type: 'list',
            message: 'Which team member do you want to add next?',
            name: 'option',
            choices: ['Engineer', 'Intern', 'Quit']
        }
        
    ]) .then(function(data) {
        if (data.option == 'Engineer') {
            newEngineer()
        } else if (data.option == 'Intern') {
            newIntern()
        } else if (data.option == 'Quit') {
            quit()
        }
    })
}



newManager()