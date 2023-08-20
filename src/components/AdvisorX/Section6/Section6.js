import React from 'react'

const Section6 = () => {
  return (
    <div class="mt-48">
        <div class="mx-auto w-11/12 lg:ml-24">
          <h1 class="text-xl font-medium tracking-widest text-gray-500 lg:text-sm">
            TESTIMONIALS
          </h1>
          <p class="mt-6 text-6xl font-bold leading-snug lg:text-4xl lg:mt-3">
            WHAT THEY ARE SAYING ABOUT US
          </p>
        </div>
        <div class="mt-32 lg:mt-24 ">
          <div class="bg-gray-50 pt-16 mx-auto w-5/6 shadow-2xl lg:w-96 hover:opacity-75 cursor-pointer pb-7 ">
            <figure class="text-center mx-auto w-64 lg:-mt-9">
              <svg
                class="w-7 lg:w-6 "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                <style>{/* svg{fill:#508bf2} */}</style>
                <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" />
              </svg>
              <blockquote>
                <p class="text-2xl  italic text-gray-600 -mt-8 leading-normal lg:text-sm lg:-mt-4 lg:mx-5 ">
                  Flowbite is just awesome. It contains tons of predesigned
                  components and pages starting from login screen to complex
                  dashboard. Perfect choice for your next SaaS application Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Cumque
                  deleniti facere rerum, dolor ad blanditiis illo eos. Odio
                  molestias ipsa numquam ex modi delectus debitis unde ducimus,
                  repellat repellendus aliquam!.
                </p>
              </blockquote>
              <svg
                class="w-7 mx-60 -mt-6 lg:w-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                <style>{/* svg{fill:#4785f0} */}</style>
                <path d="M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H320c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72zm-256 0c0 66.3-53.7 120-120 120H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72z" />
              </svg>
              <figcaption class="mt-6 ">
                <img
                  class="w-32 mx-auto rounded-full lg:w-24"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                  alt="profile picture"
                />
                <div class="items-center mt-8 lg:mt-4 ">
                  <h1 class="text-3xl font-semibold lg:text-xl">
                    Anmol Pagare
                  </h1>
                  <h1 class="text-2xl text-gray-400 mt-3 lg:text-base lg:mt-0">
                    Partners
                  </h1>
                  <h1 class="mt-2 text-2xl font-semibold text-blue-700 lg:mt-0 lg:text-lg ">
                    My Answers
                  </h1>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
  )
}

export default Section6