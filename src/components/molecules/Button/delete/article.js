import React from "react";
import Button from "../../../atoms/Button/delete.js";
import axios from "axios";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

export default function deleteButton() {
  const router = useRouter();
  const state = useSelector(state => state.login);

  const handleClick = () => {
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
  };

  return <Button onClick={handleClick}>...</Button>;
}
