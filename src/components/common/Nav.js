import React from 'react'

const Nav = () => {
  return (
    <div>
         <div class="flex w-[100%] justify-evenly overflow-hidden bg-slate-50 pb-2 pt-6 shadow-2xl lg:-mt-4 lg:justify-center">
        <div class="w-[45%] lg:mx-28">
          <img
            class="w-44 lg:w-28"
            src="https://wealthelite.in/FPLogo/wealth-elite-logo.png"
            alt=""
          />
        </div>
        <div class="w-[45%] lg:ml-28 lg:mt-5">
          <ul class="lg:mx-32 lg:flex lg:justify-evenly lg:text-sm lg:text-blue-700">
            <li>HOME</li>
            <li>BLOGS</li>
            <li>CONTACT US</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Nav