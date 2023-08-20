import React from "react";
import Footer from "../common/Footer";
import Navigation from "../common/Navigation";

const PayOnline = () => {
  return (
    <div>
      {/* <!----------------------------------- FIRST--------------------------- --> */}
      <Navigation />

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
      <div class=" mt-11 w-[100%] lg:px-14 ">
        <h1 class=" mx-auto w-11/12 rounded-xl border-2 bg-black  py-6 text-center text-xl leading-tight text-white lg:text-lg">
          NOTE: Please share the payment screenshot with us at{" "}
          <a class="text-lime-500 "> accounts@redvisionglobal.com</a> for
          confirming your payment status.
        </h1>
      </div>

      {/* <!----------------------------------LAST-------------------------------------> */}
      <Footer />
    </div>
  );
};

export default PayOnline;
