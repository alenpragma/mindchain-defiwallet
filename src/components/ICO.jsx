import React from "react";

import Container from "../components/layouts/Container";
import { BsArrowReturnRight } from "react-icons/bs";

// iamges
import tokensImg from "../assets/tokens.svg";
import chartsImg from "../assets/charts.svg";
import bountyImg from "../assets/bounty.svg";

// react tabs
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

// react countdown
import Countdown from "react-countdown-simple";

const ICO = () => {
  const oneHour = new Date(
    new Date().setHours(new Date().getHours() + 120)
  ).toISOString();

  return (
    <section className=" bg-lightBlue py-[60px] md:py-[150px] text-white">
      <Container>
        <div className="text-center w-3/4 mx-auto">
          <h2 className='font-cabin font-semibold text-[32px] relative before:absolute before:w-[75px] before:h-[3px] before:bg-primary before:content-[""] before:top-[-34%] before:left-[50%] before:translate-x-[-50%] before:translate-y-[-50%] before:z-10'>
            Learn About Mindchain
          </h2>
          <p className="font-cabin font-normal text-[18px] pt-[30px] md:px-[100px] pb-[50px] mx-auto">
            {" "}
            At Mindchain, we believe that everyone should have the freedom to
            earn, hold, spend, share and give their money - no matter who you
            are or where you come from.
          </p>
        </div>
        <Tabs className=" px-0 md:px-[100px] text-[15px] md:text-[18px] ">
          <TabList className="flex justify-center">
            <Tab>Mindchain CEX</Tab>

            <Tab>MARCHENT</Tab>
            <Tab>AMBASSADOR</Tab>
          </TabList>

          <TabPanel>
            <div className="flex flex-col md:flex-row md:items-center pt-[60px]">
              <div className=" w-full md:w-2/4 pb-[40px] md:pb-[0]">
                <h2 className="font-cabin font-normal pb-[30px]">
                  Mindchain CEX
                </h2>
                <div className="flex flex-col gap-[15px]">
                  <p>
                    MindChain is a trusted, unique and best cryptocurrency, it
                    is fast growing and secure. This is the name of the native
                    currency MIND coin. It is the most affordable, convenient,
                    and interoperable, high-performance blockchain
                    cryptocurrency.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-2/4 ">
                <img className="w-full " src="https://mindchain.info/Upload/ad/660001cbd2ce0.png" alt="" />
                {/* <div className="bg-[#f7be69fe]  w-full p-[35px] rounded">
                  <div className=" w-full flex pl-0 lg:pl-[53px]">
                    <Countdown
                      targetDate={oneHour}
                      renderer={({ days, hours, minutes, seconds }) => (
                        <div className="">
                          <div className="flex  gap-x-6 md:gap-x-6 font-cabin semibold text-[1rem] md:text-[16px] lg:text-[28px] text-white">
                            <div>
                              {days}
                              <span className="px-[5px] lg:px-[15px]">:</span>
                            </div>
                            <div>
                              {hours}
                              <span className="px-10px] lg:px-[15px]">:</span>
                            </div>
                            <div>
                              {minutes}
                              <span className="px-[0px] lg:px-[15px]">:</span>
                            </div>
                            <div>{seconds}</div>
                          </div>
                          <div className="v">
                            <div className="flex gap-2  lg:gap-6 text-[12px] lg:text-[18px] text-white pb-[15px]">
                              <div>Days</div>
                              <div>hours</div>
                              <div>minutes</div>
                              <div>seconds</div>
                            </div>
                          </div>
                        </div>
                      )}
                    />
                  </div>

                  <div className="w-full bg-neutral-200 dark:bg-neutral-600 rounded-[15px]">
                    <div className="bg-primary p-[10px] text-center text-xs font-medium leading-none text-primary-100 w-[70%] rounded-full"></div>
                  </div>

                  <div className="flex justify-center">
                    <button className=" bg-gradient-to-r from-[#DEA83C] text-[10px] md:text-[18px] bg-primary text-white py-[10px] lg:py-2 px-3 md:px-7 mt-[20px] uppercase rounded-full hover:bg-[#dea029]">
                      Starting CEX
                    </button>
                  </div>
                </div> */}
              </div>
            </div>
          </TabPanel>

          <TabPanel>
            <div className="flex pt-[50px]">
              <div className="w-2/4">
                <h2 className="font-cabin font-normal pb-[30px]">
                  {" "}
                  Marchent Benefits:{" "}
                </h2>
                <div className="flex flex-col gap-[15px]">
                  <div>
                    <h3 className="font-cabin font-light  flex items-center gap-x-3">
                      <BsArrowReturnRight /> MUSD Staking{" "}
                    </h3>
                    {/* <p className="font-sans font-light text-[14px] text-[#d1d1d1] pl-[10px]">
                      {" "}
                      1 200 000 Mind (22%){" "}
                    </p> */}
                  </div>
                  <div>
                    <h3 className="font-cabin font-light flex items-center gap-x-3 ">
                      <BsArrowReturnRight /> 10% extra bonus{" "}
                    </h3>
                  </div>
                  <div>
                    <h3 className="font-cabin font-light  flex items-center gap-x-3">
                      <BsArrowReturnRight /> Lifetime Validity{" "}
                    </h3>
                    {/* <p className="font-sans font-light text-[14px] text-[#d1d1d1] pl-[10px]">
                      {" "}
                      Minimal transaction amount is 1 BTC, 1 ETH, 1 LTC{" "}
                    </p> */}
                  </div>
                  <div>
                    <h3 className="font-cabin font-light flex items-center gap-x-3">
                      <BsArrowReturnRight /> 24/7 Usability{" "}
                    </h3>
                    {/* <p className="font-sans font-light text-[14px] text-[#d1d1d1] pl-[10px]">
                      {" "}
                      Minimal transaction amount is 1 BTC, 1 ETH, 1 LTC{" "}
                    </p> */}
                  </div>
                </div>
              </div>
              <div className="w-2/4">
                <img className="w-[70%]" src={chartsImg} alt="chartsImg" />
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="flex pt-[50px]">
              <div className="w-2/4">
                <h2 className="font-cabin font-normal pb-[30px]">
                  {" "}
                  REWARDS & BOUNTIES{" "}
                </h2>
                <div className="flex flex-col gap-[15px]">
                  <div>
                    <h3 className="font-cabin font-light flex items-center gap-x-3">
                      <BsArrowReturnRight />
                      Education and Awareness
                    </h3>
                    {/* <p className="font-sans font-light text-[14px] text-[#d1d1d1] pl-[10px]">
                      {" "}
                      1 200 000 Mind (22%){" "}
                    </p> */}
                  </div>
                  <div>
                    <h3 className="font-cabin font-light flex items-center gap-x-3">
                      <BsArrowReturnRight />
                      Advocacy and Promotion{" "}
                    </h3>
                    {/* <p className="font-sans font-light text-[14px] text-[#d1d1d1] pl-[10px]">
                      {" "}
                      1 BTC = 2200 Mind, 1 ETH = 825 KP{" "}
                    </p> */}
                  </div>
                  <div>
                    <h3 className="font-cabin font-light flex items-center gap-x-3">
                      <BsArrowReturnRight />
                      Community Engagement
                    </h3>
                    {/* <p className="font-sans font-light text-[14px] text-[#d1d1d1] pl-[10px]">
                      {" "}
                      Minimal transaction amount is 1 BTC, 1 ETH, 1 LTC{" "}
                    </p> */}
                  </div>
                  <div>
                    <h3 className="font-cabin font-light flex items-center gap-x-3">
                      <BsArrowReturnRight />
                      Feedback Collection
                    </h3>
                    {/* <p className="font-sans font-light text-[14px] text-[#d1d1d1] pl-[10px]">
                      {" "}
                      Minimal transaction amount is 1 BTC, 1 ETH, 1 LTC{" "}
                    </p> */}
                  </div>
                  <div>
                    <h3 className="font-cabin font-light flex items-center gap-x-3">
                      <BsArrowReturnRight />
                      AMA Management{" "}
                    </h3>
                    {/* <p className="font-sans font-light text-[14px] text-[#d1d1d1] pl-[10px]">
                      {" "}
                      Minimal transaction amount is 1 BTC, 1 ETH, 1 LTC{" "}
                    </p> */}
                  </div>
                  <div>
                    <h3 className="font-cabin font-light flex items-center gap-x-3">
                      {" "}
                      <BsArrowReturnRight /> Market Research{" "}
                    </h3>
                    {/* <p className="font-sans font-light text-[14px] text-[#d1d1d1] pl-[10px]">
                      {" "}
                      Minimal transaction amount is 1 BTC, 1 ETH, 1 LTC{" "}
                    </p> */}
                  </div>

                  <div className="">
                    <h3 className="font-cabin font-light flex items-center gap-x-3">
                      <BsArrowReturnRight />
                      Compliance
                    </h3>
                  </div>
                  <div className="">
                    <h3 className="font-cabin font-light mb-5 flex items-center gap-x-3">
                      <BsArrowReturnRight />
                      Support
                    </h3>
                  </div>
                </div>
              </div>
              <div className="w-2/4">
                <img className="w-[70%]" src={bountyImg} alt="bountyImg" />
              </div>
            </div>
            <a href="https://my.mindchainwallet.com/public/ambassador/">
              <button class="bg-gradient-to-r from-[#FFBF5E] bg-primary py-2 px-8 uppercase  text-white rounded hover:bg-[#dea029]">
                Learn More
              </button>
            </a>
          </TabPanel>
        </Tabs>
      </Container>
    </section>
  );
};

export default ICO;
