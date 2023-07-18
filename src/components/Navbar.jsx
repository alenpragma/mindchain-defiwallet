import React from 'react'
import { useState, useEffect } from 'react'

import Container from './layouts/Container'
import { BiLogoTelegram } from 'react-icons/bi'
import { FaBars } from 'react-icons/fa'

// iamges
import navicon from '../assets/mind-krypton.svg'

const Navbar = () => {

  const [show, setShow] = useState(true);

  useEffect(()=>{
   
    function resizeWidth(e) {

      console.log(window.innerWidth)
  
      if(window.innerWidth < 769) {
        setShow(false)
      } else {
        setShow(true)
      }
    }

    window.addEventListener("resize", resizeWidth)

    
  })


  return (
    <nav className='bg-lightBlue py-5 text-white absolute w-full z-10'>
      <Container>
      <div className="flex flex-col md:flex-row gap-y-[40px] md:gap-y-0 justify-between relative">
        <div className="w-full lg:w-1/4 ">
            <img className='w-9 inline-block animate-spin origin-center' src={navicon} alt="icon" />
            <span className='pl-2 lg:pl-4 font-cabin font-semibold text-[13px]lg:text-[19px] tracking-widest'>MINDCHAINWALLET</span>
        </div>
        <div className="block md:hidden absolute top-[20px] right-[15px] text-[35px] cursor-pointer" onClick={()=> setShow(!show)}><FaBars /></div>
        <div className="w-full md:w-3/4 flex flex-col md:flex-row md:items-center gap-x-2 text-end   md:justify-end">
        {show && 
          <ul className=' flex flex-col md:flex-row gap-y-[15px] md:gap-x-3 lg:gap-x-6 font-cabin font-normal text-sm uppercase text-center'>
            <li className=''><a href="#">Mindchain Coin</a></li>
            <li className='' ><a href="#">pMIND</a></li>
            <li className='' ><a href="#">Roadmap</a></li>
            <li className='' ><a href="#">News</a></li>
            <li className='' ><a href="#">
              <BiLogoTelegram className='hidden lg:inline' /> telegram</a></li>
          </ul>
          }
          <button className=' px-0 md:px-7 uppercase ml-0 md:ml-[10px] relative z-[1] md:before:absolute md:before:z-[-1] md:before:w-[115px] lg:before:w-[120px] md:before:h-[39px] md:before:skew-x-[-19deg] md:before:bg-gradient-to-r md:before:from-[#FFBF5E] md:before:bg-primary md:before:content-[""] md:before:top-[40%] md:before:left-[53%] md:before:rounded text-center  md:text-start hidden md:block before:translate-y-[-50%] before:translate-x-[-50%]'>Register</button>
          </div>
      </div>
      </Container>
    </nav>



  )
}

export default Navbar
