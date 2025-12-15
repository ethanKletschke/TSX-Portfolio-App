import styles from "./ContentsTableCard.module.css";

type ContentsTableCardProps = {
  title: string;
  icon: string;
  subtitle: string;
};

// A single grid card on the table of contents page
export default function ContentsTableCard({ title, icon, subtitle }: ContentsTableCardProps) {
  return (
    // The card root.
    <div className={styles.contentCard}>
      {/* The UTF-8 icon for the card */}
      <p className={styles.icon}>{icon}</p>
      {/* Page title */}
      <h3>{title || "Contents"}</h3>
      {/* Card subtitle */}
      <p className={styles.subtitle}>
        {subtitle || "Subtitle"}
      </p>
    </div>
  );
}
