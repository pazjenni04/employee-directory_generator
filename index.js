const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const generateTeam = require('./src/page-template');

var allEmployees = []; //empty array to push new generated manager, intern, engineer or employee into
var managerName = " ";

function extendDirectory () {
    inquirer.prompt([
        {
            name: "addEmployee",
            type: "list",
            message: "Please choose one of the following positions to continue building your directory.",
            choices: [
                "Engineer",
                "Intern",
                "No more employees to add."
            ]
        }
        ]).then((response) => {
            switch(response.addEmployee) {
                case 'Engineer':
                    generateEngineer();
                break;

                case 'Intern':
                    generateIntern();
                break;

                case "No more employees to add.":
                    generateInfo();
                break;
            }
        })
   
}


function generateManager(manager) {
    inquirer.prompt ([
        {
            name: "team",
            type: "input",
            message: "What is your department name?",
            validate: (input) => {
                if(input) {
                    return true;
                } else {
                    return "Please insert a valid input."
                }
            }
        },
        {
            name: "managerName",
            type: "input",
            message: "What is the team manager's name?",
            validate: (input) => {
                if(input) {
                    return true;
                } else {
                    return "Please insert a valid input."
                }
            }
        },
        {
            name: "managerId",
            type: "input",
            message: "What is the manager's ID number?",
            validate: (input) => {
                if(input) {
                    return true;
                } else {
                    return "Please insert a valid input."
                }
            }
                
        },
 
        {
            name: "managerEmail",
            type: "input",
            message: "What is the manager's email address?",
            validate: (input) => {
                if(input){
                    return true;
                } else {
                    return "Please insert a valid input."
                }
            }
        },
        {
            name: "OfficeNumber",
            type: "input",
            message: "What is the manager's office number?",
            validate: (input) => {
                if(input){
                    return true;
                } else {
                    return "Please insert a valid input."
                }
            }
        }
    ]).then((managerResponse) => {
        managerName = managerResponse.team;
        let newManager = new Manager (managerResponse.managerName, managerResponse.managerId, managerResponse.managerEmail, managerResponse.OfficeNumber) //by using the manager class, creating a new manager with parameters
        allEmployees.push(newManager); //pushes new manager to the all employees array
        extendDirectory();
        
        // let htmlcontent = generateTeam(allEmployees)  //when calls function will pass in the array of all employees
        // generatePage(response.team, htmlcontent); //taking in the strings
    })
}

generateManager();

//generates an engineer profile
function generateEngineer(engineer) {
    inquirer.prompt([
        {
            name: "engineerName",
            type: "input",
            message: "What is the Engineer's name?"
        },
        {
            name: "engineerId",
            type: "input",
            message: "What is the Engineer's ID number?",
            validate: (input) => {
                if(input) {
                    return true;
                } else {
                    return "Please insert a valid input."
                }
            }
                    
        },
     
        {
            name: "engineerEmail",
            type: "input",
            message: "What is the Engineer's email address?",
            validate: (input) => {
                if(input){
                    return true;
                } else {
                    return "Please insert a valid input."
                }
            }
        },
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
        }
        ]).then((engineerResponse) => {
            let newEngineer = new Engineer (engineerResponse.engineerName, engineerResponse.engineerId, engineerResponse.engineerEmail, engineerResponse.Github) //with the engineer class, creating a new engineer with parameters set in class
            allEmployees.push(newEngineer); //pushes new engineer to the all employees array
            // let htmlcontent = generateTeam(allEmployees)  //when calls function will pass in the array of all employees
            // generatePage(response.team, htmlcontent); //taking in the strings
            extendDirectory();
        })
    
     
}

//generates an intern profile
function generateIntern(intern) {
    inquirer.prompt([
        {
            name: "internName",
            type: "input",
            message: "What is the Intern's name?"
        },
        {
            name: "internId",
            type: "input",
            message: "What is the Intern's ID number?",
            validate: (input) => {
                if(input) {
                    return true;
                } else {
                        return "Please insert a valid input."
                }
            }
                        
        },
         
        {
            name: "internEmail",
            type: "input",
                message: "What is the Intern's email address?",
                validate: (input) => {
                    if(input){
                        return true;
                    } else {
                        return "Please insert a valid input."
                    }
                }
            },
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
            }
            ]).then((internResponse) => {
                internResponse.School
                let newIntern = new Intern (internResponse.internName, internResponse.internId, internResponse.internEmail, internResponse.School); //with the intern class, creating a new intern with parameters set in class
                allEmployees.push(newIntern); //pushes new intern to the all employees array
                extendDirectory();
            })  
      
}

function generateInfo() {
    let htmlcontent = generateTeam(allEmployees)  //when calls function will pass in the array of all employees
    generatePage(managerName, htmlcontent); //taking in the strings
}



function generatePage(fileName, htmlcontent) {
    fs.writeFile(`./${fileName.toLowerCase().split(' ').join('')}.html`, htmlcontent, (err)=> {
        err ? console.error(err) : console.log('Success!')
   });
}
    

//         .then((response) => {
//             switch(response.Role) {
//                 case 'Manager':
//                     inquirer.prompt(
//                         {
//                             name: "OfficeNumber",
//                             type: "input",
//                             message: "What is the Manager's office number?",
//                             validate: (input) => {
//                                 if(input){
//                                     return true;
//                                 } else {
//                                     return "Please insert a valid input."
//                                 }
//                             }
//                         },
//                     ).then((managerResponse) => {
//                         managerResponse.OfficeNumber
//                         let newManager = new Manager (response.name, response.Id, response.Email, managerResponse.OfficeNumber) //by using the manager class, creating a new manager with parameters
//                         allEmployees.push(newManager); //pushes new manager to the all employees array
//                         let htmlcontent = generateTeam(allEmployees)  //when calls function will pass in the array of all employees
//                         generatePage(response.team, htmlcontent); //taking in the strings
//                     })
//                     break;

//                 case 'Engineer':
//                     inquirer.prompt(
//                         {
//                             name: "Github",
//                             type: "input",
//                             message: "What is the Engineer's gitub URL?",
//                             validate: (input) => {
//                                 if(input){
//                                     return true;
//                                 } else {
//                                     return "Please insert a valid input."
//                                 }
//                             }
//                         },
//                     ).then((engineerResponse) => {
//                         engineerResponse.Github
//                         let newEngineer = new Engineer (response.name, response.Id, response.Email, engineerResponse.Github) //with the engineer class, creating a new engineer with parameters set in class
//                         allEmployees.push(newEngineer); //pushes new engineer to the all employees array
//                         let htmlcontent = generateTeam(allEmployees)  //when calls function will pass in the array of all employees
//                         generatePage(response.team, htmlcontent); //taking in the strings
//                     })
//                     break;

//                 case 'Intern':
//                     inquirer.prompt(
//                         {
//                             name: "School",
//                             type: "input",
//                             message: "What school does the Intern attend?",
//                             validate: (input) => {
//                                 if(input){
//                                     return true;
//                                 } else {
//                                     return "Please insert a valid input."
//                                 }
//                             }
//                         },
//                     ).then((internResponse) => {
//                         internResponse.School
//                         let newIntern = new Intern (response.name, response.Id, response.Email, internResponse.School); //with the intern class, creating a new intern with parameters set in class
//                         allEmployees.push(newIntern); //pushes new intern to the all employees array
//                         let htmlcontent = generateTeam(allEmployees);  //when calls function will pass in the array of all employees
//                         generatePage(response.team, htmlcontent); //taking in the strings
//                     })
//                     break;
//                 }

           
//         })
// }

