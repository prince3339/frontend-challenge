import { useContext } from 'react';

// icons
import { DocumentDuplicateIcon, LinkIcon } from '@heroicons/react/solid';

// context
import { WalletContext } from "context/WalletContext";

const WallConnectedView = () => {
	const { network, address, balance } = useContext<any>(WalletContext);
	
	return (
		<div className="dark:bg-gray-900 rounded-md p-5">
			<div className="flex justify-between items-center border-b dark:border-gray-800 border-gray-100 py-2">
				<h2 className="text-sm">{network} Network</h2>
				<span className="text-xs text-green-500">● connected</span>
			</div>
			<div className="pt-2 flex justify-between items-center">
				<span className='text-xs text-gray-400'>{address.slice(0, 5)}...{address.slice(-8, address.length)}</span>
				<div className='flex items-center gap-5'>
					<button onClick={()=> navigator.clipboard.writeText(address)}><DocumentDuplicateIcon className='w-5' /></button>
					<a target="_blank" href={`https://etherscan.io/address/${address}`}><LinkIcon className='w-5' /></a>
				</div>
			</div>

			<div className="text-center pt-8">
				<h3 className="text-sm text-gray-400">Total Balance</h3>
				<span className="block mt-2">{balance?.crypto?.toFixed(4)}</span>
				<span>2000</span>
			</div>
		</div>
	)
}

export default WallConnectedView;
