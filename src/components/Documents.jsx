import React from "react";
import Container from "./layouts/Container";
import image from "../assets/images/media/abbasidor.jpg";
import icon1 from "../assets/images/documents/img1.svg";
import icon2 from "../assets/images/documents/img2.svg";
import icon3 from "../assets/images/documents/img3.svg";

import feature1 from "../assets/images/feature/feature1.svg";
import feature2 from "../assets/images/feature/feature2.svg";
import feature3 from "../assets/images/feature/feature3.svg";
import feature4 from "../assets/images/feature/feature4.svg";
import feature5 from "../assets/images/feature/fetuare5.png";

const Documents = ({ title }) => {
  return (
    <div className="bg-[#1F2029] text-white">
      <Container>
        <div className="py-10">
          <div className="lg:flex justify-center items-center flex-row-reverse gap-x-5">
            <div className="lg:w-1/2 leading-10 space-y-10">
              <h2 className="text-6xl font-bold">
                Join the Mindchain Ambassador Program
              </h2>
              <p className="text-3xl">
                Are you ready to embark on this exciting journey as a Mindchain Ambassador? Join us in making a significant impact on the blockchain space. 
              </p>
              <a href="https://my.mindchainwallet.com/">
              <div className="py-[5px] px-[20px] border rounded-lg text-center inline-block mt-5 duration-500 hover:bg-primary ">
                Apply Now
              </div>
            </a>
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
              What is Mindchain?
            </h2>
            <p>
              Mindchain is a leading EVM (Ethereum Virtual Machine) compatible blockchain that provides a robust infrastructure for decentralized applications (DApps) and smart contracts. Our platform is known for its high-speed transactions, low fees, and seamless scalability, making it an ideal choice for developers, businesses, and crypto enthusiasts.
            </p>
          </div>
          <div className="lg:grid grid-cols-3 gap-2">
            <div className="flex flex-col gap-3">
              <div className="p-5 space-y-5 rounded w-full bg-[#ffffff0d]">
                <img className="w-16" src={feature1} alt="" />
                <h2 className="text-2xl font-semibold">Be Part of Something Big</h2>
                <p>
                  Join a community of like-minded individuals passionate about blockchain technology and its potential to reshape industries.
                </p>
              </div>
              <div className="p-5 space-y-5 rounded w-full bg-[#ffffff0d]">
                <img className="w-16" src={feature2} alt="" />
                <h2 className="text-2xl font-semibold">Influence and Impact</h2>
                <p>
                  As an Ambassador, you'll have a direct say in the development of Mindchain, with opportunities to share your insights and suggestions.
                </p>
              </div>
            </div>
            <div className="p-5 flex flex-col gap-5 lg:gap-0 md:gap-0 justify-between bg-[#ffffff0d] mt-5 lg:mt-0 md:mt-0 rounded">
              <div>
                <h2 className="text-2xl font-semibold">Networking</h2>
                <p>
                  Connect with other Ambassadors, Mindchain developers, and industry leaders through exclusive events and collaborations.
                </p>
              </div>
              <img className="w-full" src={feature5} alt="" />
            </div>
              <div className="flex flex-col gap-3 lg:mt-0 mt-5">
                <div className="p-5 space-y-5 rounded w-full bg-[#ffffff0d]">
                  <img className="w-16" src={feature3} alt="" />
                  <h2 className="text-2xl font-semibold">Get Rewards</h2>
                  <p>
                    Enjoy a range of incentives, including token rewards, exclusive merchandise, and early access to Mindchain updates and projects.
                  </p>
                </div>
                <div className="p-5 space-y-5 rounded w-full bg-[#ffffff0d]">
                  <img className="w-16" src={feature4} alt="" />
                  <h2 className="text-2xl font-semibold">Education</h2>
                  <p>
                   Gain access to resources and training materials to enhance your knowledge of blockchain technology and Mindchain.
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
                <h2 className="text-2xl font-semibold">Ambassador Responsibilities</h2>
                <p className="mt-5">
                  As a Mindchain Ambassador, your role is to promote and advocate for Mindchain in various ways:
                </p>
              </div>
              <div className="space-y-5">
                <div className="flex gap-3 justify-start items-center">
                  <img src={icon1} alt="" />
                  <p>
                    Social Media Advocacy: Share Mindchain news, updates, and content on your social media platforms to help raise awareness and engage the community.
                  </p>
                </div>
                <div className="flex gap-3 justify-start items-center">
                  <img src={icon2} alt="" />
                  <p>
                    Content Creation: Write articles, create videos, or develop educational content about Mindchain to inform and educate your audience.
                  </p>
                </div>
                <div className="flex gap-3 justify-start items-center">
                  <img src={icon3} alt="" />
                  <p>
                    Community Engagement: Participate in discussions, answer questions, and provide support to the Mindchain community in forums, chat groups, and other platforms.
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

export default Documents;
