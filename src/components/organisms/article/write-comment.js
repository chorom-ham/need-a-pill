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

  const submit = () => {
    if (state.isSignedIn) {
      (axios.post(
        `https://needapill-server.herokuapp.com${router.query.category}/${router.query.id}/comment`
      ),
      { author: state.email, body: body }).catch(function(error) {
        console.log(error);
      });
      router.push(
        `/article?category=${router.query.category}&id=${router.query.id}`
      );
    } else alert("You must be logged in to write.");
  };

  return (
    <Wrapper>
      <Div>
        <div>
          <Profile>
            <Img src={state.profile_pic}></Img>
          </Profile>
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
      </Div>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  background-color: #fff;
`;

const Profile = styled.div`
  width: 2.8rem;
  height: 2.8rem;
  background-color: #999;
  border-radius: 1.4rem;
  margin-right: 0.8rem;
  overflow: hidden;
`;

const Form = styled.div`
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

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const Div = styled.div`
  margin: 1rem 2rem 1rem 2rem;
  padding: 0.6rem 1.2rem;
  width: 32rem;
  height: 4rem;
  background-color: #ececf0;
  border-radius: 0.8rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
`;
