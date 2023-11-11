import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";
import { RxDotFilled } from "react-icons/rx";

const DiveSlider = () => {
  const title = [
    {
      heading: "Experience and Skills",
      title:
        "Look for candidates with experience in project management, particularly in the blockchain or crypto space. They should have a strong understanding of the technical and business aspects of blockchain projects.",
    },
    {
      heading: "Communication Skills",
      title:
        "A Project Manager will need to communicate effectively with project teams, your internal team, and other stakeholders. Strong communication skills are a must.",
    },
    {
      heading: "Technical Proficiency",
      title:
        "While they don't need to be developers, having a good grasp of blockchain technology will be beneficial for understanding the technical requirements of listed projects.",
    },
    {
      heading: "Problem-Solving Ability",
      title:
        "The Project Manager should be a problem solver, as they may encounter challenges during the onboarding process and need to find creative solutions.",
    },
    {
      heading: "Organization and Attention to Detail",
      title:
        "Given the complexity of blockchain projects, attention to detail and strong organizational skills are essential.",
    },
    {
      heading: "Negotiation Skills",
      title:
        "They will need to negotiate terms with project owners, so having negotiation skills is valuable.",
    },
  ];
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
                A Mindchain Project Manager needs a diverse skill set to
                effectively manage and facilitate the onboarding and integration
                of projects within the Mind Smart Chain ecosystem. Here are the
                key skills and qualities required for this role:
              </p>
              <div className="mt-5 flex flex-col gap-5">
                {title.map((element, index) => (
                  <div className="flex gap-5 items-center justify-start">
                    <div className="w-10">
                      <RxDotFilled className="w-5" />
                    </div>
                    <div>
                      <span className="font-semibold">{element.heading} : </span>
                    {element?.title}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full md:w-[48%] flex justify-center items-center">
              <img
                src="https://i.postimg.cc/X7FPs6CZ/project-manager.png"
                className="w-[75%] h-auto"
                alt=""
              />
            </div>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <div className="w-full flex flex-col-reverse md:flex-row justify-between items-center pb-[60px] md:pb-0">
            <div className="w-full md:w-[48%] ">
              <p>
                The Mindchain Consultant Program is designed to harness the
                power of our community members to promote Mindchain across
                various social media platforms and engage in content creation.
                Consultants will be responsible for sharing Mindchain's mission,
                updates, and educational content with the broader community.
                This program is an excellent way for you to earn money while
                supporting a groundbreaking blockchain project.
              </p>
              <p className="mt-5 font-bold"></p>
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
                The Mindchain Consultant Program is designed to harness the
                power of our community members to promote Mindchain across
                various social media platforms and engage in content creation.
                Consultants will be responsible for sharing Mindchain's mission,
                updates, and educational content with the broader community.
                This program is an excellent way for you to earn money while
                supporting a groundbreaking blockchain project.
              </p>
              <p className="mt-5 font-bold">
                Joining the Mindchain Elite Club means becoming part of a
                community that is shaping the future of blockchain technology.
                Don't miss your chance to be at the forefront of innovation.
                Apply for Elite membership now and experience blockchain like
                never before!.
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
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default DiveSlider;
