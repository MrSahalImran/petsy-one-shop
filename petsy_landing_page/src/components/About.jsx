import { motion } from "framer-motion"
import React from "react"

function About() {

  return (
    <div data-scroll data-scroll-section data-scroll-speed="0" className="w-full p-20 bg-[#CDEA68] rounded-t-3xl">
      <h1 className="text-[4vw] leading-[4vw] tracking-tight">
      Petsy, a cutting-edge website developed to replace conventional pet adoption process with modern tools in care and related services, is designed. The purpose of this project is to present an alternative to conventional methods with use of advanced and online-based 
practices.
      </h1>
      <div className="w-full border-t-[1px] flex mt-16 pt-10 border-[#8fa247]">
        <div className="w-1/2 ">
          <h1 className="text-[4vw] tracking-tighter font-medium">
            Our Approach
          </h1>
          <button className="px-5 py-3 flex items-center gap-8 bg-zinc-900 rounded-full text-white text-xl tracking-tighter">
            Read More
            <div className=" w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 bg-[#8fa247] h-[70vh] rounded-3xl">
          <img src='../assets/logo.svg' alt="" />
        </div>
      </div>
    </div>
  )
}

export default About
