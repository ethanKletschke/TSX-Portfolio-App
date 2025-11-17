import { expect } from "chai";
import sortObjects from "../src/funcs/sortObjects.ts";

class Person {
  private id: number;
  private fname: string;
  private lname: string;

  constructor(id: number, fname: string, lname: string) {
    this.id = id;
    this.fname = fname;
    this.lname = lname;
  }

  get personID() {
    return this.id;
  }

  get firstName() {
    return this.fname;
  }

  get lastName() {
    return this.lname;
  }
}

describe("sortObjects()", function () {
  it("Sorts an object array according to a specified numeric property", function () {
    const arrObjs = [
      new Person(12, "Person", "Personson"),
      new Person(11, "Ethan", "Kletschke")
    ];

    const newArr = sortObjects(arrObjs, "personID");

    expect(newArr[0].personID).to.equal(11, "Objects should be correctly sorted by its numeric personID.");
  });

  it("Sorts an object array according to a specified string property", function () {
    const arrObjs = [
      new Person(12, "Person", "Personson"),
      new Person(11, "Ethan", "Kletschke")
    ];

    const newArr = sortObjects(arrObjs, "firstName");

    expect(newArr[0].firstName).to.equal("Ethan", "Objects should be correctly sorted by its string firstName.");
  });
});
