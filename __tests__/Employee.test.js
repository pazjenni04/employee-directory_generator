const Employee = require('../lib/Employee');

describe("Employee class", () => {
    it("Should create a new employee class", () =>{
        const obj = new Employee("Jenni", 0, "test@gmail.com");

        expect(obj instanceof Employee).toEqual(true)
    })

    it("Should return Employee as the role.", () =>{
        const obj = new Employee("Jenni", 0, "test@gmail.com");

        expect(obj.getRole()).toEqual("Employee");
    })

    it("Should return Jenni as a name.", () =>{
        const obj = new Employee("Jenni", 0, "test@gmail.com");

        expect(obj.getName()).toEqual("Jenni");
    })

    it("Should return 0 as Employee's id number.", () =>{
        const obj = new Employee("Jenni", 0, "test@gmail.com");

        expect(obj.getId()).toEqual(0);
    })

    it("Should return test@gmail.com as email.", () =>{
        const obj = new Employee("Jenni", 0, "test@gmail.com");

        expect(obj.getEmail()).toEqual("test@gmail.com");
    })

})


