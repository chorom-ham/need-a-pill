import React from "react";
import styled from "styled-components";
import Text from "../../atoms/text";

export default function Logout() {
  return (
    <Wrapper>
      <Text level={4} weight={500} align="center" spacing="-0.048rem">
        Log out
      </Text>
    </Wrapper>
  );
}

const Wrapper = styled.button`
  width: 7.7rem;
  height: 2.4rem;
  border-radius: 1.4rem;
  border: solid 0.1rem #ececf0;
  background-color: #fff;
`;
