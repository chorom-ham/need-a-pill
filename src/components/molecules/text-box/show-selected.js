import React from "react";
import styled from "styled-components";
import Box from "../../atoms/text-box/show-selected";
import Text from "../../atoms/text";

export default function TextBox(props) {
  return (
    <Wrapper>
      <Box>
        <Text level={4} color="#3446d4" spacing="-0.048rem" align="left">
          Selected Category : {props.selected}
        </Text>
      </Box>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
