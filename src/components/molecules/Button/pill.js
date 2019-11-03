import React from "react";
import Text from "../../atoms/text";
import HomeButton from "../../atoms/Button/homeButton";
import PillIcon from "../../atoms/Button/icon/pill";
import Row from "../../atoms/Row";
import Col from "../../atoms/Col";
import styled, { css } from "styled-components";
import Link from "next/link";

function pill() {
  return (
    <Wrapper>
      <Col>
        <Link href="before-search">
          <a>
            <Row>
              <HomeButton>
                <PillIcon
                  style={{ width: "5rem", height: "5rem" }}
                  fill="white"
                ></PillIcon>
              </HomeButton>
            </Row>
          </a>
        </Link>
        <Row>
          <Text
            width="12rem"
            level={3}
            color=" #3446d4"
            fstyle="normal"
            weight={500}
          >
            I already have the medicine and want information on it
          </Text>
        </Row>
      </Col>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 0 0.5rem;
`;

export default pill;
