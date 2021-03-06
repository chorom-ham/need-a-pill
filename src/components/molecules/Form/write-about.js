import React, { useState } from "react";
import styled from "styled-components";
import Camera from "../../atoms/Button/icon/camera";
import { useSelector } from "react-redux";
import Router from "next/router";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export default function writeForm() {
  const [imgBase64, setImgBase64] = useState(""); // 파일 base64
  const [imgFile, setImgFile] = useState(null);
  const email = useSelector(state => state.login.email);

  const postData = () => {
    if (imgBase64 != "") {
      axios
        .post(`${process.env.API_HOST}/about`, {
          author_email: email,
          image: imgBase64
        })
        .catch(function(error) {
          console.log(error);
        });
      Router.back();
    }
  };

  const handleChangeFile = event => {
    let reader = new FileReader();
    reader.onloadend = () => {
      // 2. 읽기가 완료되면 아래코드가 실행됩니다.
      const base64 = reader.result;
      if (base64) {
        setImgBase64(base64.toString()); // 파일 base64 상태 업데이트
      }
    };
    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]); // 1. 파일을 읽어 버퍼에 저장합니다.
      setImgFile(event.target.files[0]); // 파일 상태 업데이트
    }
  };

  return (
    <Wrapper>
      <DoneButton onClick={postData}>Done</DoneButton>
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
    </Wrapper>
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

const DoneButton = styled.button`
  width: 5.9rem;
  height: 2.4rem;
  border-radius: 1.2rem;
  border: none;
  background-color: #3446d4;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  font-weight: bold;
  color: #fff;
  position: absolute;
  top: 4.6rem;
  right: 2rem;
`;
