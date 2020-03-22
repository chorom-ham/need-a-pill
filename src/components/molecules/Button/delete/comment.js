import React from "react";
import Button from "../../../atoms/Button/delete.js";
import styled from "styled-components";
import axios from "axios";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

export default function deleteButton(props) {
  const router = useRouter();
  const state = useSelector(state => state.login);

  const handleClick = () => {
    if (confirm("Are you sure you want to delete this comment?")) {
      if (props.email === state.email) {
        if (props.email === state.email) {
          axios
            .delete(
              `https://needapill-server.herokuapp.com${router.query.category}/${router.query.id}/comment/${props.id}`,
              { data: { author_email: state.email } }
            )
            .catch(function(error) {
              console.log(error);
            });
          router.push(
            `/article?category=${router.query.category}&id=${router.query.id}`
          );
        } else {
          alert("You cannot delete this comment.");
        }
      }
    }
  };

  return (
    <Div>
      <Button onClick={handleClick}>...</Button>
    </Div>
  );
}

const Div = styled.div`
  position: absolute;
  right: 2rem;
`;
