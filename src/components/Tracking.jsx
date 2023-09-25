import React from 'react'

import Container from '../components/layouts/Container'

import mindkryptonappImg from '../assets/mind-krypton-app.svg'
import bitnetworkImg from '../assets/bitnetwork.svg'

import { motion } from "framer-motion";


const Tracking = () => {
  return (
    <section className='bg-lightBlue pb-[60px] md:pb-[150px] text-white'>
        <Container>
         
            
            <div className="text-center">
                <h2 className='font-cabin font-semibold text-[32px] relative before:absolute before:w-[75px] before:h-[3px] before:bg-primary before:content-[""] before:top-[-34%] before:left-[50%] before:translate-x-[-50%] before:translate-y-[-50%] before:z-10'> Build With Us </h2>
                <p className='font-cabin font-normal text-[18px] pt-[30px] pb-[50px] px-[20px] md:px-[220px]'> With the release of MSC Ecological Supportive Plan by 
                  Mind Smart Chain Foundation, we encourage developers to create their own DApps on MSC and guarantee 
                  multi-dimensional support in funding, tech, market and other resources for quality projects. </p>
            </div>
            <div className="flex flex-col md:flex-row items-center">
                <div className="w-full md:w-3/6 text-center md:text-start">
                    <div className="flex gap-2 items-center justify-center md:justify-start pb-[50px]">
                        <img className='w-[40px]' src={bitnetworkImg} alt="bitnetworkImg" />
                        <h2 className='font-cabin font-semibold text-[18px] md:text-[24px] relative before:absolute before:w-[150px] before:h-[3px] before:bg-primary before:content-[""] before:bottom-[-81%] before:left-[9%] before:translate-x-[-50%] before:translate-y-[-50%] before:z-10 '>Protected by the MIND.</h2>
                    </div>
                    <p className='sm:pr-0 md:pr-[100px] md:px-0 pb-[30px] px-[50px]'>In return for securing the services on the Mindchain DeFi wallet, transaction fees and staking rewards are distributed to MIND stakers. </p>
                    <button className='bg-gradient-to-r from-[#FFBF5E] bg-primary py-2 px-8 uppercase  text-white rounded hover:bg-[#dea029]'><a href="https://mindchain.info">Explore Mindchain</a></button>
                </div>
                <div className="w-full md:w-3/6">
                    <img className="" src={mindkryptonappImg} alt="mindkryptonappImg" />
                </div>
            </div>
            
        </Container>
    </section>
  )
}

export default Tracking
