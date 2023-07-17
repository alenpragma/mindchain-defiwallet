import React from 'react'
import Container from '../components/layouts/Container'

// images
import bannerImg from '../assets/mind-buildings.svg'
import solorShape from '../assets/solar.svg'

const Banner = () => {
  return (
    <section className='bg-lightBlue text-white relative '>
        {/* <div className="shape">
            
        </div> */}
        <Container>
        <img className='absolute top-[-517px] left-[-387px] origin-center rotate-[240deg] w-[64%] z-[100]' src={solorShape} alt="solorShape" />
            <div className="flex justify-between items-center pt-[170px] pb-[90px]">
                <div className="w-[35%]">
                    <h1 className='font-cabin font-semibold text-5xl leading-[1.125]'> Next Generation Blockchain Ecosystem </h1>
                    <p className='font-cabin font-ligt text-xl py-[25pt] pb-[30px]'> Our mission is to build a Global Decentralized Ecosystem to cover all areas of the world using multiple blockchain technologies along with the Mindchain Ecosystem.</p>
                    <div className="flex gap-3">
                        <button className='bg-gradient-to-r from-[#FFBF5E] bg-primary py-4 px-7 uppercase rounded hover:bg-[#dea029]'>Get Started</button>
                        <button className='bg-gradient-to-r from-[#FFBF5E] bg-primary py-4 px-11 uppercase rounded hover:bg-[#dea029]'>Login</button>
                    </div>
                </div>
                <div className="w-[55%]">
                    <img className=' inline' src={bannerImg} alt="bannerImg" />
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Banner