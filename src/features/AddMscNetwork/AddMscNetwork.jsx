import React, { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify = (error) => toast(error);

const AddMscNetwork = () => {
  const [status, setStatus] = useState("idle");

  const addCustomChain = async () => {
    setStatus("adding");
    try {
      if (typeof window.ethereum === "undefined") {
        setStatus("error");
        notify("Please install MetaMask to use this feature.")
        return;
      }

      // Import W3.js from url
      const web3Script = document.createElement("script");
      web3Script.src = "https://cdnjs.cloudflare.com/ajax/libs/web3/4.0.3/web3.min.js";
      web3Script.async = true;
      web3Script.onload = () => {
        initializeWeb3();
      };
      document.head.appendChild(web3Script);
    } catch (error) {
      setStatus("error");
      notify("Failed to load Web3.js. Error: " + error.message)
    }
  };

  const initializeWeb3 = async () => {
    try {
      
      if (typeof window.web3 === "undefined") {
        setStatus("error");
        notify("Web3.js not available.")
        return;
      }

      
      const web3 = new window.Web3(window.ethereum);

      const chainId = "0x270c";
      const chainName = "Mind Smart Chain";
      const rpcUrl = "https://seednode.mindchain.info";
      const symbol = "MIND";
      const blockExplorerUrl = "https://mainnet.mindscan.info";

      const chainParams = {
        chainId: chainId,
        chainName: chainName,
        rpcUrls: [rpcUrl],
        nativeCurrency: {
          name: symbol,
          symbol: symbol,
          decimals: 18,
        },
        blockExplorerUrls: [blockExplorerUrl],
      };

     
      await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [chainParams],
      });

      setStatus("success");
      notify("Custom chain added to MetaMask.")
      
    } catch (error) {
      setStatus("error");
      notify("Failed to add custom chain to MetaMask..")
      
    }
    
  };

  

 
  return (
    <section className="bg-lightBlue ">
      <div className="flex justify-center pt-1">
      <button
        id="addChainButton"
        onClick={addCustomChain}
        // disabled={status === "adding" || status === "success"}
        className=" bg-gradient-to-r from-[#FFBF5E] bg-primary uppercase rounded hover:bg-[#dea029] text-white duration-200 flex font-semibold gap-x-2 items-center px-4 py-[0.4rem]"
      >
        <img src="https://i.postimg.cc/wTNbsthM/image.png" alt="" className="w-[30px] h-[30px]"/>
        Add MINDCHAIN
        {/* {status === "idle" && "Add MINDCHAIN"}
        {status === "adding" && "Adding..."}
        {status === "success" && "Added Successfully"}
        {status == "error" && "Add MINDCHAIN"} */}
      </button>
      
      {/* {status === "success" && "Added Successfully"} */}
      
      
    </div>
    </section>
  );
};

export default AddMscNetwork;
