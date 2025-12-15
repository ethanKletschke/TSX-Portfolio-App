import { useState } from "react";
import Form from "../../comps/general_UI/Form/Form.tsx";
import GoHomeBtn from "../../comps/general_UI/GoHomeBtn/GoHomeBtn.tsx";
import sortObject from "../../funcs/sortObjects.ts";
import Page from "../../comps/general_UI/layout/Page/Page.tsx";
import { useToast } from "../../systems/toast/toast.context.tsx";

// Object Sorting Component
export default function ObjSort() {
  // The class for the object(s) to sort
  class Person {
    private id: string; // 3-digit ID number
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
  const [lname, setLname] = useState<string>(""); // Person surname
  const [toSortBy, setToSortBy] = useState<FieldsToSortBy | "">(""); // Field to sort by
  const [outputTxt, setOutputTxt] = useState<string>(""); // the Output Text
  const [objs, setObjs] = useState<Person[]>([]); // Object array to sort
  // A string representation of the previously made object
  const [previousObj, setPreviousObj] = useState<string>("");

  const { addToast } = useToast();

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
    // If any input is empty
    if (id === "" || fname === "" || lname === "") {
      // Alert the user that they're missing input
      addToast("Field(s) missing.", { variant: "error" });

      // Don't continue
      return;
    }
    // Create a new Person object with the values entered by the user.
    const p = new Person(id, fname, lname);

    // Append the new person to the array of objects.
    setObjs(prev => [...prev, p]);

    // Set the previously made object as state
    setPreviousObj(`ID${p.personID}: ${p.firstName} ${p.lastName}\n`)
  };

  // Clear all input and output on the page.
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
    // Set the field to sort the objects by.
    setToSortBy(e.target.value as FieldsToSortBy);
  };

  // Submit event handler
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Prevent page refresh on form submission
    e.preventDefault();
  };

  const handleSortClick = () => {
    // Output string to display
    let toOutput = "";

    // If there were no objects made yet.
    if (objs.length === 0) {
      addToast("No people made yet!", { variant: "warning" })
    } else {
      // Sort the array of objects with my own function
      const sorted = sortObject(objs, (toSortBy as FieldsToSortBy));

      // Build the list of the sorted objects as strings
      sorted.forEach((prsn) => {
        toOutput += `ID${prsn.personID}: ${prsn.firstName} ${prsn.lastName}\n`;
      });
    }

    // Set the output textarea to the built list.
    setOutputTxt(toOutput);
  };

  return (
    <Page headerText="Object Sort">
      <Form submitHandler={handleSubmit}>
        <fieldset>
          <legend>Create Object</legend>

          <label htmlFor="personId">
            ID Number (3-digits)
          </label>
          <input
            id="personId"
            name="personId"
            onChange={handleIdChange}
            maxLength={3}
            pattern="[0-9][0-9][0-9]" // 3-digit ID
            placeholder="ID#" // Placeholder
            required
            type="text" // Set as a text field to avoid bugs regarding empty number input
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
    </Page>
  );
}
