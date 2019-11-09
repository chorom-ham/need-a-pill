import React from "react";
import Text from "../../atoms/text";
import HomeButton from "../../atoms/Button/homeButton";
import PillIcon from "../../atoms/Button/icon/pill";
import Col from "../../atoms/Col";
import styled, { css } from "styled-components";
import Link from "next/link";

function pill() {
  return (
    <Col>
      <Link href="before-search">
        <a>
          <Wrapper>
            <HomeButton>
              <PillIcon
                style={{ width: "5rem", height: "5rem" }}
                fill="white"
              ></PillIcon>
            </HomeButton>
          </Wrapper>
        </a>
      </Link>
      <Wrapper>
        <Text
          width="12rem"
          level={1.5}
          color=" #3446d4"
          fstyle="normal"
          weight={500}
          align="center"
        >
          I already have the medicine and want information on it
        </Text>
      </Wrapper>
    </Col>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 1rem;
`;

export default pill;
