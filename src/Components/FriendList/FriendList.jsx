import styles from "./FriendList.module.css";
import clsx from "clsx";

const FriendList = ({ avatar, name, isOnline }) => {
  return (
    <li className={styles.item}>
      <img src={avatar} alt="" />
      <ul>
        <li>
          <p className={styles.name}>{name}</p>
          <p className={clsx(isOnline ? styles.greenAccent : styles.redAccent)}>
            {isOnline ? "Online" : "Offline"}
          </p>
        </li>
      </ul>
    </li>
  );
};

export default FriendList;
