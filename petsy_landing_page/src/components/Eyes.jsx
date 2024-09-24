import React, { useEffect, useState } from 'react'

function Eyes() {

    const [rotate,setRotate]=useState(0);
    useEffect(() => {
        window.addEventListener("mousemove",(event)=>{
            let mouseX=event.clientX;
            let mouseY=event.clientY;

            let deltaX=mouseX-(window.innerWidth/2);
            let deltaY=mouseY-(window.innerHeight/2);
            let angle=Math.atan2(deltaY,deltaX)*(180/Math.PI); 
            setRotate(angle-180)
        })
    })
  return (
    <div className='eyes w-full h-screen overflow-hidden rounded-t-3xl'>
        <div data-scroll data-scroll-speed="-.7" className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
            <div className='flex items-center justify-between absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-1/3 h-fit '>
                <div className='w-[15vw] h-[15vw] bg-slate-50 rounded-full flex items-center justify-center'>
                    <div className='w-[10vw] h-[10vw] bg-black rounded-full relative '>
                        <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className='absolute line  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full rotate-0 h-5 '>
                            <div className='w-5 h-5 bg-slate-50 rounded-full'></div>
                        </div>
                    </div>
                </div>
                <div className='w-[15vw] h-[15vw] bg-slate-50 rounded-full flex items-center justify-center'>
                    <div className='w-[10vw] h-[10vw] bg-black rounded-full relative '>
                        <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className='absolute line  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full rotate-0 h-5 '>
                            <div className='w-5 h-5 bg-slate-50 rounded-full'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Eyes