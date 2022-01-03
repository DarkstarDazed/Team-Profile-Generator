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
            message: 'What is the team managers email?'
            name: 'email',
        },

        {
            type: 'input', 
            message: 'What is the team managers id?'
            name: 'id',
        },

        {
            type: 'input', 
            message: 'What is the team managers office number?'
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