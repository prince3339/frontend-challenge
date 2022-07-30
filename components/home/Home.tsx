import { useEffect } from "react";
import useSWR from "swr";

// types
import type { Crypto } from "types/crypto";

interface Props {
	cryptos: Crypto[]
}
  
const Home = () => {
	const { data, error } = useSWR(
    "https://api.energiswap.exchange/v1/assets"
  );

	// Map data to format and then sort by price
	const cryptos: Crypto[] = Object.entries(data || {}).map(([_, value]: [_: string, value: any]) => {
		return {
			name: value.name,
			symbol: value.symbol,
			price: value.last_price
		};
	}).sort((a: Crypto, b: Crypto) => {
		return b.price - a.price
	});

	console.log(data);
	if (!data) {
		return(<p className="text-center p-10 text-xl">Loading...</p>)
	}
	
	return (
		<div className="px-4 sm:px-6 lg:px-8 flex justify-center">
			<div className="mt-8 flex-col max-w-2xl flex-1">
				<div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
					<div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
						<div className="overflow-hidden shadow ring-1 dark:ring-gray-800 ring-black ring-opacity-5 md:rounded-lg">
							<table className="min-w-full divide-y dark:divide-gray-900 divide-gray-100">
								<thead className="">
									<tr>
										<th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold dark:text-white text-gray-900 sm:pl-6">
											#
										</th>
										<th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold dark:text-white text-gray-900">
											Coin
										</th>
										<th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold dark:text-white text-gray-900" />
										<th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold dark:text-white text-gray-900">
											Price
										</th>
									</tr>
								</thead>
								<tbody className="divide-y dark:divide-gray-900 divide-gray-100">
									
									{cryptos?.map((crypto, index) => (
										<tr key={crypto.symbol}>
											<td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium dark:text-gray-300 text-gray-900 sm:pl-6">
												{index + 1}
											</td>
											<td className="whitespace-nowrap px-3 py-4 text-sm dark:text-gray-300 text-gray-500">{crypto.name}</td>
											<td className="whitespace-nowrap px-3 py-4 text-sm dark:text-gray-300 text-gray-500">{crypto.symbol}</td>
											<td className="whitespace-nowrap px-3 py-4 text-sm dark:text-gray-300 text-gray-500">${crypto.price.toFixed(2).toLocaleString()}</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home;