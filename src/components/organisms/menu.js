import React from "react";
import Link from "next/link";
import styled from "styled-components";
import About from "../atoms/Button/icon/menu/about";
import Notice from "../atoms/Button/icon/menu/notice";
import Support from "../atoms/Button/icon/menu/support";
import X from "../atoms/Button/icon/x";
import Text from "../atoms/text";

export default function Menu(props) {
  return (
    <>
      <Wrapper>
        <XButton onClick={props.buttonClick}>
          <X style={{ width: "2.4rem", height: "2.4rem" }} fill="#3446d4"></X>
        </XButton>
        <Link href="about">
          <a>
            <Tab>
              <About
                style={{ width: "2rem", height: "2rem", marginRight: "0.8rem" }}
                fill="#333"
              ></About>
              <Text level={5} weight={500} spacing="-0.056rem">
                About
              </Text>
            </Tab>
          </a>
        </Link>
        <Link href="notice">
          <a>
            <Tab>
              <Notice
                style={{ width: "2rem", height: "2rem", marginRight: "0.8rem" }}
                fill="#333"
              ></Notice>
              <Text level={5} weight={500} spacing="-0.056rem">
                Notice
              </Text>
            </Tab>
          </a>
        </Link>
        <Link href="support">
          <a>
            <Tab>
              <Support
                style={{ width: "2rem", height: "2rem", marginRight: "0.8rem" }}
                fill="#333"
              ></Support>
              <Text level={5} weight={500} spacing="-0.056rem">
                Support
              </Text>
            </Tab>
          </a>
        </Link>
      </Wrapper>
      <Span></Span>
    </>
  );
}

const Wrapper = styled.span`
  box-sizing: content-box;
  position: fixed;
  display: block;
  z-index: 1000;
  top: 0px;
  left: 0px;
  margin: 0px;
  width: 24rem;
  height: 100%;
  background-color: #fff;
  padding-top: 4rem;
`;

const Span = styled.span`
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  opacity: 1;
  top: 0px;
  right: 0px;
  margin: 0px;
`;

const Tab = styled.a`
  display: flex;
  width: 100%;
  height: 4.8rem;
  padding: 1.4rem 2rem 1.4rem 2rem;
  border: none;
  background-color: #fff;
  box-sizing: border-box;
  align-items: center;
  text-decoration: none;
`;

const XButton = styled.button`
  border: none;
  background-color: #fff;
  padding: 0 2rem 1.2rem 2rem;
`;
