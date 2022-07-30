const Wallet = () => {
	return (
		<div className="mt-10">
			<div className="flex flex-col justify-center items-center">
				<img className="w-40" src="/assets/metamask.svg" alt="Metamask" />
				<h2 className="text-3xl tracking-widest">
					METAMASK
				</h2>
				<button className="mt-8 items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
					Connect wallet
				</button>
			</div>
		</div>
	)
}

export default Wallet;
