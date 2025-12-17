import styles from "./UserCard.module.css";

type UserCardProps = {
  username: string;
  displayName: string;
  imgSrc: string;
};

export default function UserCard({ username, displayName, imgSrc }: UserCardProps) {
  return (
    <div className={styles.userCard}>
      <img src={imgSrc} alt={`${displayName}'s profile picture`} />

      <div className={styles.textSection}>
        <p className={styles["display-name"]}>{displayName}</p>
        <p className={styles["username"]}>@{username}</p>
      </div>
    </div>
  );
}
