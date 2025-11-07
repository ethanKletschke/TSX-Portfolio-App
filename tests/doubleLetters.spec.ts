import { expect } from "chai";
import doubleLetters from "../src/funcs/doubleLetters.ts";
import testTuple from "./testTuple.ts";

describe("doubleLetters()", function () {
  it("Takes a word and builds a new string where each character is repeated up to its index in the word", function () {
    const tests: testTuple<string, string>[] = [
      ["Letters", "LLeLetLettLetteLetterLetters"],
      ["Hi", "HHi"],
      ["Heyo", "HHeHeyHeyo"]
    ];

    tests.forEach((test: testTuple<string, string>) => {
      expect(doubleLetters(test[0])).to.equal(test[1], "Each letter must repeat up to its index");
    })
  });

  it("Returns an empty string when passed an empty string", function () {
    expect(doubleLetters("")).to.equal("", "String should be empty");
  })
});
