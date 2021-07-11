const engineer = require('./lib/engineer');

describe("Engineer class", () => {
    test("Engineer must have a name entered into the system"), () => {
        expect(getName()).toBe(true);
    }
    test("Engineer must have an ID"), () => {
        expect(getID()).toBe(true);
    }
    test("Engineer must have an email"), () => {
        expect(getEmail()).toBe(true)
    }
    test("Engineer's role must return engineer"),() => {
        expect(getRole()).toBe('Engineer')
    }
    test("Engineer must have a github username"), () => {
        expect(getGithub()).toBe(true)
    }
})