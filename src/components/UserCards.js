// // Rendering the user cards with fetched or unfetched data
// import UserCard from "./UserCard";

// function UserCards({ isFetched, resp }) {
//   if (isFetched) {
//     const cards = resp.map((user) => {
//       <UserCard
//         isFetched={isFetched}
//         avatarURL={user.avatar_url}
//         username={user.login}
//         userURL={user.html_url}
//       />;
//       return <div className="cards-wrapper">{cards}</div>;
//     });
//   } else {
//     return <UserCard isFetched={false} />;
//   }
// }

// export default UserCards;
