import { useState } from "react";
import Footer from "../../comps/Footer/Footer.tsx";
import GoHomeBtn from "../../comps/GoHomeBtn/GoHomeBtn.tsx";
import Header from "../../comps/Header/Header.tsx";
import doubleLetters from "../../funcs/doubleLetters.ts";
import Form from "../../comps/Form/Form.tsx";
import MainBody from "../../comps/MainBody/MainBody.tsx";

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

    // Debug output
    console.debug("Submitted Letter Repetition.");
    console.debug(`String submitted: ${input}`);

    // Repeat the letters as per the input from the user
    const temp = doubleLetters(input);

    if (temp.length >= 100) {
      // [100 letters]...
      setResult(temp.substring(0, 101) + "...");
    } else {
      // full output
      setResult(temp);
    }

    // Debug output for the result
    console.debug(`Repeated version: ${result}`);
  };

  return (
    <main>
      <Header>
        Letter Repetition
      </Header>

      <MainBody>
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
      </MainBody>


      <Footer />
    </main>
  );
}
