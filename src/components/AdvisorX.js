import React from "react";

const AdvisorX = () => {
  return (
    <div>
      {/* <!-- FIRST --> */}
      <div class="bg-gradient-to-b from-indigo-100 via-indigo-400 to-indigo-400 pb-20">
        <div class="flex w-[100%] justify-around lg:w-[100%]">
          <div class="mt-5 w-[55%]">
            <img
              class="w-44 lg:w-28"
              src="https://wealthelite.in/FPLogo/wealth-elite-logo.png"
              alt=""
            />
          </div>
          <div class="mt-10 flex h-12 w-[35%] justify-evenly rounded-full border-2 border-black py-2 lg:h-9 lg:w-[10%] lg:py-1 cursor-pointer hover:bg-blue-900">
            <div class="mt-1">
              <svg
                class="w-6 fill-black lg:w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
              >
                {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                <style>{/* svg{fill:#0a0a0b} */}</style>
                <path d="M543.8 287.6c17 0 32-14 32-32.1c1-9-3-17-11-24L512 185V64c0-17.7-14.3-32-32-32H448c-17.7 0-32 14.3-32 32v36.7L309.5 7c-6-5-14-7-21-7s-15 1-22 8L10 231.5c-7 7-10 15-10 24c0 18 14 32.1 32 32.1h32v69.7c-.1 .9-.1 1.8-.1 2.8V472c0 22.1 17.9 40 40 40h16c1.2 0 2.4-.1 3.6-.2c1.5 .1 3 .2 4.5 .2H160h24c22.1 0 40-17.9 40-40V448 384c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v64 24c0 22.1 17.9 40 40 40h24 32.5c1.4 0 2.8 0 4.2-.1c1.1 .1 2.2 .1 3.3 .1h16c22.1 0 40-17.9 40-40V455.8c.3-2.6 .5-5.3 .5-8.1l-.7-160.2h32z" />
              </svg>
            </div>
            <div>
              <h1 class="text-xl lg:text-sm">Go To Home</h1>
            </div>
          </div>
        </div>

        {/* <!-- SECOND  --> */}
        <div class="mt-44 w-[100%] lg:flex lg:w-[100%] lg:flex-row-reverse lg:px-16">
          <div class="right lg:mt-11 lg:w-[45%]">
            <img
              class="mx-auto w-11/12 animate-bounce lg:w-5/6"
              src="https://wealthelite.in/advisor-assets/img/advisor-app-mobile-image.png"
              alt=""
            />
          </div>
          <div class="left mx-auto mt-10 w-11/12 lg:-mt-6 lg:w-[45%]">
            <div class="">
              <h1 class="text-6xl leading-normal lg:text-4xl lg:leading-relaxed">
                We are glad to announce the launch{" "}
                <a class="font-bold text-red-600"> ADVISOR</a>{" "}
                <a class="font-bold"> X</a> App
              </h1>
              <p class="mt-8 text-4xl leading-snug lg:text-2xl lg:font-extralight lg:leading-10">
                Equipped with exciting features like Video KYC, Send Valuation &
                Tax Package Reports directly on Client's Whatsapp and
                manymore...
              </p>
            </div>
            <div class="mr-16 mt-16 flex justify-around lg:-mx-24 lg:mt-14 lg:w-[100%] lg:justify-evenly">
              <div class="cursor-pointer">
                <img
                  class="w-44 rounded-full hover:shadow-2xl hover:shadow-black"
                  src="https://wealthelite.in/advisor-assets/img/android_btn.png"
                  alt=""
                />
              </div>
              <div class="lg:-ml-20">
                <img
                  class="w-44 rounded-full hover:shadow-2xl hover:shadow-black"
                  src="https://wealthelite.in/advisor-assets/img/apple_btn.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- THIRD --> */}

      <div
        id="default-carousel"
        class="relative mt-60 w-full"
        data-carousel="slide"
      >
        <div>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        {/* <!-- Carousel wrapper --> */}
        <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
          {/* <!-- Item 1 --> */}
          <div class="duration-700 ease-in-out" data-carousel-item>
            <img
              src="https://wealthelite.in/advisor-assets/img/slider-icon/advisor-x-goal-gps.png"
              class="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
              alt="..."
            />
          </div>
          {/* <!-- Item 2 --> */}
          <div class="duration-700 ease-in-out" data-carousel-item>
            <img
              src="https://wealthelite.in/advisor-assets/img/slider-icon/advisor-x-video-kyc.png"
              class="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
              alt="..."
            />
          </div>
          {/* <!-- Item 3 --> */}
          <div class="duration-700 ease-in-out" data-carousel-item>
            <img
              src="https://wealthelite.in/advisor-assets/img/slider-icon/advisor-x-goal-gps.png"
              class="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
              alt="..."
            />
          </div>
          {/* <!-- Item 4 --> */}
          <div class="duration-700 ease-in-out" data-carousel-item>
            <img
              src="https://wealthelite.in/advisor-assets/img/slider-icon/advisor-x-research-desk.png"
              class="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
              alt="..."
            />
          </div>
          {/* <!-- Item 5 --> */}
          <div class="duration-700 ease-in-out" data-carousel-item>
            <img
              src="https://wealthelite.in/advisor-assets/img/slider-icon/advisor-x-other-features.png"
              class="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
              alt="..."
            />
          </div>

          {/* <!-- Item 6 --> */}
          <div class="duration-700 ease-in-out" data-carousel-item>
            <img
              src="https://wealthelite.in/advisor-assets/img/slider-icon/advisor-x-dashboard.png"
              class="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
              alt="..."
            />
          </div>
          {/* <!-- Item 7 --> */}
          <div class="duration-700 ease-in-out" data-carousel-item>
            <img
              src="https://wealthelite.in/advisor-assets/img/slider-icon/advisor-x-invest-online.png"
              class="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2"
              alt="..."
            />
          </div>
        </div>
        {/* <!-- Slider indicators --> */}
        <div class="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 space-x-3">
          <button
            type="button"
            class="h-3 w-3 rounded-full"
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
          <button
            type="button"
            class="h-3 w-3 rounded-full"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to="1"
          ></button>
          <button
            type="button"
            class="h-3 w-3 rounded-full"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to="2"
          ></button>
          <button
            type="button"
            class="h-3 w-3 rounded-full"
            aria-current="false"
            aria-label="Slide 4"
            data-carousel-slide-to="3"
          ></button>
          <button
            type="button"
            class="h-3 w-3 rounded-full"
            aria-current="false"
            aria-label="Slide 5"
            data-carousel-slide-to="4"
          ></button>
        </div>
        {/* <!-- Slider controls --> */}
        <button
          type="button"
          class="group absolute left-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
          data-carousel-prev
        >
          <span class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
            <svg
              class="h-4 w-4 text-white dark:text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span class="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          class="group absolute right-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
          data-carousel-next
        >
          <span class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
            <svg
              class="h-4 w-4 text-white dark:text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span class="sr-only">Next</span>
          </span>
        </button>
      </div>

      {/* <!-- FOURTH --> */}
      <div class="mt-44 w-[100%] bg-blue-800 pb-24 pt-28 text-center lg:mt-32 lg:flex lg:w-[100%] lg:justify-center lg:px-12 lg:pt-20">
        <div class="lg:w-[55%] lg:text-left">
          <h1 class="text-4xl font-bold text-white lg:text-2xl">
            Download Advisor X
          </h1>
          <p class="mt-5 text-2xl text-white lg:text-sm">
            FREE Research & Financial Calculators for all MFDs!
          </p>
          <p class="mx-7 text-2xl text-white lg:-mx-0 lg:text-sm">
            To get full access, generate the inquiry from the app, our sales
            team will reach you within a few minutes!
          </p>
        </div>
        <div class="mt-8 flex justify-evenly lg:w-[35%]">
          <div class="w-[35%]">
            <img
              class="rounded-full hover:shadow-2xl hover:shadow-black"
              src="https://wealthelite.in/advisor-assets/img/android_btn.png"
              alt=""
            />
          </div>
          <div class="w-[35%]">
            <img
              class="rounded-full hover:shadow-2xl hover:shadow-black"
              src="https://wealthelite.in/advisor-assets/img/apple_btn.png"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* <!-- FIFTH --> */}
      <div class="mt-28 lg:-mt-5">
        <div class="lg:flex lg:w-[100%] lg:px-20">
          <div class="mx-auto mt-20 flex w-11/12 justify-around rounded bg-gray-50 pb-10 pt-10 shadow-2xl hover:-translate-y-5 hover:delay-75 hover:ease-in-out lg:mb-12 lg:w-[30%]">
            <div class="mt-9">
              <img
                class="lg:w-16"
                src="https://wealthelite.in/advisor-assets/img/video-kyc.png"
                alt=""
              />
            </div>
            <div class="w-2/3 lg:-mt-6">
              <h1 class="text-3xl font-medium lg:text-xl">Video KYC !</h1>
              <p class="mt-6 text-xl text-gray-500 hover:text-black lg:text-base">
                Instant full video KYC by invitation link for clients present in
                any part of the world.
              </p>
            </div>
          </div>
          <div class="mx-auto mt-20 flex w-11/12 justify-around rounded bg-gray-50 pb-10 pt-10 shadow-2xl hover:-translate-y-5 hover:delay-75 hover:ease-in-out lg:mb-12 lg:w-[30%]">
            <div class="mt-9">
              <img
                class="lg:w-16"
                src="https://wealthelite.in/advisor-assets/img/video-kyc.png"
                alt=""
              />
            </div>
            <div class="w-2/3 lg:-mt-6">
              <h1 class="text-3xl font-medium lg:text-xl">
                Place MF Transactions !
              </h1>
              <p class="mt-6 text-xl text-gray-500 hover:text-black lg:text-base">
                Advisor can place purchase, redemption & SIP orders on behalf of
                Investor, payment by link by Investor.
              </p>
            </div>
          </div>
          <div class="mx-auto mt-20 flex w-11/12 justify-around rounded bg-gray-50 pb-10 pt-10 shadow-2xl hover:-translate-y-5 hover:delay-75 hover:ease-in-out lg:mb-12 lg:w-[30%]">
            <div class="mt-9">
              <img
                class="lg:w-16"
                src="https://wealthelite.in/advisor-assets/img/video-kyc.png"
                alt=""
              />
            </div>
            <div class="w-2/3 lg:-mt-6">
              <h1 class="text-3xl font-medium lg:text-xl">
                Reports on Whatsapp !
              </h1>
              <p class="mt-6 text-xl text-gray-500 hover:text-black lg:text-base">
                Advisor gets the capability of sending various reports like
                Valuation, Capital Gain, Transactions & FY wise transaction on
                whatsapp in a few clicks!
              </p>
            </div>
          </div>
        </div>
        <div class="lg:-mt-20 lg:flex lg:w-[100%] lg:px-20">
          <div class="mx-auto mt-20 flex w-11/12 justify-around rounded bg-gray-50 pb-10 pt-10 shadow-2xl hover:-translate-y-5 hover:delay-75 hover:ease-in-out lg:mb-12 lg:w-[30%]">
            <div class="mt-9">
              <img
                class="lg:w-16"
                src="https://wealthelite.in/advisor-assets/img/video-kyc.png"
                alt=""
              />
            </div>
            <div class="w-2/3 lg:-mt-6">
              <h1 class="text-3xl font-medium lg:text-xl">Goal GPS !</h1>
              <p class="mt-6 text-xl text-gray-500 hover:text-black lg:text-base">
                Track Goal achievements of the client with required return and
                current return via Mutual Fund Software for IFA comparison
                mapped and additional required investments!
              </p>
            </div>
          </div>
          <div class="mx-auto mt-20 flex w-11/12 justify-around rounded bg-gray-50 pb-10 pt-10 shadow-2xl hover:-translate-y-5 hover:delay-75 hover:ease-in-out lg:mb-12 lg:w-[30%]">
            <div class="mt-9">
              <img
                class="lg:w-16"
                src="https://wealthelite.in/advisor-assets/img/video-kyc.png"
                alt=""
              />
            </div>
            <div class="w-2/3 lg:-mt-6">
              <h1 class="text-3xl font-medium lg:text-xl">
                Portfolio Analysis !
              </h1>
              <p class="mt-6 text-xl text-gray-500 hover:text-black lg:text-base">
                Analyze asset allocation, top equity & debt holding, sector
                exposure, XIRR returns, Profitability of portfolio on go, send
                portfolio report to clients on Whatsapp!
              </p>
            </div>
          </div>
          <div class="mx-auto mt-20 flex w-11/12 justify-around rounded bg-gray-50 pb-10 pt-10 shadow-2xl hover:-translate-y-5 hover:delay-75 hover:ease-in-out lg:mb-12 lg:w-[30%]">
            <div class="mt-9">
              <img
                class="lg:w-16"
                src="https://wealthelite.in/advisor-assets/img/video-kyc.png"
                alt=""
              />
            </div>
            <div class="w-2/3 lg:-mt-6">
              <h1 class="text-3xl font-medium lg:text-xl">Research !</h1>
              <p class="mt-6 text-xl text-gray-500 hover:text-black lg:text-base">
                Searching for best SIP or top ELSS funds was never so easy, get
                various NAV Based calculators and income tax estimator only on
                Advisor X !
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- SIXTH --> */}
      <div class="mt-48">
        <div class="mx-auto w-11/12">
          <h1 class="text-xl font-medium tracking-widest text-gray-500 lg:text-sm">
            TESTIMONIALS
          </h1>
          <p class="mt-6 text-6xl font-bold leading-snug lg:text-4xl lg:mt-3">
            WHAT THEY ARE SAYING ABOUT US
          </p>
        </div>
        <div class="mt-32 lg:mt-24">
          <div class="bg-gray-50 pt-16 mx-auto w-5/6 shadow-2xl lg:w-96 hover:opacity-75 cursor-pointer">
            <figure class="text-center mx-auto w-64 lg:-mt-9">
              <svg
                class="w-10 lg:w-6 "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                <style>{/* svg{fill:#508bf2} */}</style>
                <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" />
              </svg>
              <blockquote>
                <p class="text-2xl  italic text-gray-600 -mt-8 leading-normal lg:text-sm lg:-mt-4 lg:mx-5 ">
                  Flowbite is just awesome. It contains tons of predesigned
                  components and pages starting from login screen to complex
                  dashboard. Perfect choice for your next SaaS application Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Cumque
                  deleniti facere rerum, dolor ad blanditiis illo eos. Odio
                  molestias ipsa numquam ex modi delectus debitis unde ducimus,
                  repellat repellendus aliquam!.
                </p>
              </blockquote>
              <svg
                class="w-10 mx-64 -mt-6 lg:w-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                <style>{/* svg{fill:#4785f0} */}</style>
                <path d="M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H320c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72zm-256 0c0 66.3-53.7 120-120 120H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72z" />
              </svg>
              <figcaption class="mt-6 ">
                <img
                  class="w-32 mx-auto rounded-full lg:w-24"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                  alt="profile picture"
                />
                <div class="items-center mt-8 lg:mt-4 ">
                  <h1 class="text-3xl font-semibold lg:text-xl">
                    Anmol Pagare
                  </h1>
                  <h1 class="text-2xl text-gray-400 mt-3 lg:text-base lg:mt-0">
                    Partners
                  </h1>
                  <h1 class="mt-2 text-2xl font-semibold text-blue-700 lg:mt-0 lg:text-lg ">
                    My Answers
                  </h1>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
      {/* <!----------------------------------LAST-------------------------------------> */}
      <div class="bg-gray-900 pb-5 pt-32 mt-20">
        <div class="lg:-mt-10 lg:flex lg:w-[100%] lg:justify-center">
          <div class="left lg:w-[55%]">
            <div class="mx-auto grid w-5/6 grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
              <div>
                <h2 class="mb-6 text-3xl font-semibold dark:text-white lg:text-xl">
                  Quick Links
                </h2>
                <ul class="font-medium text-gray-300 lg:text-sm">
                  <li class="mb-4">
                    <a href="https://flowbite.com/" class="hover:underline">
                      Home
                    </a>
                  </li>
                  <li class="mb-4">
                    <a href="https://tailwindcss.com/" class="hover:underline">
                      Features
                    </a>
                  </li>
                  <li class="mb-4">
                    <a href="https://tailwindcss.com/" class="hover:underline">
                      Contact us
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 class="mb-6 text-3xl font-semibold dark:text-white lg:text-xl">
                  Other
                </h2>
                <ul class="font-medium text-gray-300 lg:text-sm">
                  <li class="mb-4">
                    <a
                      href="https://github.com/themesberg/flowbite"
                      class="hover:underline"
                    >
                      About elite
                    </a>
                  </li>
                  <li class="mb-4">
                    <a
                      href="https://discord.gg/4eeurUVvTy"
                      class="hover:underline"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li class="mb-4">
                    <a href="https://tailwindcss.com/" class="hover:underline">
                      Refund Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <hr class="my-6 border-gray-200 dark:border-gray-400 lg:mx-14 lg:w-2/3" />
            <div class="mt-16 lg:-ml-72">
              <div class="">
                <h1 class="text-center text-3xl font-bold text-white lg:-ml-72 lg:text-xl">
                  Social
                </h1>
              </div>
              <div class="w=[100%] mx-32 mt-12 flex justify-evenly lg:mx-80">
                <div class="w-14 rounded-full border-4 border-blue-500 px-2 py-2">
                  <img
                    class=""
                    src="https://cdn-icons-png.flaticon.com/512/4926/4926502.png"
                    alt=""
                  />
                </div>
                <div class="w-14 rounded-full border-4 border-indigo-500 px-2 py-2">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/226/226234.png"
                    alt=""
                  />
                </div>
                <div class="w-14 rounded-full border-4 border-red-500 px-2 py-2">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/889/889161.png"
                    alt=""
                  />
                </div>
                <div class="w-14 rounded-full">
                  <img
                    src="https://cdn.icon-icons.com/icons2/1211/PNG/512/1491579602-yumminkysocialmedia36_83067.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="right mt-16 w-[100%] lg:mt-0 lg:w-[35%]">
            <div class="">
              <div class="mx-auto w-56 lg:mr-16">
                <img
                  src="https://wealthelite.in/FPLogo/wealth-elite-footer-logo.png"
                  alt=""
                />
              </div>
              <div class="mx-auto mt-4 w-72 lg:mr-12">
                <h1 class="text-white">
                  REDVision Global Technologies Pvt Ltd.
                </h1>
                <h1 class="text-gray-500">
                  (An ISO 9001:2008 Certified Company)
                </h1>
              </div>
            </div>
            <div class="mx-auto mt-6 w-96 text-center text-white lg:mr-16 lg:w-7/12 lg:text-right">
              <p class="">
                201, 45 Hare Krishna Vihar, Behind Advance Academy School,
                Nipania, Indore, 452010 MP
              </p>
              <h1>Email: query@redvisionglobal.com</h1>
              <p>Call(Sales): +91-9039822000</p>
            </div>
          </div>
        </div>
        <div>
          <hr class="mx-auto my-12 border-white dark:border-white lg:my-8 lg:mt-20" />
          <span class="mx-auto -mt-9 block w-4/5 text-center text-gray-500 dark:text-gray-400 sm:text-center lg:pt-4">
            © Copyright 2019 REDVision Global Technologies Pvt Ltd, Inc. All
            rights reserved. Various trademarks held by their respective owners.
          </span>
        </div>
      </div>
      <hr class="h-2 border-white dark:border-white" />
    </div>
  );
};

export default AdvisorX;