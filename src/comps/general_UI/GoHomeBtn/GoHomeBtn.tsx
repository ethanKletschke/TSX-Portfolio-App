import { Link } from "react-router-dom";
import styles from "./GoHomeBtn.module.css";

export default function GoHomeBtn() {
  return (
    // A button that sends the user back to the index route.
    <Link className={styles.btn} to="/">Go Home</Link>
  );
}
