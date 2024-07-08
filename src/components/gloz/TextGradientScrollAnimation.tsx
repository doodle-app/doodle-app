"use client";

// This code is part open-source library glozUI: https://ui.gloz.tech
// Author: @wizsuby
// Please share the library if it's helpful.
// Follow the author on Twitter: https://twitter.com/wizsuby

import { cn } from "@/lib/utils";
import { MotionProps, useScroll } from "framer-motion";
import React, { useRef } from "react";
import { motion } from "framer-motion";

interface TextGradientScrollAnimationProps extends MotionProps {
  text: string;
  className?: string;
}

const TextGradientScrollAnimation = ({ text, className, ...rest }: TextGradientScrollAnimationProps) => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.8", "start 0.25"],
  });

  return (
    <motion.p
      className={cn("text-4xl leading-tight tracking-tighter", className)}
      ref={element}
      style={{ opacity: scrollYProgress }}
      {...rest}
    >
      {text}
    </motion.p>
  );
};

export default TextGradientScrollAnimation;
