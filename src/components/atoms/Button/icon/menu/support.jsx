import React from "react";

export default ({ style, fill }) => (
  <svg xmlns="http://www.w3.org/2000/svg" style={style}>
    <defs>
      <clipPath id="a">
        <path
          d="M12.809-23a1.635 1.635 0 011.635 1.635h.817a2.452 2.452 0 012.452 2.452v11.445a2.452 2.452 0 01-2.452 2.452H5.452A2.452 2.452 0 013-7.468v-11.445a2.452 2.452 0 012.452-2.452h.818A1.635 1.635 0 017.9-23zM6.27-19.73h-.818a.817.817 0 00-.817.817v11.445a.817.817 0 00.817.817h9.809a.817.817 0 00.817-.817v-11.445a.817.817 0 00-.817-.817h-.817a1.635 1.635 0 01-1.635 1.63H7.9a1.635 1.635 0 01-1.63-1.63zm6.54-1.635H7.9v1.635h4.9z"
          transform="translate(-3 23)"
          fill="none"
        />
      </clipPath>
      <clipPath id="b">
        <path
          d="M0-4.381h19.619V-24H0z"
          transform="translate(0 24)"
          fill="none"
        />
      </clipPath>
      <clipPath id="c">
        <path transform="translate(.25 -.5)" fill="none" d="M0 0h22v27H0z" />
      </clipPath>
      <clipPath id="d">
        <path
          d="M3-5.016h14.714V-23H3z"
          transform="translate(-3 23)"
          fill="none"
        />
      </clipPath>
      <clipPath id="e">
        <path
          d="M0-24h19.619v19.619H0z"
          transform="translate(0 24)"
          fill="none"
          clipRule="evenodd"
        />
      </clipPath>
    </defs>
    <path fill="none" d="M0 0h20v20H0z" />
    <g transform="translate(2.452 1.199)" clipPath="url(#a)">
      <g transform="translate(-2.452 -.817)" clipPath="url(#b)">
        <g clipPath="url(#c)" transform="translate(-1.25 -2.881)">
          <g transform="translate(3.702 3.698)" clipPath="url(#d)">
            <path d="M-4.087-4.087h22.889v26.159H-4.087z" />
          </g>
          <g transform="translate(1.25 2.881)" clipPath="url(#e)">
            <g transform="translate(2.452 .817)" clipPath="url(#d)">
              <path d="M-6.54-4.905h27.794v27.794H-6.54z" fill={fill} />
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
);
