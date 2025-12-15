import type { ReactNode } from "react";
import styles from "./Header.module.css";

type HeaderProps = {
  children: ReactNode; // The inner text of the element
};

export default function Header({ children }: HeaderProps) {
  return (
    <header className={styles.heading}>
      <h1>{children}</h1>
    </header>
  );
}
