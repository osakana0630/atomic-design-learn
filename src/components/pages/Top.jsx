import React, {useContext} from "react";
import styled from "styled-components";
import {SecondaryButton} from "../atoms/SecondaryButton";
import {useHistory} from "react-router-dom"
import {UserContext} from "../../providers/UserProvider";
import axios from "axios";

export const Top = () => {
  const history = useHistory();
  const {setUserInfo} = useContext(UserContext);

  const onClickAdmin = () => {
    setUserInfo({isAdmin: true});
    history.push("/users");
  };

  const onClickGeneral = () => {
    setUserInfo({isAdmin: false});
    history.push("/users");
  };

  const onClickFetchUsers = () => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res) => console.log(res.data))
      .catch((e)=> {
        console.log(e)
      })
  };

  const onClickFetchUser1 = () => {
    axios.get("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => console.log(res.data))
      .catch((e)=> {
        console.log(e)
      })
  };

  return (
    <SContainer>
      <h2>TOPページです</h2>
      <SecondaryButton onClick={onClickAdmin}>管理者</SecondaryButton>
      <SecondaryButton onClick={onClickGeneral}>一般ユーザー</SecondaryButton>
      <SecondaryButton onClick={onClickFetchUsers}>users</SecondaryButton>
      <SecondaryButton onClick={onClickFetchUser1}>id=1のuser</SecondaryButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;