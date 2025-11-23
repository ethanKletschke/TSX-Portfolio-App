import { useState } from "react";
import Footer from "../../comps/Footer/Footer";
import Form from "../../comps/Form/Form";
import GoHomeBtn from "../../comps/GoHomeBtn/GoHomeBtn";
import Header from "../../comps/Header/Header";
import MainBody from "../../comps/MainBody/MainBody";
import styles from "./DiceRoll.module.css";

// Dice roll page
export default function DiceRoll() {
  // Source of the die face image
  const [imgSrc, setImgSrc] = useState<string>("DiceQuestion.png");
  // Die roll log
  const [log, setLog] = useState<string>("");
  // Number of rolls
  const [rollCount, setRollCount] = useState<number>(0);
  // Sum of rolls
  const [totalOfRolls, setTotalOfRolls] = useState<number>(0);

  // Die face values as a type alias.
  type dieFaces = 1 | 2 | 3 | 4 | 5 | 6;

  const handleDiceRollClick = () => {
    // Set the die roll as a random number between 1 and 6 and then
    // cast it as the above type alias
    const dieRoll: dieFaces = (Math.floor(Math.random() * 6) + 1) as dieFaces;

    // Compute the stats
    const newRollCount = rollCount + 1;
    const newTotal = totalOfRolls + dieRoll;
    const newAverage = newTotal / newRollCount;

    // Update state
    setRollCount(newRollCount);
    setTotalOfRolls(newTotal);
    // Update log
    setLog(`Die Roll #${newRollCount}: ${dieRoll}\n\nTotal: ${newTotal}\nAverage: ${newAverage.toFixed(2)}\n`);

    // Set the image to display the corresponding die roll.
    setImgSrc(`Dice${dieRoll || "Question"}.png`);
  };

  // Refreshes the values of the dice rolls
  const refreshVals = () => {
    setRollCount(0); // Roll count reset
    setTotalOfRolls(0); // Roll Sum reset

    // Set the log of the rolls to indicate the values were refreshed.
    setLog("Refreshed Values!");

    // Set the die face image to the initial state (die face with question mark).
    setImgSrc("DiceQuestion.png");
  };

  return (
    <main>
      {/* Main header component */}
      <Header>
        Dice Rolling
      </Header>

      {/* Main page body */}
      <MainBody>
        {/* Dice Image */}
        <img
          src={imgSrc || "DiceQuestion.png"}
          alt="Die Face"
          className={styles.dieImg}
        />

        <Form submitHandler={e => e.preventDefault()}>

          {/* Dice Roll Button */}
          <button
            onClick={handleDiceRollClick}
            type="button"
          >
            Roll Dice
          </button>

          {/* Value Refresh Button */}
          <button
            onClick={refreshVals}
            type="button"
          >
            Refresh Values
          </button>

          {/* Die roll log */}
          <textarea
            className={styles.rollLog}
            value={log || ""}
            placeholder="Roll Log..."
            readOnly
          />
        </Form>

        <hr />

        {/* Button to return to index route */}
        <GoHomeBtn />
      </MainBody>

      {/* Footer component */}
      <Footer />
    </main>
  );
}
