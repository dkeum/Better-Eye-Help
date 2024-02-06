"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { useState, useCallback, useEffect } from "react";
import { EmblaOptionsType } from "embla-carousel";
import { flushSync } from "react-dom";
import "@/app/custom_css_styles/embla.css";
import Autoplay from 'embla-carousel-autoplay'

interface HeroCarouselProps {
  className?: string;
  options?: EmblaOptionsType;
}

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { cn } from "@/lib/utils";

const TWEEN_FACTOR = 4.2;

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);

const HeroCarousel = ({ className, options }: HeroCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);
  const [tweenValues, setTweenValues] = useState<number[]>([]);

  const onScroll = useCallback(() => {
    if (!emblaApi) return;

    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();

    const styles = emblaApi.scrollSnapList().map((scrollSnap, index) => {
      let diffToTarget = scrollSnap - scrollProgress;

      if (engine.options.loop) {
        engine.slideLooper.loopPoints.forEach((loopItem) => {
          const target = loopItem.target();
          if (index === loopItem.index && target !== 0) {
            const sign = Math.sign(target);
            if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
            if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
          }
        });
      }
      const tweenValue = 1 - Math.abs(diffToTarget * TWEEN_FACTOR);
      return numberWithinRange(tweenValue, 0, 1);
    });
    setTweenValues(styles);
  }, [emblaApi, setTweenValues]);

  useEffect(() => {
    if (!emblaApi) return;

    onScroll();
    emblaApi.on("scroll", () => {
      flushSync(() => onScroll());
    });
    emblaApi.on("reInit", onScroll);
  }, [emblaApi, onScroll]);

  const slides = [
    {img: "/person_withHeadache.jpg", title:"Stop Having Headache"},
    {img:"/PersonChatbot.jpg", title:"Use our Custom Solution"},
    {img:"/happyPersonComputer.jpg", title:"Be Pain Free"},
  ];

  return (
    <div className={cn("embla max-w-screen-2xl w-2/3 md:flex md:flex-row md:items-center  mx-auto bg-gradient-to-r from-blue-600 to-purple-500 rounded-full",className)}>
      
      <div className="w-[100px] h-[100px] bg-white invisible md:visible rounded-full flex justify-center items-center">
        <div className="w-[50px] h-[50px] bg-black rounded-full"></div>
      </div>
      
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container rounded-lg">
          {slides.map((imgPath, index) => (
            <Card
              className="embla__slide min-w-[200px]"
              key={index}
              style={{
                ...(tweenValues.length && { opacity: tweenValues[index] }),
              }}
            >
              <CardContent>
                <div className="my-5 z-50 text-2xl text-center font-bold">
                  <span>{index+1}. {imgPath.title}</span>
                </div>

                <Image
                  className="embla__slide__img"
                  src={imgPath.img}
                  alt="Your alt text"
                  width={300}
                  height={300}
                /> 

              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="w-[100px] h-[100px] bg-white invisible md:visible rounded-full flex justify-center items-center">
        <div className="w-[50px] h-[50px] bg-black rounded-full"></div>
      </div>
    </div>
  );
};

export default HeroCarousel;
