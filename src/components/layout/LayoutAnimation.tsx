"use client";

import { motion } from "framer-motion";
//import { PropsWithChildren } from "react";



export default function LayoutAnimation({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial= {{ opacity: 0, y: 20 }}
      animate= {{ opacity: 1, y: 0 }}
      exit = {{ opacity: 0, y: 20 }}
      transition= {{ 
        duration: 0.3, 
        ease: "easeInOut" 
      }}
      className={'w-full h-full flex-1'} 
    >
      {children}
    </motion.div>
  );
}
