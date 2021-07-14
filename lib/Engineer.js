const Employee = require('./Employee');

//extends the employee traits over to engineer
class Engineer extends Employee{
    
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
        this.role = 'Engineer';
    };
    
    gitHub() {
        return this.github;
    }
};


module.exports = Engineer;