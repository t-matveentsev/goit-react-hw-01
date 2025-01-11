import clsx from "clsx";
import styles from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <img src={avatar} alt="avatar" />
      <p>{name}</p>
      <p className={clsx(isOnline ? styles.greenAccent : styles.redAccent)}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </>
  );
};

export default FriendListItem;
