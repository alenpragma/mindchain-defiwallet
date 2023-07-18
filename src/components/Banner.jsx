import React from 'react'
import Container from '../components/layouts/Container'

// images
import bannerImg from '../assets/mind-buildings.svg'
import solorShape from '../assets/solar.svg'

const Banner = () => {
  return (
    <section className='bg-lightBlue text-white relative'>
        <Container>
        <img className='absolute top-[-517px] left-[-387px] origin-center rotate-[240deg] w-[64%] z-[100]' src={solorShape} alt="solorShape" />
            <div className="flex justify-between items-center pt-[170px] pb-[90px]">
                <div className="w-full md:w-[35%] text-center md:text-start">
                    <h1 className='font-cabin font-semibold text-[35px] md:text-5xl leading-[1.125]'> Next Generation Blockchain Ecosystem </h1>
                    <p className='font-cabin font-ligt text-xl py-[25px] px-[60px] md:px-0 pb-[30px]'> Our mission is to build a Global Decentralized Ecosystem to cover all areas of the world using multiple blockchain technologies along with the Mindchain Ecosystem.</p>
                    <div className="flex flex-col md:flex-row gap-3 md:w-full mx-auto md:mx-0">
                        <button className='bg-gradient-to-r from-[#FFBF5E] bg-primary py-[5px] lg:py-4 px-2 md:px-7 uppercase rounded hover:bg-[#dea029]'>Get Started</button>
                        <button className='bg-gradient-to-r from-[#FFBF5E] bg-primary py-[5px] lg:py-4 px-2 md:px-11 uppercase rounded hover:bg-[#dea029]'>Login</button>
                    </div>
                </div>
                <div className="md:w-[55%]">
                    <img className=' inline' src={bannerImg} alt="bannerImg" />
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Banner