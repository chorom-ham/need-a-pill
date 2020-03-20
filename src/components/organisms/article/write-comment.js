import React, { useState } from "react";
import styled from "styled-components";
import Up from "../../atoms/Button/icon/comment-up";
import { useSelector } from "react-redux";
import axios from "axios";
import { useRouter } from "next/router";

export default function Comment() {
  const state = useSelector(state => state.login);
  const router = useRouter();
  const [body, setBody] = useState("");

  const submit = () =>
    (axios.post(
      `https://needapill-server.herokuapp.com${router.query.category}/${router.query.id}/comment`
    ),
    { author: state.email, body: body }).catch(function(error) {
      console.log(error);
    });

  return (
    <Wrapper>
      <div>
        <Profile name={state.name} image={state.profile_pic}></Profile>
      </div>
      <Form>
        <Input
          type="text"
          placeholder="Please write down your comment."
          onChange={e => setBody(e.target.value)}
        ></Input>
        <Submit onClick={submit}>
          <Up fill="#fff" style={{ width: "0.93rem", height: "1.2rem" }}></Up>
        </Submit>
      </Form>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  margin: 1rem 2rem 1rem 2rem;
  padding: 0.6rem 1.2rem;
  width: 32rem;
  height: 4rem;
  background-color: #ececf0;
  border-radius: 0.8rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
`;

const Profile = styled.div`
  width: 2.8rem;
  height: 2.8rem;
  background-color: #999;
  border-radius: 1.4rem;
  margin-right: 0.8rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: row;
`;

const Input = styled.input`
  width: 23rem;
  background-color: transparent;
  border: none;
`;

const Submit = styled.button`
  display: flex;
  width: 2.4rem;
  height: 2.4rem;
  background-color: #3446d4;
  border-radius: 1.2rem;
  align-items: center;
  justify-content: center;
  border: none;
`;
