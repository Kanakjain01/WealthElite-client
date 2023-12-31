import React from "react";

const Navbar = () => {
  return (
    <div>
      <div class="flex w-[100%] justify-around lg:w-[100%] ">
        <div class="mt-5 w-[55%]">
          <img
            class="w-36 lg:w-28"
            src="https://wealthelite.in/FPLogo/wealth-elite-logo.png"
            alt=""
          />
        </div>
        <div class="mt-10 flex h-12 w-[35%] hover:text-white hover:fill-white justify-evenly rounded-full border-2 border-black py-2 lg:h-9 lg:w-[10%] lg:py-1 cursor-pointer hover:bg-blue-900">
          <div class="mt-1">
            <svg
              class="w-5 fill-black lg:w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
              <style>{/* svg{fill:#0a0a0b} */}</style>
              <path d="M543.8 287.6c17 0 32-14 32-32.1c1-9-3-17-11-24L512 185V64c0-17.7-14.3-32-32-32H448c-17.7 0-32 14.3-32 32v36.7L309.5 7c-6-5-14-7-21-7s-15 1-22 8L10 231.5c-7 7-10 15-10 24c0 18 14 32.1 32 32.1h32v69.7c-.1 .9-.1 1.8-.1 2.8V472c0 22.1 17.9 40 40 40h16c1.2 0 2.4-.1 3.6-.2c1.5 .1 3 .2 4.5 .2H160h24c22.1 0 40-17.9 40-40V448 384c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v64 24c0 22.1 17.9 40 40 40h24 32.5c1.4 0 2.8 0 4.2-.1c1.1 .1 2.2 .1 3.3 .1h16c22.1 0 40-17.9 40-40V455.8c.3-2.6 .5-5.3 .5-8.1l-.7-160.2h32z" />
            </svg>
          </div>
          <div>
            <h1 class=" lg:text-sm">Go To Home</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
