import { AutoComplete, Input, Select } from "antd";
import React, { useState } from "react";
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
        <AutoComplete
          style={{
            width: "70%",
          }}
          placeholder="Search.."
        />
      </Input.Group>
    </div>
  );
}

export default Searchbox;
