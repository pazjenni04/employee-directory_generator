const Intern = require('../lib/Intern');

describe("Intern class", () => {
    it("Should create a new employee class", () => {
        const obj = new Intern("Jenni", 0, "test@gmail.com", "St. Mary's University");

        expect(obj instanceof Intern).toEqual(true)
    })

    it("Should return Intern as the role.", () => {
        const obj = new Intern("Jenni", 0, "test@gmail.com", "St. Mary's University")
        expect(obj.getRole()).toEqual("Intern");
    })

    it("Should return Jenni as a name.", () => {
        const obj = new Intern("Jenni", 0, "test@gmail.com", "St. Mary's University")

        expect(obj.getName()).toEqual("Jenni");
    })

    it("Should return 0 as the employee's id number.", () => {
        const obj = new Intern("Jenni", 0, "test@gmail.com", "St. Mary's University")

        expect(obj.getId()).toEqual(0);
    })

    it("Should return test@gmail.com as email.", () => {
        const obj = new Intern("Jenni", 0, "test@gmail.com", "St. Mary's University")

        expect(obj.getEmail()).toEqual("test@gmail.com");
    })

    it("Should return the intern's school", () => {
        const obj = new Intern("Jenni", 0, "test@gmail.com", "St. Mary's University")

        expect(obj.github()).toEqual("github.com/testing04");
    })

})