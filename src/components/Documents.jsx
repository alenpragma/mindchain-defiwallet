import React from "react";
import Container from "./layouts/Container";
import image from "../assets/images/media/post1.svg";
import icon1 from "../assets/images/documents/img1.svg";
import icon2 from "../assets/images/documents/img2.svg";
import icon3 from "../assets/images/documents/img3.svg";

const Documents = ({ title }) => {
  return (
    <div className="bg-[#1F2029] text-white">
      <Container>
        <div className="py-10">
          <div className="lg:flex justify-center items-center">
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

export default Documents;
