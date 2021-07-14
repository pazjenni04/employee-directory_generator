const Engineer = require('../lib/Engineer');

describe("Engineer class", () => {
    it("Should create a new engineer class", () => {
        const obj = new Engineer("Jenni", 0, "test@gmail.com", "github.com/testing04");

        expect(obj instanceof Engineer).toEqual(true)
    })

    it("Should return Engineer as the role.", () => {
        const obj = new Engineer("Jenni", 0, "test@gmail.com", "github.com/testing04");

        expect(obj.getRole()).toEqual("Engineer");
    })

    it("Should return Jenni as a name.", () => {
        const obj = new Engineer("Jenni", 0, "test@gmail.com", "github.com/testing04");

        expect(obj.getName()).toEqual("Jenni");
    })

    it("Should return 0 as the employee's id number.", () => {
        const obj = new Engineer("Jenni", 0, "test@gmail.com", "github.com/testing04");

        expect(obj.getId()).toEqual(0);
    })

    it("Should return test@gmail.com as email.", () => {
        const obj = new Engineer("Jenni", 0, "test@gmail.com", "github.com/testing04");

        expect(obj.getEmail()).toEqual("test@gmail.com");
    })

    it("Should return engineer's github URL should return github.com/testing04.", () => {
        const obj = new Engineer("Jenni", 0, "test@gmail.com", "github.com/testing04");

        expect(obj.github()).toEqual("github.com/testing04");
    })

})