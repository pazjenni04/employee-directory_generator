const inquirer = require("inquirer");
const fs = require('fs');

class employee {
    constructor(name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }

    getName() {
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
            }
        ])
    };

    getId() {
        inquirer.prompt ([
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
                
            }
        ])
    };

    getEmail() {
        inquirer.prompt ([
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
            }
        ])
    };

    getRole() {
        inquirer.prompt ([
            {
                name: "Role",
                type: "choices",
                choices: [
                    "Employee",
                    "Manager",
                    "Engineer",
                    "Intern",
                ]
            }
        ])
    }
};


const addedEmployee = new employee(`${response.name}, ${response.id}, ${response.email}, ${response.role}`);

console.log(addedEmployee.getName());
// console.log(addedEmployee.id);
// console.log(addedEmployee.email);
// console.log(addedEmployee.role);

module.exports = employee;