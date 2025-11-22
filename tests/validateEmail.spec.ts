import { expect } from "chai";
import validateEmail from "../src/funcs/validateEmail.ts";
import testTuple from "./testTuple.ts";

describe('validateEmail()', () => {
  it("Returns \"true\" when given a correctly-formatted email.", () => {
    // Values to test
    const tests: testTuple<string, boolean>[] = [
      ["eklet@example.com", true],
      ["helloWorld@gmail.com", true],
      ["ethankletschke@outlook.com", true]
    ];

    // Test each value individually
    tests.forEach(test => {
      expect(validateEmail(test[0]), "Email should be valid").to.be.true;
    });
  });

  it("Returns \"false\" when given an invalid email", () => {
    const tests: testTuple<string, boolean>[] = [
      ["hehe@notvalid", false],
      ["fudgethis@localhost", false], // Doesn't accept localhost addresses
      ["heowjoid@", false],
      ["Hi :)", false]
    ];

    tests.forEach(test => {
      expect(validateEmail(test[0]), "Email should be invalid").to.be.false;
    });
  });
});
