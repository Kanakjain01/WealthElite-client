import React, { useState } from "react";
import Navigation from "./Navigation";
import { connect } from "react-redux";
import { loginUser } from "../../actions";

const Investor = (props) => {
  const { loginUser } = props
  const [state, setState] = useState({
    email: "",
    password: ""
  })

  const updateState = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setState({ ...state, [name]: value })
  }

  const submitFunc = (e) => {
    e.preventDefault()
    loginUser(state)
  }
  return (
    <div>
      {/* <!----------------------------------- FIRST--------------------------- --> */}
      <Navigation />

      {/* <!---------------------------------- SECOND ----------------------------> */}

      <div
        class={` ${props.page == "ifa"
          ? "bg-slate-100"
          : props.page == "corporate"
            ? "bg-sky-100"
            : props.page == "backoffice"
              ? "bg-amber-50"
              : props.page == "branch"
                ? "bg-purple-200"
                : props.page == "subbroker"
                  ? "bg-orange-100"
                  : ""
          }  pb-2 pt-16 lg:shadow-inner lg:pb-12 overflow-hidden `}
      >
        <div
          class={`mx-auto w-96 rounded-xl border-2  ${props.page == "ifa"
            ? "shadow-slate-500"
            : props.page == "corporate"
              ? "shadow-sky-200"
              : props.page == "backoffice"
                ? "shadow-amber-100"
                : props.page == "branch"
                  ? "shadow-purple-400"
                  : props.page == "subbroker"
                    ? "shadow-orange-300"
                    : ""
            } shadow-2xl  ${props.page == "ifa"
              ? "border-slate-100"
              : props.page == "corporate"
                ? "border-sky-200"
                : props.page == "backoffice"
                  ? "border-amber-700"
                  : props.page == "branch"
                    ? "border-purple-500"
                    : props.page == "subbroker"
                      ? "border-orange-600"
                      : ""
            } lg:flex  lg:w-3/4 lg:-mt-8 lg:h-1/2 `}
        >
          <div
            class={`rounded-xl  ${props.page == "ifa"
              ? "bg-slate-100"
              : props.page == "corporate"
                ? "bg-sky-50"
                : props.page == "backoffice"
                  ? "bg-amber-50"
                  : props.page == "branch"
                    ? "bg-purple-50"
                    : props.page == "subbroker"
                      ? "bg-orange-50"
                      : ""
              }  lg:w-[55%]  `}
          >
            <img class="" src={props.img} alt="" />
          </div>
          <div class="rounded-b-2xl bg-white pb-36 pt-32 lg:w-[45%] lg:pt-20 lg:pb-20   ">
            <div class="text-center  ">
              <h1
                class={`text-3xl font-bold  ${props.page == "ifa"
                  ? "text-blue-600"
                  : props.page == "corporate"
                    ? "text-sky-400"
                    : props.page == "backoffice"
                      ? "text-amber-800"
                      : props.page == "branch"
                        ? "text-purple-700"
                        : props.page == "subbroker"
                          ? "text-orange-400"
                          : ""
                  }  lg:text-2xl lg:font-semibold lg:-ml-32`}
              >
                {props.title}
              </h1>
            </div>
            <div class="mx-auto mt-7 w-52 lg:mt-5 ">
              <div
                class={`flex w-52 border ${props.page == "ifa"
                  ? "border-blue-500"
                  : props.page == "corporate"
                    ? "border-sky-400"
                    : props.page == "backoffice"
                      ? "border-amber-800"
                      : props.page == "branch"
                        ? "border-purple-700"
                        : props.page == "subbroker"
                          ? "border-orange-400"
                          : ""
                  }   lg:w-72 lg:h-12 lg:-ml-10 `}
              >
                <span
                  class={`inline-flex w-14 items-center border ${props.page == "ifa"
                    ? "bg-slate-200"
                    : props.page == "corporate"
                      ? "bg-sky-50"
                      : props.page == "backoffice"
                        ? "bg-amber-50"
                        : props.page == "branch"
                          ? "bg-purple-50"
                          : props.page == "subbroker"
                            ? "bg-orange-50"
                            : ""
                    }  px-3 text-gray-900 dark:text-gray-400 lg:w-11 `}
                >
                  <svg
                    class="w-7 lg:w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                    <style>{/* svg{fill:#397d2b} */}</style>
                    <path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
                  </svg>
                </span>
                <input
                  onChange={(e) => { updateState(e) }}
                  type="text"
                  id="website-admin"
                  class="block lg:text-left w-full min-w-0 flex-1 p-4 text-center text-lg text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="Email"
                  name="email"
                />
              </div>
              <div
                class={`flex w-52 border ${props.page == "ifa"
                  ? "border-blue-500"
                  : props.page == "corporate"
                    ? "border-sky-400"
                    : props.page == "backoffice"
                      ? "border-amber-800"
                      : props.page == "branch"
                        ? "border-purple-700"
                        : props.page == "subbroker"
                          ? "border-orange-400"
                          : ""
                  }  lg:w-72 lg:h-12 lg:-ml-10 `}
              >
                <span
                  class={`inline-flex w-14 items-center border  ${props.page == "ifa"
                    ? "bg-slate-200"
                    : props.page == "corporate"
                      ? "bg-sky-50"
                      : props.page == "backoffice"
                        ? "bg-amber-50"
                        : props.page == "branch"
                          ? "bg-purple-50"
                          : props.page == "subbroker"
                            ? "bg-orange-50"
                            : ""
                    }  px-3 text-gray-900 dark:text-gray-400 lg:w-11 `}
                >
                  <svg
                    class="w-7 lg:w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                    <style>{/* svg{fill:#248a2f} */}</style>
                    <path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z" />
                  </svg>
                </span>
                <input
                  onChange={(e) => { updateState(e) }}
                  type="text"
                  id="website-admin"
                  class="block w-full lg:text-left min-w-0 flex-1 p-4 text-center text-lg text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder="Password"
                  name="password"
                />
              </div>
            </div>
            <div class="mx-6 mt-7 flex  justify-between px-14 ">
              <div class="mb-6 flex w-[45%] items-start">
                <div class="flex h-5 items-center">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    class="focus:ring-3 h-4 w-4 cursor-pointer rounded border border-gray-300 bg-gray-50 focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-blue-600 dark:focus:ring-offset-gray-800"
                    required
                  />
                </div>
                <label
                  for="remember"
                  class="ml-2 cursor-pointer font-medium lg:text-sm"
                >
                  Remember me
                </label>
              </div>
              <div class="w-[45%] -mr-4 cursor-pointer">
                <h1
                  class={`font-medium ${props.page == "ifa"
                    ? "text-blue-800"
                    : props.page == "corporate"
                      ? "text-sky-400"
                      : props.page == "backoffice"
                        ? "text-amber-800"
                        : props.page == "branch"
                          ? "text-purple-900"
                          : props.page == "subbroker"
                            ? "text-orange-500"
                            : ""
                    }  lg:text-sm`}
                >
                  Forgot Password ?
                </h1>
              </div>
            </div>
            <div
              class={`mx-20  mt-3 w-24 rounded  ${props.page == "ifa"
                ? "bg-blue-600"
                : props.page == "corporate"
                  ? "bg-sky-400"
                  : props.page == "backoffice"
                    ? "bg-amber-700"
                    : props.page == "branch"
                      ? "bg-purple-900"
                      : props.page == "subbroker"
                        ? "bg-orange-500"
                        : ""
                } py-3 text-center lg:w-16 lg:py-2  `}
            >
              <button onClick={(e) => { submitFunc(e) }} class={`text-2xl py-3 px-6 rounded-md text-white lg:text-base ${props.page == "ifa"
                ? "bg-blue-600"
                : props.page == "corporate"
                  ? "bg-sky-400"
                  : props.page == "backoffice"
                    ? "bg-amber-700"
                    : props.page == "branch"
                      ? "bg-purple-900"
                      : props.page == "subbroker"
                        ? "bg-orange-500"
                        : "bg-orange-500"
                }`}>Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const {

  } = state.variables
  return {

  }
}

const mapActionsToProps = {
  loginUser
}
export default connect(mapStateToProps, mapActionsToProps)(Investor);
