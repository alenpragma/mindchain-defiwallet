import React from "react";
import Container from "./layouts/Container";
import image from "../assets/images/media/post1.svg";
import icon1 from "../assets/images/documents/img1.svg";
import icon2 from "../assets/images/documents/img2.svg";
import icon3 from "../assets/images/documents/img3.svg";

import feature1 from "../assets/images/feature/feature1.svg";
import feature2 from "../assets/images/feature/feature2.svg";
import feature3 from "../assets/images/feature/feature3.svg";
import feature4 from "../assets/images/feature/feature4.svg";
import feature5 from "../assets/images/feature/fetuare5.png";

const Consutant = ({ title }) => {
  return (
    <div className="bg-[#1F2029] text-white">
      <Container>
        <div className="py-10">
          <div className="lg:flex justify-center items-center flex-row-reverse gap-x-5">
            <div className="lg:w-1/2 leading-10 space-y-10">
              <h2 className="text-6xl font-bold">
                Unleash the Power of World-Class Services
              </h2>
              <p className="text-3xl">
                Transform your endeavors with our versatile and robust suite of
                services.
              </p>
              <button className="border border-white px-7 py-1 hover:bg-[#E3AB41] hover:border-[#E3AB41] rounded hover:font-extralight">
                Log In Now
              </button>
            </div>
            <div className="lg:w-1/2 lg:mt-0 mt-5">
              <img src={image} alt="" />
            </div>
          </div>
        </div>
        {/* Feature Section */}
        <div className="my-10">
          <div className="text-center my-5 flex flex-col gap-3">
            <h2 className="font-semibold text-2xl">
              Features that Elevate Your Journey
            </h2>
            <p>
              Our range of services are tailored to meet the diverse needs of
              modern users.
            </p>
          </div>
          <div className="lg:grid grid-cols-3 gap-2">
            <div className="flex flex-col gap-3">
              <div className="p-5 space-y-5 rounded w-full bg-[#ffffff0d]">
                <img className="w-16" src={feature1} alt="" />
                <h2 className="text-2xl font-semibold">Marketing Tools</h2>
                <p>
                  Level up your marketing strategies with TBE's advanced
                  marketing tools designed for optimum reach and engagement.
                </p>
              </div>
              <div className="p-5 space-y-5 rounded w-full bg-[#ffffff0d]">
                <img className="w-16" src={feature2} alt="" />
                <h2 className="text-2xl font-semibold">Marketing Tools</h2>
                <p>
                  Level up your marketing strategies with TBE's advanced
                  marketing tools designed for optimum reach and engagement.
                </p>
              </div>
            </div>
            <div className="p-5 flex flex-col gap-5 lg:gap-0 md:gap-0 justify-between bg-[#ffffff0d] mt-5 lg:mt-0 md:mt-0 rounded">
              <div>
                <h2 className="text-2xl font-semibold">Marketing Tools</h2>
                <p>
                  Level up your marketing strategies with TBE's advanced
                  marketing tools designed for optimum reach and engagement.
                </p>
              </div>
              <img className="w-full" src={feature5} alt="" />
            </div>
              <div className="flex flex-col gap-3 lg:mt-0 mt-5">
                <div className="p-5 space-y-5 rounded w-full bg-[#ffffff0d]">
                  <img className="w-16" src={feature3} alt="" />
                  <h2 className="text-2xl font-semibold">Marketing Tools</h2>
                  <p>
                    Level up your marketing strategies with TBE's advanced
                    marketing tools designed for optimum reach and engagement.
                  </p>
                </div>
                <div className="p-5 space-y-5 rounded w-full bg-[#ffffff0d]">
                  <img className="w-16" src={feature4} alt="" />
                  <h2 className="text-2xl font-semibold">Marketing Tools</h2>
                  <p>
                    Level up your marketing strategies with TBE's advanced
                    marketing tools designed for optimum reach and engagement.
                  </p>
                </div>
              </div>
          </div>
        </div>

        {/* Why us Section */}
        <div className="py-10">
          <div className="flex justify-center items-center gap-3">
            <div className="lg:w-1/2 space-y-8">
              <div>
                <h2 className="text-2xl font-semibold">Why Us?</h2>
                <p className="mt-5">
                  Quality, Reliability, and a Community of Innovators
                </p>
              </div>
              <div className="space-y-5">
                <div className="flex gap-3 justify-start items-center">
                  <img src={icon1} alt="" />
                  <p>
                    Our focus on quality ensures that you are always met with
                    excellence, whether it's in products, services, or community
                    engagement.
                  </p>
                </div>
                <div className="flex gap-3 justify-start items-center">
                  <img src={icon2} alt="" />
                  <p>
                    Our focus on quality ensures that you are always met with
                    excellence, whether it's in products, services, or community
                    engagement.
                  </p>
                </div>
                <div className="flex gap-3 justify-start items-center">
                  <img src={icon3} alt="" />
                  <p>
                    Our focus on quality ensures that you are always met with
                    excellence, whether it's in products, services, or community
                    engagement.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img src={image} alt="" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Consutant;
