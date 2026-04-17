import { useState } from "react";
import Form from "../../comps/general_UI/Form/Form";
import Page from "../../comps/general_UI/layout/Page/Page";
import GoHomeBtn from "../../comps/general_UI/GoHomeBtn/GoHomeBtn";

export default function WordCounter() {
  // The word entered by the user
  const [providedWord, setProvidedWord] = useState("");
  // The paragraph to search
  const [para, setPara] = useState("");
  // The number of occurrences
  const [count, setCount] = useState(0);
  // The output text
  const [resText, setResText] = useState("");

  const handleWordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProvidedWord(e.target.value);
  };

  const handleParaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPara(e.target.value);
  };

  const handleReset = (e: React.MouseEvent<HTMLButtonElement>) => {
    /*
      Prevents unexpected bugs by stopping
      browser default behaviour from running
    */
    e.preventDefault();

    // Clear all the input
    setProvidedWord("");
    setCount(0);
    setPara("");
    setResText("");
  };

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    // Prevent page reload on submit
    e.preventDefault();

    const re = new RegExp(`\\b${providedWord}\\b`, "gim");

    const matches = para.match(re);

    if (matches) {
      const matchCount = matches.length;

      setCount(matchCount);
      setResText(`The word "${providedWord}" was found ${matchCount} times in your paragraph.`);
    } else {
      setResText(`The word "${providedWord}" was not found in your paragraph.`);
      setCount(0);
    }
  };

  return (
    <Page headerText="Word Counter">
      <Form submitHandler={handleSubmit}>
        <fieldset>
          <legend>Input</legend>

          <label htmlFor="find-word">Word to Find</label>
          <input
            type="text"
            id="find-word"
            name="find-word"
            placeholder="Word to find..."
            value={providedWord}
            onChange={handleWordChange}
          />

          <label htmlFor="para">Paragraph to Search</label>
          <textarea
            id="para"
            name="para"
            value={para}
            onChange={handleParaChange}
            placeholder="Enter paragraph here..."
          />

          <input type="submit" value={`Count word "${providedWord}"`} />
          <button onClick={handleReset}>Reset</button>
        </fieldset>
        <fieldset>
          <legend>Results</legend>
          <output>
            {resText || "Not counted yet"}
          </output>
        </fieldset>
      </Form>

      <hr />
      <GoHomeBtn />
    </Page>
  );
}
