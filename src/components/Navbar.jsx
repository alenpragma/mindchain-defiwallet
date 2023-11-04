import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Container from "./layouts/Container";
import { BiLogoTelegram } from "react-icons/bi";
import { BsChevronDown } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

// iamges
import navicon from "../assets/mind-krypton.svg";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [mobile, setMobile] = useState(false);

  let documentationDropDown = [
    {
      name: "Validator",
      path: "/validator",
    },
    {
      name: "Ambassador",
      path: "ambassador",
    },
    {
      name: "Consultant",
      path: "/",
    },
    {
      name: "Elite Club",
      path: "eliteclub",
    },
    {
      name: "Project Manager",
      path: "projectmanager",
    },
  ];

  return (
    <nav className="bg-lightBlue py-5 text-white relative z-[999] w-full animate-fade-down animate-once">
      <Container>
        <div className="flex flex-col md:flex-row gap-y-[40px] md:gap-y-0 justify-between relative ">
          <a className="w-full lg:w-1/4" href="https://www.mindchainwallet.com">
            <img
              className="w-9 inline-block animate-spin origin-center"
              src={navicon}
              alt="icon"
            />
            <span className="pl-2 lg:pl-4 font-cabin font-semibold text-[13px]lg:text-[19px] tracking-widest">
              MINDCHAINWALLET
            </span>
          </a>
          <div
            className="block md:hidden absolute top-[5px] right-[15px] text-[35px] cursor-pointer"
            onClick={() => setMobile(!mobile)}
          >
            {!mobile ? <FaBars /> : <AiOutlineClose />}
          </div>
          {mobile && (
            <div className="xs:block w-full md:w-3/4 flex flex-col md:flex-row md:items-center gap-x-2 text-end  md:justify-end">
             <ul className=" flex flex-col md:flex-row gap-y-[15px] md:gap-x-3 lg:gap-x-6 font-cabin font-normal text-sm uppercase text-center">
                <li className="">
                  <Link to="https://www.mindchain.info">Mindchain Coin</Link>
                </li>
                <li className="flex justify-center relative items-center group cursor-pointer">
                  Documentation{" "}
                  <BsChevronDown className="duration-300 group-hover:rotate-[180deg] " />
                  <div className="absolute z-[999999] hidden bottom-[-180px] p-2 rounded-md bg-[#222] group-hover:flex">
                    <ul className="flex flex-col gap-y-3">
                     { documentationDropDown.map((item,index)=>(
                      <li className="hover:text-[#e0e0e0]" key={index}>
                        <Link to={item.path}>{item.name}</Link>
                      </li>
                      ))}
                    </ul>
                  </div>
                </li>
                <li className="">
                  <Link to="#">Roadmap</Link>
                </li>
                <li className="">
                  <Link to="https://academy.mindchain.info/ ">News</Link>
                </li>
                <li className="">
                  <Link to="CoinMarket">Coin Market</Link>
                </li>
                <li className="">
                  <Link to="airdrop">Air-Drop</Link>
                </li>
                <li className="">
                  <a href="https://t.me/mindchainMIND">
                    <BiLogoTelegram className="hidden lg:inline" /> telegram
                  </a>
                </li>
              </ul>
              <button className=' px-0 md:px-7 uppercase ml-0 md:ml-[10px] relative z-[1] md:before:absolute md:before:z-[-1] md:before:w-[115px] lg:before:w-[120px] md:before:h-[39px] md:before:skew-x-[-19deg] md:before:bg-gradient-to-r md:before:from-[#FFBF5E] md:before:bg-primary md:before:content-[""] md:before:top-[40%] md:before:left-[53%] md:before:rounded text-center  md:text-start hidden md:block before:translate-y-[-50%] before:translate-x-[-50%]'>
                <a href="http://mindchainwallet.com/register">Register</a>
              </button>
            </div>
          )}
          {show && (
            <div className=" min-[0px]:hidden md:blcok w-full md:w-3/4 md:flex flex-col md:flex-row md:items-center gap-x-2 text-end   md:justify-end ">
              <ul className=" flex flex-col md:flex-row gap-y-[15px] md:gap-x-3 lg:gap-x-6 font-cabin font-normal text-sm uppercase text-center">
                <li className="">
                  <Link to="https://www.mindchain.info">Mindchain Coin</Link>
                </li>
                <li className="flex relative items-center group cursor-pointer">
                  Documentation{" "}
                  <BsChevronDown className="duration-300 group-hover:rotate-[180deg] " />
                  <div className="absolute z-[999999] hidden bottom-[-180px] p-2 rounded-md bg-[#222] group-hover:flex">
                    <ul className="flex flex-col gap-y-3">
                     { documentationDropDown.map((item,index)=>(
                      <li className="hover:text-[#e0e0e0]" key={index}>
                        <Link to={item.path}>{item.name}</Link>
                      </li>
                      ))}
                    </ul>
                  </div>
                </li>
                <li className="">
                  <Link to="#">Roadmap</Link>
                </li>
                <li className="">
                  <Link to="https://academy.mindchain.info/ ">News</Link>
                </li>
                <li className="">
                  <Link to="CoinMarket">Coin Market</Link>
                </li>
                <li className="">
                  <Link to="airdrop">Air-Drop</Link>
                </li>
                <li className="">
                  <a href="https://t.me/mindchainMIND">
                    <BiLogoTelegram className="hidden lg:inline" /> telegram
                  </a>
                </li>
              </ul>

              <a
                className=' px-0 md:px-7 uppercase ml-0 md:ml-[10px] relative z-[1] md:before:absolute md:before:z-[-1] md:before:w-[115px] lg:before:w-[120px] md:before:h-[39px] md:before:skew-x-[-19deg] md:before:bg-gradient-to-r md:before:from-[#FFBF5E] md:before:bg-primary md:before:content-[""] md:before:top-[40%] md:before:left-[53%] md:before:rounded text-center  md:text-start hidden md:block before:translate-y-[-50%] before:translate-x-[-50%]'
                href="https://my.mindchainwallet.com/register"
              >
                Register
              </a>
            </div>
          )}
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
