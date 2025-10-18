import styles from "./SkillMeter.module.css";

type meterProps = {
  value: number;
  lbl: string;
  id: string;
};


// Defines a progress bar that displays my confidence in a programming language
export default function SkillMeter({ value, lbl, id }: meterProps) {
  // Declare a variable to hold the meter value 
  let mtrVal: number = 0;
  // The message to display after the meter (e.g. "")
  let mtrMsg: string = "";

  // Set the bar value to 50 if it's too high or too low.
  mtrVal = (value > 100 || value < 0) ? 50 : value;

  if (mtrVal >= 0 && mtrVal < 25) {
    mtrMsg = "Need to (re)learn";
  } else if (mtrVal >= 25 && mtrVal < 50) {
    mtrMsg = "Slightly Confident";
  } else if (mtrVal >= 50 && mtrVal < 75) {
    mtrMsg = "Confident";
  } else if (mtrVal >= 75 && mtrVal <= 100) {
    mtrMsg = "Very Confident";
  } else {
    mtrMsg = "Invalid";
  }

  return (
    <div className={styles.wrapper}>
      <label htmlFor={id}>
        {lbl}
      </label>

      <meter
        className={styles.mtr}
        id={id + "-meter"}
        min="0"
        value={mtrVal}
        max="100"
        title={`${mtrVal}%`}
      >
        {value}%
      </meter>
      <span className={styles.mtrLabel}>{mtrMsg || ""} ({value}%)</span>
    </div>
  );
}
