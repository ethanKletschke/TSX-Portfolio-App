import ContentsTableCard from "../ContentsTableCard/ContentsTableCard";
import styles from "./ContentsTable.module.css";

// Card properties
export interface CardObj {
  title: string;
  icon: string;
}

type ContentsTableProps = {
  cards: CardObj[];
};

export default function ContentsTable({ cards }: ContentsTableProps) {
  return (
    <div className={styles.contentsTable}>
      {cards.map((card) => (
        <ContentsTableCard title={card.title} icon={card.icon} />
      ))}
    </div>
  );
}
