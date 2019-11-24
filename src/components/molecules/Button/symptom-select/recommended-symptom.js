import React from "react";
import styled from "styled-components";
import Text from "../../../atoms/text";
import Box from "../../../atoms/Button/recommended-symptom";
import Right from "../../../atoms/Button/icon/chevron/right";
import Link from "next/link";

export default function symptom(props) {
  return (
    <Link href={`search-result2?keyword=${props.symptom}&page=2`}>
      <A>
        <Box key={props.key}>
          <Text color="#333" align="left" spacing="-0.048rem" level="4">
            {props.symptom}
          </Text>
          <Right
            style={{ width: "0.65rem", height: "1.1rem" }}
            fill="#3446d4"
          ></Right>
        </Box>
      </A>
    </Link>
  );
}

const A = styled.a`
  text-decoration: none;
`;
