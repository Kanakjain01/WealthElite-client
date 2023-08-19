import React from "react";

const Section5 = () => {
  return (
    <>
      <div class="mt-72 text-center lg:mt-32">
        <div>
          <h1 class="text-4xl font-bold lg:text-4xl">Advisor X</h1>
        </div>
        <div class="lg:mt-11 lg:flex lg:w-[100%]">
          <div class="lg:w-[45%] lg:text-left lg:px-48">
            <div>
              <div class="lg:flex lg:rounded-md lg:pb-5 lg:pt-3 lg:hover:bg-gray-100 lg:w-72">
                {/* <!-- <div class="lg:h-16 lg:w-16 lg:rounded-lg lg:bg-green-700 lg:px-4 lg:py-4">
              <img class="lg:w-10" src="https://wealthelite.in/website/images/advisors-dashboard-icon.webp" alt="" />
            </div> --> */}
                <div class="mt-4 lg:mt-0 lg:mx-auto">
                  <h1 class="text-3xl font-medium text-blue-800 lg:text-lg lg:text-slate-700">
                    Productive Dashboard!
                  </h1>
                  <p class="mx-auto mt-4 w-80 text-2xl lg:text-sm lg:leading-6 lg:w-64">
                    Get AUM & SIP trends of the last 4 months on your dashboard
                    with a recent purchase, redemption, rejected transactions,
                    new SIPs, and upcoming business reports.
                  </p>
                </div>
              </div>
              <div></div>
            </div>
            <div>
              <div></div>
              <div></div>
            </div>
          </div>

          <div class="mx-auto mt-16 w-80 ml-28 lg:mt-0 lg:w-[45%] lg:ml-80">
            <img
              class="w-72"
              src="https://wealthelite.in/website/images/advisor-dashboard.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Section5;
