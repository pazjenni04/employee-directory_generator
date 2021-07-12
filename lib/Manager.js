const inquirer = require('inquirer');
const employee = require('./Employee')

class manager extends employee {
    
    constructor(phone) {
        super(name, id, email);
        this.phone = phone;
        this.role = role;
    }

        officeNumber() {
            inquirer.prompt ([
            
            {
                name: "number",
                type: "input",
                message: "What is the manager's office number?",
                validate: (input) => {
                    if(input) {
                        return true;
                    } else {
                        return "Please insert a valid input."
                    }
            }
        }
        ])
    }

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
}

module.exports = manager;