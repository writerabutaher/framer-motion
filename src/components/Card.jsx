"use client";

import { AnimatePresence, motion as m } from "framer-motion";
import { useState } from "react";

const Card = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <m.button
        onClick={() => setVisible(!visible)}
        className="p-2 mb-4 bg-black text-white"
        layout
      >
        {visible ? "Hide" : "Show"}
      </m.button>
      <AnimatePresence mode="popLayout">
        {visible && (
          <m.div
            className="w-40 h-40 bg-black"
            initial={{
              rotate: "0deg",
              scale: 0,
            }}
            animate={{
              rotate: "90deg",
              scale: 1,
            }}
            exit={{
              rotate: "0deg",
              scale: 0,
            }}
            transition={{
              duration: 1,
              ease: "backInOut",
            }}
          ></m.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Card;
