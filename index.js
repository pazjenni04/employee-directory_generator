const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const generateTeam = require('./src/page-template');

var allEmployees = []; //empty array to push new generated manager, intern, engineer or employee into

function generateInfo() {
    inquirer.prompt ([
        {
            name: "team",
            type: "input",
            message: "What is your team name?",
            validate: (input) => {
                if(input) {
                    return true;
                } else {
                    return "Please insert a valid input."
                }
            }
        },
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
            type: "list",
            choices: [
                "Employee",
                "Manager",
                "Engineer",
                "Intern",
            ]
        }
    ])

        .then((response) => {
            switch(response.Role) {
                case 'Manager':
                    prompt(
                        {
                            name: "OfficeNumber",
                            type: "input",
                            message: "What is the Manager's office number?",
                            validate: (input) => {
                                if(input){
                                    return true;
                                } else {
                                    return "Please insert a valid input."
                                }
                            }
                        },
                    ).then((managerResponse) =>{
                        managerResponse.OfficeNumber
                        let newManager = new Manager (response.name, response.Id, response.Email, managerResponse.OfficeNumber) //by using the manager class, creating a new manager with parameters
                        allEmployees.push(newManager); //pushes new manager to the all employees array
                    })
                    break;

                case 'Engineer':
                    prompt(
                        {
                            name: "Github",
                            type: "input",
                            message: "What is the Engineer's gitub URL?",
                            validate: (input) => {
                                if(input){
                                    return true;
                                } else {
                                    return "Please insert a valid input."
                                }
                            }
                        },
                    ).then((engineerResponse) =>{
                        engineerResponse.Github
                        let newEngineer = new Engineer (response.name, response.Id, response.Email, engineerResponse.Github) //with the engineer class, creating a new engineer with parameters set in class
                        allEmployees.push(newEngineer); //pushes new engineer to the all employees array
                    })
                    break;

                case 'Intern':
                    prompt(
                        {
                            name: "School",
                            type: "input",
                            message: "What school does the Intern attend?",
                            validate: (input) => {
                                if(input){
                                    return true;
                                } else {
                                    return "Please insert a valid input."
                                }
                            }
                        },
                    ).then((internResponse) =>{
                        internResponse.School
                        let newIntern = new Intern (response.name, response.Id, response.Email, internResponse.School) //with the intern class, creating a new intern with parameters set in class
                        allEmployees.push(newIntern); //pushes new intern to the all employees array
                    })
                    break;
            }
           
        }).then(() => {
            let htmlcontent = generateTeam(allEmployees)  //when calls function will pass in the array of all employees
            generatePage(response.team, htmlcontent); //taking in the strings
        })
  
}

generateInfo();

function generatePage(fileName, htmlcontent) {
    fs.writeFile(`./${fileName.toLowerCase().split(' ').join('')}.html`, htmlcontent, (err)=> {
        err ? console.error(err) : console.log('Success!')
   });
}