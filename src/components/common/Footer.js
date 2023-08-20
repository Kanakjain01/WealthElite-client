import React from "react";

const Footer = () => {
  return (
    <div>
      <div class="bg-gray-900 pb-5 pt-32 mt-20 overflow-hidden">
        <div class="lg:-mt-10 lg:flex lg:w-[100%] lg:justify-center">
          <div class="left lg:w-[55%]">
            <div class="mx-auto grid w-5/6 grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
              <div>
                <h2 class="mb-6 text-3xl font-semibold dark:text-white lg:text-xl">
                  Quick 
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
              <div class="w-[100%]  mt-12 flex justify-evenly lg:px-72">
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

export default Footer;
