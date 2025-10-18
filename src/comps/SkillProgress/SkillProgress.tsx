import styles from "./SkillProgress.module.css";

type progressProps = {
  value: number; // the progressbar's value
  lbl: string; // The label for the bar.
  id: string; // The HTML ID of the progressbar
};

// Defines a progress bar that displays my confidence in a programming language
export default function SkillProgress({ value, lbl, id }: progressProps) {
  // Declare a variable to hold the progress value 
  let barVal: number = 0;

  // Set the bar value to 50 if it's too high or too low.
  barVal = (value > 100 || value < 0) ? 50 : value;

  return (
    <div className={styles.wrapper}>
      {/*  */}
      <label htmlFor={id}>
        {lbl}
      </label>

      <progress
        className={styles.pbar}
        id={id + "-bar"}
        max="100"
        value={barVal}
      >
        {value}%
      </progress>
      <span className={styles.percentLabel}>({value}%)</span>
    </div>
  );
}
