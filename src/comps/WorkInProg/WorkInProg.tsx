import styles from "./WorkInProg.module.css";

// "Work-in-progress" notice banner
export default function WorkInProg() {
  return (
    <h3 className={styles["wip-banner"]}>Work in Progress</h3>
  );
}
