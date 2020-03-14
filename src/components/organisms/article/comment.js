import React from "react";
import styled from "styled-components";
import Text from "../../atoms/text";

export default function Comment() {
  return (
    <Wrapper>
      <Col>
        <Profile></Profile>
      </Col>
      <Col>
        <Text level={4} weight={500} spacing="-0.036rem">
          Name Name
        </Text>
        <Text level={4} spacing="-0.036rem">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          fermentum aliquam nibh at gravida.
        </Text>
        <Row>
          <Text level={3} color="#999">
            2020-20-20
          </Text>
          <Button>...</Button>
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
  justify-content: space-between;
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
  margin-left: 0.4rem;
`;

const Right = styled.div`
  display: flex;
  flex-dirction: row;
  position: absolute;
  right: 2rem;
`;
