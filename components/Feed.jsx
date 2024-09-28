import Story from "./Story";
import WhatsOnYourMind from "./WhatOnYourMind";
import Post from "./Post";

const Feed = () => {

  return (
    <div className="mx-auto mt-4 max-w-[600px] 2xl:max-w-[800px] mb-10">
      <Story />
      <WhatsOnYourMind/>
      <Post/>
    </div>
  );
};

export default Feed;