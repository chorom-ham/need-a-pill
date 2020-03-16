import React, { useState } from "react";
import styled from "styled-components";
import DoneButton from "../Button/done";
import Camera from "../../atoms/Button/icon/camera";

export default function writeForm(props) {
  const [imgBase64, setImgBase64] = useState(""); // 파일 base64
  const [imgFile, setImgFile] = useState(null);

  const handleChangeFile = event => {
    let reader = new FileReader();

    reader.onloadend = () => {
      // 2. 읽기가 완료되면 아래코드가 실행됩니다.
      const base64 = reader.result;
      if (base64) {
        setImgBase64(base64.toString().split(",")[1]); // 파일 base64 상태 업데이트
      }
    };
    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]); // 1. 파일을 읽어 버퍼에 저장합니다.
      setImgFile(event.target.files[0]); // 파일 상태 업데이트
    }
  };

  return (
    <>
      <Form name={props.name} action={props.action} method="POST">
        <Input type="text" value="email@naver.com" name="author_email"></Input>
        <Input value={imgBase64} name="image"></Input>
        <DoneButtonWrapper>
          <DoneButton></DoneButton>
        </DoneButtonWrapper>
      </Form>
      <Label>
        <Camera
          style={{
            width: "2.4rem",
            height: "2.4rem"
          }}
          fill="#3446d4"
        ></Camera>
        <ImageInput
          type="file"
          name="imgFile"
          id="imgFile"
          accept="img/*"
          onChange={handleChangeFile}
        ></ImageInput>
      </Label>
    </>
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
  opacity: 1;
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
