import React from "react";
import { FaSignal } from "react-icons/fa6";
import "../src/App.css";
import { Link, useNavigate } from "react-router-dom";
import { IoWifi } from "react-icons/io5";
import { IoBatteryFull } from "react-icons/io5";

import { FaEyeSlash } from "react-icons/fa6";
const changeVisibility = () => {
  try {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  } catch (err) {}
};

const SignIn = () => {
  const navigate = useNavigate();

  return (
    <div className="md:w-[480px] overflow-hidden px-2 border-1 rounded-2xl sm:mx-auto pb-36 min-h-full shadow-lg shadow-gray-300 border-gray-400 h-[100%] flex w-full  py-1  md:mt-4 justify-center">
      <div className="md:w-full">
        <div className="status bar flex justify-between">
          <span>9:41</span>
          <div className="flex justify-evenly w-[20%]">
            <FaSignal />
            <IoWifi />
            <IoBatteryFull />
          </div>
        </div>

        <div class="flex min-h-full flex-col justify-center ">
          <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 class="mt-5  text-2xl font-semibold leading-9 tracking-tight text-gray-900">
              Welcome back
            </h2>
          </div>

          <div class="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
            <form class="space-y-6" action="#" method="POST">
              <div class="mt-2">
                <input
                  placeholder="Email"
                  id="email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  required
                  class="block w-full rounded-md outline-none  bg-gray-100 border-none py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />
              </div>

              <div className="flex justify-between rounded-md bg-gray-100 shadow-sm ring-1 ring-inset ring-gray-300  py-1.5 px-2">
                <div>
                  <input
                    id="password"
                    name="password"
                    placeholder="Password"
                    type="password"
                    autocomplete="current-password"
                    required
                    class=" block w-full  px-2  border-none bg-gray-100 outline-none   text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                  />
                </div>
                <span
                  className="flex justify-center items-center px-2"
                  onClick={() => {
                    changeVisibility();
                  }}
                >
                  <FaEyeSlash />
                </span>
              </div>
            </form>
            <div className="mt-24 mb-4">
              <button
                type="submit"
                class="flex w-full justify-center rounded-md bg-blue-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm active:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={() => {
                  navigate("/goals");
                }}
              >
                Sign in
              </button>
            </div>
            <h4 className="textBetween">
              <span>Or</span>
            </h4>
            <div className="flex  mt-8 justify-center ">
              <div className="flex  justify-between">
                <span
                  className="p-2  m-2"
                  style={{ border: "1px solid gray", borderRadius: "5px" }}
                >
                  <Link to="/google.com" target="_blank">
                    <img src="google.png" alt="google" />
                  </Link>
                </span>
                <span
                  className="p-2 px-3 m-2 "
                  style={{ border: "1px solid gray", borderRadius: "5px" }}
                >
                  <Link to="/facebook.com" target="_blank">
                    <img src="fb.png" alt="fb" />
                  </Link>
                </span>
              </div>
            </div>
            <p className="text-center text-gray-400 hover:underline m-2  pb-[75px] text-[15px]">
              Don't have an account yet ?{" "}
              <Link
                to="/signup"
                className="text-purple-400 hover:text-blue-400"
              >
                Create an Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
