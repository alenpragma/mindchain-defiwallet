import React from 'react'

import Container from './layouts/Container'
import { BiLogoTelegram } from 'react-icons/bi'

// iamges
import navicon from '../assets/mind-krypton.svg'

const Navbar = () => {
  return (
    <nav className='bg-lightBlue py-5 text-white absolute w-full z-10'>
      <Container>
      <div className="flex">
        <div className="left w-1/4">
          <div className="box">
            <img className='w-9 inline-block animate-spin origin-center' src={navicon} alt="icon" /><span className='pl-4 font-cabin font-semibold text-[19px] tracking-widest'>MINDCHAINWALLET</span>
          </div>
        </div>
        <div className="right w-3/4 flex items-center gap-x-2 justify-end">
          <ul className='flex gap-x-6 font-cabin font-normal text-sm uppercase'>
            <li><a href="#">Mindchain Coin</a></li>
            <li><a href="#">pMIND</a></li>
            <li><a href="#">Roadmap</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">
              <BiLogoTelegram className='inline' /> telegram</a></li>
          </ul>
          <button className=' px-7 uppercase ml-[10px] relative z-[1] before:absolute before:z-[-1] before:w-[130px] before:h-[45px] before:skew-x-[-19deg] before:bg-gradient-to-r before:from-[#FFBF5E] before:bg-primary before:content-[""] before:top-[-42%] before:left-[0%] before:rounded '>Register</button>
        </div>
      </div>
      </Container>
    </nav>
  )
}

export default Navbar