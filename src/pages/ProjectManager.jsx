// import DiveSlider from "@/app/_components/_sliders/_dive-in-slider/DiveSlider";
// import OurClientSlider from "@/app/_components/_sliders/_ourClientSLider/OurClientSlider";
import React from "react";
import { Link } from "react-router-dom";
import DiveSlider from "../components/DiveSlider";
import OurClientSlider from "../components/OurClientSlider";
import { RxDotFilled } from "react-icons/rx";

const ProjectManager = () => {
  let keyFeatureData = [
    {
      icon: "	https://tbe.io/_next/static/media/featureOneIcon.9ade4402.svg",
      title: "Project Relations :",
      text: [
        { text: "Build and maintain relationships with project owners." },
        { text: "Act as the main point of contact for listed projects." },
        { text: "Address project owner inquiries and concerns." },
      ],
    },
    {
      icon: "https://tbe.io/_next/static/media/tech-suite-product-feature.26a81b2a.svg",
      title: "Quality Assurance:",
      text: [
        {
          text: "Monitor and assess the quality and performance of listed projects.",
        },
        {
          text: "Ensure that listed projects meet the quality standards and expectations of Mind Smart Chain.",
        },
        {
          text: "Identify areas for improvement and suggest enhancements to listed projects.",
        },
      ],
    },
    {
      icon: "	https://tbe.io/_next/static/media/ecosystem-product-feature.a1edea07.svg",
      title: "Technical Support:",
      text: [
        {
          text: "Provide technical guidance and support to projects during the integration process.",
        },
        {
          text: "Assist in resolving technical issues and challenges that may arise.",
        },
        {
          text: "Educate project teams on how to leverage Mind Smart Chain's technical features.",
        },
      ],
    },
    {
      icon: "https://tbe.io/_next/static/media/empowerment-feature-icon.40c3398a.svg",
      title: "Financial Empowerment",
      text: [
        { text: "Build and maintain relationships with project owners." },
        { text: "Act as the main point of contact for listed projects." },
        { text: "Address project owner inquiries and concerns." },
      ],
    },
    {
      icon: "	https://tbe.io/_next/static/media/rewards-feature-icon.a0c5f574.svg",
      title: "Communication:",
      text: [
        {
          text: "Maintain clear and regular communication with project owners, keeping them informed about updates and changes.",
        },
        {
          text: "Collaborate with the Mind Smart Chain technical team to address project-specific technical requirements.",
        },
        {
          text: "Keep internal teams informed about the status of ongoing projects.",
        },
      ],
    },
    {
      icon: "	https://tbe.io/_next/static/media/users-feature-icon.9058d04d.svg",
      title: "Documentation and Reporting:",
      text: [
        {
          text: "Maintain documentation of the onboarding process for each project.",
        },
        { text: "Generate regular reports on the status of listed projects." },
        {
          text: "Provide insights and data on project performance and integration.",
        },
      ],
    },
    {
      icon: "	https://tbe.io/_next/static/media/users-feature-icon.9058d04d.svg",
      title: "Feedback Collection:",
      text: [
        {
          text: "Gather feedback from project owners to identify areas for improvement.",
        },
        {
          text: "Collect user feedback related to the performance and user experience of listed projects.",
        },
        {
          text: "Use feedback to iterate on and enhance the onboarding process.",
        },
      ],
    },
    {
      icon: "	https://tbe.io/_next/static/media/users-feature-icon.9058d04d.svg",
      title: "Legal Compliance:",
      text: [
        {
          text: "Ensure that all listed projects comply with relevant legal and regulatory requirements.",
        },
        {
          text: "Collaborate with the legal and compliance teams to address any legal issues.",
        },
      ],
    },
    {
      icon: "	https://tbe.io/_next/static/media/users-feature-icon.9058d04d.svg",
      title: "Problem-Solving:",
      text: [
        {
          text: "Identify challenges and obstacles during the onboarding process and find solutions.",
        },
        {
          text: "Be proactive in addressing potential roadblocks that may hinder project integration.",
        },
      ],
    },
  ];
  return (
    <>
      <div className="text-white bg-lightBlue">
        {/* ProjectManager banner start */}
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
            <p>Blockchain is the future of the world</p>
            <h1 className="mt-3 text-[25px] font-bold md:text-[40px] text-center">
              Become A Project Manager of Mindchain Ecosystem
            </h1>
            <p className="mt-3 mb-5 text-grey text-center">
              Blockchain Project Manager needs a diverse skill set to
              effectively manage and facilitate the onboarding and integration
              of projects within the Mind Smart Chain ecosystem.
            </p>
            <a href="https://my.mindchainwallet.com/">
              <div className="py-[10px] px-[20px] border rounded-lg text-center inline-block mt-5 duration-500 hover:bg-primary ">
                Apply Now
              </div>
            </a>
          </div>
        </div>
        {/* ProjectManager banner end */}
        {/* key feature start */}
        <div className="max-w-container px-[10px] mx-auto py-[100px]">
          <div className="flex flex-col gap-y-10 md:justify-between md:flex-row ">
            <h2 className="w-full md:w-[40%] text-[20px] md:text-[30px] font-bold gradiant-text">
              Project Manager Responsibilities
            </h2>
            <p className="w-full md:w-[40%] text-grey">
              Evaluate potential projects for compatibility with Mind Smart
              Chain. Ensure that projects meet technical standards and
              compliance requirements. Coordinate the onboarding process,
              including technical integration and legal compliance.
            </p>
          </div>
          <div className="py-[80px] flex flex-col md:flex-row gap-3 flex-wrap">
            {keyFeatureData &&
              keyFeatureData.map((item) => (
                <div
                  style={{
                    background: "rgba(64,64,64,.1)",
                    backdropFilter: "blur(15px)",
                  }}
                  className="rounded-md w-full md:w-[49%] lg:w-[32%]  p-4 flex flex-col gap-y-3"
                >
                  <img className="w-[50px] h-auto" src={item.icon} alt="" />
                  <h3 className="font-bold text-[25px]">{item.title}</h3>

                  {item.text.map((element, index) => (
                    <div className="flex gap-3 items-center justify-start">
                      <div className="w-10">
                        <RxDotFilled className="w-5" />
                      </div>
                      {element?.text}
                    </div>
                  ))}
                </div>
              ))}
          </div>
        </div>
        {/* keyfeature end */}
        {/* dive in text start */}
        <div className="max-w-container px-[10px] mx-auto ">
          <h2 className="text-[25px] md:text-[35px] text-center font-bold gradiant-text mb-10">
            Your Blockchain Destiny is One Click Away: Dive In!
          </h2>
        </div>
        {/* dive in text end */}
        {/* dive slider start */}
        <DiveSlider />
        {/* dive slider end */}
        {/* our client slider start */}
        {/* <OurClientSlider /> */}
        {/* our client slider end */}
      </div>
    </>
  );
};

export default ProjectManager;
