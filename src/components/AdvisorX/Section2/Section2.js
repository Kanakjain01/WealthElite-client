import React from "react";

const Section2 = () => {
  return (
    <>
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
              Tax Package Reports directly on Client's Whatsapp and manymore...
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
    </>
  );
};

export default Section2;
