import { IoVideocamSharp } from "react-icons/io5";
import { MdOutlinePhotoLibrary } from "react-icons/md";
import { PiCardsThreeLight } from "react-icons/pi";

const WhatsOnYourMind = () => {
  
  return (
    <div  className={`px-4 py-6 bg-white rounded-[17px] shadow-md mt-5 mx-10`}>
      <div className="flex gap-4 border-b border-gray-300 pb-4">
        <img
          className="w-[44px] h-[44px] object-cover rounded-full"
          src="/bill_gates.jpg"
          alt="dp"
        />

        <input
          className="outline-none border-none bg-gray-200 rounded-full p-4 size-[45px]  w-[100%] text-[18px] placeholder:text-gray-600 "
          type="text"
          placeholder="What's on your mind?"
        />
      </div>


      <div className="flex justify-between px-4 pt-6">
        <div className="flex items-center gap-2 cursor-pointer">
          <IoVideocamSharp className="text-[#E42645] text-[30px]" />
          <p className="text-gray-500 font-medium">Live Video</p>
        </div>

        <label htmlFor="filePicker">
          <div className="flex items-center gap-2 cursor-pointer">
            <MdOutlinePhotoLibrary className="text-[#41B35D] text-[30px]" />
            <p className="text-gray-500 font-medium">Photo/video</p>
          </div>

          <input
            type="file"
            name="filePicker"
            hidden
          />
        </label>

        <div className="hidden sm:flex items-center gap-2 cursor-pointer">
          <PiCardsThreeLight  className="text-[#ECBF55] text-[30px]" />
          <p className="text-gray-500 font-medium">Reel</p>
        </div>
      </div>

    </div>
  );
};

export default WhatsOnYourMind;