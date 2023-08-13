import React, { useState, useEffect } from 'react';

const MetaMaskButton = () => {
  const [hasProvider, setHasProvider] = useState(false);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const checkProvider = async () => {
      const provider = await detectEthereumProvider();
      setHasProvider(Boolean(provider));
    };

    checkProvider();
  }, []);

  const connectToMetaMask = async () => {
    try {
      const provider = await detectEthereumProvider();

      if (provider) {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });

        if (accounts && accounts.length > 0) {
          setIsConnected(true);
        }
      } else {
        console.log("MetaMask extension not available.");
      }
    } catch (error) {
      console.error("Error connecting to MetaMask:", error);
    }
  };

  return (
  <section className='bg-lightBlue'>
      <div className="container flex justify-center  py-5">

        <div className="text-center">
          {hasProvider && !isConnected && (
            <button
              className=""
              onClick={connectToMetaMask}
            >
              <img
                className="mr-2"
                src="https://i.postimg.cc/VstxKCQd/Meta-Mask-Fox-svg.png"
                alt="MetaMask Icon"
              />
              Connect with MetaMask
            </button>
          )}
          {isConnected && (
            <p className="text-white px-4 py-2 rounded shadow">
              <img
                className="mr-2"
                src="https://i.postimg.cc/VstxKCQd/Meta-Mask-Fox-svg.png"
                alt="MetaMask Icon"
              />
              Connected to MetaMask with address: {window.ethereum.selectedAddress}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default MetaMaskButton;
