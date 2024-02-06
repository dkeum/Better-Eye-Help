"use client";

import React from "react";
import ReactPlayer from "react-player";
import { saveAs } from "file-saver";

interface VideoPlayerProps {
  videosource: string;
  title: string;
  description?: string;
  downloadlink: string | Blob;
}

const VideoPlayer = ({
  videosource,
  title,
  description,
  downloadlink,
}: VideoPlayerProps) => {
  //video path

  // reference: https://stackoverflow.com/questions/68661632/how-to-implement-file-download-button-in-next-js-window-is-not-defined
  const saveFile = () => {
    saveAs(downloadlink, `${title}.exe`);
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="bg-white rounded-lg border border-indigo-500 w-full min-w-[620px] h-full p-14 md:ml-10">
        <header className="font-bold text-2xl">
          {title} Put Icon Here
          </header>
        <ReactPlayer
          width="500px"
          height="400px"
          url={videosource}
          controls={true}
          // light is usefull incase of dark mode
          light={false}
          // picture in picture
          pip={true}
        />
        <source src={videosource} type="video/mp4" />

        <div className="flex flex-col gap-y-3 mt-5">
          
          <div className="md:hidden flex flex-col gap-y-5">
            <p> Description </p>
            <p> {description} </p>
          </div>
          
          <h1 className="font-semibold">Add the Following to Cart</h1>
          <div className="flex flex-row gap-x-5" >
          <button onClick={saveFile} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full my-5">Free Version</button>
          <button onClick={saveFile} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full my-5">Paid Version</button>
          </div>
          
          
        </div>
      </div>
      <div className="flex flex-col min-w-[300px] min-h-[500px] p-14 md:border-l-4 border-black rounded-lg bg-slate-100 invisible md:visible">
        <p className="font-bold text-2xl text-center">Description</p>
        <p className="font-bold text-lg">{description}</p>

      </div>
    </div>
  );
};

export default VideoPlayer;
