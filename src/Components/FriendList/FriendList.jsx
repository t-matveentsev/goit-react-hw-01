import styles from "./FriendList.module.css";
import clsx from "clsx";

const FriendList = ({ avatar, name, isOnline }) => {
  return (
    <li className={styles.item}>
      <img src={avatar} alt="" />
      <p>{name}</p>
      <p
        className={clsx(
          isOnline ? styles["green-accent"] : styles["red-accent"]
        )}
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </li>
  );
};

export default FriendList;
