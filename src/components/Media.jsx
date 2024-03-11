import React from 'react'

import Container from '../components/layouts/Container'

// images
import post1 from '../assets/images/media/layer1.svg'
import post2 from '../assets/images/media/mindchain.svg'
import post3 from '../assets/images/media/post3.svg'

import post_team1 from '../assets/images/team/john.jpg'
import post_team2 from '../assets/images/team/joshua.jpg'
import post_team3 from '../assets/images/team/lucy.jpg'

import {AiOutlineHeart} from 'react-icons/ai'
import {BiMessageRounded} from 'react-icons/bi'


const Media = () => {
  return (
    <section className='bg-lightBlue text-white pb-[100px]'>
        <Container>
            <div className="w-full">
                <div className="text-center w-3/4 mx-auto">
                    <h2 className='font-cabin font-semibold text-[32px] relative before:absolute before:w-[75px] before:h-[3px] before:bg-primary before:content-[""] before:top-[-34%] before:left-[50%] before:translate-x-[-50%] before:translate-y-[-50%] before:z-10'> Media & Partners </h2>
                    <p className='font-cabin font-normal text-[18px] pt-[30px] md:px-[100px] pb-[50px] mx-auto'> Explore our blog for insightful articles, personal reflections and ideas that inspire action on the topics you care about.</p>
                </div>

                <div className="w-full mx-auto">
                    <div className="p-4 md:p-[50px]  pb-[50px] md:pv-0 flex flex-col md:flex-row justify-center items-center gap-x-[3rem] hover:shadow-2xl hover:cursor-pointer hover:bg-[#20212d] hover:transition hover:duration-700">
                        <div className="pb-[20px] md:pb-0">
                            <img className='w-[30rem]' src={post1} alt="post1" />
                        </div>
                        <div className="">
                            <h2 className='font-cabin font-medium text-[18px]'>What is Layer 1 Cryptocurrency and Their Investment Potential? <span className='font-cabin font-light text-[16px] pl-[20px] md:pl-[40px] :w-[3px] before:h-[20px] before:bg-primary before:content-[""] before:bottom-[-50%] before:left-[5%] md:before:left-[20%]  before:translate-x-[-50%] before:translate-y-[-50%] before:z-10'>Mar 11, 2024</span></h2>
                            <p className='py-[20px]'>The best way to get free MIND testnet tokens is from the official Mind Smart Chain Faucet (MIND Faucet). With this method, all users need to do is visit the website and enter their MSC testnet address to receive 1 free MIND testnet coin.
                            </p>
                            <div className="flex item-center justify-between">
                                <div className="flex items-center gap-3">
                                    <img className='rounded-full w-[40px]' src={post_team1} alt="post_team1" />
                                    <h3 className='font-cabin font-normal text-[16px]'>by Alice Tanja</h3>
                                </div>
                                <div className="icon flex gap-2">
                                    <div className="flex gap-1 items-center">
                                    < BiMessageRounded className=''/>
                                    <span className='text-[12px]'>30</span>
                                    </div>
                                    <div className="flex gap-1 items-center">
                                    <AiOutlineHeart  className='text-[#db5e5e]'/>
                                    <span className='text-[12px]'>50</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 md:p-[50px]  pb-[50px] md:pv-0 flex flex-col md:flex-row justify-center items-center gap-x-[3rem] hover:shadow-2xl hover:cursor-pointer hover:bg-[#20212d] hover:transition hover:duration-700">
                        <div className="pb-[20px] md:pb-0">
                            <img className='w-[30rem]' src={post2} alt="post2" />
                        </div>
                        <div className="">
                            <h2 className='font-cabin font-medium text-[18px]'>Why Mindchain a promising asset in the dynamic cryptocurrency landscape <span className='font-cabin font-light text-[16px] pl-[20px] md:pl-[40px] :w-[3px] before:h-[20px] before:bg-primary before:content-[""] before:bottom-[-50%] before:left-[5%] md:before:left-[20%]  before:translate-x-[-50%] before:translate-y-[-50%] before:z-10'>January 19, 2023</span></h2>
                            <p className='py-[20px]'>Mindchain is a fast, high-throughput open-source smart contract platform for digital assets and dApps. It offers unmatched speed, security, and reliability. Enjoy almost instant transactions and extremely low fees.
                            </p>
                            <div className="flex item-center justify-between">
                                <div className="flex items-center gap-3">
                                    <img className='rounded-full w-[40px]' src={post_team2} alt="post_team1" />
                                    <h3 className='font-cabin font-normal text-[16px]'>by John Stevens</h3>
                                </div>
                                <div className="icon flex gap-2">
                                    <div className="flex gap-1 items-center">
                                    < BiMessageRounded className=''/>
                                    <span className='text-[12px]'>30</span>
                                    </div>
                                    <div className="flex gap-1 items-center">
                                    <AiOutlineHeart  className='text-[#db5e5e]'/>
                                    <span className='text-[12px]'>50</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="one p-4 md:p-[50px] flex flex-col md:flex-row justify-center items-center gap-x-[3rem] hover:shadow-2xl hover:cursor-pointer hover:bg-[#20212d] hover:transition hover:duration-700">
                        <div className="pb-[20px] md:pb-0">
                            <img className='w-[30rem]' src={post1} alt="post1" />
                        </div>
                        <div className="">
                            <h2 className='font-cabin font-medium text-[18px]'>How to become Mindchain consultant?<span className='font-cabin font-light text-[16px] pl-[20px] md:pl-[40px] relative before:absolute before:w-[3px] before:h-[20px] before:bg-primary before:content-[""] before:bottom-[-50%] before:left-[5%] md:before:left-[20%]  before:translate-x-[-50%] before:translate-y-[-50%] before:z-10'>February 14, 2023</span></h2>
                            <p className='py-[20px]'>A cryptocurrency consultant is a professional who guides clients to successful, compliant cryptocurrency transactions and practices across accounting and tax functions. They protect their clients from illegal and unethical crypto practices.
                            </p>
                            <div className="flex item-center justify-between">
                                <div className="flex items-center gap-3">
                                    <img className='rounded-full w-[40px]' src={post_team3} alt="post_team3" />
                                    <h3 className='font-cabin font-normal text-[16px]'>by Sandra Bernard</h3>
                                </div>
                                <div className="icon flex gap-2">
                                    <div className="flex gap-1 items-center">
                                    < BiMessageRounded className=''/>
                                    <span className='text-[12px]'>30</span>
                                    </div>
                                    <div className="flex gap-1 items-center">
                                    <AiOutlineHeart  className='text-[#db5e5e]'/>
                                    <span className='text-[12px]'>50</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center pt-[50px]">
                        <button className=' bg-gradient-to-r from-[#FFBF5E] bg-primary py-2 px-8 uppercase  text-white rounded hover:bg-[#dea029]'><a href="https://academy.mindchain.info/">More Articles</a></button>
                    </div>
                </div>

                
            </div>
        </Container>
    </section>
  )
}

export default Media
