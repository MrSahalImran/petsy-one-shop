import React from 'react'

function Footer() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".8" className='flex gap-10 w-full min-h-screen bg-zinc-100 text-black p-20 pb-10'>
        <div className='w-1/2 flex flex-col items-start justify-between'>
            <h1 className='text-[6vw] leading-none font-bold tracking-tighter'>EYE-<br></br>OPENING</h1>
            <h1 className='text-3xl font-medium'>petsy</h1>
        </div>
        <div className='w-1/2'>
        <h1 className='text-[6vw] font-bold uppercase  '>operations</h1>
            <div className='socials flex flex-col gap-10 mt-20'>
                <a className='block text-xl font-light ' href="#">Facebook</a>
                <a className='block text-xl font-light ' href="#">Instagram</a>
                <a className='block text-xl font-light ' href="#">Twitter</a>
                <a className='block text-xl font-light ' href="#">Linkedin</a>
            </div>

        </div>

    </div>
  )
}

export default Footer