const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

function generateEmployee() {
    inquirer.prompt ([
        {
            name: "name",
            type: "input",
            message: "What is the employee's name?",
            validate: (input) => {
                if(input) {
                    return true;
                } else {
                    return "Please insert a valid input."
                }
            }
        },
        {
            name: "Id",
            type: "input",
            message: "What is the employee's ID number?",
            validate: (input) => {
                if(input) {
                    return true;
                } else {
                    return "Please insert a valid input."
                }
            }
                
        },
 
        {
            name: "Email",
            type: "input",
            message: "What is the employee's email address?",
            validate: (input) => {
                if(input){
                    return true;
                } else {
                    return "Please insert a valid input."
                }
            }
        },

        {
            name: "Role",
            type: "choices",
            choices: [
                "Employee",
                "Manager",
                "Engineer",
                "Intern",
            ]
        },
    ])
}


