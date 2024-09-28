import { MdOutlineClose } from "react-icons/md";
import { FiMoreHorizontal } from "react-icons/fi";
import { FaGlobeAmericas } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { TfiComment } from "react-icons/tfi";


const Post = () => {
  
  return (
    <div className="py-4 bg-white rounded-[17px] shadow-md mt-5">
      <div className="px-4 flex justify-between items-center">
        <div className="flex gap-2">
          <img
            className="w-[44px] h-[44px] object-cover rounded-full"
            src="/bill_gates.jpg"
            alt="dp"
          />
          <div>
            <h1 className="text-[16px] font-semibold">manoj chathurange</h1>
            <div className="text-gray-500 flex items-center gap-2">
              <p>1 d</p>
              <p>·</p>
              <FaGlobeAmericas />
            </div>
          </div>
        </div>

      </div>

      <p className="px-4 mt-[15px] text-gray-800 font-normal">caption</p>

      <div className="mt-[15px] ">
        <img src="/food.jpg" alt="" />
      </div>

      <div className="mx-4 h-[1px] bg-gray-300 my-[15px] flex">
        <img src="/like.png" alt="" className="size-[25px]"/>
        <img src="/heart.png" alt="" className="size-[25px]"/>
        <p className="px-2">nimesh dilshan and 30 others</p>
     </div>

      <div className="flex m-5 py-2 text-gray-500">
        <div className="flex gap-2 justify-center items-center w-[50%] py-2 rounded-[10px] hover:bg-gray-200 cursor-pointer">
          <p className="font-medium">Like</p>
        </div>
        <div className="flex gap-2 justify-center items-center w-[50%] py-2 rounded-[10px] hover:bg-gray-200 cursor-pointer">
          <p className="font-medium">Comment</p>
        </div>
        <div className="flex gap-2 justify-center items-center w-[50%] py-2 rounded-[10px] hover:bg-gray-200 cursor-pointer">
          <p className="font-medium">send</p>
        </div>
        <div className="flex gap-2 justify-center items-center w-[50%] py-2 rounded-[10px] hover:bg-gray-200 cursor-pointer">
          <p className="font-medium">share</p>
        </div>
      </div>
    </div>
  );
};

export default Post;