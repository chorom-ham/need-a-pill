import React from "react";
import Text from "../../atoms/text";
import HomeButton from "../../atoms/Button/homeButton";
import DoctorIcon from "../../atoms/Button/icon/doctor";
import Col from "../../atoms/Col";
import styled, { css } from "styled-components";
import Link from "next/link";

function doctor() {
  return (
    <Col>
      <Link href="body-part-select">
        <a>
          <Row>
            <HomeButton>
              <DoctorIcon
                style={{ width: "5rem", height: "5rem" }}
                fill="white"
              ></DoctorIcon>
            </HomeButton>
          </Row>
        </a>
      </Link>
      <Row>
        <Text
          width="12rem"
          level={1.5}
          color=" #3446d4"
          fstyle="normal"
          weight={500}
          align="center"
        >
          I don’t know which medicine to take
        </Text>
      </Row>
    </Col>
  );
}

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 1rem;
`;

export default doctor;
