import React from "react";

function Icon({ style, fill }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" style={style}>
      <defs>
        <clipPath id="a">
          <path
            fill="none"
            d="M12.181-19.166v11.685a.835.835 0 01-1.356.652L6.88-9.985H3.835A.835.835 0 013-10.819v-5.008a.835.835 0 01.835-.835H6.88l3.945-3.156a.835.835 0 011.356.652zm-1.669 1.737l-2.817 2.254a.835.835 0 01-.521.183h-2.5v3.339h2.5a.835.835 0 01.521.183l2.817 2.254zm4.034.561a.835.835 0 011.18 0 5.008 5.008 0 010 7.081.835.835 0 01-1.18 0 .835.835 0 010-1.18 3.339 3.339 0 000-4.721.835.835 0 010-1.18z"
            transform="translate(-3 20.002)"
          ></path>
        </clipPath>
        <clipPath id="b">
          <path
            fill="none"
            d="M0-3.969h20.031V-24H0z"
            transform="translate(0 24)"
          ></path>
        </clipPath>
        <clipPath id="c">
          <path
            fill="none"
            d="M0 0h25v25H0z"
            transform="translate(.5 -.5)"
          ></path>
        </clipPath>
        <clipPath id="d">
          <path
            fill="none"
            d="M3-6.646h14.189V-20H3z"
            transform="translate(-3 20)"
          ></path>
        </clipPath>
        <clipPath id="e">
          <path
            fill="none"
            d="M0-24h20.031v20.031H0z"
            clipRule="evenodd"
            transform="translate(0 24)"
          ></path>
        </clipPath>
      </defs>
      <path fill="none" d="M0 0h20v20H0z"></path>
      <g clipPath="url(#a)" transform="translate(2.504 3.339)">
        <g clip-path="url(#b)" transform="translate(-2.504 -3.337)">
          <g clip-path="url(#c)" transform="translate(-2.5 -2.502)">
            <g clip-path="url(#d)" transform="translate(5.004 5.84)">
              <path d="M-4.173-4.173h22.538v21.7H-4.173z"></path>
            </g>
            <g clip-path="url(#e)" transform="translate(2.5 2.502)">
              <g clip-path="url(#d)" transform="translate(2.504 3.339)">
                <path
                  fill={fill}
                  d="M-6.677-7.512h28.378v28.378H-6.677z"
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
