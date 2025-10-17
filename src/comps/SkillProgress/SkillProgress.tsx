import styles from "./SkillProgress.module.css";

type progressProps = {
  value: number;
  lbl: string;
  id: string;
};

// Defines a progress bar that displays my confidence in a programming language
export default function SkillProgress({ value, lbl, id }: progressProps) {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={id}>
        {lbl}
      </label>
      <progress className={styles.pbar} id={id + "-bar"} max="100" value={value}>
        {value}%
      </progress>
      <span className={styles.percentLabel}>({value}%)</span>
    </div>
  );
}
