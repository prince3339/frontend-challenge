import { useEffect, useState } from "react";
import { ethers } from "ethers";

// types
import type { Balance } from 'types/crypto';

const Wallet = () => {
	const [address, setAddress] = useState<string | null>(null);
	const [balance, setBalance] = useState<Balance | null>(null);

	const connectWallet = () => {
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
		console.log(ethers.utils);
		connectWallet();
	}, []);

	return (
		<div className="mt-10">
			<div className="flex flex-col justify-center items-center">
				<img className="w-40" src="/assets/metamask.svg" alt="Metamask" />
				<h2 className="text-3xl tracking-widest">
					METAMASK
				</h2>
				{address} - {balance?.crypto}
				<button
					className="mt-8 items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
					onClick={connectWallet}
				>
					Connect wallet
				</button>
			</div>
		</div>
	)
}

export default Wallet;
