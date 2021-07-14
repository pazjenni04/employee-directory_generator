const Manager = require('../lib/Manager');

describe("Manager class", () => {
    it("Should create a new employee class", () => {
        const obj = new Manager("Jenni", 0, "test@gmail.com", "(214)000-4567");

        expect(obj instanceof Manager).toEqual(true)
    })

    it("Should return Manager as the role.", () => {
        const obj = new Manager("Jenni", 0, "test@gmail.com", "(214)000-4567");
        expect(obj.getRole()).toEqual("Manager");
    })

    it("Should return Jenni as a name.", () => {
        const obj = new Manager("Jenni", 0, "test@gmail.com", "(214)000-4567");

        expect(obj.getName()).toEqual("Jenni");
    })

    it("Should return 0 as the employee's id number.", () => {
        const obj = new Manager("Jenni", 0, "test@gmail.com", "(214)000-4567");

        expect(obj.getId()).toEqual(0);
    })

    it("Should return test@gmail.com as email.", () => {
        const obj = new Manager("Jenni", 0, "test@gmail.com", "(214)000-4567");

        expect(obj.getEmail()).toEqual("test@gmail.com");
    })

    it("Should return the manager's office number (214)000-4567", () => {
        const obj = new Employee("Jenni", 0, "test@gmail.com", "(214)000-4567");

        expect(obj.officeNumber()).toEqual("(214)000-4567");
    })

})