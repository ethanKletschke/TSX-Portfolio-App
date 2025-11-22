import { expect } from "chai";
import numeronym from "../src/funcs/numeronym.ts";
import TestTuple from "./testTuple.ts";

describe("numeronym()", function () {
  it("Returns the two letters in lowercase with numbers in between them", function () {
    const tests: string[] = [
      "Accessibility",
      "Ethan", 
      "Sabrielle",
      "International"
    ];

    tests.forEach(test => {
      expect(numeronym(test)).to.match(/^[a-z][0-9]+[a-z]$/g);
    });
  });

  it("Creates the correct numeronym for known coding numeronyms (a11y, etc.)", function () {
    const tests: TestTuple<string, string>[] = [
      ["accessibility", "a11y"],
      ["localisation", "l10n"],
      ["internationalization", "i18n"],
    ];

    tests.forEach(test => {
      expect(numeronym(test[0])).to.equal(test[1], "The numeronym is incorrect.");
    });
  });

  it("Creates a numeronym for names", function () {
    const tests: TestTuple<string, string>[] = [
      ["Ethan", "e3n"],
      ["Sabrielle", "s7e"],
      ["Heidi", "h3i"],
      ["Markiplier", "m8r"]
    ];
    
    tests.forEach(test => {
      expect(numeronym(test[0])).to.equal(test[1], "Should generate a correct numeronym");
    });
  });
});
