import { Avatar, Card, Button } from "antd";
const { Meta } = Card;

const User = ({ userURL, username, avatarURL }) => {
  return (
    <>
      <Card
        style={{
          width: 450,
          height: 200,
          marginTop: 16,
        }}
      >
        <Meta
          avatar={<Avatar src={avatarURL} />}
          title={username}
          description="This is the description"
        ></Meta>

        <Button className="user-btn" type="primary" href={userURL}>
          View more
        </Button>
      </Card>
    </>
  );
};

export default User;
