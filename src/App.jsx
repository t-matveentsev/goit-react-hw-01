import Profile from "./Components/Profile/Profile";
import FriendList from "./Components/FriendList/FriendList";
import userData from "./assets/user.json";
import friendData from "./assets/friends.json";

export default function App() {
  return (
    <>
      {userData.map((user) => (
        <Profile key={user.id} {...user} />
      ))}
      <FriendList friends={friendData} />
    </>
  );
}
