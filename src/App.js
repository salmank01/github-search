import { useEffect, useState } from "react";
import axios from "axios";
import Searchbox from "./components/Searchbox";
import RenderUserCards from "./components/RenderUserCards";
import "./App.css";

function App() {
  // Repo or User
  const [option, setOption] = useState("user");
  // search input
  const [input, setInput] = useState("");
  // response data
  const [resp, setResp] = useState();

  useEffect(() => {
    const getUsers = async () => {
      if (input !== "") {
        const response = await axios.get(
          `https://api.github.com/search/users?q=${input}`
        );
        setResp(response.data.items);
      }
    };
    const getRepos = async () => {
      if (input !== "") {
        const response = await axios.get(
          `https://api.github.com/search/repositories?q=${input}`
        );
        setResp(response.data.items);
      }
    };
    if (option === "user") {
      getUsers();
    } else {
      getRepos();
    }
  }, [input, option]);
  console.log(input);
  console.log(resp);
  return (
    <>
      <Searchbox option={option} setOption={setOption} setInput={setInput} />
      <RenderUserCards resp={resp} input={input} option={option} />
    </>
  );
}

export default App;
