import React from "react";
import styled from "styled-components";
import Icon from "../../atoms/icon/comment";
import Text from "../../atoms/text";

export default function commentNum(props) {
  return (
    <Wrapper>
      <Icon style={{ width: "0.8rem", height: "0.8rem" }}></Icon>
      <Text level={3} color="#999" spacing="-0.03rem">
        {props.num}
      </Text>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`;
