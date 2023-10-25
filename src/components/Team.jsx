import React from "react";
import Container from "../components/layouts/Container";
import solorShape from "../assets/solar.svg";

// Import team member images
import teamMemberOneImg from "../assets/images/team/john.svg";
import teamMemberTwoImg from "../assets/images/team/john.jpg";
import teamMemberThreeImg from "../assets/images/team/joshua.svg";
import teamMemberFourImg from "../assets/images/team/joshua.jpg";
import teamMemberFiveImg from "../assets/images/team/lucy.svg";
import teamMemberSixImg from "../assets/images/team/lucy.jpg";
import teamMemberSevenImg from "../assets/images/team/mike.svg";
import teamMemberEightImg from "../assets/images/team/mike.jpg";
import teamMemberNineImg from "../assets/images/team/sandra.svg";
import teamMemberTenImg from "../assets/images/team/sandra.jpg";
import teamMemberElevenImg from "../assets/images/team/sara.svg";
import teamMemberTwelveImg from "../assets/images/team/sara.jpg";

const teamMembers = [
    {
      name: "M. Demiral",
      role: "CEO",
      img1: teamMemberOneImg,
      img2: teamMemberTwoImg,
      description:
        "Most welcome to Mindchain. I believe we can make Mindchain to the top of the Blockchain Ecosystem.",
    },
    {
      name: "Galeeb Mirza",
      role: "CTO",
      img1: teamMemberThreeImg,
      img2: teamMemberFourImg,
      description:
        "Hello! Mindchain lover. We envision Mindchain as one of the world's leading blockchain technologies.",
    },
    {
      name: "lX Deniz",
      role: "CMO",
      img1: teamMemberFiveImg,
      img2: teamMemberSixImg,
      description:
        "I work as a Marketing Officer on Mindchain. I see Mindchain as one of the best ecosystems in the blockchain world.",
    },
    {
      name: "Arik Willson",
      role: "CSO",
      img1: teamMemberSevenImg,
      img2: teamMemberEightImg,
      description:
        "I believe Mindchain is the best Blockchain Ecosystem in the world.",
    },
    {
      name: "Alton Fida",
      role: "CSO",
      img1: teamMemberNineImg,
      img2: teamMemberTenImg,
      description:
        "Mindchain is the best Blockchain Platform that can change the world.",
    },
    {
      name: "Willie Erickson",
      role: "Project Manager",
      img1: teamMemberElevenImg,
      img2: teamMemberTwelveImg,
      description:
        "Mindchain is one of the best Blockchain projects in my life.",
    },
  ];
  

const Team = () => {
  return (
    <section className="bg-lightBlue pb-[60px] md:pb-[150px] relative text-white">
      <Container>
        <img
          className="absolute bottom-[11%] left-[-284px] origin-center rotate-[210deg] w-[48%] z-[100] hidden lg:block"
          src={solorShape}
          alt="solarShape"
        />

        <div className="w-full">
          <div className="text-center w-3/4 mx-auto">
            <h2 className="font-cabin font-semibold text-[32px] relative before:absolute before:w-[75px] before:h-[3px] before:bg-primary before:content-[''] before:top-[-34%] before:left-[50%] before:translate-x-[-50%] before:translate-y-[-50%] before:z-10">
              Our Team
            </h2>
            <p className="font-cabin font-normal text-[18px] pt-[30px] md:px-[100px] pb-[50px] mx-auto">
              Our technology enables instant, secure, and fractional trading of all your financial assets.
            </p>
          </div>
          <div className="w-[100%] flex flex-col md:flex-row justify-center gap-[30px] flex-wrap text-center">
            {teamMembers.map((member, index) => (
              <div key={index} className="w-full md:w-[28%] hover:translate-y-[-15px] duration-700 hover:cursor-pointer">
                <div className="border border-[#DEA83C30] p-[20px]] text-center group hover:shadow-lg hover:shadow-primary shadow-lg shadow-[#DEA83C30]">
                  <div className="relative mt-[30px]">
                    <img
                      className="w-[130px] h-[130px] mx-auto rounded-full border-4 border-transparent outline-4 outline-[#00FF9919] outline delay-100 group-hover:outline-[#00FF99]"
                      src={member.img1}
                      alt={member.name}
                    />
                    <img
                      className="w-[130px] h-[130px] border-4 border-transparent rounded-full delay-100 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] opacity-0 group-hover:opacity-100"
                      src={member.img2}
                      alt={member.name}
                    />
                  </div>
                  <h2 className="pt-[20px] pb-[5px] font-cabin font-semibold capitalize">
                    {member.name}
                  </h2>
                  <h3 className="pb-[10px] text-[#7701F3]">{member.role}</h3>
                  <p className="px-[20px] pb-[30px]">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Team;

