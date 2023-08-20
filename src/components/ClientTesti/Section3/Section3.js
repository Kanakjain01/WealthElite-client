import React from "react";
import SectionVideo3 from "./SectionVideo3";

const Section3 = () => {
  return (
    <>
      <div class="mt-24 pb-28 lg:mx-16 lg:-mb-4 ">
        <div class="mx-auto w-11/12">
          <h1 class="text-xl font-semibold tracking-widest text-gray-500 lg:text-base ">
            <u> VIDEO TESTIMONIALS</u>
          </h1>
          <p class="text-6xl font-bold leading-tight text-gray-800 lg:text-4xl lg:mt-2">
            WHAT THEY ARE SAYING ABOUT US
          </p>
        </div>
        <div class="mt-2  ">
          <div class="lg:flex lg:w-[100%] lg:mx-7   ">
            <SectionVideo3 />
            <SectionVideo3 />
            <SectionVideo3 />
          </div>
          <div class="lg:w-[34%] lg:mx-6 lg:-mt-5">
            <div class="mx-7 rounded-md border-2 pb-4 mt-14 ">
              <div class="img1 lg:w-[100%] lg:h-48">
                <img
                  class="mx-auto pt-24 lg:pt-14 "
                  src="https://wealthelite.in/website/images/testimony/play-icon.png"
                  alt=""
                />
              </div>
              <div class="mt-4 text-center">
                <h1 class="text-3xl text-blue-700 lg:text-lg">
                  Paarth Chakrawaty
                </h1>
                <h1 class="mt-3 text-xl italic text-blue-700 lg:text-sm">
                  The Concept
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section3;
