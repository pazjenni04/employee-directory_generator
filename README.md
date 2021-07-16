# employee-directory_generator

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## **Table of Contents**

1. [Description](#description)
2. [Usage](#usage)
3. [Technologies](#technologies)
4. [Questions](#questions)
5. [Link](#links)
6. [License](#license)

## Description

The objective of this command-line application is to generate an employee directory by using inquirer library.

## Usage

In order for the user to deploy the command-line application, they will first need git clone https://github.com/pazjenni04/employee-directory_generator.git and then proceed to install the following library: inquirer.

`npm init -y`

and then type the following to download the inquirer package and create a package.json and a package-lock.json.

`npm i inquirer`

Once the inquirer package has been downloaded, then the user will proceed in opening a 'New Terminal' in their visual studio code and type the following to initiate the command-line application:

`node index.js `

Once the user presses enter, they will then be prompted with the first question.

![The following is a screenshot of the first question the user will be prompted when the application is commenced.](src\images\first-question_img.PNG)

### Manager card

When commencing the application, the user will be first asked to enter the name of the department they are creating the directory for. The name of the department will be used as the user's file name once they have completed all necessary questions to generate the employee directory.

After responding to the first question, the user will then be instructed to provide information on the current manager within that department (ex: manager's name, ID number, office number and email address).

![The following image showcases the questions the user must answer in order to complete the manager section of the command-line application.](src\images\manager-prompts_img.PNG)

If the user attempts to bypass a question, they will be prompted with a message saying that a response is needed to proceed.

![This image shows the alert the user is prompted with if they attempt to bypass a question](src\images\input-needed_img.PNG)

### Adding additional employees

Once the user has answered all the questions needed to generate an employee card for the manager, they will then be prompted to choose a position to continue building their directory - which they can either choose to add an engineer, intern, or to not add any additional employees to the directory.

![The following image showcases the prompt that the user can either choose to continue adding other positions to their directory or to not](src\images\add-employees_img.PNG)

If the user decides to not add any additional employees to the directory, then they can choose "No more employees to add." By choosing this option, the employee's file will then be generated to showcase only one card for the generated manager role.

### Engineer card

If the user decides to add an engineer, the user will then be prompted with a new set of questions in order to generate a card for this added role.

![The following image showcases the set of questions prompted in order to generate the engineer card for the directory](src\images\engineer-prompt_img.PNG)

Once again, when the user finishes answering all pertinent questions to generate the engineer role in the directory, they will again be prompted to choose one of the following positions to continue building the directory, an engineer, an intern, or choosing not to add any additional employees.

If the user chooses "No more employees to add." then the user will then get their file generated with only the two cards they created, manager and engineer.

### Intern card

If the user decides to continue by adding an intern to their directory, then by choosing "Intern" in the prompt "Please choose one of the following positions to continue building your directory" then they will then be prompted with all pertinent questions needed to generate an intern role.

![The following showcases all the questions that the user is prompted with to create an intern card within the directory](src\images\intern-prompt_img.PNG)

Once the user has finished answering all needed questions to generate the intern card they will be presented with the same prompt "Please choose one of the following positions to continue building your directory." At this point, the user can continue adding multiple engineers and/or interns as needed in order to complete their employee directory or to finish generating their file by choosing "No more employees to add." Once completed, the terminal will console log "Success!" and a new file will be generated with the department name they provided at the beginning of the application as the new file name.

## Technologies

*Javascript
*Node.js
*CSS
*Inquirer package

## Questions

_Questions? Feel free to contact me._

- Via [Gtihub](https://github.com/pazjenni04)
- Via [Email](pazjenni1331@gmail.com)

# Links

To see a demonstration of this application, feel free to watch the following link.

# License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
