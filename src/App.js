import { useEffect, useState } from "react";
import axios from "axios";
import Searchbox from "./components/Searchbox";
import UserCards from "./components/UserCards";
import "./App.css";

function App() {
  // Repo or User
  const [option, setOption] = useState("user");
  // search input
  const [input, setInput] = useState("salmank");
  // response data
  const [resp, setResp] = useState();
  // is data fetched?
  const [isFetched, setIsFetched] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        `https://api.github.com/search/users?q=${input}`
      );
      setResp(response.data.items);
    };

    getData();
  }, [input]);

  
  if (resp !== undefined) {
    setIsFetched(true);
  }
  console.log(resp);
  // return (
  //   <>
  //     <Searchbox option={option} setOption={setOption} />
  //   </>
  // );
}

export default App;

