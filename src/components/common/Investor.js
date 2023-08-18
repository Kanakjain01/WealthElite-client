import React from "react";

const Investor = () => {
  return (
    <div>
      {/* <!----------------------------------- FIRST--------------------------- --> */}
      <div class="w-[100%] justify-center bg-slate-100 pb-2 pt-5 shadow-2xl lg:px-24 lg:pb-1 lg:pt-2 ">
        <img
          class="mx-4 w-44 lg:w-28"
          src="https://wealthelite.in/FPLogo/wealth-elite-logo.png"
          alt=""
        />
      </div>

      {/* <!---------------------------------- SECOND ----------------------------> */}

      <div class="bg-green-50 pb-2 pt-16 lg:shadow-inner lg:pb-12">
        <div class="mx-auto w-96 rounded-xl border-2 border-green-500 shadow-2xl shadow-green-800 lg:flex  lg:w-3/4 lg:-mt-8 lg:h-1/2 ">
          <div class="rounded-xl bg-slate-100 lg:w-[55%]  ">
            <img
              class=""
              src="https://wealthelite.in/website/dist/img/investor-login-img.webp"
              alt=""
            />
          </div>
          <div class="rounded-b-2xl bg-white pb-36 pt-32 lg:w-[45%] lg:pt-20 lg:pb-20  ">
            <div class="text-center ">
              <h1 class="text-3xl font-bold text-green-600 lg:text-2xl lg:font-semibold lg:-ml-32">
                Investor Login
              </h1>
            </div>
            <div class="mx-auto mt-7 w-52 lg:mt-5">
              <div class="flex w-52 border border-green-500 lg:w-72 lg:h-12 lg:-ml-10 ">
                <span class="inline-flex w-14 items-center border bg-green-100 px-3 text-gray-900 dark:text-gray-400 lg:w-11 ">
                  <svg
                    class="w-7 lg:w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                    <style>{/* svg{fill:#397d2b} */}</style>
                    <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
                  </svg>
                </span>
                <input
                  type="text"
                  id="website-admin"
                  class="block lg:text-left w-full min-w-0 flex-1 p-4 text-center text-lg text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="Username"
                />
              </div>
              <div class="flex w-52 border border-green-500 lg:w-72 lg:h-12 lg:-ml-10 ">
                <span class="inline-flex w-14 items-center border bg-green-100 px-3 text-gray-900 dark:text-gray-400 lg:w-11 ">
                  <svg
                    class="w-7 lg:w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                    <style>{/* svg{fill:#248a2f} */}</style>
                    <path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" />
                  </svg>
                </span>
                <input
                  type="text"
                  id="website-admin"
                  class="block w-full lg:text-left min-w-0 flex-1 p-4 text-center text-lg text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="Password"
                />
              </div>
            </div>
            <div class="mx-6 mt-7 flex w-[100%] justify-between px-14 lg:px-24 lg:-ml-0">
              <div class="mb-6 flex w-[45%] items-start">
                <div class="flex h-5 items-center">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    class="focus:ring-3 h-4 w-4 cursor-pointer rounded border border-gray-300 bg-gray-50 focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
                    required
                  />
                </div>
                <label
                  for="remember"
                  class="ml-2 cursor-pointer font-medium lg:text-sm"
                >
                  Remember me
                </label>
              </div>
              <div class="w-[45%] cursor-pointer">
                <h1 class="font-medium text-green-600 lg:text-sm">
                  Forgot Password ?
                </h1>
              </div>
            </div>
            <div class="mx-20 mt-3 w-24 rounded bg-green-600 py-3 text-center lg:w-16 lg:py-2 lg:mx-24 ">
              <button class="text-2xl text-white lg:text-base">Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Investor;
