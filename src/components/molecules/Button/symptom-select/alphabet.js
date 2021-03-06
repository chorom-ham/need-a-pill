import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";
import Text from "../../../atoms/text";
import Box from "../../../atoms/Button/text/alphabet";

export default function alphabet(props) {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <Box
      isClicked={props.selected === props.alphabet}
      key={props.key}
      onClick={() => {
        props.setSelected(props.alphabet);
      }}
    >
      <Text align="center" spacing="-0.048rem" level="4" weight="bold">
        {props.alphabet}
      </Text>
    </Box>
  );
}
