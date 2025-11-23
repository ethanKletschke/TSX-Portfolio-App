import { useState } from "react";
import Footer from "../../comps/Footer/Footer.tsx";
import Form from "../../comps/Form/Form.tsx";
import GoHomeBtn from "../../comps/GoHomeBtn/GoHomeBtn.tsx";
import Header from "../../comps/Header/Header.tsx";
import MainBody from "../../comps/MainBody/MainBody.tsx";
import sortObject from "../../funcs/sortObjects.ts";

// Object Sorting Component
export default function ObjSort() {
  // The class for the object(s) to sort
  class Person {
    private id: string;
    private fname: string;
    private lname: string;

    constructor(id: string, fname: string, lname: string) {
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

  type FieldsToSortBy = keyof Person;

  // State
  const [id, setId] = useState<string>(""); // Person ID
  const [fname, setFname] = useState<string>(""); // Person first name
  const [lname, setLname] = useState<string>(""); // PErson surname
  const [toSortBy, setToSortBy] = useState<FieldsToSortBy | "">(""); // Field to sort by
  const [outputTxt, setOutputTxt] = useState<string>(""); // the Output Text
  const [objs, setObjs] = useState<Person[]>([]); // Object array to sort
  const [previousObj, setPreviousObj] = useState<string>("");

  const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const handleFnameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFname(e.target.value);
  };

  const handleLnameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLname(e.target.value);
  };

  const handleCreateClick = () => {
    if (id === "" || fname === "" || lname === "") {
      alert("Field(s) missing.");
      return;
    }
    // Create a new Person object with the values entered by the user.
    const p = new Person(id, fname, lname);

    // Append the new person to the array of objects.
    setObjs(prev => [...prev, p]);

    // Set the previously made object as state
    setPreviousObj(`ID${p.personID}: ${p.firstName} ${p.lastName}\n`)
  };

  const handleClear = () => {
    setId("");
    setFname("");
    setLname("");
    setToSortBy("");
    setOutputTxt("");
    setPreviousObj("");
    setObjs([]);
  }

  const handleSortByChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setToSortBy(e.target.value as FieldsToSortBy);
    console.debug(e.target.value);
  };

  // Submit event handler
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Prevent page refresh on form submission
    e.preventDefault();
  };

  const handleSortClick = () => {
    // Output string to display
    let toOutput: string = "";

    if (objs.length === 0) {
      toOutput = "No people were made yet!";
    } else {
      console.debug(toSortBy);
      // Sort the array of objects with my own function
      const sorted = sortObject(objs, (toSortBy as FieldsToSortBy));

      sorted.forEach((prsn) => {
        toOutput += `ID${prsn.personID}: ${prsn.firstName} ${prsn.lastName}\n`;
      });
    }

    setOutputTxt(toOutput);
  };

  return (
    <main>
      {/* Main header component */}
      <Header>
        Object Sort
      </Header>

      {/* Main page body */}
      <MainBody>

        <Form submitHandler={handleSubmit}>
          <fieldset>
            <legend>Create Object</legend>

            <label htmlFor="personId">
              ID (3-digits)
            </label>
            <input
              id="personId"
              name="personId"
              onChange={handleIdChange}
              maxLength={3}
              pattern="[0-9][0-9][0-9]"
              placeholder="ID#"
              required
              type="text"
              value={id}
            />

            <label htmlFor="fname">First Name</label>
            <input
              id="fname"
              name="fname"
              onChange={handleFnameChange}
              placeholder="First name..."
              required
              type="text"
              value={fname}
            />

            <label htmlFor="lname">Last Name</label>
            <input
              id="lname"
              name="lname"
              onChange={handleLnameChange}
              placeholder="Last name..."
              required
              type="text"
              value={lname}
            />

            <label htmlFor="prev-obj">Previously created person:</label>
            <output
              id="prev-obj"
              name="prev-obj"
            >
              {previousObj || "None yet"}
            </output>

            <button
              onClick={handleCreateClick}
              type="button"
            >
              Create
            </button>

          </fieldset>

          {/* Output */}
          <fieldset>
            <legend>Output</legend>

            <label htmlFor="sort-by">Sort By:</label>
            <select
              onChange={handleSortByChange}
              required
              value={toSortBy}
            >
              {/* Placeholder option */}
              <option value="" disabled>Select a Field...</option>

              {/* Actual options */}
              <option value="personID">Person ID</option>
              <option value="fname">First Name</option>
              <option value="lname">Last Name</option>
            </select>

            {/* Submit Button */}
            <button type="button"
              onClick={handleSortClick}>
              Sort
            </button>

            <label htmlFor="output-text">
              {/* e.g. People sorted by key "personId" */}
              People{toSortBy && (
                <span>
                  &nbsp;sorted by key "<code>{toSortBy}</code>":
                </span>
              )}
            </label>
            <textarea
              name="output-text"
              id="output-text"
              value={outputTxt}
              readOnly
            />
          </fieldset>

          <button type="button" onClick={handleClear}>Reset</button>
        </Form>

        {/* Button to return to index route */}
        <GoHomeBtn />
      </MainBody>

      {/* Footer component */}
      <Footer />
    </main>
  );
}
