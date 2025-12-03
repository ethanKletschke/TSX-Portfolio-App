import { Link } from "react-router-dom";
import ContentsTableCard from "../ContentsTableCard/ContentsTableCard";
import styles from "./ContentsTable.module.css";

// Card properties
export interface CardObj {
  title: string;
  icon: string;
  route: string;
  subtitle: string;
}

type ContentsTableProps = {
  cards: CardObj[];
};

export default function ContentsTable({ cards }: ContentsTableProps) {
  return (
    <div className={styles.contentsTable}>
      {cards.map((card) => (
        <Link to={card.route}>
          <ContentsTableCard title={card.title} icon={card.icon} subtitle={card.subtitle} />
        </Link>
      ))}
    </div>
  );
}
