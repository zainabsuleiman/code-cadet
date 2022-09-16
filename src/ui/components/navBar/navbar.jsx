import React from "react";
import { TiArrowUpThick } from 'react-icons/ti'



const Navbar = () => {
  return (
    <nav className="flex  items-center justify-around bg-primary font-mono font text-base py-2" >
      <div className="flex items-center gap-2">
        <span className="flex tracking-tighter text-bgcolor1 items-center "><span className="text-lg font-extrabold">&#60;</span><TiArrowUpThick className="text-text1"/> <span className="text-lg font-extrabold">&#62;</span></span>
        <span className="text-text1 space-y-0">
          Coding <br /> Cadet
        </span>
      </div>
      <ul className="flex text-text2 gap-6">
        <li className="hover:bg-second py-1 px-2 rounded">Training</li>
        <li className="hover:bg-second py-1 px-2 rounded">Talents</li>
        <li className="hover:bg-second py-1 px-2 rounded">Test</li>
        <li className="hover:bg-second py-1 px-2 rounded">for Business</li>
        
      </ul>
      <button className="text-center text-bgcolor1 bg-second px-2 py-1 rounded hover:bg-[#e48934]">Get started</button>
     
    </nav>
  );
};
        

export default Navbar;
