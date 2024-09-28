import React from "react";
import { RiVideoAddFill } from "react-icons/ri";
import { BiSearch, BiEdit } from "react-icons/bi";
import { BsThreeDots } from "react-icons/bs";
import FriendRequests from "./Frienrequest";
import Contact from "./contact";

const RightSidebar = () => {
  return (
    <div className="fixed hidden xl:block top-16 right-0 w-[300px] mt-6 px-4 h-screen overflow-y-scroll">
      <div>
        <div className="flex justify-between">
          <h1 className="font-semibold text-gray-600 text-[18px]">
            Friend requests
          </h1>
          <p className="text-primary">See All</p>
        </div>

        <div className="mt-4">
          <FriendRequests />

          <div className="h-[2px] bg-gray-300 my-5"></div>

          <div className="my-5">
            <h1 className="font-semibold text-gray-600 text-[18px] ">
              Birthdays
            </h1>
            <div className="flex ">
            <img src="/gift.png" alt=""  className="size-[20px]"/>
            <p className="text-primary px-2">Ravindu jayaweera and 8 others have birthday today </p>
            </div>
          </div>

          <div className="h-[2px] bg-gray-300 my-5"></div>

          <div className="flex items-center justify-between">
            <h1 className="font-semibold text-gray-600 text-[18px]">Contact</h1>
            <div className="flex gap-4">
              <BiSearch />
              <BsThreeDots />
            </div>
          </div>

          <Contact />
          <Contact />
          <Contact />
          <Contact />
          <Contact />

          <div className="bg-gray-300 h-[44px] w-[44px] grid place-items-center text-[26px] rounded-full fixed right-0 bottom-0 mr-8 mb-8">
            <BiEdit />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;