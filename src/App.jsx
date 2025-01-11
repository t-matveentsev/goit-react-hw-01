import Profile from "./Components/Profile/Profile";
import FriendList from "./Components/FriendList/FriendList";
import userData from "./assets/user.json";
import friendsData from "./assets/friends.json";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <div className={styles.container}>
        <div>
          {userData.map((user) => (
            <Profile key={user.id} {...user} />
          ))}
        </div>
        <div>
          <ul className={styles.wrapper}>
            {friendsData.map((friend) => (
              <FriendList key={friend.id} {...friend} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
