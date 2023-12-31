import React from 'react'

import Container from './layouts/Container';

// images
import partnerImg_1 from '../assets/images/partner/mindchain acadeny.svg'
import partnerImg_2 from '../assets/images/partner/mindchain logo.svg'
import partnerImg_3 from '../assets/images/partner/wallet.png'
import partnerImg_4 from '../assets/images/partner/mindpay.svg'
import partnerImg_5 from '../assets/images/partner/MindScan.png'
import partnerImg_6 from '../assets/images/partner/MUSD LOGO.png'



const Partner = () => {
  return (
    <section className='bg-lightBlue text-white'>
        <Container>
        <div className="w-full flex flex-col md:flex-row sm:gap-y-[200px] md:gap-y-0 gap-x-5 sm:justify-center lg:justify-between mx-auto flex-wrap animate-pulse animate-thrice animate-ease-linear">
            <img className="w-[150px] h-[80px] mx-auto" src={partnerImg_1} alt="partnerImg_1" />
            <img className="w-[150px] h-[80px] mx-auto" src={partnerImg_2} alt="partnerImg_2" />
            <img className="w-[150px] h-[80px] mx-auto" src={partnerImg_3} alt="partnerImg_3" />
            <img className="w-[150px] h-[80px] mx-auto" src={partnerImg_4} alt="partnerImg_4" />
            <img className="w-[150px] h-[80px] mx-auto" src={partnerImg_5} alt="partnerImg_5" />
            <img className="w-[150px] h-[80px] mx-auto" src={partnerImg_6} alt="partnerImg_6" />
            </div>
        </Container>
    </section>
  )
}

export default Partner