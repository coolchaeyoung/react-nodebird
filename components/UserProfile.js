import React, { useCallback } from "react";
import { Button, Card } from "antd";
import Avatar from "antd/lib/avatar/avatar";

const UserProfile = ({ setIsLoggedIn }) => {
  const onLogOut = useCallback(() => {
    setIsLoggedIn(false);
  }, []);
  return (
    <Card
      actions={[
        <div key="twit">
          짹짹
          <br />0
        </div>,
        <div key="followings">
          following
          <br />0
        </div>,
        <div key="followers">
          follower
          <br />0
        </div>,
      ]}
    >
      <Card.Meta avatar={<Avatar>CY</Avatar>} title="Chaeruru" />
      <Button onClick={onLogOut}>로그아웃</Button>
    </Card>
  );
};

export default UserProfile;
