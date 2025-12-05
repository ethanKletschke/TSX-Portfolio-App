import styles from "./Card.module.css";
import type { DefaultCardProps } from "../../CompProps/DefaultCardProps";

// Props for a simple card component.
<<<<<<< HEAD
type CardProps = Required<Omit<DefaultCardProps, "icon" | "subtitle" | "visible">>;

// Simple card
export default function Card({ children, title, imgSrc, footerText, imgCaption }: CardProps) {
  return (
    // Card wrapper div
=======
type CardProps = Omit<DefaultCardProps, "icon" | "subtitle">;

// Simple card
export default function Card({ children, title, imgSrc, footerText }: CardProps) {
  return (
>>>>>>> 5a9c322 (wip(feat): Start Card component)
    <div className={styles.card}>
      {/* Card header */}
      <header>
        <h3>{title || "Header"}</h3>
      </header>
      {/* Card body */}
      <section>
        {/* An image to show if imgSrc is provided */}
        {imgSrc && (
<<<<<<< HEAD
          <figure>
            <img
              src={imgSrc}
              alt="Card image"
            />

            {/* An image caption if imgCaption is provided. */}
            {imgCaption && (
              <figcaption>{imgCaption}</figcaption>
            )}
          </figure>
=======
          <img
            src={imgSrc}
            alt="Card image"
          />
>>>>>>> 5a9c322 (wip(feat): Start Card component)
        )}
        {/* display JSX children or a placeholder */}
        {children || <p>Body</p>}
      </section>
      {/* Card footer */}
      <footer>
<<<<<<< HEAD
        <p>{footerText || "Footer"}</p>
=======
        {footerText || "Footer"}
>>>>>>> 5a9c322 (wip(feat): Start Card component)
      </footer>
    </div>
  );
}
