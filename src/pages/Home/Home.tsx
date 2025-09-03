import { Link } from "react-router-dom";
import Header from "../../comps/Header/Header";
import Footer from "../../comps/Footer/Footer";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <main>
      <Header>
        Ethan Kletschke's Portfolio
      </Header>

      <article id="main-body">
        <h2 className={styles.heading}>Select a Page to Go To</h2>

        <ul className={styles.toc}>
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
          <li>
            <Link to="/dice">
              Dice Rolling
            </Link>
          </li>
        </ul>
      </article>

      <Footer />
    </main>
  );
}
