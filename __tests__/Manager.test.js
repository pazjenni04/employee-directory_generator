const { test, expect } = require('@jest/globals');
const manager = require('./lib/manager');

describe("Manager class", () => {
    test("Manager must have a name entered into the system"), () => {
        expect(getName()).toBe(true);
    }
    test("Manger must have an ID"), () => {
        expect(getID()).toBe(true);
    }
    test("Manger must have an email"), () => {
        expect(getEmail()).toBe(true)
    }
    test("Manger's role must return manager"),() => {
        expect(getRole()).toBe('Manager')
    }
    test("Manager must have an office number to contact them on"), () => {
        expect(officeNumber()).toBe(true)
    }
})