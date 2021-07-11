const employee = require('./lib/employee');

describe("Employee class", () => {
    test("Employee must have a name entered into the system"), () => {
        expect(getName()).toBe(true);
    }
    test("Employee must have an ID"), () => {
        expect(getID()).toBe(true);
    }
    test("Employee must have an email"), () => {
        expect(getEmail()).toBe(true)
    }
    test("Employee's role must return employee"),() => {
        expect(getRole()).toBe('Employee')
    }
})


