'use client'

import React, { useState } from "react";
import Image from "next/image";
import { MdAudiotrack, MdOutlineVideoLibrary } from "react-icons/md";

const Accordion = () => {
  const [activeTab, setActiveTab] = useState("video"); 

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <main className="flex flex-col lg:flex-row mt-5">
      <div className="w-full lg:w-[50%] flex justify-center items-center">
  
        {activeTab === "video" && (
          <Image src="/video.png" alt="video content" width="478" height="345" />
        )}
        {activeTab === "audio" && (
          <Image src="/audio.png" alt="video content" width="478" height="345" />
        )}
        {activeTab === "document" && (
          <Image src="/document.png" alt="video content" width="478" height="345" />
        )}
      </div>
      <div className="w-full sm:w-[50%] max-w-lg px-0 sm:px-10 py-8 mx-auto space-y-8">
        <details
          className={`w-full bg-white cursor-pointer mb-3 ${
            activeTab === "video" ? "open" : ""
          }`}
          onClick={() => handleTabClick("video")}
        >
          <summary className="w-full text-white flex justify-between px-4 py-4 after:content-['+'] rounded-[40px] bg-[#407BFF]">
            <div className="flex flex-row space-x-2">
              <MdOutlineVideoLibrary className="w-[20px] h-[20px]" />
              <p>Video Creator</p>
            </div>
          </summary>
          <p className="px-4 py-3 text-left">
            Upload course materials in video format with images, animation that
            offers more clarity and illustrations for practical courses to
            students.
          </p>
        </details>
        <details
          className={`w-full bg-white cursor-pointer mb-3 ${
            activeTab === "audio" ? "open" : ""
          }`}
          onClick={() => handleTabClick("audio")}
        >
          <summary className="w-full text-white flex justify-between px-4 py-4 after:content-['+'] rounded-[40px] bg-[#407BFF]">
            <div className="flex flex-row space-x-2">
              <MdAudiotrack className="w-[20px] h-[20px]" />
              <p>Audio Creator</p>
            </div>
          </summary>
          <p className="px-4 py-3 text-left">
            Create and share audio course materials from your device with your
            students, keeping them plugged in from anywhere and anytime.
          </p>
        </details>

        <details
          className={`w-full bg-white cursor-pointer mb-3 ${
            activeTab === "document" ? "open" : ""
          }`}
          onClick={() => handleTabClick("document")}
        >
          <summary className="w-full text-white flex justify-between px-4 py-4 after:content-['+'] rounded-[40px] bg-[#407BFF]">
            <div className="flex flex-row space-x-2">
              <MdAudiotrack className="w-[20px] h-[20px]" />
              <p>Document Creator</p>
            </div>
          </summary>
          <p className="px-4 py-3 text-left">
            Share and provide access to lecture documents in various word
            formats such as Docx , Ppt, Excel, PDF to students, thereby making
            the process seamless.
          </p>
        </details>
      </div>
    </main>
  );
};

export default Accordion;
