import { Link } from "react-router-dom";
import styles from "./GoHomeBtn.module.css";

export default function GoHomeBtn() {
  return (
    <div className={styles.btn}>
      <Link to="/">Go Home</Link>
    </div>
  );
}
