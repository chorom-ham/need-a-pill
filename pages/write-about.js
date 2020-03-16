import React from "react";
import styled from "styled-components";
import Header from "../src/components/organisms/Header/writeHeader";
import Form from "../src/components/molecules/Form/write-about";

export default function About() {
  return (
    <>
      <Header></Header>
      <Form
        name="about"
        action="https://needapill-server.herokuapp.com/about"
      ></Form>
    </>
  );
}
