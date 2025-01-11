import Profile from "./Components/Profile/Profile";
import FriendList from "./Components/FriendList/FriendList";
// import TransactionHistory from "./Components/TransactionHistory/TransactionHistory";

import userData from "./assets/user.json";
import friendsData from "./assets/friends.json";
// import transactionsData from "./assets/transaction.json";

export default function App() {
  return (
    <>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friendsData} />
      {/* <TransactionHistory items={transactionsData} /> */}
    </>
  );
}
