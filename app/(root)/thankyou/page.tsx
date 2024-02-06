"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
const SHAPES = ["square", "triangle"];
const COLOR_DIGIT = "ABCDEF1234567890";

const ThankYouPage = () => {
  const [isConfettiActive, setConfettiActive] = useState(true);
  const containerRef = useRef(null);
  useEffect(() => {
    if (isConfettiActive) {
      generateConfetti();
      setConfettiActive(false)
    }
  }, [isConfettiActive]);

  const generateRandomColor = () => {
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += COLOR_DIGIT[Math.floor(Math.random() * COLOR_DIGIT.length)];
    }
    return color;
  };

  const generateConfetti = () => {
    const container = containerRef.current;
    if (container) {
      for (let i = 0; i < 50; i++) {
        const confetti = document.createElement("div");
        const positionX = Math.random() * window.innerWidth;
        const positionY = Math.random() * window.innerHeight;
        const rotation = Math.random() * 360;
        const size = Math.floor(Math.random() * (20 - 5 + 1)) + 5; // Set confetti styles
        confetti.style.left = `${positionX}px`;
        confetti.style.top = `${positionY}px`;
        confetti.style.transform = `rotate(${rotation}deg)`;
        confetti.className =
          "confetti " + SHAPES[Math.floor(Math.random() * 3)];
        confetti.style.width = `${size}px`;
        confetti.style.height = `${size}px`;
        confetti.style.backgroundColor = generateRandomColor(); // Append confetti to the container
        //@ts-ignore
        container.appendChild(confetti);
        // Remove confetti element after animation duration (4 seconds)
        setTimeout(() => {
            //@ts-ignore
          container.removeChild(confetti);
        }, 4000);
      }
    }
  };

  return (
    <div
      id="confetti-container"
      ref={containerRef}
      className="max-w-screen-2xl bg-slate-100 w-full min-h-screen mx-auto flex items-center justify-center"
    >
      <div className="flex flex-col gap-y-5">
        <h1 className="bg-gradient-to-r from-pink-600 via-purple-500 to-indigo-400 bg-clip-text text-transparent font-extrabold text-3xl">
          Thanks For your Patronage
        </h1>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-5 ">Back to Home page</button>
      
        <div>
          <header>
            Join our Community for customer support or any questions 
          </header>

          <div>
            <Link href="/discord_link">
              <Image
                src="/discord.png"
                alt="discord logo"
                width={50}
                height={50}
              />
            </Link>
            Discord
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
