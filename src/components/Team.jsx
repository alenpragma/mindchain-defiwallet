import React from 'react'

import Container from '../components/layouts/Container'

// images
import teamMemberOneImg from '../assets/images/team/john.svg'
import teamMemberTwoImg from '../assets/images/team/john.jpg'
import teamMemberThreeImg from '../assets/images/team/joshua.svg'
import teamMemberFourImg from '../assets/images/team/joshua.jpg'
import teamMemberFiveImg from '../assets/images/team/lucy.svg'
import teamMemberSixImg from '../assets/images/team/lucy.jpg'
import teamMemberSevenImg from '../assets/images/team/mike.svg'
import teamMemberEightImg from '../assets/images/team/mike.jpg'
import teamMemberNineImg from '../assets/images/team/sandra.svg'
import teamMemberTenImg from '../assets/images/team/sandra.jpg'
import teamMemberElevenImg from '../assets/images/team/sara.svg'
import teamMemberTwelveImg from '../assets/images/team/sara.jpg'
import solorShape from '../assets/solar.svg'


const Team = () => {
  return (
    <section className='bg-lightBlue pb-[60px] md:pb-[150px] relative text-white'>
        <Container>
        <img className='absolute bottom-[11%] left-[-284px] origin-center rotate-[210deg] w-[48%] z-[100] hidden lg:block' src={solorShape} alt="solorShape" />

           <div className="w-full">
           <div className="text-center w-3/4 mx-auto">
                <h2 className='font-cabin font-semibold text-[32px] relative before:absolute before:w-[75px] before:h-[3px] before:bg-primary before:content-[""] before:top-[-34%] before:left-[50%] before:translate-x-[-50%] before:translate-y-[-50%] before:z-10'>Our Team</h2>
                <p className='font-cabin font-normal text-[18px] pt-[30px] md:px-[100px] pb-[50px] mx-auto'>    Our technology enables instant, secure, and fractional trading of all your financial assets.  </p>
            </div>
            <div className="w-[100%] flex flex-col md:flex-row justify-center gap-[30px] flex-wrap text-center">
                <div className="w-full md:w-[28%] ">
                    <div className="hover:translate-y-[-15px] duration-700 hover:cursor-pointer border border-[#DEA83C30] p-[20px]] text-center group hover:shadow-lg hover:shadow-primary shadow-lg shadow-[#DEA83C30]">
                        <div className="relative mt-[30px]">
                            <img className='w-[130px] h-[130px] mx-auto rounded-full border-4 border-transparent outline-4 outline-[#00FF9919] outline delay-100 group-hover:outline-[#00FF99]' src={teamMemberOneImg} alt="teamMemberOneImg" />

                            <img className='w-[130px] h-[130px] border-4 border-transparent rounded-full delay-100 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] opacity-0 group-hover:opacity-100' src={teamMemberTwoImg} alt="teamMemberTwoImg" />
                        </div>
                        <h2 className='pt-[20px] pb-[5px] font-cabin font-semibold capitalize'>M. Demiral</h2>
                        <h3 className='pb-[10px] text-[#7701F3]'>CEO</h3>
                        <p className='px-[20px] pb-[30px]'> John is a Crypto enthusiast. He was one of the first bolckchain actors in the world.</p>
                    </div>
                </div>
                <div className="w-full md:w-[28%] hover:translate-y-[-15px] duration-700 hover:cursor-pointer">
                    <div className=" border border-[#DEA83C30] p-[20px]] text-center group hover:shadow-lg hover:shadow-primary shadow-lg shadow-[#DEA83C30]">
                        <div className="relative mt-[30px]">
                            <img className='w-[130px] h-[130px] mx-auto rounded-full border-4 border-transparent outline-4 outline-[#00FF9919] outline delay-100 group-hover:outline-[#00FF99]' src={teamMemberThreeImg} alt="teamMemberThreeImg" />

                            <img className='w-[130px] h-[130px] border-4 border-transparent rounded-full delay-100 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] opacity-0 group-hover:opacity-100' src={teamMemberFourImg} alt="teamMemberFourImg" />
                        </div>
                        <h2 className='pt-[20px] pb-[5px] font-cabin font-semibold capitalize'>Galeeb Mirza</h2>
                        <h3 className='pb-[10px] text-[#7701F3]'>CTO</h3>
                        <p className='px-[20px] pb-[30px]'> John is a Crypto enthusiast. He was one of the first bolckchain actors in the world.</p>
                    </div>
                </div>
                <div className="w-full md:w-[28%] hover:translate-y-[-15px] duration-700 hover:cursor-pointer">
                    <div className=" border border-[#DEA83C30] p-[20px]] text-center group hover:shadow-lg hover:shadow-primary shadow-lg shadow-[#DEA83C30]">
                        <div className="relative mt-[30px]">
                            <img className='w-[130px] h-[130px] mx-auto rounded-full border-4 border-transparent outline-4 outline-[#00FF9919] outline delay-100 group-hover:outline-[#00FF99]' src={teamMemberFiveImg} alt="teamMemberFiveImg" />

                            <img className='w-[130px] h-[130px] border-4 border-transparent rounded-full delay-100 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] opacity-0 group-hover:opacity-100' src={teamMemberSixImg} alt="teamMemberSixImg" />
                        </div>
                        <h2 className='pt-[20px] pb-[5px] font-cabin font-semibold capitalize'>lX Deniz</h2>
                        <h3 className='pb-[10px] text-[#7701F3]'>CMO</h3>
                        <p className='px-[20px] pb-[30px]'> John is a Crypto enthusiast. He was one of the first bolckchain actors in the world.</p>
                    </div>
                </div>
                <div className="w-full md:w-[28%] hover:translate-y-[-15px] duration-700 hover:cursor-pointer">
                    <div className=" border border-[#DEA83C30] p-[20px]] text-center group hover:shadow-lg hover:shadow-primary shadow-lg shadow-[#DEA83C30]">
                        <div className="relative mt-[30px]">
                            <img className='w-[130px] h-[130px] mx-auto rounded-full border-4 border-transparent outline-4 outline-[#00FF9919] outline delay-100 group-hover:outline-[#00FF99]' src={teamMemberSevenImg} alt="teamMemberSevenImg" />

                            <img className='w-[130px] h-[130px] border-4 border-transparent rounded-full delay-100 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] opacity-0 group-hover:opacity-100' src={teamMemberEightImg} alt="teamMemberEightImg" />
                        </div>
                        <h2 className='pt-[20px] pb-[5px] font-cabin font-semibold capitalize'>Erick Wilson</h2>
                        <h3 className='pb-[10px] text-[#7701F3]'>CSO</h3>
                        <p className='px-[20px] pb-[30px]'> John is a Crypto enthusiast. He was one of the first bolckchain actors in the world.</p>
                    </div>
                </div>
                <div className="w-full md:w-[28%] hover:translate-y-[-15px] duration-700 hover:cursor-pointer">
                    <div className=" border border-[#DEA83C30] p-[20px]] text-center group hover:shadow-lg hover:shadow-primary shadow-lg shadow-[#DEA83C30]">
                        <div className="relative mt-[30px]">
                            <img className='w-[130px] h-[130px] mx-auto rounded-full border-4 border-transparent outline-4 outline-[#00FF9919] outline delay-100 group-hover:outline-[#00FF99]' src={teamMemberNineImg} alt="teamMemberNineImg" />

                            <img className='w-[130px] h-[130px] border-4 border-transparent rounded-full delay-100 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] opacity-0 group-hover:opacity-100' src={teamMemberTenImg} alt="teamMemberTenImg" />
                        </div>
                        <h2 className='pt-[20px] pb-[5px] font-cabin font-semibold capitalize'>Alton Fida</h2>
                        <h3 className='pb-[10px] text-[#7701F3]'>CSO</h3>
                        <p className='px-[20px] pb-[30px]'> John is a Crypto enthusiast. He was one of the first bolckchain actors in the world.</p>
                    </div>
                </div>
                <div className="w-full md:w-[28%] hover:translate-y-[-15px] duration-700 hover:cursor-pointer">
                    <div className=" border border-[#DEA83C30] p-[20px]] text-center group hover:shadow-lg hover:shadow-primary shadow-lg shadow-[#DEA83C30]">
                        <div className="relative mt-[30px]">
                            <img className='w-[130px] h-[130px] mx-auto rounded-full border-4 border-transparent outline-4 outline-[#00FF9919] outline delay-100 group-hover:outline-[#00FF99]' src={teamMemberElevenImg} alt="teamMemberElevenImg" />

                            <img className='w-[130px] h-[130px] border-4 border-transparent rounded-full delay-100 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] opacity-0 group-hover:opacity-100' src={teamMemberTwelveImg} alt="teamMemberTwelveImg" />
                        </div>
                        <h2 className='pt-[20px] pb-[5px] font-cabin font-semibold capitalize'>Willie Erickson</h2>
                        <h3 className='pb-[10px] text-[#7701F3]'>Project Manager</h3>
                        <p className='px-[20px] pb-[30px]'> John is a Crypto enthusiast. He was one of the first bolckchain actors in the world.</p>
                    </div>
                </div>
            </div>
           </div>
        </Container>
    </section>
  )
}

export default Team
