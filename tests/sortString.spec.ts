import { expect } from "chai";
import sortString from "../src/funcs/sortString.ts";
import testTuple from "./testTuple.ts";

describe("sortString()", () => {
  it("Sorts a string alphabetically", () => {
    // Declare an array of test tuples
    const tests: testTuple[] = [
      ["babacac", "aaabbcc"],
      ["cacabak", "aaabcck"],
      ["crack their back", "aabcccehikkrrt"]
    ];

    tests.forEach((test: testTuple) => {
      // Test the first tuple value (the actual value) against the second tuple (expected value)
      expect(sortString(test[0])).to.equal(test[1], "The string should be sorted in alphabetical order.");
    });
  });

  it("Sorts a string case-insensitively", () => {
    expect(sortString("baBaCac")).to.match(
      /aaabbcc/i, 
      "The string should be sorted regardless of case."
    );
  });

  it("Sorts a string's alphanumeric characters in between any special characters", () => {
    const tests: string[] = [
      "Sort me!!", // Just exclamation marks
      "This \"string\" should be sorted, sir, I'm almost certain of it...!", // Multiple unique punctuation marks
      "Hello wŒrld~!", // OE ligature and other special chars
      "Manuel Maćaron", // Accent on just C
      "āƂƆƉƐƒƓ" // Latin Extended letters
    ];
    
    // Regex modified by ChatGPT: https://chatgpt.com/s/t_689afb3f9ae081918aeb3b5485e48ab5
    tests.forEach((test: string) => {
      expect(sortString(test)).to.match(
        /^([^\p{L}\p{N}]*)[\p{L}\p{N}]*([^\p{L}\p{N}]*)$/iu, 
        "The string should have alphanumeric characters in between special characters"
      );
    })
  })
});
