import React from 'react'
import { useEffect, useState } from 'react';
import Container from "../components/layouts/Container"
import axios from 'axios';

const MindchainStats = () => {
    const [statsData, setStatsData] = useState([])

    useEffect(()=> {
        
        async function statData(){
            const stats = await axios.get("https://mainnet.mindscan.info/api/v2/stats")
            setStatsData(stats.data)
        }
        statData()
    },[])

    console.log(statsData.average_block_time)

  return (
    <section className='bg-lightBlue pb-[100px]'>
        <Container>
            <div className="text-center pb-[40px]">
                <h2 className="font-cabin text-[32px] font-semibold pb-[15px]" >Mindchain</h2>
                <p className='font-cabin font-normal text-[24px]'>Check out the least data on Mindchain</p>
            </div>
           <div className="flex flex-col gap-y-[25px] md:gap-0 md:flex-row pt-[40px]">
                <div className="text-center w-full md:w-[25%]">
                    <p className='text-white font-cabin font-normal text-[22px]'>{statsData.average_block_time / 1000.0} Seconds</p>
                    <h3 className='font-cabin font-bold text-[25px] text-primary'>Average Block Time</h3>
                </div>
                <div className="text-center w-full md:w-[25%]">
                    <p className='text-white font-cabin font-normal text-[22px]'>{statsData.total_blocks}</p>
                    <h3 className='font-cabin font-bold text-[25px] text-primary'>Total blocks</h3>
                </div>
                <div className="text-center w-full md:w-[25%]">
                    <p className='text-white font-cabin font-normal text-[22px]'>{statsData.total_addresses}</p>
                    <h3 className='font-cabin font-bold text-[25px] text-primary'>Wallet Addresses</h3>
                </div>
                <div className="text-center w-full md:w-[25%]">
                    <p className='text-white font-cabin font-normal text-[22px]'>{statsData.total_transactions}</p>
                    <h3 className='font-cabin font-bold text-[25px] text-primary'>Total Transactions</h3>
                </div>
           </div>
            </Container>
    </section>
  )
}

export default MindchainStats