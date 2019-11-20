import React, { useState } from "react";
import styled, { css } from "styled-components";
import Logo from "../atoms/icon/logo";
import Search from "../molecules/Form/search";
import ShowBodyPart from "../molecules/Button/show-body-part";
import BodyPartContainer from "../organisms/body-part-container";

export default function Home() {
  const [show, setShow] = useState(false);

  return (
    <Wrapper show={show}>
      <Logo
        style={{ width: "14.5rem", height: "2.84rem", margin: "0 0 2rem 0" }}
      ></Logo>
      <SearchWrapper>
        <Search></Search>
      </SearchWrapper>
      <ShowBodyPart
        show={show}
        onClick={() => {
          if (show) setShow(true);
          else setShow(false);
          console.log({ show });
          console.log("!!!!!!!");
        }}
      ></ShowBodyPart>

      {show && <BodyPartContainer></BodyPartContainer>}
    </Wrapper>
  );
}

const SearchWrapper = styled.div`
  margin-bottom: 3.2rem;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  background-color: #fff;
  ${props => css`
    ${props.show ? "top:5.16rem" : "top:13.5rem"}
  `}
`;
