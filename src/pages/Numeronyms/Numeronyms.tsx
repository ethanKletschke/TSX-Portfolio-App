import { useState } from "react";
import Footer from "../../comps/Footer/Footer";
import Form from "../../comps/Form/Form";
import GoHomeBtn from "../../comps/GoHomeBtn/GoHomeBtn";
import Header from "../../comps/Header/Header";
import MainBody from "../../comps/MainBody/MainBody";
import numeronym from "../../funcs/numeronym";

export default function Numeronyms() {
  // State
  const [numeronymInput, setNumeronym] = useState<string>("");
  const [out, setOut] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumeronym(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setOut(numeronym(numeronymInput));
  };

  return (
    <main>
      <Header>
        Numeronym Generator
      </Header>

      <MainBody>
        <Form submitHandler={handleSubmit}>
          <fieldset>
            <legend>Numeronym Input</legend>

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
              Create Numeronym
            </button>
          </fieldset>

          <fieldset>
            <legend>Output</legend>

            <label htmlFor="numeronym-out">Generated Numeronym</label>
            <output 
              htmlFor="numeronym-in"
              id="numeronym-out"
            >
              {out || "No Numeronym generated yet"}
            </output>
          </fieldset>
        </Form>

        <GoHomeBtn />
      </MainBody>

      <Footer />
    </main> 
  );
}
