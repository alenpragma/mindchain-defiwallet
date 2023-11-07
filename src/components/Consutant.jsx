import React from "react";
import Container from "./layouts/Container";
import image from "../assets/images/media/consultent.jpg";
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
               Welcome to the Mindchain Consultant Program
              </h2>
              <p className="text-3xl">
                 An exciting opportunity to collaborate with us and earn extra income while supporting the growth and success of the Mind Smart Chain ecosystem.
              </p>
              <button className="border border-white px-7 py-1 hover:bg-[#E3AB41] hover:border-[#E3AB41] rounded hover:font-extralight">
                Apply Now
              </button>
            </div>
            <div className="lg:w-1/2 lg:mt-0 mt-5">
              <img className="rounded-lg" src={image} alt="" />
            </div>
          </div>
        </div>
        {/* Feature Section */}
        <div className="my-10">
          <div className="text-center my-5 flex flex-col gap-3">
            <h2 className="font-semibold text-2xl">
              What is the Mindchain Consultant Program?
            </h2>
            <p>
              Consultants will be responsible for sharing Mindchain's mission, updates, and educational content with the broader community. This program is an excellent way for you to earn money while supporting a groundbreaking blockchain project.
            </p>
          </div>
          <div className="lg:grid grid-cols-3 gap-2">
            <div className="flex flex-col gap-3">
              <div className="p-5 space-y-5 rounded w-full bg-[#ffffff0d]">
                <img className="w-16" src={feature1} alt="" />
                <h2 className="text-2xl font-semibold">Flexible Work</h2>
                <p>
                 As a consultant, you have the flexibility to work at your own pace, making it an ideal side gig for students, professionals, or anyone looking to earn extra income.
                </p>
              </div>
              <div className="p-5 space-y-5 rounded w-full bg-[#ffffff0d]">
                <img className="w-16" src={feature2} alt="" />
                <h2 className="text-2xl font-semibold">Earn While You Learn</h2>
                <p>
                  Enhance your knowledge of blockchain technology and cryptocurrency as you engage with the Mindchain community and stay updated on the latest industry trends.
                </p>
              </div>
            </div>
            <div className="p-5 flex flex-col gap-5 lg:gap-0 md:gap-0 justify-between bg-[#ffffff0d] mt-5 lg:mt-0 md:mt-0 rounded">
              <div>
                <h2 className="text-2xl font-semibold">Competitive Compensation</h2>
                <p>
                  Consultants will receive competitive compensation based on their level of activity and the quality of their contributions.
                </p>
              </div>
              <img className="w-full" src={feature5} alt="" />
            </div>
              <div className="flex flex-col gap-3 lg:mt-0 mt-5">
                <div className="p-5 space-y-5 rounded w-full bg-[#ffffff0d]">
                  <img className="w-16" src={feature3} alt="" />
                  <h2 className="text-2xl font-semibold">Contribute to Mindchain's Success</h2>
                  <p>
                    Your efforts directly impact Mindchain's growth and adoption, making you an essential part of our journey.
                  </p>
                </div>
                <div className="p-5 space-y-5 rounded w-full bg-[#ffffff0d]">
                  <img className="w-16" src={feature4} alt="" />
                  <h2 className="text-2xl font-semibold">Networking Opportunities</h2>
                  <p>
                   Connect with other Mindchain Consultants, developers, and industry experts through exclusive events and collaborations.
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
                <h2 className="text-2xl font-semibold">Consultant Responsibilities</h2>
                <p className="mt-5">
                  As a Mindchain Consultant, your responsibilities will include:
                </p>
              </div>
              <div className="space-y-5">
                <div className="flex gap-3 justify-start items-center">
                  <img src={icon1} alt="" />
                  <p>
                    Social Media Engagement: Share Mindchain content, news, and updates on your social media channels, engaging with your audience and promoting meaningful discussions.
                  </p>
                </div>
                <div className="flex gap-3 justify-start items-center">
                  <img src={icon2} alt="" />
                  <p>
                    Content Creation: Develop high-quality content such as articles, blog posts, videos, and infographics related to Mindchain and blockchain technology.
                  </p>
                </div>
                <div className="flex gap-3 justify-start items-center">
                  <img src={icon3} alt="" />
                  <p>
                  Community Building: Foster a welcoming and supportive atmosphere within the Mindchain community, answer questions, and help new members.
                  </p>
                </div>
                <div className="flex gap-3 justify-start items-center">
                  <img src={icon3} alt="" />
                  <p>
                 Data Analysis: Analyze and report on the effectiveness of your efforts in increasing Mindchain's online presence.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img className="rounded-lg" src={image} alt="" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Consutant;
