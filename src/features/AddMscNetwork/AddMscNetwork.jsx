// import React, { useEffect } from 'react';
// import Web3 from 'web3';


// const AddMscNetwork = () => {
//   useEffect(() => {
//     // Check if MetaMask is installed
//     if (typeof window.ethereum === 'undefined') {
//       alert('Please install MetaMask to use this feature.');
//       return;
//     }

//     const web3 = new Web3(window.ethereum);

//     // Add chain configuration
//     const chainId = '0x270c';
//     const chainName = 'Mind Smart Chain';
//     const rpcUrl = 'https://seednode.mindchain.info';
//     const symbol = 'MIND';
//     const blockExplorerUrl = 'https://mainnet.mindscan.info';

//     const chainParams = {
//       chainId: chainId,
//       chainName: chainName,
//       rpcUrls: [rpcUrl],
//       nativeCurrency: {
//         name: symbol,
//         symbol: symbol,
//         decimals: 18,
//       },
//       blockExplorerUrls: [blockExplorerUrl],
//     };

//     // Define function to handle adding the chain
//     async function addCustomChain() {
//       try {
//         // Request the user to add the custom chain to MetaMask
//         await window.ethereum.request({
//           method: 'wallet_addEthereumChain',
//           params: [chainParams],
//         });

//         alert('Custom chain added to MetaMask.');
//       } catch (error) {
//         alert('Failed to add custom chain to MetaMask. Error: ' + error.message);
//       }
//     }

//     // Attach click event listener to the button
//     const addChainButton = document.getElementById('addChainButton');
//     addChainButton.addEventListener('click', addCustomChain);

//     // Clean up the event listener on component unmount
//     return () => {
//       addChainButton.removeEventListener('click', addCustomChain);
//     };
//   }, []);

//   return (
//     <div className="text-center mt-8">
//       <button
//         id="addChainButton"
//         className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
//       >
//         Add MIND Smart Chain
//       </button>
//     </div>
//   );
// };

// export default AddMscNetwork;
import React, { useState } from "react";

const AddMscNetwork = () => {
  const [status, setStatus] = useState("idle");

  const addCustomChain = async () => {
    setStatus("adding");
    try {
      if (typeof window.ethereum === "undefined") {
        setStatus("error");
        alert("Please install MetaMask to use this feature.");
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
      alert("Failed to load Web3.js. Error: " + error.message);
    }
  };

  const initializeWeb3 = async () => {
    try {
      
      if (typeof window.web3 === "undefined") {
        setStatus("error");
        alert("Web3.js not available.");
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
      alert("Custom chain added to MetaMask.");
    } catch (error) {
      setStatus("error");
      alert("Failed to add custom chain to MetaMask. Error: " + error.message);
    }
  };

  return (
    <section className="bg-lightBlue pb-[2rem]">
      <div className="flex justify-center pt-1 pb-5">
      <button
        id="addChainButton"
        onClick={addCustomChain}
        disabled={status === "adding" || status === "success"}
        className=" bg-gradient-to-r from-[#FFBF5E] bg-primary uppercase rounded hover:bg-[#dea029] text-white duration-200 flex font-semibold gap-x-2 items-center px-4 py-2"
      >
        <img src="https://i.postimg.cc/wTNbsthM/image.png" alt="" className="w-[30px] h-[30px]"/>
        {status === "idle" && "Add MINDCHAIN"}
        {status === "adding" && "Adding..."}
        {status === "success" && "Added Successfully"}
        {status === "error" && "Addition Failed"}
      </button>
    </div>
    </section>
  );
};

export default AddMscNetwork;
