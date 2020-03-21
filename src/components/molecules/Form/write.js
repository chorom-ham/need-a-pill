import React, { useState } from "react";
import styled from "styled-components";
import Camera from "../../atoms/Button/icon/camera";
import axios from "axios";
import Router, { useRouter } from "next/router";
import { useSelector } from "react-redux";

export default function writeForm() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [imgBase64, setImgBase64] = useState(""); // 파일 base64
  const [imgFile, setImgFile] = useState(null);
  const email = useSelector(state => state.login.email);

  const postData = () => {
    axios
      .post(`https://needapill-server.herokuapp.com${router.query.category}`, {
        title: title,
        body: body,
        author_email: email,
        image: imgBase64
      })
      .catch(function(error) {
        console.log(error);
      });
    router.push(`${router.query.category}`);
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
      <TitleInput
        placeholder="Title"
        name="title"
        onChange={e => {
          setTitle(e.target.value);
        }}
      ></TitleInput>
      <Input
        placeholder="Write down your article."
        name="body"
        onChange={e => {
          setBody(e.target.value);
        }}
      ></Input>
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
      <DoneButton onClick={postData}>Done</DoneButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
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
const Input = styled.textarea`
  border: none;
  padding: 1.2rem 0 1.2rem 0;
  font-size: 1.2rem;
  height: 40rem;
  font-family: "Noto Sans KR", sans-serif;
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
