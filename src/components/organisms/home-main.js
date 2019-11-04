import React from "react";
import Logo from "../atoms/icon/logo";
import PillButton from "../molecules/Button/pill";
import DoctorButton from "../molecules/Button/doctor";
import Row from "../atoms/Row";
import Col from "../atoms/Col";
import styled, { css } from "styled-components";

function homeMain() {
  return (
    <Col>
      <Wrapper>
        <Row>
          <Logo style={{ width: "15rem" }}></Logo>
        </Row>
      </Wrapper>
      <Row>
        <PillButton></PillButton>
        <DoctorButton></DoctorButton>
      </Row>
    </Col>
  );
}

const Wrapper = styled.div`
  padding: 1.6rem 0;
`;

export default homeMain;
