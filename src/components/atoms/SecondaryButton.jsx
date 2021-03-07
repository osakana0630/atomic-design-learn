import styled from "styled-components";
import {BaseButton} from "./BaseButton";

export const SecondaryButton = (props) => {
  const {children, onClick} = props;
  return (
    <SButton onClick={onClick}>{children}</SButton>
  );
};

//コンポーネントに対してさらにスタイルを当てたいときは、下記のように記述する
const SButton = styled(BaseButton)`
  background-color: #11999e;
`