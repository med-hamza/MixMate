import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { RiCloseLine } from 'react-icons/ri'
import { HiMenuAlt2 } from "react-icons/hi";
import { logo } from "../assets";
import mixmate from "../assets/mixmate.png"
import {links} from '../assets/constants';
import Sartist from '../assets/selena-gomez.jpg'
import Soartist from '../assets/soolking.jpg'
import SBaartist from '../assets/bruno_mars.jpg'
import SGartist from '../assets/ghali.jpg'

const LinksItem= ({ handleClick }) =>(
   <div className={`${handleClick ? 'row' : 'items-center justify-center px-3' }`}>
  {links.map((item)=> (
    <NavLink
    key={item.key}
    to={item.to}
    className={`flex flex-row justify-start items-center my-8 
    text-sm mr-5 font-medium text-[#0F1E36] hover:text-[#3E2AD1]`}
    onClick={()=> handleClick && handleClick()}
   > 
   <item.icon className="w-6 h-6 mr-2" />
      {item.name}
    </NavLink>
  ))}
       <h2 className=" font-semibold mb-4">Playlist </h2>
       <div>
        <Link to="/search/Selena%20Gomez">
        <div className="flex flx-row items-center mb-4">
        <div className="mr-2">
        <img src={Sartist} alt="selen gomez" className="w-16 h-16 rounded-lg" />
        </div>
        <div> 
          <p className="text-lg	"> Selena Gomez </p>
        </div>
        </div>
        </Link>
        <Link to="/search/soolking">
        <div className="flex flx-row items-center mb-4">
        <div className="mr-2">
        <img src={Soartist} alt="soolking" className="w-16 h-16 rounded-lg" />
        </div>
        <div> 
          <p className="text-lg	"> Soolking</p>
        </div>

        </div>
        </Link>
        <Link to="/search/bruno%20mars">
        <div className="flex flx-row items-center mb-4">
        <div className="mr-2">
        <img src={SBaartist} alt="soolking" className="w-16 h-16 rounded-lg" />
        </div>
        <div> 
          <p className="text-lg	"> Bruno mars</p>
        </div>

        </div>
        </Link>
        <Link to="/search/ghali">
        <div className="flex flx-row items-center mb-4">
        <div className="mr-2">
        <img src={SGartist} alt="soolking" className="w-16 h-16 rounded-lg" />
        </div>
        <div> 
          <p className="text-lg	">Ghali</p>
        </div>

        </div>
        </Link>
       </div>
   
   </div>
)

const Sidebar = () => {
  const [mobileMenuOpen ,setMobileOpen ] =useState(false);
   return (
    <>
   
    <div className="md:flex hidden flex-col w-[240px]
    py-15px px-3 border-r-2 border-[#EEEEEE] ">
   <Link to="/">  <img src={mixmate} alt="logo" className=" w-20 mt-4 mb-4 object-contain center-logo" /></Link>
     <LinksItem />
    </div>
    
    <div className="absolute md:hidden block top-6 right-3">
      {mobileMenuOpen ? (
          <RiCloseLine  className="w-6 h-6 text-[#0F1E36] mr-2"
          onClick={()=> setMobileOpen(false)} /> 
      ): (
        <HiMenuAlt2  className="w-6 h-6 text-[#0F1E36] mr-2"
        onClick={()=> setMobileOpen(true)} />
      )
  
    }
    </div>
    <div className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#4a7ebd]
    backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${mobileMenuOpen ? 'left-0' : '-left-full'} `}>
      <div className="md:flex flex-col w-[240px]
    py-15px px-3">
  <Link to="/"> <img src={mixmate} alt="logo" className="mt-4 w-20 mb-4 object-contain" /> </Link>
   
    </div>
    <LinksItem handleClick={()=> setMobileOpen(false)} />
    </div>

    </>
   )
 

};

export default Sidebar;
