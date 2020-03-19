import React, { useState } from "react";
import styled from "styled-components";
import DoneButton from "../Button/done";
import Camera from "../../atoms/Button/icon/camera";
import { useSelector } from "react-redux";
import Router from "next/router";
import axios from "axios";

export default function writeForm() {
  const [imgBase64, setImgBase64] = useState(""); // 파일 base64
  const [imgFile, setImgFile] = useState(null);
  const email = useSelector(state => state.login.email);

  const postData = () => {
    axios.post("https://needapill-server.herokuapp.com/about", {
      author_email: { email },
      image: { imgBase64 }
    });
  };

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
      <Wrapper>
        <DoneButtonWrapper onClick={() => Router.back()}>
          <DoneButton onClick={postData}></DoneButton>
        </DoneButtonWrapper>
      </Wrapper>
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

const Wrapper = styled.div`
  padding: 0 2rem 0 2rem;
  display: flex;
  flex-direction: column;
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
