import { motion } from "framer-motion"
import React from "react"

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className="w-full py-16  bg-[#004D43] rounded-t-3xl">
      <div className="text border-t-2 border-b-2 flex whitespace-nowrap overflow-hidden border-zinc-300">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 20 }}
          className="uppercase pr-20 -mt-[6vw] -mb-[4vw] text-[20vw] font-bold text-white font-[work sans]"
        >A World For Everyone
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 20 }}
          className="uppercase pr-20 -mt-[6vw] -mb-[4vw] text-[20vw] font-bold text-white font-[work sans]"
        >
          {" "}
          A World For Everyone
        </motion.h1>
      </div>
    </div>
  )
}

export default Marquee
