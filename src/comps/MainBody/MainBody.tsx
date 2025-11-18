import styles from "./MainBody.module.css";

type MainBodyProps = {
  children: React.ReactNode;
};

export default function MainBody({ children }: MainBodyProps) {
  return (
    <article className={styles["main-body"]}>
      {children}
    </article>
  );
}
