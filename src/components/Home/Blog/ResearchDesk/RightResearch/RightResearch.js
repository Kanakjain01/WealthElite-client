import React from "react";
import RightResearch1 from "./RightResearch1";

const RightResearch = () => {
  return (
    <>
      <div class="right lg:w-[25%]">
        <div class="mx-auto mt-14 w-11/12">
          <div>
            <h1 class="text-2xl font-medium lg:text-base">Recent Blogs</h1>
            <hr class="mt-5 border-gray-300 lg:mt-2" />
          </div>
          <RightResearch1/>
          <RightResearch1/>
          <RightResearch1/>
          <RightResearch1/>
          <RightResearch1/>
          <RightResearch1/>
        </div>
      </div>
    </>
  );
};

export default RightResearch;
