import React from "react";
import { FaSignal } from "react-icons/fa6";
import "../src/App.css";
import{ Link} from "react-router-dom"
import { IoWifi } from "react-icons/io5";
import { IoBatteryFull } from "react-icons/io5";
const Signup = () => {
  return (
    <div className="max-w-[480px] border-1 rounded-2xl pb-[88px] shadow-lg shadow-gray-300 border-gray-400 h-[100%] flex w-full  py-1 px-2 mx-auto  justify-center">
      <div>
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
              Create account
            </h2>
          </div>

          <div class="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
            <form class="space-y-6" action="#" method="POST">
              <div>
                <div class="mt-2">
                  <input
                    id="firstname"
                    name="firstname"
                    type="text"
                    placeholder="First name"
                    autocomplete="firstname"
                    required
                    class="block w-full rounded-md  bg-gray-100 border-none py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-200 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <div class="mt-2">
                  <input
                    id="lastname"
                    name="lastname"
                    type="text"
                    placeholder="Last name"
                    autocomplete="lastname"
                    required
                    class="block w-full rounded-md  bg-gray-100 border-none py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-200 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div class="mt-2">
                  <input
                    placeholder="Email"
                    id="email"
                    name="email"
                    type="email"
                    autocomplete="email"
                    required
                    class="block w-full rounded-md  bg-gray-100 border-none py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo-200 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div class="mt-2">
                  <input
                    id="password"
                    name="password"
                    placeholder="Password"
                    type="password"
                    autocomplete="current-password"
                    required
                    class="block w-full rounded-md  py-1.5 bg-gray-100 border-none  px-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-blue-200 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div class="relative flex gap-x-3">
                <div class="flex h-6 items-center">
                  <input
                    id="consent"
                    name="consent"
                    type="checkbox"
                    class="h-4 w-4 border-gray-300 rounded-sm text-indigo-600 focus:ring-blue-400"
                  />
                </div>
                <label for="consent" class="text-sm pt-[2px] text-gray-600">
                  By proceeding i agree to all{" "}
                  <a href="/signin" className="text-purple-400 underline">
                    T&C
                  </a>{" "}
                  and{" "}
                  <a  href="/privacy"className="text-purple-400 underline">Privacy policy</a>
                </label>
              </div>
              <div className="py-6">
                <button
                  type="submit"
                  class="flex w-full justify-center rounded-md bg-blue-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm active:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Create an account
                </button>
              </div>
              <h4 className="textBetween">
                <span>Or</span>
              </h4>
            </form>
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
            <p className="text-center text-gray-400 m-2 text-sm">Already have an account ? <Link to="/signin" className="text-purple-400 hover:text-blue-400">Signin </Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
