import React from "react";
import styled from "styled-components";
import Header from "../src/components/organisms/Header/menuHeader";
import Post from "../src/components/templates/article";

export default function Article() {
  return (
    <>
      {
        //이후 어디서 넘어왔는지 queryString으로 헤더 텍스트 변경
      }
      <Header headerText="Support"></Header>
      <Post></Post>
    </>
  );
}
