import styles from "./MainBody.module.css";

type MainBodyProps = {
  // TODO -> Import "ReactNode" instead.
  children: React.ReactNode;
};

// The main "body" article for the <main> element.
export default function MainBody({ children }: MainBodyProps) {
  return (
    <article className={styles["main-body"]}>
      {children}
    </article>
  );
}
