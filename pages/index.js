import React, { useState } from "react";
import Head from "next/head";
import Header from "../src/components/organisms/Header/homeHeader";
import HomeComponents from "../src/components/templates/home";
import Footer from "../src/components/organisms/footer";
import styled, { css } from "styled-components";
import Popup from "../src/components/organisms/popup";
import Menu from "../src/components/organisms/menu";

export default function Home() {
  const [show, setShow] = useState(false);

  return (
    <Wrapper>
      <div>
        <Popup />
      </div>
      {show && (
        <Menu
          buttonClick={() => {
            setShow(false);
          }}
        ></Menu>
      )}
      <Header
        buttonClick={() => {
          setShow(true);
        }}
      ></Header>
      <HomeComponents></HomeComponents>
      <Footer></Footer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
  min-height: 100%;
  margin-top: 0;
`;
