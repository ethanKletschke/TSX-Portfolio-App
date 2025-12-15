import styles from "./SkillMeter.module.css";

// Props for the skill meter
type SkillMeterProps = {
  value: number;
  lblText: string;
  htmlID: string;
};

// Defines a meter that displays my confidence in a programming language
export default function SkillMeter({ value, lblText, htmlID }: SkillMeterProps) {
  // Declare a variable to hold the meter value 
  let mtrVal: number = 0;
  // The message to display after the meter (e.g. "")
  let mtrMsg: string = "";

  // Set the bar value to 50 if it's too high or too low.
  mtrVal = (value > 100 || value < 0) ? 50 : value;

  // Set the value of the meter message depending on 
  // the value passed to the component.
  if (mtrVal >= 0 && mtrVal < 25) {
    mtrMsg = "Need to (re)learn";
  } else if (mtrVal >= 25 && mtrVal < 50) {
    mtrMsg = "Slightly Confident";
  } else if (mtrVal >= 50 && mtrVal < 75) {
    mtrMsg = "Confident";
  } else if (mtrVal >= 75 && mtrVal <= 100) {
    mtrMsg = "Very Confident";
  } else {
    // Code should not hit this.
    mtrMsg = "Invalid";
  }

  return (
    <div className={styles.wrapper}>
      {/* Display the Label Text */}
      <label htmlFor={htmlID}>
        {lblText}
      </label>

      {/* Meter bar */}
      <meter
        className={styles.mtr}
        id={htmlID + "-meter"}
        min="0"
        value={mtrVal}
        max="100"
        title={`${mtrVal}%`} // Display the current % on hover
      >
        {/* e.g. 45% */}
        {value}%
      </meter>
      {/* Confidence level and percentage value. E.g.: Need to (re)learn (5%) */}
      <span className={styles.mtrLabel}>{mtrMsg || ""} ({value}%)</span>
    </div>
  );
}
