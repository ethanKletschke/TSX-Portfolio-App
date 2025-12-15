import styles from "./Figure.module.css";

type FigureProps = {
  src: string;
  alt: string;
  caption?: string;
};

// Image for the card
export default function Figure({ src, alt, caption }: FigureProps) {
  return (
    <figure className={styles.figure}>
      <img src={src} alt={alt} />

      {/* Render a caption if it is provided. */}
      {caption && (
        <figcaption>{caption}</figcaption>
      )}
    </figure>
  );
}
