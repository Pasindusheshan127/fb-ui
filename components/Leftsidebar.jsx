import LeftSidebarLink from "./LeftSidebarlink";;
import { BsChevronDown } from "react-icons/bs";

const LeftSidebar = () => {


  return (
    <div className="px-4 fixed mt-5 hidden lg:block">
      <div className="flex flex-col gap-2">
        <LeftSidebarLink image="/bill_gates.jpg" text="kavind visanka"/>
        <LeftSidebarLink image="/friends.png" text="Friends" />
        <LeftSidebarLink image="" text="Professional dashboard"/>
        <LeftSidebarLink image="" text="Feeds"/>
        <LeftSidebarLink image="/group.png" text="Groups" />
        <LeftSidebarLink image="/market.png" text="Marketplace" />
        <LeftSidebarLink image="" text="Video" />
        <LeftSidebarLink image="" text="Memories" />

        <div className="flex items-center gap-3 w-[300px] py-2 pl-1 cursor-pointer hover:bg-gray-300">
          <div className="bg-gray-300 h-[30px] w-[30px] grid place-items-center rounded-full">
            <BsChevronDown />
          </div>
          <h1 className="text-[16px] font-medium">See More</h1>
        </div>
        <hr className=""/>
        <div className="">
          <h1 className="text-gray-400">Your Shortcuts</h1>
          <div className="flex mb-4">
           <img className="h-[30px] w-[30px] rounded-full" src="" alt="icon" />
            <p>8 Ball Pool</p>
          </div>
          <div className="flex mb-4">
           <img className="h-[30px] w-[30px] rounded-full" src="" alt="icon" />
            <p>Monster Legends</p>
          </div>
        </div>
        <p className="text-[12px] text-gray-600 mt-2 font-semibold">
          Privacy · Terms · Advertising · Ad choices · <br /> Cookies · Meta ©
          2022
        </p>
      </div>
    </div>
  );
};

export default LeftSidebar;