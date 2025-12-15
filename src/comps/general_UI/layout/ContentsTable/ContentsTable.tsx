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
  cards: CardObj[]; // An array of cards.
};

export default function ContentsTable({ cards }: ContentsTableProps) {
  return (
    // "Table" grid for the card divs.
    <div className={styles.contentsTable}>
      {cards.map((card) => (
        // A router <Link> sending the user to the specified page when 
        // clicking the card.
        <Link to={card.route}>
          {/* A single card on the home page. */}
          <ContentsTableCard title={card.title} icon={card.icon} subtitle={card.subtitle} />
        </Link>
      ))}
    </div>
  );
}
