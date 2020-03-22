import React from "react";
import Button from "../../../atoms/Button/delete.js";
import axios from "axios";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

export default function deleteButton(props) {
  const router = useRouter();
  const state = useSelector(state => state.login);

  const handleClick = () => {
    if (confirm("Are you sure you want to delete this post?")) {
      if (props.email === state.email) {
        axios
          .delete(
            `https://needapill-server.herokuapp.com${router.query.category}/${router.query.id}`,
            { author_email: state.email }
          )
          .catch(function(error) {
            console.log(error);
          });
        router.push(
          `/article?category=${router.query.category}&id=${router.query.id}`
        );
      } else {
        alert("You cannot delete this post.");
      }
    }
  };

  return <Button onClick={handleClick}>...</Button>;
}
