import { useState } from "react";
import Form from "../../comps/general_UI/Form/Form.tsx";
import GoHomeBtn from "../../comps/general_UI/GoHomeBtn/GoHomeBtn.tsx";
import doubleLetters from "../../funcs/doubleLetters.ts";
import Page from "../../comps/general_UI/layout/Page/Page.tsx";

export default function LetterRepetition() {
  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Set the input to modify as the user types it out
    setInput(e.target.value);
  };

  // Clears the input and output states for the page.
  const handleClear = () => {
    setInput("");
    setResult("");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Prevent form submission from refreshing the page.
    e.preventDefault();

    // Repeat the letters as per the input from the user
    const temp = doubleLetters(input);

    // Overflow cutoff
    if (temp.length >= 100) {
      // [100 letters]...
      setResult(temp.substring(0, 101) + "...");
    } else {
      // full output
      setResult(temp);
    }
  };

  return (
    <Page headerText="Letter Repetition">
      <Form submitHandler={handleSubmit}>
        <fieldset>
          <legend>Letter Repetition</legend>

          <label htmlFor="modify-input">Text to Modify</label>
          <input
            autoComplete="off"
            autoFocus
            id="modify-input"
            name="modify-input"
            onChange={handleInputChange}
            placeholder="Text to modify..."
            type="text"
            value={input || ""}
            maxLength={50}
          />
        </fieldset>

        <fieldset>
          <legend>Output</legend>

          {/* Output */}
          <label htmlFor="out">Repeated Result</label>
          <output
            htmlFor="modify-input"
            id="out"
            name="out"
          >
            {result || "Not modified yet"}
          </output>
        </fieldset>

        <input type="submit" value="Repeat!" />
        <button
          onClick={handleClear}
          type="button"
        >
          Clear
        </button>
      </Form>

      <hr />

      <GoHomeBtn />
    </Page>
  );
}
