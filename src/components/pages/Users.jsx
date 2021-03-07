import React, {useContext} from "react";

import styled from "styled-components";
import {SearchInput} from "../molecules/SearchInput";
import {UserCard} from "../organisms/user/UserCard";
import {SecondaryButton} from "../atoms/SecondaryButton";
import {UserContext} from "../../providers/UserProvider";


const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `太郎${val}`,
    image: "https://source.unsplash.com/Hcfwew744z4",
    email: "user1@email.com",
    phone: "000-0000-0000",
    company: {
      name: "株式会社サンプル"
    },
    website: "https://sampleeeeeeee"
  }
});

export const Users = () => {
  const {userInfo, setUserInfo} = useContext(UserContext);
  const onClickSwitch = () => setUserInfo({isAdmin: !userInfo.isAdmin});

  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput/>
      <SecondaryButton onClick={onClickSwitch}>切り替え</SecondaryButton>
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user}/>
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;