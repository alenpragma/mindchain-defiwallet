import React from 'react'
import Container from './layouts/Container'
import partnerImg_1 from '../assets/cryptomarket.svg'
import partnerImg_2 from '../assets/bitit.svg'
import partnerImg_3 from '../assets/coin.svg'



const Partner = () => {
  return (
    <section className='bg-lightBlue text-white'>
        <Container>
            <div className="flex w-3/6 justify-center mx-auto flex-wrap animate-pulse animate-thrice animate-ease-linear">
            <img className="h-[80px]" src={partnerImg_1} alt="partnerImg_1" />
            <img className="h-[80px]" src={partnerImg_2} alt="partnerImg_2" />
            <img className="h-[80px]" src={partnerImg_3} alt="partnerImg_3" />
            </div>
        </Container>
    </section>
  )
}

export default Partner