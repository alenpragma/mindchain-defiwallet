import React from "react";
import Container from "./layouts/Container";
import mindchain from "../assets/images/mindchain/mindechain.png";
import { BsDot } from "react-icons/bs";
import { FaArrowRightFromBracket } from "react-icons/fa6";

const Blog = () => {
  const aridrop = [
    {
      title: " Create an account on Mindchainwallet and submit UID",
      link: "https://mindchainwallet.com",
    },
    {
      title: "Go to twitter and follow Mindchain and submite username",
      link: "https://twitter.com/MindChain1",
    },
    {
      title: "Retweet",
      link: "https://telegram.com/mindchain1",
    },
    {
      title: "Join Telegram Channel and submite username",
      link: ": https://tg.com/mindchain1",
    },
    {
      title: "Join telegram Group and submite Username",
      link: "https://tg.com/mindchainmind",
    },
    {
      title: "Subscribe youtube",
      link: "https://youtube.com/mindchain",
    },
    {
      title: "Join our discord community",
      link: "https://discord.com/mindchain",
    },
    {
      title: "Share with friend to get extra bonus",
      link: "",
    },
    {
      title: "Complete every step to get extra 20 BMIND",
      link: "",
    },
  ];
  return (
    <section className="bg-lightBlue py-[100px]">
      <Container>
        <div className="lg:flex justify-center gap-10">
          <div className="lg:w-1/3 flex flex-col items-center">
            <div className="flex flex-col items-center">
              <img className="w-96 rounded" src={mindchain} alt="" />
              <div>
                <h2 className="text-yellow-500 text-2xl font-semibold">
                  MindBase (BMIND)
                </h2>
                <h2 className="text-white font-semibold text-2xl">
                  Airdrop No: 02
                </h2>
              </div>
            </div>
            <div className="mt-10">
              <ul className="text-white">
                <li className="flex items-center">
                  <BsDot className="text-[40px]" />
                  <span>Airdrop Link: VISIT WEBSITE</span>
                </li>
                <li className="flex items-center">
                  <BsDot className="text-[40px]" />
                  <span>Total value: n/a</span>
                </li>
                <li className="flex items-center">
                  <BsDot className="text-[40px]" />
                  <span>Airdrop confirmed</span>
                </li>
                <li className="flex items-center">
                  <BsDot className="text-[40px]" />
                  <span>Platform: Mind Smart Chain</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="lg:w-2/3 space-y-5">
            <p className="text-white">
              MindBase is an Product of Mind Smart Chain Network. It’s Optimise
              first Dex of Mind20 network its called{" "}
              <span>
                <a className="text-blue-500" href="https://mindchainswap.com">
                  https://mindchainswap.com
                </a>
              </span>{" "}
              MindBAse interoperability protocol designed for lightweight
              message passing across chains. MindBAse provides authentic and
              guaranteed message delivery with configurable trustlessness.
            </p>
            <p>
              MindBase is the Token of Mind20 network and a part of Mindchain
              Ecosystem. Users who perticipets the MindBAse Airdrop they will
              get bonus of amount 10000000 Mindbase.
            </p>
            <div className="text-white">
              <h2 className="text-[20px] font-semibold">Step-by-Step Guide:</h2>
              <ul className="pl-5">
                {aridrop?.map((data, index) => (
                  <li key={index}>
                    task 0{index + 1} : {data.title}:{" "}
                    <span>
                      <a className="text-blue-500" href={data.link}>
                        {data.link}
                      </a>
                    </span>
                  </li>
                ))}
                <li>
                task 10 : Visit{" "}
                  <span>
                    <a className="text-blue-500" href="https://Mindchain.info">
                      https://Mindchain.info
                    </a>
                  </span>{" "}
                  and remark about Mindchain ecosystem
                </li>
              </ul>
            </div>
            <div className="text-white">
              <h2 className="text-[20px] font-semibold">
                How to get Airdrop Bonus:{" "}
              </h2>
              <ul className="pl-5">
                <li>1 . Download and install Metamask or trustwallet:</li>
                <li>2 . Setting up Mindchain Mainnet: Visit here:</li>
                <li>3 . Add BMIND token by contact address:</li>
                <li>4 . Select Mindchain netwok when import BMIND token</li>
                <li>5. Submite Bmind wallet address:</li>
              </ul>
            </div>
            <div>
              <p>
                If you have free time , Don’t forget to verify yourself with on
                https://mindchainwallet.com account , which is a way to ensure
                proof of humanity and prevent bot activity. It distinguishes
                real wallets from Mindchainwallet,
              </p>
              <p>not miss out on the next DeFi airdrop!</p>
            </div>
            <div>
              <button className="text-white uppercase text-[20px] flex items-center gap-2 bg-lime-500 px-3 py-2 rounded">
                <span>Claim Aridrop</span> <FaArrowRightFromBracket />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Blog;
