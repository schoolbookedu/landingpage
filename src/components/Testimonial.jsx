'use client'

import React, { useState, useEffect } from "react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    content:
      "It bothered me that many people are going through similar stress and yet they have no clue that there’s a lasting solution for them. “Have you heard of schoolbook?” I asked her while still focusing on my steering wheel. She released a sigh of relief at that time and demanded to know more . I explained to her all about it and how she can subscribe to it. Afterwards, I could tell how happy she was because she almost chopped off my ears with thank you.",
  },
  {
    id: 2,
    content:
      "Hey bothered me that many people are going through similar stress and yet they have no clue that there’s a lasting solution for them. “Have you heard of schoolbook?” I asked her while still focusing on my steering wheel. She released a sigh of relief at that time and demanded to know more . I explained to her all about it and how she can subscribe to it. Afterwards, I could tell how happy she was because she almost chopped off my ears with thank you.",
  },
  {
    id: 3,
    content:
      "Hi bothered me that many people are going through similar stress and yet they have no clue that there’s a lasting solution for them. “Have you heard of schoolbook?” I asked her while still focusing on my steering wheel. She released a sigh of relief at that time and demanded to know more . I explained to her all about it and how she can subscribe to it. Afterwards, I could tell how happy she was because she almost chopped off my ears with thank you.",
  },
];

const Testimonial = () => {
  const [currentCard, setCurrentCard] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCard((prevCard) => (prevCard + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="flex flex-col m-auto p-auto">
      <div className="relative overflow-hidden hide-scroll-bar w-[100%] md:w-[500px] h-[700px] md:h-[500px] mt-5">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`absolute top-0 w-full h-full flex transition-transform duration-1000 ${
              index === currentCard ? "left-0" : "-left-full"
            }`}
          >
            <div
              className="w-full md:h-[500px] border-[20px] border-[#0B004E] px-8 pt-4 pb-12"
            >
              <div className="space-y-4">
                <Image src="/logo.png" alt="logo" width="60" height="60" />
                <p className="text-[#000] font-bold text-sm leading-8 pb-12">
                  {testimonial.content}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="justify-center mt-4 hidden">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={`w-4 h-4 rounded-full mx-2 ${
              index === currentCard ? "bg-[#0B004E]" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </main>
  );
};

export default Testimonial;
