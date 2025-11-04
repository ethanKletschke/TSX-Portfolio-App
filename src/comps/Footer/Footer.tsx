import styles from "./Footer.module.css";

// Copyright footer
export default function Footer() {
  return (
    <footer className={styles.foot}>
      &copy; Ethan Kletschke, {/* Copyright year */ new Date().getFullYear()}
    </footer>
  );
}
