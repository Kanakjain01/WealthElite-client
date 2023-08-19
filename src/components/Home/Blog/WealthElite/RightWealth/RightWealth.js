import React from "react";
import RightWealth1 from "./RightWealth1";

const RightWealth = () => {
  return (
    <>
      <div class="right lg:w-[25%]">
        <div class="mx-auto mt-14 w-11/12">
          <div>
            <h1 class="text-2xl font-medium lg:text-base">Recent Blogs</h1>
            <hr class="mt-5 border-gray-300 lg:mt-2" />
          </div>
          <RightWealth1 />
          <RightWealth1 />
          <RightWealth1 />
          <RightWealth1 />
          <RightWealth1 />
          <RightWealth1 />
        </div>
      </div>
    </>
  );
};

export default RightWealth;
