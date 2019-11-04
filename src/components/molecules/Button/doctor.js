import React from "react";
import Text from "../../atoms/text";
import HomeButton from "../../atoms/Button/homeButton";
import DoctorIcon from "../../atoms/Button/icon/doctor";
import Row from "../../atoms/Row";
import Col from "../../atoms/Col";
import styled, { css } from "styled-components";
import Link from "next/link";

function doctor() {
  return (
    <Wrapper>
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
            level={3}
            color=" #3446d4"
            fstyle="normal"
            weight={500}
          >
            I don’t know which medicine to take
          </Text>
        </Row>
      </Col>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 0 0.5rem;
`;

export default doctor;
