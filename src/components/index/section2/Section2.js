import React from "react";

const Section2 = () => {
  return (
    <div class="sticky pt-5 flex justify-evenly pb-5 opacity-90 bg-slate-100 shadow-2xl lg:sticky lg:pb-3 lg:bg-slate-100 lg:shadow-slate-300 lg:shadow-xl">
      <div class="w-[45%]">
        <img
          class="w-40 lg:w-32"
          src="https://wealthelite.in/FPLogo/wealth-elite-logo.png"
          alt=""
        />
      </div>
      <div class="ml-36 mt-6 lg:hidden">
        <svg
          class="h-8"
          xmlns="http://www.w3.org/2000/svg"
          fill="#0f0f10;"
          viewBox="0 0 448 512"
        >
          {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
          {/* <style>
          svg {
            fill: #0f0f10;
          }
        </style> */}
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
        </svg>
      </div>
    </div>
  );
};

export default Section2;
