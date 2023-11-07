import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
import { BsArrowRight } from "react-icons/bs";

const DiveSlider = () => {
  return (
    <div className="max-w-container mx-auto px-[10px] pb-[80px] ">
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="w-full flex flex-col-reverse md:flex-row justify-between items-center pb-[60px] md:pb-0">
            <div className="w-full md:w-[48%] ">
              <p>
                Mindchain takes blockchain technology's inherent virtues of security
                and transparency to the next level. Our premium products stand
                as paragons of innovation and quality, encapsulating the
                freshest breakthroughs in the blockchain sphere. Rest easy
                knowing you're equipped with trustworthy and state-of-the-art
                solutions.
              </p>
              <p className="mt-5">
                Joining the Mindchain Elite Club means becoming part of a community that is shaping the future of blockchain technology. Don't miss your chance to be at the forefront of innovation. Apply for Elite membership now and experience blockchain like never before!
              </p>
              <p className="mt-5 flex gap-3 items-center">
              <span><BsArrowRight /></span>Deposit $1000 to become an Elite Club Member.
              </p>
            </div>
            <div className="w-full md:w-[48%] flex justify-center items-center">
              <img
                src="https://i.postimg.cc/SxKSK90w/ELITE-CLUBB.png"
                className="w-[75%] h-auto"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full flex flex-col-reverse md:flex-row justify-between items-center pb-[60px] md:pb-0">
            <div className="w-full md:w-[48%] ">
              <p>
                The Mindchain Consultant Program is designed to harness the power of our community members to promote Mindchain across various social media platforms and engage in content creation. Consultants will be responsible for sharing Mindchain's mission, updates, and educational content with the broader community. This program is an excellent way for you to earn money while supporting a groundbreaking blockchain project.
              </p>
              <p className="mt-5 font-bold">
                Joining the Mindchain Elite Club means becoming part of a community that is shaping the future of blockchain technology. Don't miss your chance to be at the forefront of innovation. Apply for Elite membership now and experience blockchain like never before!
              </p>
            </div>
            <div className="w-full md:w-[48%] flex justify-center items-center">
              <img
                src="	https://tbe.io/_next/static/media/tbeSliderTwo.34c94f0a.png"
                className="w-[75%] h-auto"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full flex flex-col-reverse md:flex-row justify-between items-center pb-[60px] md:pb-0">
            <div className="w-full md:w-[48%] ">
              <p>
              The Mindchain Consultant Program is designed to harness the power of our community members to promote Mindchain across various social media platforms and engage in content creation. Consultants will be responsible for sharing Mindchain's mission, updates, and educational content with the broader community. This program is an excellent way for you to earn money while supporting a groundbreaking blockchain project.
              </p>
              <p className="mt-5 font-bold">
                Joining the Mindchain Elite Club means becoming part of a community that is shaping the future of blockchain technology. Don't miss your chance to be at the forefront of innovation. Apply for Elite membership now and experience blockchain like never before!.
              </p>
            </div>
            <div className="w-full md:w-[48%] flex justify-center items-center">
              <img
                src="	https://tbe.io/_next/static/media/tbeSliderThree.9a24fd29.png"
                className="w-[75%] h-auto"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default DiveSlider;
