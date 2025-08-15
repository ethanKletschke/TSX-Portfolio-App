import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <header>
        <h1>Ethan's Portfolio App</h1>
      </header>

      <h2>Select a Page to Go To</h2>

      <ul>
        <li>
          <Link to="/sentenceSort">
            Sort a Sentence
          </Link> 
        </li>
        <li>
          <Link to="/consecutiveSum">
            Consecutive Summation
          </Link> 
        </li>
        <li>
          <Link to="/objSort">
            Sort Objects
          </Link> 
        </li>
      </ul>
    </>
  );
}
