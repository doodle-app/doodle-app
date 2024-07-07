"use client";
 
// This code is part open-source library glozUI: https://ui.gloz.tech
// Author: @wizsuby
// Please share the library if it's helpful.
// Follow the author on Twitter: https://twitter.com/wizsuby
 
import { cn } from "@/lib/utils";
import { HTMLAttributes, useEffect, useRef } from "react";
import {  motion, useAnimation, useInView } from "framer-motion";
 
interface StaggeredTextAnimationProps extends HTMLAttributes<HTMLDivElement> {
  text: string;
}
 
const textAnimationVarient = {
  hidden: { y: 150 },
  visible: { y: 0 },
};
 
const StaggeredTextAnimation = ({
  text,
  className,
  ...props
}: StaggeredTextAnimationProps) => {
  const textArray = text.split(" ");
  const ref = useRef(null)
  const controls = useAnimation()
  const inView = useInView(ref)
 
  useEffect(()=> {
    if(inView) controls.start("visible")
  }, [controls, inView])
 
 
  return (
    <p
      className={cn("text-9xl font-semibold flex flex-wrap ", className)}
      ref={ref}
      {...props}
    >
      {textArray.map((word, workIndex) => (
        <span
          className="
          before:w-full 
          before:h-full 
          before:block 
          before:absolute
          relative
          overflow-hidden
          block
          pb-5"
          key={`${word}--${workIndex}`}
        >
          {word.split("").map((char, charIndex) => (
            <motion.span
              variants={textAnimationVarient}
              initial="hidden"
              animate={controls}
              transition={{
                duration: 0.5,
                delay: charIndex * 0.05,
                ease: [0.44, 0.13, 0.23, 0.96],
              }}
              key={`${char}--${charIndex}`}
              className="inline-block relative z-10"
            >
              {char}
            </motion.span>
          ))}
          <span>&nbsp;</span>
        </span>
      ))}
    </p>
  );
};
 
export default StaggeredTextAnimation;