import React from "react";
import styled from "styled-components";
import Header from "../src/components/organisms/Header/menuHeader";
import Posts from "../src/components/templates/post-list";

export default function Notice() {
  return (
    <>
      <Header headerText="Notice"></Header>
      <Posts></Posts>
    </>
  );
}
