import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

const PrivacyPolicy = () => {
  return (
    <div>
      {/* <!----------------------------------A----------------------------------------> */}
      <Navigation/>

      {/* <!----------------------------------B----------------------------------------> */}
      <div class="pb-20 lg:mx-auto lg:w-11/12 overflow-hidden ">
        <div class="mx-auto mt-12 w-11/12 lg:mt-6">
          <h1 class="text-4xl font-bold lg:text-3xl">Privacy Policy</h1>
          <p class="mt-14 text-xl leading-9 lg:mt-10 lg:text-sm">
            This privacy statement has been developed by REDVision Global
            Technologies to exhibit company’s adherence towards privacy. The
            information shown below reveals about the propagation practices for
            <a class="text-blue-800" href="/"> www.redvisionglobaltech.com </a>
            and other REDVISION Websites.
          </p>
          <br />
          <p class="mt-3 text-xl leading-9  lg:text-sm">
            Our company makes use of your IP Address to detect issues in our
            server and/or to regulate our website. It helps us in ascertaining
            the sections of our website that users are visiting. Our company
            does not synchronize IP addresses to reveal your identity. This
            indicates that user’s session is monitored but the user remains
            unspecified.
          </p>
          <br />
          <p class="mt-3 text-xl leading-9  lg:text-sm">
            Our website gathers your contact information like name, mobile no.
            and email address through the details entered by you in the
            registration form. The details are used for the purpose of sending
            you information about the company. Users can back out of getting
            future communications via selecting unsubscribe option from the
            registration form.
          </p>
          <br />
          <p class="mt-3 text-xl leading-9  lg:text-sm">
            This particular site involves links to other websites. REDVision
            Global does not hold any responsibility for the content or privacy
            practices for any such websites.
          </p>
        </div>

        <div class="mx-auto mt-12 w-11/12">
          <h1 class="text-3xl font-medium lg:text-xl">Security:</h1>
          <hr class="mt-2 border-black" />

          <p class="mt-5 list-disc text-xl leading-9 lg:text-sm">
            This site is protected with security in order to prevent loss, fraud
            and/or modification of information under our control. The data is
            protected with firewall and access is limited to authorize staff of
            REDVision Global.
          </p>
        </div>

        <div class="mx-auto mt-12 w-11/12 ">
          <h1 class="text-3xl font-medium lg:text-xl">
            Contacting the Web Site
          </h1>
          <hr class="mt-2 border-black" />

          <p class="mt-5 list-disc text-xl leading-9 lg:text-sm">
            In case you have any queries regarding this privacy statement, the
            execution of this site, or your dealings with this website, please
            feel free to contact us at REDVision Global.
          </p>
        </div>
      </div>

      {/* <!----------------------------------C----------------------------------------> */}
      <Footer/>
    </div>
  );
};

export default PrivacyPolicy;
