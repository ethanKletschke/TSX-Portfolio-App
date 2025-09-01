import { useState } from "react";
import Footer from "../../comps/Footer/Footer.tsx";
import GoHomeBtn from "../../comps/GoHomeBtn/GoHomeBtn.tsx";
import Header from "../../comps/Header/Header.tsx";
import sortString from "../../funcs/sortString.ts";

export default function SentSort() {
  const [sentence, setSentence] = useState<string>("");
  const [sortedSentence, setSortedSentence] = useState<string>("");

  const handleSentenceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Set the value of the sentence
    setSentence(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Prevent page refresh on submit
    e.preventDefault();

    // Sort the sentence string entered by the user
    setSortedSentence(sortString(sentence));
  }

  return (
    <main>
      <Header>
        Sort a Sentence
      </Header>

      <article id="main-body">
        <form onSubmit={handleSubmit}>
          {/* Sentence Input */}
          <fieldset>
            <legend>Enter Sentence</legend>

            {/* Input for Sentence */}
            <label htmlFor="sentence">Sentence to sort:</label>
            <input 
              type="text" 
              id="sentence" 
              name="sentence"
              value={sentence || ""}
              onChange={handleSentenceChange}
              placeholder="Enter sentence..."
            />

            {/* Sort button */}
            <input type="submit" value="Sort!" />
          </fieldset>

          <fieldset>
            <legend>Output</legend>
            <label htmlFor="sorted">Sorted Sentence:</label>
            <output name="sorted" id="sorted">
              {/* Display the sorted sentence or a placeholder if it is empty. */}
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
