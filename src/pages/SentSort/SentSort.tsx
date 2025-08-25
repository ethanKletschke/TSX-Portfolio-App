import { useState } from "react";
import Footer from "../../comps/Footer/Footer.tsx";
import GoHomeBtn from "../../comps/GoHomeBtn/GoHomeBtn.tsx";
import Header from "../../comps/Header/Header.tsx";
import sortString from "../../funcs/sortString.ts";

export default function SentSort() {
  const [sentence, setSentence] = useState<string>("");
  const [sortedSentence, setSortedSentence] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Set the value of the sentence
    setSentence(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSortedSentence(sortString(sentence));
  }

  return (
    <main>
      <Header>
        Sort a Sentence
      </Header>

      <article id="main-body">
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Enter Sentence</legend>
            <label htmlFor="sentence">Sentence to sort:</label>
            <input 
              type="text" 
              id="sentence" 
              name="sentence"
              value={sentence || ""}
              onChange={handleChange}
            />
            <input type="submit" value="Sort!" />
          </fieldset>

          <fieldset>
            <legend>Output</legend>
            <label htmlFor="sorted">Sorted Sentence:</label>
            <output name="sorted" id="sorted">
              {sortedSentence || "Please enter a sentence!"}
            </output>
          </fieldset>
        </form>

        <GoHomeBtn />
      </article>

      <Footer />
    </main>
  );
}
