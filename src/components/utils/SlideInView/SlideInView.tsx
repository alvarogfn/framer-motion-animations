import { useInView, motion, useAnimationControls } from "framer-motion";
import React from "react";

interface props {
  children: React.ReactNode;
}

export default function SlideInView({ children }: props) {
  const ref = React.useRef(null);
  const isInView = useInView(ref);
  const controls = useAnimationControls();

  React.useEffect(() => {
    if (isInView) controls.start(animate);
  }, [isInView]);

  const initial = {
    opacity: 0,
    x: -50,
  };

  const animate = {
    opacity: 1,
    x: 0,
  };

  return (
    <motion.div
      initial={initial}
      animate={controls}
      transition={{ duration: 0.4, delay: 1 }}
      ref={ref}
    >
      {children}
    </motion.div>
  );
}
