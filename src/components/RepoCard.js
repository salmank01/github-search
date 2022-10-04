import { Avatar, Card, Button } from "antd";
import { EyeFilled } from "@ant-design/icons";
const { Meta } = Card;

const Repo = ({
  userURL,
  reposURL,
  name,
  avatarURL,
  description,
  language,
  visibility,
  watchers,
}) => {
  return (
    <>
      <Card
        style={{
          width: 370,
          height: 180,
          marginTop: 16,
        }}
      >
        <Meta
          avatar={<Avatar src={avatarURL} />}
          title={name}
          description={description}
        />
        <div className="repo-info">
          <div className="lang">{language}</div>
          <div className="visibility">{visibility}</div>
          <div className="watchers">
            <EyeFilled />
            {watchers}
          </div>
        </div>
        <div className="btns">
          <Button className="user-btn" type="primary" href={userURL}>
            View User
          </Button>
          <Button className="user-btn" type="primary" href={reposURL}>
            View Repo
          </Button>
        </div>
      </Card>
    </>
  );
};

export default Repo;
