import React, { useEffect, useRef } from 'react'
import Container from '../components/layouts/Container'

// images
import bannerMainImg from '../assets/images/banner/mind-buildings 1.svg'

import bannerOneImg from '../assets/images/banner/Group 4.svg'
import bannerTwoImg from '../assets/images/banner/Group 16.svg'
import bannerThreeImg from '../assets/images/banner/Group 10.svg'
import bannerFourImg from '../assets/images/banner/Group 15.svg'
import solorShape from '../assets/solar.svg'

import gsap  from 'gsap'
import {ScrollTrigger}  from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)



const Banner = () => {

  const banneLeft = useRef(null)
  
  useEffect(()=>{
    //  animation
    const banel = banneLeft.current
    gsap.fromTo(banel, {duration: 3}, {x: 0}, {x: -500 , scrollTrigger : {
      trigger: banel,
      toggleActions: "restart pause resume pause",
      
    }})
    
  },[banneLeft])


  return (

    
    <section className='bg-lightBlue text-white relative'>

        <Container>
        <img className='absolute top-[-517px] left-[-387px] origin-center rotate-[240deg] w-[64%] z-[100] hidden lg:block' src={solorShape} alt="solorShape" />
            <div className="flex justify-between items-center pt-[170px] pb-[90px] w-full animate-fade-down animate-once">
            
                <div className="w-full md:w-[35%] text-center md:text-start ">
                    <h1 className='font-cabin font-semibold text-[35px] md:text-5xl leading-[1.125]'> Next Generation Blockchain Ecosystem </h1>
                    <p className='font-cabin font-ligt text-xl py-[25px] px-[30px] md:px-0 pb-[30px]'> Our mission is to build a Global Decentralized Ecosystem to cover all areas of the world using multiple blockchain technologies along with the Mindchain Ecosystem.</p>
                    <div className="flex flex-col md:flex-row gap-3 md:w-full mx-auto md:mx-0">
                        <button className='bg-gradient-to-r from-[#FFBF5E] bg-primary py-[5px] lg:py-4 md:px-7 uppercase rounded hover:bg-[#dea029] flex-none w-[200px] lg:w-[50%] mx-auto'>Get Started</button>
                        <button className='bg-gradient-to-r from-[#FFBF5E] bg-primary py-[5px] lg:py-4 md:px-11 uppercase rounded hover:bg-[#dea029] flex-none w-[200px] lg:w-[50%] mx-auto'>Login</button>
                    </div>
                </div>
                <div className="md:w-[50%] relative text-end hidden md:block" ref={banneLeft}>
                    <img className=' inline w-full' src={bannerMainImg} alt="bannerMainImg" />
                    <img className=' w-[10%] upDown-animation_1 absolute top-[15%] left-[28%] translate-x-[-50%] translate-y-[-50%]' src={bannerOneImg} alt="bannerMainImg" />
                    <img className=' inline upDown-animation_2 w-[10%] absolute top-[34%] right-[50%] translate-x-[-50%] translate-y-[-50%]' src={bannerTwoImg} alt="bannerMainImg" />
                    <img className=' inline upDown-animation_3 w-[10%] absolute top-[13%] right-[33%] translate-x-[-50%] translate-y-[-50%]' src={bannerThreeImg} alt="bannerMainImg" />
                    <img className=' inline upDown-animation_4 w-[10%] absolute top-[-2%] right-[24%] translate-x-[-50%] translate-y-[-50%]' src={bannerFourImg} alt="bannerMainImg" />                </div>
            </div>
        </Container>
    </section>
  )
}

export default Banner