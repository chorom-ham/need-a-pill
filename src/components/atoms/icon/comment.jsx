import React from "react";

function Icon({ style }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" style={style}>
      <defs>
        <clipPath id="a">
          <path
            fill="none"
            d="M8.833-8.368a3.75 3.75 0 01-.4 1.7 3.8 3.8 0 01-3.4 2.1A3.752 3.752 0 013.487-4.9l-2.127.712a.4.4 0 01-.506-.506l.709-2.127a3.75 3.75 0 01-.33-1.546 3.8 3.8 0 012.1-3.4 3.751 3.751 0 011.7-.4h.222a3.8 3.8 0 013.578 3.6z"
          ></path>
        </clipPath>
        <clipPath id="b">
          <path
            fill="none"
            d="M0-3.4h9.6V-13H0z"
            transform="translate(0 13)"
          ></path>
        </clipPath>
        <clipPath id="c">
          <path fill="none" d="M0 0h19.198v19.198H0z"></path>
        </clipPath>
        <clipPath id="d">
          <path
            fill="none"
            d="M0-13h9.6v9.6H0z"
            clipRule="evenodd"
            transform="translate(0 13)"
          ></path>
        </clipPath>
      </defs>
      <g clip-path="url(#a)" transform="translate(-.833 12.167)">
        <g clip-path="url(#b)" transform="translate(.033 -12.967)">
          <g clip-path="url(#c)" transform="translate(-4.8 -4.8)">
            <g clip-path="url(#b)" transform="translate(4.8 4.8)">
              <path d="M-4-4h17.6v17.599H-4z"></path>
            </g>
            <g clip-path="url(#d)" transform="translate(4.8 4.8)">
              <g clip-path="url(#b)">
                <path fill="#999" d="M0 0h9.6v9.6H0z"></path>
              </g>
            </g>
            <g clip-path="url(#d)" transform="translate(4.8 4.8)">
              <g clip-path="url(#b)">
                <path
                  fill="none"
                  stroke="rgba(150,150,150,0.26)"
                  strokeDasharray="2 2"
                  strokeWidth="2"
                  d="M0 0h9.6v9.6H0z"
                ></path>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

export default Icon;
