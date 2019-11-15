import React from "react";
import Link from "next/link";
import styled, { css } from "styled-components";
import SearchIcon from "../../atoms/Button/icon/search";

function searchForm() {
  return (
    <Form>
      <Input type="text" name="keyword" placeholder="Enter drug name"></Input>
      <Link href="search-result">
        <Button type="submit">
          <a>
            <SearchIcon style={{ width: "2rem", height: "2rem " }}></SearchIcon>
          </a>
        </Button>
      </Link>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  margin: 0 auto 0 auto;
`;
const Input = styled.input`
  width: 31.2rem;
  height: 4.2rem;
  border-radius: 0.8rem;
  box-shadow: 0 0.4rem 0.8rem 0 #e0dfe7;
  background-color: white;
  border: none;
  padding: 0 1.6rem;
  box-sizing: border-box;
  letter-spacing: -0.05rem;
`;
const Button = styled.button`
  width: 2.4rem;
  height: 2.4rem;
  object-fit: contain;
  position: absolute;
  right: 3.5rem;
  border: none;
  background-color: transparent;
`;

export default searchForm;
