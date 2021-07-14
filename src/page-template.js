const managerTemplate = ``

const internTemplate = ``

const engineerTemplate = ``

const employeeTemplate = ``


//create an if statement that pushes to the array once confirmed if a manager, intern, engineer, or just an employee
const team = [];

if( `${response.role === 'manager'}`) {
    return generateManager().push(team);
} else if(`${response.role}` === 'engineer') {
    return generateEngineer().push(team);
} else if (`${response.role}` === 'intern') {
    return generateIntern().push(team);
} else if (`${response.role}` === 'employee') {
    return generateEmployee().push(team);
}

