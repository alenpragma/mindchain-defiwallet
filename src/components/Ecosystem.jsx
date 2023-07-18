import React from 'react'

import Container from '../components/layouts/Container'
// images
import bitbanner from '../assets/bitbanner.svg'
import mindchain from '../assets/mindchain-token.svg'
import bitnetwork from '../assets/bitnetwork.svg'
import bitmining from '../assets/bitmining.svg'
import blockchainblocks from '../assets/blockchain-blocks.svg'
import post3 from '../assets/post3.svg'


const Ecosystem = () => {
  return (
    <section className='bg-lightBlue text-white pb-[100px]'>
        <Container>
            <div className="text-center">
                <h2 className='font-cabin font-semibold text-[32px] relative before:absolute before:w-[75px] before:h-[3px] before:bg-primary before:content-[""] before:top-[-34%] before:left-[50%] before:translate-x-[-50%] before:translate-y-[-50%] before:z-10'>Mindchain Ecosystem</h2>
                <p className='font-cabin font-normal text-[18px] pt-[30px] pb-[50px] px-[90px] md:px-[220px]'> Mindchain is the project's main currency. It is the token that powers the entire Mindchain ecosystem and has a total supply and max supply of 71,000,000.</p>
            </div>

            <div className="flex flex-col md:flex-row items-center">
                <div className="w-full md:w-3/6 text-center md:text-start">
                    <div className="flex gap-2 items-center justify-center md:justify-start pb-[50px]">
                        <img className='w-[40px]' src={bitbanner} alt="bitbanner" />
                        <h2 className='font-cabin font-semibold text-[24px] relative before:absolute before:w-[150px] before:h-[3px] before:bg-primary before:content-[""] before:bottom-[-81%] before:left-[18%] before:translate-x-[-50%] before:translate-y-[-50%] before:z-10 '>Mind Blockchain</h2>
                    </div>
                    <p className='sm:pr-0 md:pr-[100px] md:px-0 pb-[30px] px-[50px]'> Viderer malorum sadipscing cum ei. Eu impetus perfecto sit, no sea labore detraxit. Primis mediocrem necessitatibus an vis. Eu impetus perfecto sit, no sea labore detraxit. </p>
                    <button className='bg-gradient-to-r from-[#FFBF5E] bg-primary py-2 px-8 uppercase  text-white rounded hover:bg-[#dea029]'>Learn More</button>
                </div>
                <div className="w-full md:w-3/6">
                    <img className="" src={mindchain} alt="mindchain" />
                </div>
            </div>
            <div className="flex md:flex-row items-center justify-between py-[50px] flex-col-reverse">
                <div className="w-full md:w-[45%]">

                <img src={blockchainblocks} alt="blockchain blocks" />
                </div>
                <div className="w-full md:w-[45%] text-center md:text-start">
                <div className="flex gap-2 items-center pb-[50px] justify-center md:justify-start">
                        <img className='w-[40px]' src={bitnetwork} alt="bitnetwork" />
                        <h2 className='font-cabin font-semibold text-[24px] relative before:absolute before:w-[150px] before:h-[3px] before:bg-primary before:content-[""] before:bottom-[-81%] before:left-[12%] before:translate-x-[-50%] before:translate-y-[-50%] before:z-10 '>Decentralized Exchange</h2>
                    </div>
                    <p className='sm:pr-0 md:pr-[40px] px-[50px] md:px-0 pb-[30px]'>
                         Viderer malorum sadipscing cum ei. Eu impetus perfecto sit, no sea labore detraxit. Primis mediocrem necessitatibus an vis. Eu impetus perfecto sit, no sea labore detraxit. 
                    </p>
                    <button className='bg-gradient-to-r from-[#FFBF5E] bg-primary py-2 px-8 uppercase  text-white rounded hover:bg-[#dea029]'>Whitepaper</button>
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-y-[35px] md:gap-y-0">
                <div className="w-full md:w-3/6 text-center md:text-start">
                    <div className="flex gap-2 justify-center md:justify-start items-center pb-[50px]">
                        <img className='w-[40px]' src={bitmining} alt="bitmining" />
                        <h2 className='font-cabin font-semibold text-[24px] relative before:absolute before:w-[150px] before:h-[3px] before:bg-primary before:content-[""] before:bottom-[-81%] before:left-[18%] before:translate-x-[-50%] before:translate-y-[-50%] before:z-10 '>Mind Wallet</h2>
                    </div>
                    <p className='sm:pr-0 md:pr-[100px] pb-[30px] px-[50px] md:px-0 text-center md:text-start'>
                        Viderer malorum sadipscing cum ei. Eu impetus perfecto sit, no sea labore detraxit. Primis mediocrem necessitatibus an vis. Eu impetus perfecto sit, no sea labore detraxit. 
                    </p>
                    <button className='bg-gradient-to-r from-[#FFBF5E] bg-primary py-2 px-8 uppercase  text-white rounded hover:bg-[#dea029]'>Join the ICO</button>
                </div>
                <div className="w-full md:w-3/6">
                    <img className='' src={post3} alt="post3" />
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Ecosystem