import { motion, useAnimation } from "framer-motion"
import gsap from "gsap"
import React, { useState } from "react"

function Featured() {
  const [ishovering, setHovering] = useState(false)
  const cards = [useAnimation(), useAnimation()]

  const handleHover = (index) => {
    cards[index].start({ y: "0" })
  }
  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" })
  }
  return (
    <div className="w-full py-20">
      <div className="w-full px-20 border-b-[1px] border-zinc-800 pb-20">
        <h1 className='text-8xl font-["works sans"] tracking-tight'>
          Featured Projects
        </h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardcontainer1  relative w-1/2 h-[75vh]"
          >
            <h1 className="text-[#CDEA68] absolute left-full -translate-x-1/2 top-1/2 -translate-y-1/2 text-8xl z-[9] font-semibold flex overflow-hidden font['work sans']">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="w-full h-full overflow-hidden bg-green-500 rounded-xl">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
              />
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardcontainer2  relative w-1/2 h-[75vh]"
          >
            <h1 className="text-[#CDEA68] absolute right-full translate-x-1/2 top-1/2 -translate-y-1/2 text-8xl z-[9] font-semibold flex overflow-hidden font['work sans']">
              {"VISE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="w-full h-full overflow-hidden bg-green-500 rounded-xl">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Featured
