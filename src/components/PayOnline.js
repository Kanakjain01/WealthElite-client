import React from "react";

const PayOnline = () => {
  return (
    <div>
      {/* <!----------------------------------- FIRST--------------------------- --> */}
      <div class="w-[100%] justify-center bg-slate-100 pb-2 pt-5 shadow-2xl lg:px-24 lg:pb-1 lg:pt-2">
        <img
          class="mx-4 w-44 lg:w-28"
          src="https://wealthelite.in/FPLogo/wealth-elite-logo.png"
          alt=""
        />
      </div>

      {/* <!---------------------------------- SECOND ----------------------------> */}
      <div class="mt-20 flex w-[100%] px-2 lg:mt-14 lg:px-24">
        <div class="mx-auto w-[22%] rounded-t-xl border pb-3 hover:bg-lime-700 hover:text-white lg:mb-2">
          <div class="lg:mt-5">
            <img
              class="mx-auto mt-2 w-20 lg:w-14"
              src="https://wealthelite.in/webassets/images/icon/qrcode.png"
              alt=""
            />
            {/* <!-- <img class="mx-auto mt-2 w-20 lg:w-14 lg: " src="https://wealthelite.in/webassets/images/icon/qrcode2.png" alt="" /> --> */}
          </div>
          {/* <!-- <div class="lg:mt-5  ">
      <img class="mx-auto mt-2 w-20 lg:w-14 " src="https://wealthelite.in/webassets/images/icon/qrcode.png" alt="" />
    </div> --> */}
          <div class="">
            <h1 class="mt-3 text-center text-lg font-bold">PAY VIA QR CODE</h1>
          </div>
        </div>
        <div class="mx-auto w-[22%] rounded-t-xl border pb-3 hover:bg-lime-700 hover:text-white lg:mb-2">
          <div class="lg:mt-5">
            <img
              class="mx-auto mt-2 w-20 lg:w-14"
              src="https://wealthelite.in/webassets/images/icon/qrcode.png"
              alt=""
            />
          </div>
          <div class="">
            <h1 class="mt-3 text-center text-lg font-bold">PAY VIA QR CODE</h1>
          </div>
        </div>
        <div class="mx-auto w-[22%] rounded-t-xl border pb-3 hover:bg-lime-700 hover:text-white lg:mb-2">
          <div class="lg:mt-5">
            <img
              class="mx-auto mt-2 w-20 lg:w-14"
              src="https://wealthelite.in/webassets/images/icon/qrcode.png"
              alt=""
            />
          </div>
          <div class="">
            <h1 class="mt-3 text-center text-lg font-bold">PAY VIA QR CODE</h1>
          </div>
        </div>
        <div class="mx-auto w-[22%] rounded-t-xl border pb-3 hover:bg-lime-700 hover:text-white lg:mb-2">
          <div class="lg:mt-5">
            <img
              class="mx-auto mt-2 w-20 lg:w-14"
              src="https://wealthelite.in/webassets/images/icon/qrcode.png"
              alt=""
            />
          </div>
          <div class="">
            <h1 class="mt-3 text-center text-lg font-bold">PAY VIA QR CODE</h1>
          </div>
        </div>
      </div>

      {/* <!-- THIRD --> */}
      {/* <!-- <div class="mt-16 w-[100%] lg:mt-2 lg:w-[100%]">
  <img class="mx-auto w-[94%] rounded-b-xl border-2 px-4 pb-10 pt-9 lg:w-5/6 lg:h-1/2" src="https://wealthelite.in/webassets/images/QRCode_REDVision%20Global.png" alt="" />
</div> --> */}

      <div class="mt-6 w-[100%]">
        <img
          class="mx-auto w-11/12 rounded-b-xl border-2 px-7 pb-9 pt-9 lg:w-5/6 lg:px-36"
          src="https://wealthelite.in/webassets/images/QRCode_REDVision%20Global.png"
          alt=""
        />
      </div>

      {/* <!-- FOURTH --> */}
      <div class="mx-auto mt-11 w-[100%] lg:w-11/12">
        <h1 class="mx-auto w-11/12 rounded-xl border-2 bg-black px-3 py-6 text-center text-3xl leading-tight text-white lg:text-lg lg:py-4">
          NOTE: Please share the payment screenshot with us at{" "}
          <a class="text-lime-500"> accounts@redvisionglobal.com</a> for
          confirming your payment status.
        </h1>
      </div>

      {/* <!----------------------------------LAST-------------------------------------> */}
      <div class="mt-14 bg-gray-900 pb-5 pt-32">
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

export default PayOnline;
