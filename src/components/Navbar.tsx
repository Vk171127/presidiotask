"use client";

import Link from "next/link";
import React from "react";
import Button from "./Button";
import { IoNotifications } from "react-icons/io5";

const Navbar = () => {
  return (
    <div>
      <div className="px-5 py-5 border-b ">
        <div className="flex justify-between">
          <div>
            <div className="flex items-center ">
              <div className="text-xl font-extrabold pr-2">
                <Link href="/">Behance Clone</Link>
              </div>
              <div className="flex items-center">
                <div className="px-4 hover:underline">
                  <Link href="/">For you</Link>
                </div>
                <div className="px-4 hover:underline">
                  <Link href="/">Discover</Link>
                </div>
                <div className="px-4 hover:underline">
                  <Link href="/">Hire</Link>
                </div>
                <div className="px-4 hover:underline">
                  <Link href="/">Assets</Link>
                </div>
                <div className="px-4 hover:underline">
                  <Link href="/">Jobs</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-end">
            <div className="px-1 mb-2 text-lg cursor-pointer">
              <IoNotifications />
            </div>
            <div className="px-2">
              <Button
                label={"Log In"}
                onClick={() => console.log("Login CLicked")}
                color="white"
              />
            </div>
            <div className="px-2">
              <Button
                label={"Sign Up"}
                onClick={() => console.log("Signup CLicked")}
                color="blue"
              />
            </div>
            <div className="px-2">|</div>
            <div className="px-2">Free Trial</div>
            <div className="px-2">Adobe</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
