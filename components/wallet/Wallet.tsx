import { useContext } from "react";
import { ethers } from "ethers";

// components
import WalletConnectedView from "./WalletConnectedView";
import WalletDisconnectedView from "./WalletDisconnected";

// context
import { WalletContext } from "context/WalletContext";

const Wallet = () => {
	const { address, connectWallet } = useContext<any>(WalletContext);
	
	return (
		<div className="flex justify-center">
			<div className="mt-10 max-w-2xl flex-1">
				{!address ? (
					<WalletDisconnectedView connectWallet={connectWallet} />
				):
				<WalletConnectedView />
				}
			</div>
		</div>
	)
}

export default Wallet;
