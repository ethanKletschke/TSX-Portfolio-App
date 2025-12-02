import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import Page from "../../comps/Page/Page";

export default function Home() {
  return (
    <Page headerText="Ethan Kletschke's Portfolio">
      {/* Heading with instruction */}
      <h2 className={styles.heading}>Select a Page to Go To</h2>

      {/* Table of contents */}
      <ul className={styles.toc}>
        <li>
          <Link to="/aboutMe">
            About Me
          </Link>
        </li>
        <li>
          <Link to="/consecutiveSum">
            Consecutive Summation
          </Link>
        </li>
        <li>
          <Link to="/dialogs">
            Dialog Box Demo
          </Link>
        </li>
        <li>
          <Link to="/dice">
            Dice Rolling
          </Link>
        </li>
        <li>
          <Link to="/email">
            Email Validator
          </Link>
        </li>
        <li>
          <Link to="/letterRep">
            Letter Repetition
          </Link>
        </li>
        <li>
          <Link to="/numeronyms">
            Numeronyms
          </Link>
        </li>
        <li>
          <Link to="/sentenceSort">
            Sort a Sentence
          </Link>
        </li>
        <li>
          <Link to="/objSort">
            Sort Objects
          </Link>
        </li>
        <li>
          <Link to="/stopwatch">
            Stopwatch
          </Link>
        </li>
      </ul>
    </Page>
  );
}
