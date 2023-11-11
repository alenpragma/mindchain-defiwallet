// import DiveSlider from "@/app/_components/_sliders/_dive-in-slider/DiveSlider";
// import OurClientSlider from "@/app/_components/_sliders/_ourClientSLider/OurClientSlider";
import React from "react";
import { Link } from "react-router-dom";
import DiveSlider from "../components/DiveSlider";
import OurClientSlider from "../components/OurClientSlider";

import icon1 from "../assets/images/documents/img1.svg";
// import icon1 from "../assets/images/documents/";
import icon2 from "../assets/images/documents/img2.svg";
import icon3 from "../assets/images/documents/img3.svg";


import image from "../assets/images/media/abbasidor.jpg";

const EliteClub = () => {
  let keyFeatureData = [
    {
      icon: "	https://tbe.io/_next/static/media/featureOneIcon.9ade4402.svg",
      title: "Customized Solutions",
      text: "Access tailored blockchain solutions to meet your unique needs.",
    },
    {
      icon: "https://tbe.io/_next/static/media/tech-suite-product-feature.26a81b2a.svg",
      title: "Exclusive Events",
      text: "Gain entry to Elite-only webinars, seminars, and conferences.",
    },
    {
      icon: "	https://tbe.io/_next/static/media/ecosystem-product-feature.a1edea07.svg",
      title: "Insider Insights",
      text: "Stay ahead of the curve with exclusive updates, news, and industry trends.",
    },
    {
      icon: "https://tbe.io/_next/static/media/empowerment-feature-icon.40c3398a.svg",
      title: "Early Access",
      text: "Be the first to explore and utilize Mindchain's groundbreaking blockchain innovations.",
    },
    {
      icon: "	https://tbe.io/_next/static/media/rewards-feature-icon.a0c5f574.svg",
      title: "Networking Opportunities",
      text: "Connect with like-minded blockchain enthusiasts and industry leaders.",
    },
    {
      icon: "	https://tbe.io/_next/static/media/users-feature-icon.9058d04d.svg",
      title: "Premium Support",
      text: "Enjoy priority assistance from our dedicated Elite support team.",
    },
  ];
  return (
    <>
      <div className="text-white bg-lightBlue">
        {/* EliteClub banner start */}
        <div
          style={{
            backgroundImage: 'url("https://i.postimg.cc/Xvr2cRHY/mind-43.png")',
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top",
            backgroundSize: "cover",
          }}
          className="w-full py-[50px] md:py-[100px]"
        >
          <div className="max-w-container text-center px-[10px]  mx-auto">
            <p>Why Become Elite Member!</p>
            <h1 className="mt-3 text-[35px] font-bold md:text-[50px] text-center">
              Elevate Your Blockchain Experience: Join the Mindchain Elite Club!
            </h1>
            <p className="mt-3 mb-5 text-grey text-center">
              Welcome to the future of blockchain technology with Mindchain! Our
              Elite Club is your exclusive gateway to unlocking the full
              potential of the next-generation blockchain platform.
            </p>
            <a href="https://my.mindchainwallet.com/">
              <div className="py-[10px] px-[20px] border rounded-lg text-center inline-block mt-5 duration-500 hover:bg-primary ">
                Apply Now
              </div>
            </a>
          </div>
        </div>
        {/* EliteClub banner end */}
        {/* key feature start */}
        <div className="max-w-container px-[10px] mx-auto py-[100px]">
          <div className="flex flex-col gap-y-10 md:justify-between md:flex-row ">
            <h2 className="w-full md:w-[40%] text-[20px] md:text-[30px] font-bold gradiant-text">
              When you become a member
            </h2>
            <p className="w-full md:w-[40%] text-grey">
              You'll gain access to a world of cutting-edge benefits and
              privileges, including
            </p>
          </div>
          <div className="py-[80px] flex flex-col md:flex-row gap-3 flex-wrap">
            {keyFeatureData.map((item) => (
              <div
                style={{
                  background: "rgba(64,64,64,.1)",
                  backdropFilter: "blur(15px)",
                }}
                className="rounded-md w-full md:w-[49%] lg:w-[32%]  p-4 flex flex-col gap-y-3"
              >
                <img className="w-[50px] h-auto" src={item.icon} alt="" />
                <h3 className="font-bold text-[25px]">{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
        {/* keyfeature end */}
        {/* dive in text start */}
        <div className="max-w-container px-[10px] mx-auto ">
          <h2 className="text-[25px] md:text-[35px] text-center font-bold gradiant-text mb-10">
          How to Become Elite Club Member
          </h2>
        </div>
        {/* dive in text end */}
        {/* dive slider start */}
        <DiveSlider />
        {/* dive slider end */}
        {/* our client slider start */}
        {/* <OurClientSlider /> */}
        {/* our client slider end */}



         {/* Why us Section */}
         <div className="max-w-container px-[10px] mx-auto py-[50px]">
          <div className="flex flex-row-reverse justify-center items-center gap-8">
            <div className="lg:w-1/2 space-y-8">
              <div>
                <h2 className="text-2xl font-semibold">Terms and Conditions</h2>
                <p className="mt-5">
                To become an Elite Club member of Mindchain you need to follow these terms and conditions.
                </p>
              </div>
              <div className="space-y-5">
                <div className="flex gap-3 justify-start items-center">
                  <img src={icon1} alt="" />
                  <p>
                  <span className="font-semibold">Eligibility :</span> To become a Mindchain Elite Club member, you must be at least 18 years old. Membership eligibility may be subject to additional criteria set by Mindchain.
                  </p>
                </div>
                <div className="flex gap-3 justify-start items-center">
                  <img src={icon2} alt="" />
                  <p>
                  <span className="font-semibold">Application Process :</span> Interested individuals can apply for Elite Club membership through the official Mindchain website or designated channels. Mindchain reserves the right to approve or reject membership applications at its discretion.
                  </p>
                </div>
                <div className="flex gap-3 justify-start items-center">
                  <img src={icon3} alt="" />
                  <p>
                  <span className="font-semibold">Membership Fees :</span> Membership fees, if applicable, will be clearly outlined during the application process. Fees are non-refundable, and members are responsible for any associated charges.
                  </p>
                </div>
                <div className="flex gap-3 justify-start items-center">
                  <img src={icon2} alt="" />
                  <p>
                  <span className="font-semibold">Membership Duration :</span>Membership duration will be specified upon acceptance into the Elite Club. Mindchain may offer different membership terms, including annual, biennial, or other options.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img className="rounded-lg" src="https://i.postimg.cc/h487W169/Untitled-1-1.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EliteClub;
