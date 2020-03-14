import React from "react";

function Icon({ style, fill }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" style={style} viewBox="0 0 24 24">
      <path
        fill={fill}
        d="M3 5a1 1 0 100 2h18a1 1 0 100-2H3zm0 6a1 1 0 100 2h18a1 1 0 100-2H3zm0 6a1 1 0 100 2h18a1 1 0 100-2H3z"
      ></path>
    </svg>
  );
}

export default Icon;
