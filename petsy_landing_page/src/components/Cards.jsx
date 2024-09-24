import React from 'react'

function Cards() {
  return (
    <div className='w-full h-screen py-28 px-20 mt-10 flex gap-5'>
        <div className='w-1/2 h-[50vh] cardcontainer'>
            <div className='card rounded-lg w-full relative flex items-end p-5 justify-start h-full bg-[#004D43]'>
                <h1 className='text-5xl absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] font-semibold text-[#CDEA68]'>petsy Ecommerce</h1>
                <div className='border-2 border-[#CDEA68] rounded-full text-[#CDEA68] px-3 py-1'>©2024</div>
            </div>
        </div>
        <div className='w-1/2 h-[50vh] cardcontainer flex gap-5'>
            <div className='card relative rounded-lg w-1/2 h-full flex items-end justify-start p-5 bg-zinc-600'>
                <h1 className='text-5xl absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] font-semibold text-zinc-300'>Petsy Social</h1>
                {/* <div className='font-semibold border-2 border-zinc-300 px-3 w-fit py-1 rounded-full text-zinc-300'>Report</div> */}
            </div>
            <div className='card relative rounded-lg w-1/2 h-full flex items-end justify-start p-5 bg-zinc-600'>
                <h1 className='text-5xl absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] font-semibold text-zinc-300'>Issue Tracker</h1>
                <div className='font-semibold border-2 border-zinc-300 px-3 w-fit py-1 rounded-full text-zinc-300'>Report</div>
            </div>
        </div>
    </div>
  )
}

export default Cards