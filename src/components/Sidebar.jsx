"use client";

import { motion as m, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Sidebar = () => {
  const [visible, setVisible] = useState(false);
  const sidebarRef = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setVisible(false);
      }
    };

    document.addEventListener("click", handler);

    return () => {
      document.removeEventListener("click", handler);
    };
  });

  return (
    <>
      <button
        onClick={() => setVisible(!visible)}
        className="p-2 mb-4 bg-black text-white"
        id="toggle"
      >
        {visible ? "Close" : "Open"}
      </button>

      <AnimatePresence>
        {visible && (
          <m.div
            initial={{
              x: -160,
            }}
            animate={{
              x: 0,
            }}
            exit={{
              x: -160,
            }}
            transition={{
              ease: "easeInOut",
              duration: 0.2,
            }}
            className="h-full bg-black w-40 fixed left-0 inset-y-0"
            ref={sidebarRef}
          ></m.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
