import React from "react";

import Container from "../components/layouts/Container";
import Metamask from "../features/Metamask/MetaMask";
import AddMscNetwork from "../features/AddMscNetwork/AddMscNetwork";

// images
import footerImg from "../assets/images/footer/mind-krypton-gradient.svg";
import ShapeImg from "../assets/solar.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="bg-lightBlue text-white pb-[100px] relative ">
      <Container>
        <img
          className="absolute top-[0%] right-[-22%] w-[50%] h-[100%] hidden lg:block"
          src={ShapeImg}
          alt="ShapeImg"
        />
        <div className="w-full text-center">
          <div className="flex flex-col items-center  pb-[40px]">
            <img
              className="w-[5%] animate-spin origin-center"
              src={footerImg}
              alt="footerImg"
            />
            <span className="pl-2 lg:pl-4 font-cabin font-semibold text-[18px] lg:text-[19px] tracking-widest">
              MINDCHAINWALLET
            </span>
            <p className="text-[16px] text-[#5900BA]">
              Next Generation Blockchain Ecosystem.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-y-[20px] md:gap-y-0 justify-between items-center">
            <div className="w-full md:w-[32%] ">
              <ul className="flex flex-col md:flex-row gap-[20px]">
                <li className='relative before:absolute before:w-[25%]  md:before:w-[100%] before:h-[2px] before:bg-primary before:opacity-0 before:hover:opacity-100 before:content-[""] before:bottom-[-50%] before:left-[0%] hover:before:left-[50%] before:translate-x-[-50%] before:translate-y-[-50%] before:z-10 hover:before:transition-all hover:opacity-100 hover:before:ease-in-out hover:before:duration-700'>
                  <a href="https://mindchain.info">MIND Ecosystem</a>
                </li>
                <li className='relative before:absolute before:w-[25%]  md:before:w-[100%] before:h-[2px] before:bg-primary before:opacity-0 before:hover:opacity-100 before:content-[""] before:bottom-[-50%] before:left-[0%] hover:before:left-[50%] before:translate-x-[-50%] before:translate-y-[-50%] before:z-10 hover:before:transition-all hover:opacity-100 hover:before:ease-in-out hover:before:duration-700'>
                  <a href="https://mainnet.mindscan.info/">Mainnet Explorer</a>
                </li>
                <li className='relative before:absolute before:w-[25%]  md:before:w-[100%] before:h-[2px] before:bg-primary before:opacity-0 before:hover:opacity-100 before:content-[""] before:bottom-[-50%] before:left-[0%] hover:before:left-[50%] before:translate-x-[-50%] before:translate-y-[-50%] before:z-10 hover:before:transition-all hover:opacity-100 hover:before:ease-in-out hover:before:duration-700'>
                  <a href="https://pay.mindchain.info">MindPay</a>
                </li>
              </ul>
            </div>
            <div className=" w-full md:w-[30%]">
              <form className="w-[100%] relative">
                <input
                  className="rounded-full bg-[#3d3f4f] border-[#0df3b263] w-[100%] focus:border-[#0DF3B2] focus:duration-700 focus:ring-transparent outline-transparent"
                  type="text"
                />
                <button className="w-[100px] h-[98%] rounded-full absolute top-[0%] right-[0%] bg-[#0BF4AF] border border-[#0BF4AF]">
                  Subscribe
                </button>
              </form>
            </div>
            <div className="w-full md:w-[32%]">
              <ul className="flex flex-col md:flex-row gap-y-[20px] md:gap-y-0 md:gap-x-[50px]">
                <Link
                  to="privacy-policy"
                  className='relative before:absolute md:before:w-[100%] before:w-[25%] before:h-[2px] before:bg-primary before:opacity-0 before:hover:opacity-100 before:content-[""] before:bottom-[-50%] before:left-[0%] hover:before:left-[50%] before:translate-x-[-50%] before:translate-y-[-50%] before:z-10 hover:before:transition-all hover:opacity-100 hover:before:ease-in-out hover:before:duration-700'
                >
                  Privacy Policy
                </Link>
                <li className='relative before:absolute md:before:w-[100%] before:w-[25%] before:h-[2px] before:bg-primary before:opacity-0 before:hover:opacity-100 before:content-[""] before:bottom-[-50%] before:left-[0%] hover:before:left-[50%] before:translate-x-[-50%] before:translate-y-[-50%] before:z-10 hover:before:transition-all hover:opacity-100 hover:before:ease-in-out hover:before:duration-700'>
                  <a href="https://www.wallet.mindchain.info/">Wallet</a>
                </li>
                <li className='relative before:absolute md:before:w-[100%] before:w-[25%] before:h-[2px] before:bg-primary before:opacity-0 before:hover:opacity-100 before:content-[""] before:bottom-[-50%] before:left-[0%] hover:before:left-[50%] before:translate-x-[-50%] before:translate-y-[-50%] before:z-10 hover:before:transition-all hover:opacity-100 hover:before:ease-in-out hover:before:duration-700'>
                  <a href="https://t.me/mindchainMIND">Telegram</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="">
            <Metamask />
            <AddMscNetwork />
          </div>
          <div className="pt-[40px]">
            <p className="text-[#7945b9] pb-[20px]">
              © 2022-2025 | Mindchain. All Rights Reserved
            </p>
            <p className="">
              Developed by{" "}
              <a className="text-[#0AF5AE]" href="#">
                Mindchain Team
              </a>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Footer;
