function managerTemplate (manager) { 
    return `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${manager.name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${manager.role}</h6>
    <p class="card-text">Employee Id: ${manager.id}</p>
    <p class="card-text">Office number: ${manager.officeNumber}</p>
    <p class="card-text">Email: ${manager.email}</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
`
}

function internTemplate (intern) {
 return `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${intern.name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${intern.role}</h6>
    <p class="card-text">Employee Id: ${intern.id}</p>
    <p class="card-text">School: ${intern.school}</p>
    <p class="card-text">Email: ${intern.email}</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
`
}

function engineerTemplate (engineer) { 
    return `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${engineer.name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${engineer.role}</h6>
    <p class="card-text">Employee Id: ${engineer.id}</p>
    <p class="card-text">Github URL: ${engineer.github}</p>
    <p class="card-text">Email: ${engineer.email}</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>`
}

function employeeTemplate (employee) {
return `<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${employee.name}</h5>
    <h6 class="card-subtitle mb-2 text-muted">${employee.role}</h6>
    <p class="card-text">Employee Id: ${employee.id}</p>
    <p class="card-text">Email: ${employee.email}</p>
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
`}

//depending on the role the user chooses in the inquirer prompt's, the switch statement will choose the correct template to input into the HTML template

function renderEmployee(employee) {
switch (employee.role) {
    case 'Employee':
        return employeeTemplate(employee);
        break;
    case 'Manager':
        return managerTemplate(employee);
        break;
    case 'Intern':
        return internTemplate(employee);
        break;
    case 'Engineer':
        return engineerTemplate(employee);
        break;
};
};

//page template for the cards to display onto
function htmlTemplate(team) { 
    return `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Employee Directory</title>
    <!-- stylesheets -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="./dist/style.css"/>
  </head>

  <body>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Employee Directory</h1>
    <p class="lead">Please select an employee below.</p>
  </div>
</div>
 ${team}

</body>`
}

//create an if statement that pushes to the array once confirmed if a manager, intern, engineer, or just an employee


function generateTeam(allEmployees) {
    let team = []; //empty array to pass generated team templates into

    allEmployees.forEach(employee => {
        let template = renderEmployee(employee); //is rendering the employee template into a variable
        team.push(template); //will push the template variable into the team array
    });

    let teamTemplate = htmlTemplate(team); //returns string that has htmlcode in it
    console.log(teamTemplate);
    return teamTemplate; //gets value from the function
}





module.exports = generateTeam;
