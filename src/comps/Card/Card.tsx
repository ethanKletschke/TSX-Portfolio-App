import type { DefaultCardProps } from "../../CompProps/DefaultCardProps";
import Figure from "../Figure/Figure";
import styles from "./Card.module.css";

// Props for a simple card component.
type CardProps = Required<Omit<DefaultCardProps, "icon" | "subtitle" | "visible">>;

/*
  Above type is equivalent to:

  type CardProps = {
    title: string;
    imgSrc: string;
    imgCaption: string;
    children: ReactNode;
    footerText: string;
  }
*/

// Simple card
export default function Card({ children, title, imgSrc, footerText, imgCaption }: CardProps) {
  return (
    // Card wrapper div
    <div className={styles.card}>
      {/* Card header */}
      <header>
        <h3>{title || "Header"}</h3>
      </header>
      {/* Card body */}
      <section>
        <Figure src={imgSrc} alt={imgCaption} caption={imgCaption} />
      
        {children}
      </section>
      {/* Card footer */}
      <footer>
        <p>{footerText || "Footer"}</p>
      </footer>
    </div>
  );
}
