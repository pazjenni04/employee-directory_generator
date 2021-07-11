const { test } = require('@jest/globals');
const intern = require('./lib/intern');

describe("Intern class", () => {
    test("Intern must have a name entered into the system"), () => {
        expect(getName()).toBe(true);
    }
    test("Intern must have an ID"), () => {
        expect(getID()).toBe(true);
    }
    test("Intern must have an email"), () => {
        expect(getEmail()).toBe(true);
    }
    test("Intern's role must return intern"),() => {
        expect(getRole()).toBe('Intern');
    }
    test("Intern must present current school attending"), () => {
        test(getSchool()).toBe(true);
    }
})