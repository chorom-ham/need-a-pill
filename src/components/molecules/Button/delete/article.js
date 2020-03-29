import React from "react";
import Button from "../../../atoms/Button/delete.js";
import axios from "axios";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import dotenv from "dotenv";

dotenv.config();

export default function deleteButton(props) {
  const router = useRouter();
  const state = useSelector(state => state.login);

  const handleClick = () => {
    if (confirm("Are you sure you want to delete this post?")) {
      if (props.email === state.email) {
        axios
          .delete(
            `${process.env.API_HOST}${router.query.category}/${router.query.id}`,
            { data: { author_email: state.email } }
          )
          .catch(function(error) {
            console.log(error);
          });
        router.push(`${router.query.category}`);
      } else {
        alert("You cannot delete this post.");
      }
    }
  };

  return <Button onClick={handleClick}>...</Button>;
}
