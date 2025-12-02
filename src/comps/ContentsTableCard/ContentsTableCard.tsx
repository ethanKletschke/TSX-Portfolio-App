import { type CardProps } from "../../compProps/CardProps";
import styles from "./ContentsTableCard.module.css";

// Define own CardProps without children JSX
type ContentsTableCardProps = Omit<CardProps, "children">;

export default function ContentsTableCard({ title, icon, subtitle }: ContentsTableCardProps) {
  return (
    <div className={styles.contentCard}>
      <p className={styles.icon}>{icon}</p>
      <h3>{title || "Contents"}</h3>
      <p>{subtitle || "Subtitle"}</p>
    </div>
  );
}
