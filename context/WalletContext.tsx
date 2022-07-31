import { createContext, useEffect, useState } from 'react';
import { ethers } from "ethers";

// types
import type { Balance } from 'types/crypto';

export interface Context {
  address: string | null;
	balance: Balance | null,
  network: string | null;
  connectWallet: ()=> void;
}

interface Props {
  children: React.ReactElement;
}

export const WalletContext = createContext<Context | null>(null);

const ContextProvider = ({ children }: Props) => {
  const [address, setAddress] = useState<string | null>(null);
	const [balance, setBalance] = useState<Balance | null>(null);
	const [network, setNetwork] = useState<string | null>(null);

  const connectWallet = async() => {
		const provider = new ethers.providers.Web3Provider(window.ethereum);
		const network = await provider.getNetwork();
		setNetwork(network.name)
		console.log(network);
		if (window.ethereum) {
      // res[0] for fetching a first wallet
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((addresses: any) => {
					setAddress(addresses[0]);
					getBalance(addresses[0])
				});
    } else {
      alert("install metamask extension!!");
    }
	}

	const getBalance = (address: string) => {
    // Requesting balance method
    window.ethereum
      .request({ 
        method: "eth_getBalance", 
        params: [address, "latest"] 
      })
      .then((balance: number) => {
        // Setting balance
        setBalance({
          crypto: Number(ethers.utils.formatEther(balance)),
        });
      });
  };

	useEffect(() => {
		connectWallet();
	}, []);
  
  return (
    <WalletContext.Provider value={{
      network,
      address,
			connectWallet,
			balance
    }}>
      {children}
    </WalletContext.Provider>
  );
};

export default ContextProvider;
