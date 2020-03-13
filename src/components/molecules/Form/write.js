import React from "react";
import styled from "styled-components";
import DoneButton from "../Button/done";
import Camera from "../../atoms/Button/icon/camera";

export default function writeForm(props) {
  return (
    <Form name={props.name} action={props.action} method="POST">
      <TitleInput placeholder="Title" name="title"></TitleInput>
      <Input placeholder="Write down your article." name="body"></Input>
      <Label>
        <Camera
          style={{
            width: "2.4rem",
            height: "2.4rem"
          }}
          fill="#3446d4"
        ></Camera>
        <ImageInput type="file" name="image" accept="img/*"></ImageInput>
      </Label>
      <DoneButtonWrapper>
        <DoneButton></DoneButton>
      </DoneButtonWrapper>
    </Form>
  );
}

const Form = styled.form`
  padding: 0 2rem 0 2rem;
  display: flex;
  flex-direction: column;
`;
const TitleInput = styled.input`
  border: none;
  padding: 1.2rem 0 1.2rem 0;
  border-bottom: 0.1rem solid #ececf0;
  font-size: 1.2rem;
`;
const Input = styled.input`
  border: none;
  padding: 1.2rem 0 1.2rem 0;
  font-size: 1.2rem;
`;

const ImageInput = styled.input`
  border: none;
  padding: 1.2rem 0 1.2rem 0;
  opacity: 0;
`;

const Label = styled.label`
  position: absolute;
  left: 2rem;
  bottom: 2.4rem;
`;

const DoneButtonWrapper = styled.div`
  position: absolute;
  top: 4.6rem;
  right: 2rem;
`;
