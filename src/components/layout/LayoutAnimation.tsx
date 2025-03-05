"use client";

import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

//not needed but best practice, comes in handy.
type LayoutAnimationChildProps = PropsWithChildren<{
  className?: string;
}>;

export default function LayoutAnimation({ children, className = "" }: LayoutAnimationChildProps) {
  return (
    <motion.div
      initial= {{ opacity: 0, y: 20 }}
      animate= {{ opacity: 1, y: 0 }}
      exit = {{ opacity: 0, y: 20 }}
      transition= {{ 
        duration: 0.3, 
        ease: "easeInOut" 
      }}
      className={'w-full h-full flex-1 ${className}'} 
    >
      {children}
    </motion.div>
  );
}
