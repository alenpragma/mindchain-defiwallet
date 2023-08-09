import React from 'react'
import {link, form } from 'react-dom'

import Container from '../components/layouts/Container'

import {BsFillTelephoneFill} from 'react-icons/bs'
import {BiSolidMessage} from 'react-icons/bi'
import {FaTelegramPlane} from 'react-icons/fa'

const Contact = () => {
  return (
    <section className='bg-lightBlue  py-[50px] md:py-[150px]'>
        <Container>
            <div className="w-full">
                <div className="text-center w-3/4 mx-auto">
                    <h2 className='font-cabin font-semibold text-[32px] relative before:absolute before:w-[75px] before:h-[3px] before:bg-primary before:content-[""] before:top-[-34%] before:left-[50%] before:translate-x-[-50%] before:translate-y-[-50%] before:z-10'> Get in Touch </h2>
                    <p className='font-cabin font-normal text-[18px] pt-[30px] md:px-[100px] pb-[50px] mx-auto'> Viderer malorum sadipscing cum ei. Eu impetus perfecto sit, no sea labore detraxit. Primis mediocrem necessitatibus an vis. Ut sea pertinax perpetua, eruditi volumus quaestio ex mel, has ei tota homero.  </p>
                </div>

                <div className="flex justify-center md:justify-between gap-x-[40px] md:gap-x-0 w-[50%] mx-auto pb-[50px]">
                    <span class="relative flex h-[60px] w-[60px]">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0DF3B2] opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-[60px] w-[60px] bg-[#0DF3B2]"></span>
                        <BsFillTelephoneFill className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 text-white text-[24px]' />
                    </span>
                    <span class="relative flex h-[60px] w-[60px]">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0DF3B2] opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-[60px] w-[60px] bg-[#0DF3B2]"></span>
                        <BiSolidMessage className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 text-white text-[24px]' />
                    </span>
                    <span class="relative flex h-[60px] w-[60px]">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0DF3B2] opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-[60px] w-[60px] bg-[#0DF3B2]"></span>
                        <FaTelegramPlane className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10 text-white text-[24px]' />
                    </span>
                </div>
                <form >
                <div className="flex flex-col gap-y-[50px] justify-center items-center w-full">
                
                    <div className="flex flex-col w-full md:w-[50%]">
                        <label className='font-cabin font-normal text-[18px] text-white' htmlFor="">Name</label>
                        <input className='w-[100%] pt-[] outline-none bg-lightBlue border-b-[#d1d1d12d] border-x-0 border-y-0 border-b-[1px] focus:border-b-[2px]  focus:border-b-[#0DF3B2] focus:duration-700 focus:ring-transparent' type="text" required />
                    </div>
                    <div className="flex flex-col w-full md:w-[50%]">
                        <label className='font-cabin font-normal text-[18px] text-white' htmlFor="">Email</label>
                        <input className='w-[100%] pt-[] outline-none bg-lightBlue border-b-[#d1d1d12d] border-x-0 border-y-0 border-b-[1px] focus:border-b-[2px]  focus:border-b-[#0DF3B2] focus:duration-700 focus:ring-transparent' type="email" required />
                    </div>
                    <div className="flex flex-col w-full md:w-[50%]">
                        <label className='font-cabin font-normal text-[18px] text-white' htmlFor="">Message</label>
                        <input className='w-[100%] pt-[] outline-none bg-lightBlue border-b-[#d1d1d12d] border-x-0 border-y-0 border-b-[1px] focus:border-b-[2px]  focus:border-b-[#0DF3B2] focus:duration-700 focus:ring-transparent' type="text" required  />
                    </div>

                    <div className="">
                    <button className='bg-gradient-to-r from-[#FFBF5E] bg-primary py-2 px-8 uppercase  text-white rounded hover:bg-[#dea029]' type="submit">Send message</button>
                    </div>
                   
                </div>
                </form>
            </div>
        </Container>
    </section>
  )
}

export default Contact
