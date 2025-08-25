import { Link } from "react-router-dom";
import Header from "../../comps/Header/Header";
import Footer from "../../comps/Footer/Footer";

export default function Home() {
  return (
    <main>
      <Header>
        Ethan Kletschke's Portfolio
      </Header>

      <article id="main-body">
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
          <li>
            <Link to="/southAfricanID">
              South African ID Validator
            </Link>
          </li>
          <li>
            <Link to="/email">
              Email Validator
            </Link>
          </li>
        </ul>
      </article>

      <Footer />
    </main>
  );
}
