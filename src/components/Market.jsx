import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Container from './layouts/Container';

const Market = () => {

    const [marketdata, setMarketdata] = useState([])

    useEffect(()=>{
        async function market() {
            let markers = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd")
            setMarketdata(markers.data)
            console.log(Market)
            
        }
        market()
    },[])

    console.log(marketdata)

  return (
    <section className='bg-lightBlue py-[100px]'>
        <Container>
          <div className="text-center pb-[40px]">
              <h2 className='font-cabin font-semibold text-[32px]'>Coin Market</h2>
          </div>
          <div className="main flex gap-4 w-full">
              <div className="w-full flex items-center gap-2">
                <ul className='flex flex-col gap-2 w-full'>
                  <li className='flex text-white pb-[30px] justify-between'>
                    <div className="w-[20%] text-[15px]">Product</div>
                    <div className="w-[15%] pl-[1.25rem]  text-[15px]">Price</div>
                    <div className="w-[15%] pl-[1.25rem]  text-[15px]">24h Change</div>
                    <div className="w-[15%] pl-[1.25rem]  text-[15px]">Market Cap</div>
                    <div className="w-[15%] pl-[1.25rem]  text-[15px]">24h Volume</div>
                  </li>
                  {
                    marketdata.map((item, index)=>(
                      <li key={index}>
                        <div className="w-full flex items-center justify-between pb-[20px] gap-x-[1rem] ">
                          <div className="w-[20%] flex gap-x-2 items-center">
                              <img className='w-[30px] h-[30px]' src={item.image} alt="" />
                              <h3 className='font-lato font-semibold sm:text-[12px] md:text-[16px] '>{item.name}</h3>
                          </div>
                          <div className="w-[15%]">
                            <p className='m-0 font-lato font-semibold sm:text-[12px] md:text-[16px] '>${item.current_price}</p>
                          </div>
                          <div className="w-[15%]">
                            <h3 className='font-lato font-semibold sm:text-[12px] md:text-[16px] '>{item.market_cap_change_percentage_24h}%</h3>
                          </div>
                          <div className="w-[15%]">
                            <h2>{item.market_cap}</h2>
                          </div>
                          <div className="w-[15%]">
                            <h3 className='font-lato font-semibold sm:text-[12px] md:text-[16px] '>${item.total_volume}</h3>
                          </div>
                        
                        </div>
                      </li>
                    )
                  )}
                </ul>
              </div>
              {/* <div className="w-[50%]">
                <h2>aaa</h2>
                <h2>aaa</h2>
                <h2>aaa</h2>
                <h2>aaa</h2>
                <h2>aaa</h2>
                
              </div> */}
          </div>
        </Container>
    </section>
    
  )
}

export default Market