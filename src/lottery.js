import web3 from './web3';

const address = '0x465821Cbf0035d8e6447c0764987cE78287f45bF';

const abi = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "enterLottery",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "manager",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "participants",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "pickWinner",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "showParticipants",
		"outputs": [
			{
				"internalType": "address payable[]",
				"name": "",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

// console.log('at lottery.js');
//
// const getContract = async () => {
//   const contract = await new web3.eth.Contract(abi2, address);
//   console.log(contract);
//
//   console.log(contract.options.address);
//
//   const players = await contract.methods.showParticipants().call();
//   console.log(players);
//
//   const manager = await contract.methods.manager().call();
//   console.log(manager);
// };
//
// getContract();
// console.log('leaving lottery.js');

export default new web3.eth.Contract(abi, address);
