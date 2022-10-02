// import {
//   EditOutlined,
//   EllipsisOutlined,
//   SettingOutlined,
// } from "@ant-design/icons";
// import { Avatar, Card, Switch, Button } from "antd";
// import React, { useState } from "react";
// const { Meta } = Card;

// const User = ({ isFetched, userURL, username, avatarURL }) => {
//   const [loading, setLoading] = useState(true);
//   if(isFetched) {
//     setLoading(false)
//   }

//   // const onChange = (checked) => {
//   //   setLoading(!checked);
//   // };

//   return (
//     <>
//     {/* <Switch checked={!loading} onChange={onChange} /> */}

//       <Card
//         style={{
//           width: 450,
//           height: 150,
//           marginTop: 16,
//         }}
//         loading={loading}
//       >
//         <Meta
//           avatar={<Avatar src={avatarURL} />}
//           title={username}
//           description="This is the description"
//         />
//         <Button className="user-btn" type="primary" href={userURL}>
//           View more
//         </Button>
//       </Card>
//     </>
//   );
// };

// export default User;
