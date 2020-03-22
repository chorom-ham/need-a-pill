import React from "react";
import styled from "styled-components";
import Text from "../../atoms/text";
import Delete from "../../molecules/Button/delete/comment";
import { useSelector } from "react-redux";

export default function Comment(props) {
  const state = useSelector(state => state.login);

  return (
    <Wrapper>
      <Col>
        <Profile>
          <Img src={props.img}></Img>
        </Profile>
      </Col>
      <Col>
        <Text level={4} weight={500} spacing="-0.036rem">
          {props.name}
        </Text>
        <Text level={4} spacing="-0.036rem">
          {props.body}
        </Text>
        <Row>
          <Text level={3} color="#999">
            {props.time}
          </Text>
          {props.email === state.email && <Delete></Delete>}
        </Row>
      </Col>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem 2rem 1rem 2rem;
  border-bottom: 0.1rem solid #ececef;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
`;

const Profile = styled.div`
  width: 3.2rem;
  height: 3.2rem;
  background-color: #ececf0;
  border-radius: 1.6rem;
  margin-right: 0.8rem;
  overflow: hidden;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: row;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-dirction: column;
`;

const Button = styled.button`
  font-size: 1rem;
  color: #999;
  background-color: transparent;
  align-items: center;
  justify-content: center;
  border: none;
  position: absolute;
  right: 1.6rem;
`;

const Right = styled.div`
  display: flex;
  flex-dirction: row;
  position: absolute;
  right: 2rem;
`;
