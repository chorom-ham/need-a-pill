import React from "react";
import styled from "styled-components";
import Text from "../../atoms/text";
import ImgHolder from "../../atoms/image-holder/profile";

export default function Profile() {
  return (
    <Wrapper>
      <ImgHolder></ImgHolder>
      <Text level={4} spacing="-0.036rem" color="#999999">
        Name
      </Text>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 0.8rem;
`;
