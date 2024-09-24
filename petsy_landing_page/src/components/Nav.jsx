import React from 'react';

function Nav() {
  return (
    <div className='fixed z-[999] w-full  flex justify-between items-center px-14 py-5 text-white'>
      <div className='logo text-white'>
        {/* Your logo content goes here */}
      </div>
      <div className='links flex gap-10 '>
        {[
          { name: "Socials", url: "http://localhost:5173/" },
          { name: "Market", url: "http://localhost:3000/" },
          { name: "Report Issue", url: "http://localhost:3001/" }
        ].map((item, index) => (
          <a key={index} target='_blank' href={item.url} className={`text-lg capitalize hover:cursor-pointer font-light ${index === 3 && "ml-[24vw]"}`}>
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Nav;
