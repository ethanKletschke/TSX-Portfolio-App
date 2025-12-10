import { Link } from "react-router-dom";
import styles from "./GoHomeBtn.module.css";

export default function GoHomeBtn() {
  return (
    <Link className={styles.btn} to="/">Go Home</Link>
  );
}
