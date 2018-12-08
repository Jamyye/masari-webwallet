let global : any = typeof window !== 'undefined' ? window : self;
global.config = {
	apiUrl:typeof window !== 'undefined' && window.location ? window.location.href.substr(0,window.location.href.lastIndexOf('/')+1)+'api/' : 'https://www.masariwallet.com/api/',
	mainnetExplorerUrl: "https://aeonblocks.com/",
	mainnetExplorerUrlHash: "https://aeonblocks.com/tx/{ID}",
	mainnetExplorerUrlBlock: "https://aeonblocks.com/block/{ID}",
	testnetExplorerUrl: "http://162.210.173.151/",
	testnetExplorerUrlHash: "http://162.210.173.151/tx/{ID}",
	testnetExplorerUrlBlock: "http://162.210.173.151/block/{ID}",
	testnet: false,
	coinUnitPlaces: 12,
	txMinConfirms: 10,         // corresponds to CRYPTONOTE_DEFAULT_TX_SPENDABLE_AGE in Monero
	txCoinbaseMinConfirms: 60, // corresponds to CRYPTONOTE_MINED_MONEY_UNLOCK_WINDOW in Monero
	addressPrefix: 0xB2,
	integratedAddressPrefix: 0x2733,
	addressPrefixTestnet: 0x0426,
	integratedAddressPrefixTestnet: 0x2C27,
	subAddressPrefix: 0x06B8,
	subAddressPrefixTestnet: 0x0AAC,
	feePerKB: new JSBigInt('400000000'),//20^10 - for testnet its not used, as fee is dynamic.
	dustThreshold: new JSBigInt('1000000000'),//10^10 used for choosing outputs/change - we decompose all the way down if the receiver wants now regardless of threshold
	defaultMixin: 5, // default value mixin

	idleTimeout: 30,
	idleWarningDuration: 20,

	coinSymbol: 'AEON',
	openAliasPrefix: "aeon",
	coinName: 'Aeon',
	coinUriPrefix: 'aeon:',
	avgBlockTime: 240,
	maxBlockNumber: 500000000,

	donationAddresses : [
		'WmsgtfDBKveDSmsncEion5EMApPdTt4PZWkD2thtWmAmjVSmYaepznV4woX86FwjoYVgzkNiJULpeFHTPB1PTfTr3B4ZVG7ym'
	]
};
