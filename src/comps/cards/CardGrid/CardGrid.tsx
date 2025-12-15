import type { ReactNode } from "react";
import styles from "./CardGrid.module.css";

type CardGridProps = {
  children: ReactNode; // The cards in the grid.
};

// Grid of cards. Functions as a wrapper to sort any group of cards into a grid layout
export default function CardGrid({ children }: CardGridProps) {
  return (
    <div className={styles.cardGrid}>
      {children}
    </div>
  );
}
