// Rendering the user cards with fetched or unfetched data
import UserCard from "./UserCard";
import RepoCard from "./RepoCard";

function RenderUserCards({ resp, input, option }) {
  if (input === "") return <h1>Type something</h1>;
  else if (resp === undefined && input !== "") {
    return <h1>Data still loading...</h1>;
  } else if (resp !== undefined) {
    if (option === "user") {
      const userCards = resp.map((user) => (
        <UserCard
          avatarURL={user.avatar_url}
          username={user.login}
          userURL={user.html_url}
        />
      ));
      return <ul>{userCards}</ul>;
    } // if client is searching for repos
    else if (option === "repo") {
      const repoCards = resp.map((repo) => (
        <RepoCard
          userURL={repo.owner.html_url}
          name={repo.name}
          reposURL={repo.html_url}
          avatarURL={repo.owner.avatar_url}
          description={repo.description}
          language={repo.language}
          visibility={repo.visibility}
          watchers={repo.watchers_count}
        />
      ));
      return <ul>{repoCards}</ul>;
    }
  }
}

export default RenderUserCards;
