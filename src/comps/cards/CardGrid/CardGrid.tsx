import type { ReactNode } from "react";
import styles from "./CardGrid.module.css";

type CardGridProps = {
  children: ReactNode;
};

// Grid of cards. Functions as a wrapper to sort any group of cards into a grid shape
export default function CardGrid({ children }: CardGridProps) {
  return (
    <div className={styles.cardGrid}>
      {children}
    </div>
  );
}
