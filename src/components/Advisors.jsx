import React from 'react'

import Container from './layouts/Container'

// images
import AdvisorsOneImg from '../assets/images/Advisors/a1.jpg'
import AdvisorsTwoImg from '../assets/images/Advisors/a2.jpg'
import AdvisorsThreeImg from '../assets/images/Advisors/a3.jpg'
import AdvisorsFourImg from '../assets/images/Advisors/a4.jpg'
import AdvisorsFiveImg from '../assets/images/Advisors/a5.jpg'

const Advisors = () => {
  return (
    <section className='bg-lightBlue pb-[60px] md:pb-[150px] text-white'>
        <Container>
          <div className="w-full">
            <div className="text-center w-3/4 mx-auto">
                  <h2 className='font-cabin font-semibold text-[32px] relative before:absolute before:w-[75px] before:h-[3px] before:bg-primary before:content-[""] before:top-[-34%] before:left-[50%] before:translate-x-[-50%] before:translate-y-[-50%] before:z-10'>Advisors</h2>
                  <p className='font-cabin font-normal text-[18px] pt-[30px] md:px-[100px] pb-[50px] mx-auto'>Mindchain consensus protocol delivers unparalleled speed, security, and reliability. Enjoy almost instant transactions and extremely low fees.</p>
              </div>

              <div className="flex flex-col md:flex-row gap-y-[40px]">
                <div className="w-full md:w-[30%] text-center">
                  <img className='w-[90px] h-[90px] rounded-full mx-auto' src={AdvisorsOneImg} alt="AdvisorsOneImg" />
                  <h2 className='pt-[10px]'> Rafael Agostino </h2>
                  <h3 className='font-normal text-[#7701F3] text-[14px]'>Board Member</h3>
                </div>
                <div className="w-full md:w-[30%] text-center">
                  <img className='w-[90px] h-[90px] rounded-full mx-auto' src={AdvisorsTwoImg} alt="AdvisorsOneImg" />
                  <h2 className='pt-[10px]'> Marysa Vosniak </h2>
                  <h3 className='font-normal text-[#7701F3] text-[14px]'>Board Member</h3>
                </div>
                <div className="w-full md:w-[30%] text-center">
                  <img className='w-[90px] h-[90px] rounded-full mx-auto' src={AdvisorsThreeImg} alt="AdvisorsOneImg" />
                  <h2 className='pt-[10px]'> Glenn Mitchells </h2>
                  <h3 className='font-normal text-[#7701F3] text-[14px]'>Board Member</h3>
                </div>
                <div className="w-full md:w-[30%] text-center">
                  <img className='w-[90px] h-[90px] rounded-full mx-auto' src={AdvisorsFourImg} alt="AdvisorsOneImg" />
                  <h2 className='pt-[10px]'> Gary Simmons </h2>
                  <h3 className='font-normal text-[#7701F3] text-[14px]'>Crypto Finance Analyst</h3>
                </div>
                <div className="w-full md:w-[30%] text-center">
                  <img className='w-[90px] h-[90px] rounded-full mx-auto' src={AdvisorsFiveImg} alt="AdvisorsOneImg" />
                  <h2 className='pt-[10px]'> Olga Broniszewska </h2>
                  <h3 className='font-normal text-[#7701F3] text-[14px]'>Board Member</h3>
                </div>
              </div>
          </div>
        </Container>
    </section>
  )
}

export default Advisors


