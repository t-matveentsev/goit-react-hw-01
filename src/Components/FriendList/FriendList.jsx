import styles from "./FriendList.module.css";
import FriendListItem from "../FriendListItem/FriendListItem";

export default function FriendList({ friends }) {
  return (
    <ul className={styles.wrapper}>
      {friends.map((friend) => (
        <li key={friend.id} className={styles.item}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}
