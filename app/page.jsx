
import Navbar from "../components/Navbar";
import LeftSidebar from "../components/Leftsidebar";
import RightSidebar from "../components/Rightsidebar";
import Feed from "../components/Feed";

export default function Home() {
  return (
  <div className="">
    <Navbar />
    <LeftSidebar/>
    <RightSidebar/>
    <Feed/>
  </div>
  );
}
