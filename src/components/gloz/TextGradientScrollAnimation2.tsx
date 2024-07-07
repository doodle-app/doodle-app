"use client";
 
// This code is part open-source library glozUI: https://ui.gloz.tech
// Author: @wizsuby
// Please share the library if it's helpful.
// Follow the author on Twitter: https://twitter.com/wizsuby
 
import { cn } from "@/lib/utils";
import {
  MotionValue,
  useScroll,
  useTransform
} from "framer-motion";
import {
  HTMLAttributes, ReactNode,
  useRef
} from "react";
import { motion } from "framer-motion";
 
interface TextGradientScrollAnimationProps
  extends HTMLAttributes<HTMLParagraphElement> {
  text: string;
  className?: string;
}
 
const TextGradientScrollAnimation2 = ({
  text,
  className,
  ...rest
}: TextGradientScrollAnimationProps) => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.8", "start 0.25"],
  });
 
  const words = text.split(" ");
 
  return (
    <p
      className={cn(
        "text-4xl cursor-default max-w-[70rem] leading-tight tracking-tighter font-bold flex flex-wrap",
        className
      )}
      ref={element}
      {...rest}
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
 
        return (
          <Word progress={scrollYProgress} range={[start, end]} key={i}>
            {word}
          </Word>
        );
      })}
    </p>
  );
};
 
interface WordProps {
  children: ReactNode;
  range: number[];
  progress: MotionValue<number>;
}
 
const Word = ({ children, progress, range }: WordProps) => {
  const opacity = useTransform(progress, range, [0.1, 1]);
  return (
    <span>
      <motion.span style={{ opacity }}>{children}</motion.span>
      <span>&nbsp;</span>
    </span>
  );
};
 
export default TextGradientScrollAnimation2;