import { type CardProps } from "../../compProps/CardProps";
import styles from "./ContentsTableCard.module.css";

// Define own CardProps without children JSX
type ContentsTableCardProps = Omit<CardProps, "children">;

// A single grid card on the table of contents page
export default function ContentsTableCard({ title, icon, subtitle }: ContentsTableCardProps) {
  return (
    <div className={styles.contentCard}>
      <p className={styles.icon}>{icon}</p>
      <h3>{title || "Contents"}</h3>
      <p className={styles.subtitle}>
        {subtitle || "Subtitle"}
      </p>
    </div>
  );
}
