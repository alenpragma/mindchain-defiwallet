import React, { useState } from 'react'

import Container from '../components/layouts/Container'

// icons
import {AiOutlinePlus} from 'react-icons/ai'
import {AiOutlineMinus} from 'react-icons/ai'

const FAQ = () => {
    // Accordion 
    const [isTabOne, setIsTabOne] = useState(false)
    const [isTabTwo, setIsTabTwo] = useState(false)
    const [isTabThree, setIsTabThree] = useState(false)
    const [isTabFour, setIsTabFour] = useState(false)
    const [isTabFive, setIsTabFive] = useState(false)

    const [isTabSix, setIsTabSix] = useState(false)
    const [isTabSeven, setIsTabSeven] = useState(false)
    const [isTabEight, setIsTabEight] = useState(false)
    const [isTabNine, setIsTabNine] = useState(false)
    const [isTabTen, setIsTabTen] = useState(false)

    

  return (
    <section className='bg-lightBlue text-white pb-[100px]'>
        <Container>
            <div className="w-full">
                <div className="text-center w-3/4 mx-auto">
                    <h2 className='font-cabin font-semibold text-[32px] relative before:absolute before:w-[75px] before:h-[3px] before:bg-primary before:content-[""] before:top-[-34%] before:left-[50%] before:translate-x-[-50%] before:translate-y-[-50%] before:z-10'>FAQ</h2>
                    <p className='font-cabin font-normal text-[18px] pt-[30px] md:px-[100px] pb-[50px] mx-auto'> Viderer malorum sadipscing cum ei. Eu impetus perfecto sit, no sea labore detraxit. Primis mediocrem necessitatibus an vis. Ut sea pertinax perpetua, eruditi volumus quaestio ex mel, has ei tota homero. </p>
                </div>

                <div className="w-full flex flex-col md:flex-row gap-5">
                    <div className="left w-full md:w-2/4">
                        <div id="accordion-open" data-accordion="open" className='flex flex-col gap-3'>
                            <div className="one shadow-md shadow-[#DEA83C30] border border-[#DEA83C30]">
                                    <h2 id="accordion-open-heading-1">
                                        <button onClick={()=> setIsTabOne(!isTabOne)}  type="button" class="flex items-center justify-between w-full px-5 py-4 font-medium text-leftdark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-primary dark:hover:bg-gray-800" data-accordion-target="#accordion-open-body-1" aria-expanded="true" aria-controls="accordion-open-body-1" >
                                        <span class="flex items-center"> What is Mind Blockchain ? </span>
                                        {isTabOne ? <AiOutlineMinus /> : <AiOutlinePlus />}
                                        </button>
                                    </h2>
                                    
                                    <div id="accordion-open-body-1" className={isTabOne ? "" : "hidden"} aria-labelledby="accordion-open-heading-1">
                                        <div class="p-5 dark:border-gray-700 dark:bg-gray-900">
                                        <p class="mb-2 text-[#d1d1d1e2] dark:text-gray-400">Mindchain consensus protocol delivers unparalleled speed, security, and reliability. Enjoy almost instant transactions and extremely low fees.</p>
                                        </div>
                                    </div>
                            </div>
                            
                            {/* <div className="two shadow-md shadow-[#DEA83C30] border border-[#DEA83C30]">
                                    <h2 id="accordion-open-heading-2">
                                        <button onClick={()=> setIsTabTwo(!isTabTwo)} type="button" class="flex items-center justify-between w-full px-5 py-4 font-medium text-left text-white  dark:text-gray-400 hover:bg-primary " data-accordion-target="#accordion-open-body-2" aria-expanded="false" aria-controls="accordion-open-body-2">
                                        <span class="flex items-center">What is ICO ? </span>
                                        {isTabTwo ? <AiOutlineMinus /> : <AiOutlinePlus />}
                                        </button>
                                    </h2>
                                    <div id="accordion-open-body-2" className={isTabTwo ? "" : "hidden"} aria-labelledby="accordion-open-heading-2">
                                        <div class="p-5 dark:border-gray-700">
                                        <p class="mb-2 text-[#d1d1d1e2] dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        </div>
                                    </div>
                            </div>
                                
                            <div className="three shadow-md shadow-[#DEA83C30] border border-[#DEA83C30]">
                                    <h2 id="accordion-open-heading-3">
                                        <button onClick={()=> setIsTabThree(!isTabThree)} type="button" class="flex items-center justify-between w-full px-5 py-4 font-medium text-left text-white dark:text-gray-400 hover:bg-primary dark:hover:bg-gray-800 hover:text-white" data-accordion-target="#accordion-open-body-3" aria-expanded="false" aria-controls="accordion-open-body-3">
                                        <span class="flex items-center">Where to get the Whitepaper ? </span>
                                        {isTabThree ? <AiOutlineMinus /> : <AiOutlinePlus />}
                                        </button>
                                    </h2>
                                    <div id="accordion-open-body-3" className={isTabThree ? "" : "hidden"} aria-labelledby="accordion-open-heading-3">
                                        <div class="p-5 dark:border-gray-700">
                                        <p class="mb-2 text-[#d1d1d1e2] dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        </p>
                                        </div>
                                    </div>
                            </div> */}

                            <div className="four shadow-md shadow-[#DEA83C30] border border-[#DEA83C30]">
                                <h2 id="accordion-open-heading-4">
                                        <button onClick={()=> setIsTabFour(!isTabFour)} type="button" class="flex items-center justify-between w-full px-5 py-4 font-medium text-left text-white  hover:bg-primary dark:hover:bg-gray-800 hover:text-white" data-accordion-target="#accordion-open-body-3" aria-expanded="false" aria-controls="accordion-open-body-3">
                                        <span class="flex items-center"> What is Mindchain Core Innovation ? </span>
                                        {isTabFour ? <AiOutlineMinus /> : <AiOutlinePlus />}
                                        </button>
                                    </h2>
                                    <div id="accordion-open-body-4" className={isTabFour ? "" : "hidden"} aria-labelledby="accordion-open-heading-4">
                                        <div class="p-5 dark:border-gray-700">
                                        <p class="mb-2 text-[#d1d1d1e2] dark:text-gray-400">Mindchain is the project's main currency. It is the token that powers the entire Mindchain ecosystem and has a total supply and max supply of 71,000,000. commodo consequat.</p>
                                        </div>
                                    </div>
                            </div>

                            {/* <div className="five shadow-md shadow-[#DEA83C30] border border-[#DEA83C30]">
                                <h2 id="accordion-open-heading-5">
                                        <button onClick={()=> setIsTabFive(!isTabFive)} type="button" class="flex items-center justify-between w-full px-5 py-4 font-medium text-left text-white hover:bg-primary dark:hover:bg-gray-800 hover:text-white" data-accordion-target="#accordion-open-body-3" aria-expanded="false" aria-controls="accordion-open-body-4">
                                        <span class="flex items-center">When will be the platform released ? </span>
                                            {isTabFive ? <AiOutlineMinus /> : <AiOutlinePlus />}
                                            
                                        </button>
                                    </h2>
                                    <div id="accordion-open-body-5" className={isTabFive ? "" : "hidden"} aria-labelledby="accordion-open-heading-5">
                                        <div class="p-5 dark:border-gray-700">
                                        <p class="mb-2 text-[#d1d1d1e2] dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        </div>
                                    </div>
                            </div> */}
                        </div>
                    </div>
                    <div className="right w-full md:w-2/4">
                    <div id="accordion-open" data-accordion="open" className='flex flex-col gap-3'>
                            {/* <div className="one shadow-md shadow-[#DEA83C30] border border-[#DEA83C30]">
                                    <h2 id="accordion-open-heading-1">
                                        <button onClick={()=> setIsTabSix(!isTabSix)}  type="button" class="flex items-center justify-between w-full px-5 py-4 font-medium text-left  dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-primary dark:hover:bg-gray-800" data-accordion-target="#accordion-open-body-1" aria-expanded="true" aria-controls="accordion-open-body-1" >
                                        <span class="flex items-center">How much tokens will be sold ? </span>
                                        {isTabSix ? <AiOutlineMinus /> : <AiOutlinePlus />}
                                        </button>
                                    </h2>
                                    
                                    <div id="accordion-open-body-1" className={isTabSix ? "" : "hidden"} aria-labelledby="accordion-open-heading-1">
                                        <div class="p-5 dark:border-gray-700 dark:bg-gray-900">
                                        <p class="mb-2 text-[#d1d1d1e2] dark:text-gray-400">Mindchain consensus protocol delivers unparalleled speed, security, and reliability. Enjoy almost instant transactions and extremely low fees.</p>
                                        </div>
                                    </div>
                            </div>
                            
                            <div className="two shadow-md shadow-[#DEA83C30] border border-[#DEA83C30]">
                                    <h2 id="accordion-open-heading-2">
                                        <button onClick={()=> setIsTabSeven(!isTabSeven)} type="button" class="flex items-center justify-between w-full px-5 py-4 font-medium text-left text-white  dark:text-gray-400 hover:bg-primary " data-accordion-target="#accordion-open-body-2" aria-expanded="false" aria-controls="accordion-open-body-2">
                                        <span class="flex items-center">What happens if Soft Cap isn't reached ? </span>
                                        {isTabSeven ? <AiOutlineMinus /> : <AiOutlinePlus />}
                                        </button>
                                    </h2>
                                    <div id="accordion-open-body-2" className={isTabSeven ? "" : "hidden"} aria-labelledby="accordion-open-heading-2">
                                        <div class="p-5 dark:border-gray-700">
                                        <p class="mb-2 text-[#d1d1d1e2] dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        </div>
                                    </div>
                            </div>
                                
                            <div className="three shadow-md shadow-[#DEA83C30] border border-[#DEA83C30]">
                                    <h2 id="accordion-open-heading-3">
                                        <button onClick={()=> setIsTabEight(!isTabEight)} type="button" class="flex items-center justify-between w-full px-5 py-4 font-medium text-left text-white  dark:text-gray-400 hover:bg-primary dark:hover:bg-gray-800 hover:text-white" data-accordion-target="#accordion-open-body-3" aria-expanded="false" aria-controls="accordion-open-body-3">
                                        <span class="flex items-center">How much do you want to raise with the ICO ?  </span>
                                        {isTabEight ? <AiOutlineMinus /> : <AiOutlinePlus />}
                                        </button>
                                    </h2>
                                    <div id="accordion-open-body-3" className={isTabEight ? "" : "hidden"} aria-labelledby="accordion-open-heading-3">
                                        <div class="p-5  dark:border-gray-700">
                                        <p class="mb-2 text-[#d1d1d1e2] dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        </p>
                                        </div>
                                    </div>
                            </div> */}

                            <div className="four shadow-md shadow-[#DEA83C30] border border-[#DEA83C30]">
                                <h2 id="accordion-open-heading-4">
                                        <button onClick={()=> setIsTabNine(!isTabNine)} type="button" class="flex items-center justify-between w-full px-5 py-4 font-medium text-left text-white  hover:bg-primary dark:hover:bg-gray-800 hover:text-white" data-accordion-target="#accordion-open-body-3" aria-expanded="false" aria-controls="accordion-open-body-3">
                                        <span class="flex items-center"> When will the tokens be distributed ?  </span>
                                        {isTabNine ? <AiOutlineMinus /> : <AiOutlinePlus />}
                                        </button>
                                    </h2>
                                    <div id="accordion-open-body-4" className={isTabNine ? "" : "hidden"} aria-labelledby="accordion-open-heading-4">
                                        <div class="p-5  dark:border-gray-700">
                                        <p class="mb-2 text-[#d1d1d1e2] dark:text-gray-400">Mindchain is the project's main currency. It is the token that powers the entire Mindchain ecosystem and has a total supply and max supply of 71,000,000. commodo consequat.</p>
                                        </div>
                                    </div>
                            </div>

                            <div className="five shadow-md shadow-[#DEA83C30] border border-[#DEA83C30]">
                                <h2 id="accordion-open-heading-5">
                                        <button onClick={()=> setIsTabTen(!isTabTen)} type="button" class="flex items-center justify-between w-full px-5 py-4 font-medium text-left text-white hover:bg-primary dark:hover:bg-gray-800 hover:text-white" data-accordion-target="#accordion-open-body-3" aria-expanded="false" aria-controls="accordion-open-body-4">
                                        <span class="flex items-center">Will their be Bounties ?  </span>
                                            {isTabTen ? <AiOutlineMinus /> : <AiOutlinePlus />}
                                            
                                        </button>
                                    </h2>
                                    <div id="accordion-open-body-5" className={isTabTen ? "" : "hidden"} aria-labelledby="accordion-open-heading-5">
                                        <div class="p-5 dark:border-gray-700">
                                        <p class="mb-2 text-[#d1d1d1] dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default FAQ
