import React from "react";
import Footer from "./Footer";
import Navigation from "./Navigation";

const Refund = () => {
  return (
    <div>
      {/* <!----------------------------------A----------------------------------------> */}
      <Navigation/>

      {/* <!----------------------------------B----------------------------------------> */}
      <div class="pb-20 lg:mx-auto lg:w-11/12">
        <div class="mx-auto mt-12 w-11/12 lg:mt-6">
          <h1 class="text-4xl font-medium lg:text-3xl">
            Payments, Refunds & Cancellation
          </h1>
        </div>

        <div class=" mt-12 w-[100%] px-4 lg:px-14">
          <h1 class="text-3xl font-semibold  lg:text-xl ">Payments</h1>
          <hr class="mt-2 border-black " />
          <h1 class=" mt-10 list-disc text-xl leading-7 px-7 lg:text-sm">
            1. Online Payments can be done by:
          </h1>
          <p class=" list-disc text-xl tracking-normal lg:px-11 px-7 lg:text-sm">
            Online Payment: Card payment and Net Banking Payment via Easebuzz
            Payment Gateway can be done at Online Payment link on Pay Online
            page.
          </p>
        </div>
        <div class=" mt-12 w-[100%] px-4 lg:px-14">
          <h1 class="text-3xl font-semibold  lg:text-xl">
            Refunds & Cancellation
          </h1>
          <hr class="mt-2 border-black" />

          <p class="px-10 mt-10 text-xl  lg:text-sm tracking-normal">
            1. Users are advised to check the free demo version before making
            the final purchase of the license, as there will be no refund of
            fees after sale of license. The license for usage is not
            transferable from one user to another.
          </p>
        </div>
      </div>

      {/* <!----------------------------------C----------------------------------------> */}
      <Footer />
    </div>
  );
};

export default Refund;
