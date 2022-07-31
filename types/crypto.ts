export interface Crypto {
	id?: number;
	name: string;
	symbol: string;
	price: number;
}

export interface Balance {
	crypto: number;
	usd?: number;
}