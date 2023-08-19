import React from "react";

const Section4 = () => {
  return (
    <div class="mt-52 lg:mt-5 lg:pt-16 lg:bg-slate-100 lg:pb-36">
      <div class="text-center">
        <h1 class="text-4xl font-bold lg:text-3xl">Features</h1>
      </div>
      <div class="mt-20 lg:flex lg:w-[100%] lg:justify-evenly lg:mt-7">
        <div class="mt-6 lg:w-[5%]">
          <div class="mx-auto w-20 rounded-lg border-2 border-blue-900 bg-slate-100 py-5 lg:w-14 lg:py-3 lg:border-slate-200 lg:bg-slate-200 lg:hover:fill-blue-800 lg:hover:border-blue-800 cursor-pointer">
            <svg
              fill="#063d9d;"
              class="lg:fill-slate-400 mx-auto w-8 lg:w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
              <style>
                {/* svg {
              
            } */}
              </style>
              <path d="M345 39.1L472.8 168.4c52.4 53 52.4 138.2 0 191.2L360.8 472.9c-9.3 9.4-24.5 9.5-33.9 .2s-9.5-24.5-.2-33.9L438.6 325.9c33.9-34.3 33.9-89.4 0-123.7L310.9 72.9c-9.3-9.4-9.2-24.6 .2-33.9s24.6-9.2 33.9 .2zM0 229.5V80C0 53.5 21.5 32 48 32H197.5c17 0 33.3 6.7 45.3 18.7l168 168c25 25 25 65.5 0 90.5L277.3 442.7c-25 25-65.5 25-90.5 0l-168-168C6.7 262.7 0 246.5 0 229.5zM144 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
            </svg>
          </div>
          <div class="mt-4 lg:mt-2">
            <h1 class="text-center text-base font-bold text-black lg:text-xs">
              White Label
            </h1>
          </div>
        </div>
        {/* <!-- <div class="mt-6 lg:w-[5%]">
        <div class="mx-52 w-24 rounded-lg border-2 border-blue-600 bg-slate-100 py-6 lg:w-14 lg:py-3">
          <svg class="mx-6 w-10 lg:mx-4 lg:w-6" fill="#517ecd" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <style>
              
            </style>
            <path d="M384 336H192c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16l140.1 0L400 115.9V320c0 8.8-7.2 16-16 16zM192 384H384c35.3 0 64-28.7 64-64V115.9c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1H192c-35.3 0-64 28.7-64 64V320c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H256c35.3 0 64-28.7 64-64V416H272v32c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192c0-8.8 7.2-16 16-16H96V128H64z" />
          </svg>
        </div>
        <div class="mt-4">
          <h1 class="mr-2 text-center text-base font-bold text-black">Multi-Asset</h1>
        </div>
      </div>
      <div class="mt-6 lg:w-[5%]">
        <div class="mx-52 w-24 rounded-lg border-2 border-blue-600 bg-slate-100 py-6 lg:w-14 lg:py-3">
          <svg class="mx-6 w-10 lg:mx-4 lg:w-6" fill="#708ec2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <style>
              
            </style>
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zm-312 8v64c0 13.3 10.7 24 24 24s24-10.7 24-24l0-64c0-13.3-10.7-24-24-24s-24 10.7-24 24zm80-96V280c0 13.3 10.7 24 24 24s24-10.7 24-24V120c0-13.3-10.7-24-24-24s-24 10.7-24 24zm80 64v96c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
          </svg>
        </div>
        <div class="mt-4">
          <h1 class="mr-2 text-center text-base font-bold text-black">Portfolio Analysis</h1>
        </div>
      </div>
      <div class="mt-6 lg:w-[5%]">
        <div class="mx-52 w-24 rounded-lg border-2 border-blue-600 bg-slate-100 py-6 lg:w-14 lg:py-3">
          <svg class="mx-6 w-10 lg:mx-4 lg:w-6" fill="#688ed4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
            <style>
              
            </style>
            <path d="M96 96V320c0 35.3 28.7 64 64 64H576c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H160c-35.3 0-64 28.7-64 64zm64 160c35.3 0 64 28.7 64 64H160V256zM224 96c0 35.3-28.7 64-64 64V96h64zM576 256v64H512c0-35.3 28.7-64 64-64zM512 96h64v64c-35.3 0-64-28.7-64-64zM288 208a80 80 0 1 1 160 0 80 80 0 1 1 -160 0zM48 120c0-13.3-10.7-24-24-24S0 106.7 0 120V360c0 66.3 53.7 120 120 120H520c13.3 0 24-10.7 24-24s-10.7-24-24-24H120c-39.8 0-72-32.2-72-72V120z" />
          </svg>
        </div>
        <div class="mt-4">
          <h1 class="mr-2 text-center text-base font-bold text-black">Online ATM</h1>
        </div>
      </div>
      <div class="mt-6 lg:w-[5%]">
        <div class="mx-52 w-24 rounded-lg border-2 border-blue-600 bg-slate-100 py-6 lg:w-14 lg:py-3">
          <svg class="mx-6 w-10 lg:mx-4 lg:w-6" fill="#5381d0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <style>
              
            </style>
            <path d="M304 240V16.6c0-9 7-16.6 16-16.6C443.7 0 544 100.3 544 224c0 9-7.6 16-16.6 16H304zM32 272C32 150.7 122.1 50.3 239 34.3c9.2-1.3 17 6.1 17 15.4V288L412.5 444.5c6.7 6.7 6.2 17.7-1.5 23.1C371.8 495.6 323.8 512 272 512C139.5 512 32 404.6 32 272zm526.4 16c9.3 0 16.6 7.8 15.4 17c-7.7 55.9-34.6 105.6-73.9 142.3c-6 5.6-15.4 5.2-21.2-.7L320 288H558.4z" />
          </svg>
        </div>
        <div class="mt-4">
          <h1 class="mr-2 text-center text-base font-bold text-black">Portfolio Re-balancing</h1>
        </div>
      </div>
  
      <div class="mt-6 lg:w-[5%]">
        <div class="mx-52 w-24 rounded-lg border-2 border-blue-600 bg-slate-100 py-6 lg:w-14 lg:py-3">
          <img class="mx-6 w-10 lg:mx-4 lg:w-6" src="https://cdn-icons-png.flaticon.com/512/1657/1657671.png" alt="" />
        </div>
        <div class="mt-4">
          <h1 class="mr-2 text-center text-base font-bold text-black">Goal Tracker</h1>
        </div>
      </div>
      <div class="mt-6 lg:w-[5%]">
        <div class="mx-52 w-24 rounded-lg border-2 border-blue-600 bg-slate-100 py-6 lg:w-14 lg:py-3">
          <img class="mx-6 w-10 lg:mx-4 lg:w-6" src="https://cdn-icons-png.flaticon.com/512/10787/10787126.png" alt="" />
        </div>
        <div class="mt-4">
          <h1 class="mr-2 text-center text-base font-bold text-black">Financial Planning</h1>
        </div>
      </div>
      <div class="mt-6 lg:w-[5%]">
        <div class="mx-52 w-24 rounded-lg border-2 border-blue-600 bg-slate-100 py-6 lg:w-14 lg:py-3">
          <svg class="mx-6 w-10 lg:mx-4 lg:w-6" fill="#628cd5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <style>
              
            </style>
            <path d="M48 256C48 141.1 141.1 48 256 48c63.1 0 119.6 28.1 157.8 72.5c8.6 10.1 23.8 11.2 33.8 2.6s11.2-23.8 2.6-33.8C403.3 34.6 333.7 0 256 0C114.6 0 0 114.6 0 256v40c0 13.3 10.7 24 24 24s24-10.7 24-24V256zm458.5-52.9c-2.7-13-15.5-21.3-28.4-18.5s-21.3 15.5-18.5 28.4c2.9 13.9 4.5 28.3 4.5 43.1v40c0 13.3 10.7 24 24 24s24-10.7 24-24V256c0-18.1-1.9-35.8-5.5-52.9zM256 80c-19 0-37.4 3-54.5 8.6c-15.2 5-18.7 23.7-8.3 35.9c7.1 8.3 18.8 10.8 29.4 7.9c10.6-2.9 21.8-4.4 33.4-4.4c70.7 0 128 57.3 128 128v24.9c0 25.2-1.5 50.3-4.4 75.3c-1.7 14.6 9.4 27.8 24.2 27.8c11.8 0 21.9-8.6 23.3-20.3c3.3-27.4 5-55 5-82.7V256c0-97.2-78.8-176-176-176zM150.7 148.7c-9.1-10.6-25.3-11.4-33.9-.4C93.7 178 80 215.4 80 256v24.9c0 24.2-2.6 48.4-7.8 71.9C68.8 368.4 80.1 384 96.1 384c10.5 0 19.9-7 22.2-17.3c6.4-28.1 9.7-56.8 9.7-85.8V256c0-27.2 8.5-52.4 22.9-73.1c7.2-10.4 8-24.6-.2-34.2zM256 160c-53 0-96 43-96 96v24.9c0 35.9-4.6 71.5-13.8 106.1c-3.8 14.3 6.7 29 21.5 29c9.5 0 17.9-6.2 20.4-15.4c10.5-39 15.9-79.2 15.9-119.7V256c0-28.7 23.3-52 52-52s52 23.3 52 52v24.9c0 36.3-3.5 72.4-10.4 107.9c-2.7 13.9 7.7 27.2 21.8 27.2c10.2 0 19-7 21-17c7.7-38.8 11.6-78.3 11.6-118.1V256c0-53-43-96-96-96zm24 96c0-13.3-10.7-24-24-24s-24 10.7-24 24v24.9c0 59.9-11 119.3-32.5 175.2l-5.9 15.3c-4.8 12.4 1.4 26.3 13.8 31s26.3-1.4 31-13.8l5.9-15.3C267.9 411.9 280 346.7 280 280.9V256z" />
          </svg>
        </div>
        <div class="mt-4">
          <h1 class="mr-2 text-center text-base font-bold text-black lg:mx-52 lg:text-sm">Video KYC</h1>
        </div>
      </div>
      <div class="mt-6 lg:w-[5%]">
        <div class="mx-52 w-24 rounded-lg border-2 border-blue-600 bg-slate-100 py-6 lg:w-14 lg:py-3">
          <svg class="mx-6 w-10 lg:mx-4 lg:w-6" fill="#608ad2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <style>
              
            </style>
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
          </svg>
        </div>
        <div class="mt-4">
          <h1 class="mr-2 text-center text-base font-bold text-black lg:mx-52 lg:text-sm">Research</h1>
        </div>
      </div>
      <div class="mt-6 lg:w-[5%]">
        <div class="mx-52 w-24 rounded-lg border-2 border-blue-600 bg-slate-100 py-6 lg:w-14 lg:py-3">
          <img class="mx-6 w-10 lg:mx-4 lg:w-6" src="https://cdn-icons-png.flaticon.com/512/2709/2709800.png" alt="" />
        </div>
        <div class="mt-4">
          <h1 class="mr-2 text-center text-base font-bold text-black lg:mx-52 lg:text-sm">Online Transaction</h1>
        </div>
      </div> --> */}
      </div>

      <div class="mt-12 lg:flex lg:mt-32 lg:w-[100%] lg:justify-center">
        <div class="w-[100%] lg:w-[45%]">
          <img
            class="mx-28 w-[60%]"
            src="https://wealthelite.in/website/images/tab-white-label.webp"
            alt=""
          />
        </div>
        <div class="mt-8 text-center lg:-mt-16 lg:text-left lg:w-[45%]">
          <div class="mx-7 lg:mx-0">
            <h1 class="text-4xl font-semibold tracking-wider lg:text-3xl lg:font-bold">
              100% White Labeled Solution!
            </h1>
          </div>
          <div class="mt-3 lg:mt-3">
            <h1 class="text-2xl font-bold lg:mx-2 lg:text-base">
              URL based white labeling:
            </h1>
            <p class="mx-12 mt-2 text-xl leading-8 lg:ml-2 lg:mt-2 lg:text-sm">
              If Financial advisor’s website URL is
              <a class="text-blue-800 hover:underline" href="/">
                www.yourdomain.com
              </a>
              , the software will be operating on the same URL the inside report
              URL will be look like
              <a class="text-blue-800 hover:underline" href="/">
                www.yourdomain.com/MFPortfolio
              </a>
              .
            </p>
          </div>
          <div class="mt-8 lg:mt-4">
            <h1 class="text-2xl font-bold lg:mx-2 lg:text-base">
              Color Theme Based White Labeling:
            </h1>
            <p class="mx-11 mt-2 text-xl leading-8 lg:ml-2 lg:mt-2 lg:w-11/12 lg:text-sm">
              The color theme of software can be exactly matched with the color
              theme of Financial Advisor’s website. So that when the Investor
              navigates from website to backend software it will be smooths
              transition and enjoy the same branding.
            </p>
          </div>
          <div class="mt-16 lg:mt-7 lg:mx-2">
            <button class="h-9 w-40 rounded-full bg-black text-xs text-white lg:text-xs">
              REQUEST DEMO
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
