import React from 'react'

import Container from '../components/layouts/Container'

import mindkryptonappImg from '../assets/mind-krypton-app.svg'
import bitnetworkImg from '../assets/bitnetwork.svg'

const Tracking = () => {
  return (
    <section className='bg-lightBlue pb-[60px] md:pb-[150px]'>
        <Container>
        <div className="text-center w-3/4 mx-auto">
                <h2 className='font-cabin font-semibold text-[32px] relative before:absolute before:w-[75px] before:h-[3px] before:bg-primary before:content-[""] before:top-[-34%] before:left-[50%] before:translate-x-[-50%] before:translate-y-[-50%] before:z-10'>  Live Tracking </h2>
                <p className='font-cabin font-normal text-[18px] pt-[30px] md:px-[100px] pb-[50px] mx-auto'>   Viderer malorum sadipscing cum ei. Eu impetus perfecto sit, no sea labore detraxit. Primis mediocrem necessitatibus an vis. Ut sea pertinax perpetua, eruditi volumus quaestio ex mel, has ei tota homero. </p>
            </div>

            <div className="flex flex-col md:flex-row items-center">
                <div className="w-full md:w-3/6 text-center md:text-start">
                    <div className="flex gap-2 items-center justify-center md:justify-start pb-[50px]">
                        <img className='w-[40px]' src={bitnetworkImg} alt="bitnetworkImg" />
                        <h2 className='font-cabin font-semibold text-[24px] relative before:absolute before:w-[150px] before:h-[3px] before:bg-primary before:content-[""] before:bottom-[-81%] before:left-[18%] before:translate-x-[-50%] before:translate-y-[-50%] before:z-10 '>Mind Blockchain</h2>
                    </div>
                    <p className='sm:pr-0 md:pr-[100px] md:px-0 pb-[30px] px-[50px]'> Viderer malorum sadipscing cum ei. Eu impetus perfecto sit, no sea labore detraxit. Primis mediocrem necessitatibus an vis. Eu impetus perfecto sit, no sea labore detraxit. </p>
                    <button className='bg-gradient-to-r from-[#FFBF5E] bg-primary py-2 px-8 uppercase  text-white rounded hover:bg-[#dea029]'>Learn More</button>
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