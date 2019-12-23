import React from "react";

export default ({ style, fill }) => (
  <svg style={style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path
      fill={fill}
      d="M15 2c.6 0 1 .4 1 1s-.4 1-1 1H4c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h14c.6 0 1-.4 1-1v-7c0-.6.4-1 1-1s1 .4 1 1v7c0 1.7-1.3 3-3 3H4c-1.7 0-3-1.3-3-3V5c0-1.7 1.3-3 3-3h11zm6.3.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-11 11c-.4.4-1 .4-1.4 0l-3-3c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0l2.3 2.3L21.3 2.3z"
    />
  </svg>
);
