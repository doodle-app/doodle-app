import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const FadeInAnimation = ({ children }: any) => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.8", "start 0.25"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <motion.div ref={element} style={{ opacity }}>
      {children}
    </motion.div>
  );
};

export default FadeInAnimation;
