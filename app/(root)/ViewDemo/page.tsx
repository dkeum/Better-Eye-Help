"use client"


import VideoPlayer from "@/components/VideoPlayer";


const LiveDemo = () => {

  return (
    <div className=" min-h-screen max-w-screen-2xl w-full flex flex-col gap-5-10 md:flex-row justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mt-10 mx-auto gap-x-10">
        <VideoPlayer videosource="/temp.mp4" title="Posture Plus" downloadlink={"temp"}/>    
    </div>
  );
};

export default LiveDemo;
