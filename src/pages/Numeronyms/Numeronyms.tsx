import { useState } from "react";
import Form from "../../comps/general_UI/Form/Form";
import GoHomeBtn from "../../comps/general_UI/GoHomeBtn/GoHomeBtn";
import numeronym from "../../funcs/numeronym";
import Page from "../../comps/general_UI/layout/Page/Page.tsx";

export default function Numeronyms() {
  // State
  // TODO -> Rename to "acronym" and "setAcronym"
  const [numeronymInput, setNumeronym] = useState<string>(""); // Input from user
  const [out, setOut] = useState<string>(""); // output string

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Set the numeric acronym input
    setNumeronym(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Set the output to the numeric acronym of the user's input
    setOut(numeronym(numeronymInput));
  };

  return (
    <Page headerText="Numeric Acronym Generator">
      <Form submitHandler={handleSubmit}>
        <fieldset>
          <legend>Input</legend>

          {/* User input */}
          <label htmlFor="numeronym-in">Word to shorten:</label>
          <input
            type="text"
            name="numeronym-in"
            id="numeronym-in"
            value={numeronymInput}
            onChange={handleChange}
            minLength={3}
          />

          <button type="submit">
            Create Numeric Acronym
          </button>
        </fieldset>

        <fieldset>
          <legend>Output</legend>

          {/* Output string */}
          <label htmlFor="numeronym-out">Generated Acronym</label>
          <output
            htmlFor="numeronym-in"
            id="numeronym-out"
          >
            {out || "No acronym generated yet"}
          </output>
        </fieldset>
      </Form>

      <GoHomeBtn />
    </Page>
  );
}
