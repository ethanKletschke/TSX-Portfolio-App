import { type CardProps } from "../../compProps/CardProps";
import styles from "./ContentsTableCard.module.css";

// Define own CardProps without an imgSrc replace it with an iconSrc
type ContentsTableCardProps = Omit<CardProps, "imgSrc"> & { iconSrc: string };

export default function ContentsTableCard({ title, iconSrc }: ContentsTableCardProps) {
  return (
    <div className={styles.contentCard}>
      <img src={iconSrc} alt="Icon" />
      <h3>{title || "Contents"}</h3>
    </div>
  );
}
