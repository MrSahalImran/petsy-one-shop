import { motion } from "framer-motion"
import React from "react"
import { FaArrowUpLong } from "react-icons/fa6"

function Landing() {
  motion
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.2" className="w-full h-screen bg-zinc-900 text-white pt-1">
      <div className="textstruture mt-40 px-16">
        {["Petsy", "A World", "For Everyone"].map((item, index) => {
          return (
            <div className="masker">
              <div className="w-fit flex items-end">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className="w-[9vw] h-[5vw] rounded-md bg-red-500 mr-2"
                  ></motion.div>
                )}{" "}
                <div className='font-["work sans"] uppercase text-[7vw] font-semibold tracking-tighter w-fit leading-[6vw]'>
                  {item}
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className="border-t-[1px] flex items-center justify-between border-zinc-700 mt-32 px-16 py-2">
        {["For public and private companies", "From pitch to ipo"].map(
          (item, index) => {
            return (
              <p className="text-md font-light tracking-tight leading-none">
                {item}
              </p>
            )
          }
        )}
        <div className="start flex gap-2 ">
          <div className="px-4 py-[.5vw] flex items-center justify-center hover:cursor-pointer  hover:bg-white hover:text-zinc-900 border-[1px] border-white rounded-full">
            Start Now
          </div>
          <div className="circle w-fit text-white p-3 items-center justify-center rounded-full border-[1px] border-white rotate-45">
            <FaArrowUpLong />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing
