import {  Input, Select } from "antd";
const { Option } = Select;
function Searchbox({ option, setOption, setInput }) {
  const selectOpt = () => {
    if (option === "user") {
      setOption("repo");
    } else setOption("user");
  };
  return (
    <div className="searchbox">
      <Input.Group compact>
        <Select
          onChange={selectOpt}
          defaultValue="User"
          style={{
            width: "30%",
          }}
        >
          <Option value="Users">Users</Option>
          <Option value="Repos">Repos</Option>
        </Select>
        <input type="text" onChange={(e) => setInput(e.target.value)} />
      </Input.Group>
    </div>
  );
}

export default Searchbox;
