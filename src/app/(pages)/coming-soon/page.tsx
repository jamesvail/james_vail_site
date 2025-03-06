"use client";

import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

const ComingSoon = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      
      {/* background w/ gradient, doesn't do too much. */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-primary via-secondary to-accent opacity-40"></div>
      <div className="absolute inset-0 w-full h-full bg-[url('/images/heroBackground.jpeg')] bg-cover bg-center bg-no-repeat opacity-30"></div>

      {/* page content, testing framer motion. */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.5 }}
        className="relative p-10 bg-primary/80 rounded-lg shadow-xl hover:scale-105 transition-transform w-full max-w-[600px]"
      >
        <h1 className="text-4xl font-bold text-text w-full">
          <Typewriter
            options={{
              strings: ["Coming Soon!!!", "Not Here Yet :(", "Very soon!!!!", "I promise!!"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <p className="mt-2 text-lg text-secondary w-full">James Vail</p>
      </motion.div>
    </section>
  );
};

export default ComingSoon;
