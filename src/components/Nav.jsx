import ham from '../assets/nav.png'
import logo from '../assets/logo.png'
import { useEffect, useState } from 'react'
import { IoCloseSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import {Link} from "react-router-dom"
const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle=()=>{
    setIsOpen(!isOpen)
  }
  useEffect(() => {
    if (isOpen){
      document.body.style.overflow="hidden";
    } else {
      document.body.style.overflow="auto";
    }
  
    return () => {
      document.body.style.overflow="auto";
    };
  }, [isOpen]);
  
  return (
    <>
     <nav className="shadow-lg w-full fixed z-40 bg-white">
       <div className="bg-white flex items-center justify-between w-[90%] m-auto h-13">
          <div>
           <Link to="/"><img src={logo} alt="" className='w-[150px]' /></Link>
          </div>
          <div className='md:hidden ' onClick={toggle}>
            {isOpen ? <IoCloseSharp className='text-xl'/>:<GiHamburgerMenu className='text-xl'/>}
          </div>
          <div className='hidden md:block'>
            <ul className='flex gap-5 font-semibold'>
              <li className='hover:text-yellow-600 cursor-pointer'>Home</li>
              <li className='hover:text-yellow-600 cursor-pointer'>Products</li>
              <li className='hover:text-yellow-600 cursor-pointer'>About</li>
              <li className='hover:text-yellow-600 cursor-pointer'>Contact</li>
            </ul>
          </div>
       </div>
       {/* Responsive Nav Design Here */}
       <div className={`fixed z-40 bg-[#272623] h-screen w-[70%] right-0 transform transition-transform duration-300 ease-in-out ${isOpen? "translate-x-0" : "translate-x-full"}`}>
         <ul className='text-white ps-15 pt-10 flex flex-col gap-7 text-4 font-bold font-sans'>
          <li onClick={toggle}><Link to="/">Home</Link></li>
          <li>Products</li>
          <li onClick={toggle}><Link to="/about">About</Link></li>
          <li>Contact</li>
         </ul>
       </div>
       {/* blank cover */}
       <div className={`w-full h-screen bg-[#696969] opacity-50 z-30 ${isOpen?"fixed":"hidden"}`} onClick={toggle}>

       </div>
     </nav>
    </>
  )
}

export default Nav