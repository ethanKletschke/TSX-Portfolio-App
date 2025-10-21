import styles from "./Header.module.css";

type headerProps = {
  children: string; // The inner text of the element
};

export default function Header({ children /* Inner Header Text */ }: headerProps) {
  return (
    <header className={styles.heading}>
      {/* Allows for a syntax like:
        <Header>
          Header Text!
        </Header>
      */}
      <h1>{children}</h1>
    </header>
  );
}
