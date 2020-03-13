import React from "react";
import styled from "styled-components";
import Text from "../../atoms/text";
import Profile from "../../molecules/brief-post/profile";

export default function Title() {
  return (
    <Wrapper>
      <Text level={4} spacing="-0.036rem" color="#333">
        Title Title Title
      </Text>
      <Bottom>
        <Profile></Profile>
        <Right>
          <Text level={3} color="#999">
            2020-20-20
          </Text>
          <Button>...</Button>
        </Right>
      </Bottom>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 1.2rem 0 1.2rem 0;
  border-bottom: 0.1rem solid #ececf0;
`;

const Bottom = styled.div`
  margin-top: 0.4rem;
  display: flex;
  flex-dirction: row;
`;

const Button = styled.button`
  font-size: 1rem;
  color: #999;
  background-color: transparent;
  align-items: center;
  justify-content: center;
  border: none;
  margin-left: 0.4rem;
`;

const Right = styled.div`
  display: flex;
  flex-dirction: row;
  position: absolute;
  right: 2rem;
`;
