import React from "react";
import Head from "next/head";
import AppLayout from "../components/AppLayout";
import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";

const profile = () => {
  const followingList = [
    { nickname: "CY" },
    { nickname: "Chaeruru" },
    { nickname: "KC" },
  ];
  const followerList = [
    { nickname: "CY" },
    { nickname: "Chaeruru" },
    { nickname: "KC" },
  ];
  return (
    <AppLayout>
      <Head>
        <title>내 프로필 | NodeBird</title>
      </Head>
      <NicknameEditForm />
      <FollowList header="Following List" data={followingList} />
      <FollowList header="Follower List" data={followerList} />
    </AppLayout>
  );
};

export default profile;
