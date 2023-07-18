import React from 'react'

import Container from '../components/layouts/Container'
import {BsFillPlayFill } from 'react-icons/bs'

// images
import chained from '../assets/chained.svg'
import stacked from '../assets/stacked.svg'
import compact from '../assets/compact.svg'
import solorShape from '../assets/solar.svg'


const Start = () => {
  return (
    <section className='pt-[70px] pb-[150px] bg-lightBlue relative'>
        <Container>

        <img className='absolute top-[0] right-[-1821px] rotate-[221deg] z-[100] w=[60%] hidden lg:block' src={solorShape} alt="solorShape" />
        
        <div className="box text-center text-white">
          <button className='bg-gradient-to-r from-[#FFBF5E] bg-primary py-4 px-11 uppercase ml-[10px]  text-white rounded-full hover:bg-[#dea029]'>Buy Package</button>
          <p className='py-[20px] text-[#BCB3CC]'>We Accept</p>
          <div className="flex justify-center gap-3 pb-[100px]">
            <div className="">
              <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="3em" height="3em" viewBox="0 0 32 32" data-icon="cryptocurrency:btc" class="iconify iconify--cryptocurrency"><path fill="#BCB3CC" fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16s-7.163 16-16 16zm7.189-17.98c.314-2.096-1.283-3.223-3.465-3.975l.708-2.84l-1.728-.43l-.69 2.765c-.454-.114-.92-.22-1.385-.326l.695-2.783L15.596 6l-.708 2.839c-.376-.086-.746-.17-1.104-.26l.002-.009l-2.384-.595l-.46 1.846s1.283.294 1.256.312c.7.175.826.638.805 1.006l-.806 3.235c.048.012.11.03.18.057l-.183-.045l-1.13 4.532c-.086.212-.303.531-.793.41c.018.025-1.256-.313-1.256-.313l-.858 1.978l2.25.561c.418.105.828.215 1.231.318l-.715 2.872l1.727.43l.708-2.84c.472.127.93.245 1.378.357l-.706 2.828l1.728.43l.715-2.866c2.948.558 5.164.333 6.097-2.333c.752-2.146-.037-3.385-1.588-4.192c1.13-.26 1.98-1.003 2.207-2.538zm-3.95 5.538c-.533 2.147-4.148.986-5.32.695l.95-3.805c1.172.293 4.929.872 4.37 3.11zm.535-5.569c-.487 1.953-3.495.96-4.47.717l.86-3.45c.975.243 4.118.696 3.61 2.733z"></path></svg>
            </div>

          <div className="">
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="3em" height="3em" viewBox="0 0 32 32" data-icon="cryptocurrency:eth" class="iconify iconify--cryptocurrency"><g fill="#BCB3CC" fill-rule="evenodd"><path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16s-7.163 16-16 16zm7.994-15.781L16.498 4L9 16.22l7.498 4.353l7.496-4.354zM24 17.616l-7.502 4.351L9 17.617l7.498 10.378L24 17.616z"></path><g fill-rule="nonzero"><path fill-opacity=".298" d="M16.498 4v8.87l7.497 3.35zm0 17.968v6.027L24 17.616z"></path><path fill-opacity=".801" d="m16.498 20.573l7.497-4.353l-7.497-3.348z"></path><path fill-opacity=".298" d="m9 16.22l7.498 4.353v-7.701z"></path></g></g></svg>
          </div>
             
          <div className="">
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="3em" height="3em" viewBox="0 0 32 32" data-icon="cryptocurrency:eth" class="iconify iconify--cryptocurrency"><g fill="#BCB3CC" fill-rule="evenodd"><path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16s-7.163 16-16 16zm7.994-15.781L16.498 4L9 16.22l7.498 4.353l7.496-4.354zM24 17.616l-7.502 4.351L9 17.617l7.498 10.378L24 17.616z"></path><g fill-rule="nonzero"><path fill-opacity=".298" d="M16.498 4v8.87l7.497 3.35zm0 17.968v6.027L24 17.616z"></path><path fill-opacity=".801" d="m16.498 20.573l7.497-4.353l-7.497-3.348z"></path><path fill-opacity=".298" d="m9 16.22l7.498 4.353v-7.701z"></path></g></g></svg>
          </div>

          <div className="">
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="3em" height="3em" viewBox="0 0 32 32" data-icon="cryptocurrency:xem" class="iconify iconify--cryptocurrency"><path fill="#BCB3CC" fill-rule="evenodd" d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16s-7.163 16-16 16zM6.145 11.954c.084.7.206 1.398.365 2.093c.025.111.058.209.1.3a4.53 4.53 0 0 0 8.47-.671c.11-.395.163-.817.18-1.353a6.005 6.005 0 0 1 3.169-5.178a26.063 26.063 0 0 0-2.015-.14a20.221 20.221 0 0 0-6.262.852A20.035 20.035 0 0 0 6 9.637c.002.759.05 1.53.145 2.317zm16.613 8.56a20.147 20.147 0 0 0 3.164-9.215c.05-.57.076-1.123.078-1.664a19.598 19.598 0 0 0-1.356-.704c-.763-.357-1.389-.612-2.008-.807a4.468 4.468 0 0 0-2.437-.083a4.518 4.518 0 0 0-3.382 5.219c.244 1.306.937 2.318 2.074 3.04a7.075 7.075 0 0 0 .239.146a5.933 5.933 0 0 1 2.147 2.262a5.91 5.91 0 0 1 .729 2.89c.263-.353.514-.715.752-1.084zm-3.037 3.673a.581.581 0 0 0 .118-.162l.044-.087c.09-.177.128-.251.172-.343c.52-1.085.618-2.186.283-3.307a4.52 4.52 0 0 0-4.902-3.206a4.604 4.604 0 0 0-1.706.57a6.027 6.027 0 0 1-6.034-.013a20.346 20.346 0 0 0 4.063 6.031a20.375 20.375 0 0 0 3.225 2.691c.409.275.809.524 1.018.639a20.522 20.522 0 0 0 3.72-2.813z"></path></svg>
          </div>

          </div>
          <div className="flex flex-col md:flex-row justify-center gap-y-[50px]">
            <div className="w-full md:w-1/3">
              <img className='w-[100px] inline-block' src={chained} alt="chained" />
              <h3 className='font-cabin font-semibold text-[16px] py-[10px]'>Mining</h3>
              <p className='px-[30px] md:px-[40px]'> For each of the blockchain algorithms that we have proposed, we are providing some of the highest performance mining systems available. </p>
            </div>
            <div className="w-full md:w-1/3">
              <img className='w-[100px] inline-block' src={stacked} alt="stacked" />
              <h3 className='font-cabin font-semibold text-[16px] py-[10px]'>Staking</h3>
              <p className='px-[30px] md:px-[40px]'> Earn daily rewards on your idle tokens. Simple & Secure. Search popular coins and start earning. </p>
            </div>
            <div className="w-full md:w-1/3">
              <img className='w-[100px] inline-block' src={compact} alt="compact" />
              <h3 className='font-cabin font-semibold text-[16px] py-[10px]'>Trading</h3>
              <p className='px-[30px] md:px-[40px]'> Supercharged features to make you happy and lorem ipsum sit dolor amet </p>
            </div>
          </div>
          <div className="play-video flex justify-center animate-bounce pt-[100px] md:pt-[50px] animate">
            <span className="relative flex h-[55px] w-[55px]">
            <BsFillPlayFill className='absolute top-[50%] left-[50%] text-[30px] z-[1] translate-x-[-50%] translate-y-[-50%]' />
              <span className="animate-ping ease-in duration-300 absolute inline-flex h-full w-full rounded-full bg-[#0DF3B2] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-[55px] w-[55px] bg-[#0DF3B2]"></span>
              
            </span>
          </div>
        </div>
        </Container>
    </section>
  )
}

export default Start