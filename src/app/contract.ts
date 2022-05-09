export const data={
  "contractName": "Example",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_symbol",
          "type": "string"
        },
        {
          "internalType": "uint8",
          "name": "_decimals",
          "type": "uint8"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "MinterAdded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "MinterRemoved",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "Paused",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "PauserAdded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "PauserRemoved",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "Unpaused",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "addMinter",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "addPauser",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "subtractedValue",
          "type": "uint256"
        }
      ],
      "name": "decreaseAllowance",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "addedValue",
          "type": "uint256"
        }
      ],
      "name": "increaseAllowance",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "isMinter",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "isPauser",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "mint",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "pause",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "paused",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "renounceMinter",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "renouncePauser",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "unpause",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.5.12+commit.7709ece9\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"string\",\"name\":\"_name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"_symbol\",\"type\":\"string\"},{\"internalType\":\"uint8\",\"name\":\"_decimals\",\"type\":\"uint8\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"MinterAdded\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"MinterRemoved\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"Paused\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"PauserAdded\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"PauserRemoved\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"Unpaused\",\"type\":\"event\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"addMinter\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"addPauser\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"subtractedValue\",\"type\":\"uint256\"}],\"name\":\"decreaseAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"addedValue\",\"type\":\"uint256\"}],\"name\":\"increaseAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"isMinter\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"isPauser\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"mint\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"pause\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"paused\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"renounceMinter\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"renouncePauser\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"unpause\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"methods\":{\"allowance(address,address)\":{\"details\":\"See {IERC20-allowance}.\"},\"balanceOf(address)\":{\"details\":\"See {IERC20-balanceOf}.\"},\"decimals()\":{\"details\":\"Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5,05` (`505 / 10 ** 2`).     * Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei.     * NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}.\"},\"mint(address,uint256)\":{\"details\":\"See {ERC20-_mint}.     * Requirements:     * - the caller must have the {MinterRole}.\"},\"name()\":{\"details\":\"Returns the name of the token.\"},\"pause()\":{\"details\":\"Called by a pauser to pause, triggers stopped state.\"},\"paused()\":{\"details\":\"Returns true if the contract is paused, and false otherwise.\"},\"symbol()\":{\"details\":\"Returns the symbol of the token, usually a shorter version of the name.\"},\"totalSupply()\":{\"details\":\"See {IERC20-totalSupply}.\"},\"unpause()\":{\"details\":\"Called by a pauser to unpause, returns to normal state.\"}}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"/home/criq/truffle/Metacoin/contracts/Example.sol\":\"Example\"},\"evmVersion\":\"petersburg\",\"libraries\":{},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"/home/criq/truffle/Metacoin/contracts/Example.sol\":{\"keccak256\":\"0x247c4f5fc12da27f4e82637279174e92aa83f8acbb9bbabd1ba4a0bd384a999e\",\"urls\":[\"bzz-raw://d53b93cb9aa60195861c0bdc173ac22fdb1305528fd02d943bbd4806ce4db4c4\",\"dweb:/ipfs/QmYM8iPv73JSTp8WbaQzLDFpsDpXfAeb1QUj5qzLZCXPH8\"]},\"/home/criq/truffle/Metacoin/node_modules/openzeppelin-solidity/contracts/GSN/Context.sol\":{\"keccak256\":\"0x90a3995645af7562d84b9d69363ffa5ae7217714ab61e951bf7bc450f40e4061\",\"urls\":[\"bzz-raw://216ef9d6b614db4eb46970b4e84903f2534a45572dd30a79f0041f1a5830f436\",\"dweb:/ipfs/QmNPrJ4MWKUAWzKXpUqeyKRUfosaoANZAqXgvepdrCwZAG\"]},\"/home/criq/truffle/Metacoin/node_modules/openzeppelin-solidity/contracts/access/Roles.sol\":{\"keccak256\":\"0xb002c378d7b82a101bd659c341518953ca0919d342c0a400196982c0e7e7bcdb\",\"urls\":[\"bzz-raw://00a788c4631466c220b385bdd100c571d24b2deccd657615cfbcef6cadf669a4\",\"dweb:/ipfs/QmTEwDbjJNxmMNCDMqtuou3dyM8Wtp8Q9NFvn7SAVM7Jf3\"]},\"/home/criq/truffle/Metacoin/node_modules/openzeppelin-solidity/contracts/access/roles/MinterRole.sol\":{\"keccak256\":\"0xbe8eef6f2cb4e427f5c5d8a76865ccd06e55a4f1d6671ba312d45bfa705aedbf\",\"urls\":[\"bzz-raw://badf338a5e22c8658c01fe2ce89b487d9dbf6d2d9d5eb49df7415383e2498765\",\"dweb:/ipfs/QmP5aMkvFwMJyuQjKE8ADh5tkWYqonb4KjgkAjgYEVVFAv\"]},\"/home/criq/truffle/Metacoin/node_modules/openzeppelin-solidity/contracts/access/roles/PauserRole.sol\":{\"keccak256\":\"0xd1b5c934bab36d753c22987ad98c7614cb50ebf641371a83c96f8138619d7c30\",\"urls\":[\"bzz-raw://69c4bb822caae3d1bfd38e81f03b6d618d4d83cbb8e9f8236d28e1c4fe1d0d81\",\"dweb:/ipfs/QmWamstbFhdySmocF2TSKYVLLZF24JG4aXMvHiRdWKv3RA\"]},\"/home/criq/truffle/Metacoin/node_modules/openzeppelin-solidity/contracts/lifecycle/Pausable.sol\":{\"keccak256\":\"0xd3e5a49edfb74654d122962cc60b917d1c60461e669a7262fd7aba201fac1260\",\"urls\":[\"bzz-raw://0307a3cae4df037aee16fb0b0d94849cb4d9b20d7d7182c185f3efac6d2caec0\",\"dweb:/ipfs/QmezTANBfrJmCvxfmfyfcfFGtbcUEUtoJCjfxKnAePiNoE\"]},\"/home/criq/truffle/Metacoin/node_modules/openzeppelin-solidity/contracts/math/SafeMath.sol\":{\"keccak256\":\"0x640b6dee7a4b830bdfd52b5031a07fc2b12209f5b2e29e5d364a7d37f69d8076\",\"urls\":[\"bzz-raw://31113152e1ddb78fe7a4197f247591ca894e93f916867beb708d8e747b6cc74f\",\"dweb:/ipfs/QmbZaJyXdpsYGykVhHH9qpVGQg9DGCxE2QufbCUy3daTgq\"]},\"/home/criq/truffle/Metacoin/node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0x65a4078c03875c25413a068ce9cfdd7e68a90f8786612d1189c89341e6e3b802\",\"urls\":[\"bzz-raw://45c0d95495b944fbb1aa09d900b0ab530903a432125ab8fddfa05064a7988991\",\"dweb:/ipfs/Qma2VeknkKA1THeubGzshWFk44BktXkXP1UKp9Un2uDSsu\"]},\"/home/criq/truffle/Metacoin/node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol\":{\"keccak256\":\"0x4a3a810b7ebe742e897e1fd428b3eeed2196d3acea58eaf9c566ed10d545d2ed\",\"urls\":[\"bzz-raw://28d03f328e19e4099d5013de0649afaeaabac1a614e130767ab1cb4aca9775b6\",\"dweb:/ipfs/Qmb9iW7yNuYehB2NfhRMs9TakqbLVQhBhmGMkaDZ5g1Eb4\"]},\"/home/criq/truffle/Metacoin/node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20Mintable.sol\":{\"keccak256\":\"0xa2b957cf89692c504962afb7506999155f83385373f808243246cd5879de5940\",\"urls\":[\"bzz-raw://c44ae0ad1bce141c33b962f8b4e9228bdf8df36c8ac363b4f0bf9498b8bfc32a\",\"dweb:/ipfs/QmcSBRdFwVvy2wFZrBwo5cvqNP4UHh9Eyzf8jnxBgnPqfe\"]},\"/home/criq/truffle/Metacoin/node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20Pausable.sol\":{\"keccak256\":\"0xd5ae72078a1c90af870e1b9b86b0fc05eb14b4034e417bc66d151d3eb4d342ca\",\"urls\":[\"bzz-raw://32a5f0d4de7c26125441e9b78a49de90cd30c467216fb8f69dc0b1f03c6e253c\",\"dweb:/ipfs/QmcuFRFJ4KNkvYRAmcs1t1fap1i3rRbJghWGqiaSNafdjp\"]},\"/home/criq/truffle/Metacoin/node_modules/openzeppelin-solidity/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0xe5bb0f57cff3e299f360052ba50f1ea0fff046df2be070b6943e0e3c3fdad8a9\",\"urls\":[\"bzz-raw://59fd025151435da35faa8093a5c7a17de02de9d08ad27275c5cdf05050820d91\",\"dweb:/ipfs/QmQMvwEcPhoRXzbXyrdoeRtvLoifUW9Qh7Luho7bmUPRkc\"]}},\"version\":1}",
  "bytecode": "0x60806040523480156200001157600080fd5b506040516200272638038062002726833981810160405260608110156200003757600080fd5b81019080805160405193929190846401000000008211156200005857600080fd5b838201915060208201858111156200006f57600080fd5b82518660018202830111640100000000821117156200008d57600080fd5b8083526020830192505050908051906020019080838360005b83811015620000c3578082015181840152602081019050620000a6565b50505050905090810190601f168015620000f15780820380516001836020036101000a031916815260200191505b50604052602001805160405193929190846401000000008211156200011557600080fd5b838201915060208201858111156200012c57600080fd5b82518660018202830111640100000000821117156200014a57600080fd5b8083526020830192505050908051906020019080838360005b838110156200018057808201518184015260208101905062000163565b50505050905090810190601f168015620001ae5780820380516001836020036101000a031916815260200191505b5060405260200180519060200190929190505050828282620001e5620001d96200027960201b60201c565b6200028160201b60201c565b62000205620001f96200027960201b60201c565b620002e260201b60201c565b6000600560006101000a81548160ff02191690831515021790555082600690805190602001906200023892919062000507565b5081600790805190602001906200025192919062000507565b5080600860006101000a81548160ff021916908360ff160217905550505050505050620005b6565b600033905090565b6200029c8160036200034360201b62001e8a1790919060201c565b8073ffffffffffffffffffffffffffffffffffffffff167f6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f660405160405180910390a250565b620002fd8160046200034360201b62001e8a1790919060201c565b8073ffffffffffffffffffffffffffffffffffffffff167f6719d08c1888103bea251a4ed56406bd0c3e69723c8a1686e017e7bbe159b6f860405160405180910390a250565b6200035582826200042760201b60201c565b15620003c9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f526f6c65733a206163636f756e7420616c72656164792068617320726f6c650081525060200191505060405180910390fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415620004b0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180620027046022913960400191505060405180910390fd5b8260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106200054a57805160ff19168380011785556200057b565b828001600101855582156200057b579182015b828111156200057a5782518255916020019190600101906200055d565b5b5090506200058a91906200058e565b5090565b620005b391905b80821115620005af57600081600090555060010162000595565b5090565b90565b61213e80620005c66000396000f3fe608060405234801561001057600080fd5b50600436106101375760003560e01c80636ef8d66d116100b8578063983b2d561161007c578063983b2d561461057457806398650275146105b8578063a457c2d7146105c2578063a9059cbb14610628578063aa271e1a1461068e578063dd62ed3e146106ea57610137565b80636ef8d66d1461044157806370a082311461044b57806382dc1ec4146104a35780638456cb59146104e757806395d89b41146104f157610137565b806339509351116100ff57806339509351146102ed5780633f4ba83a1461035357806340c10f191461035d57806346fbf68e146103c35780635c975abb1461041f57610137565b806306fdde031461013c578063095ea7b3146101bf57806318160ddd1461022557806323b872dd14610243578063313ce567146102c9575b600080fd5b610144610762565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610184578082015181840152602081019050610169565b50505050905090810190601f1680156101b15780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61020b600480360360408110156101d557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610804565b604051808215151515815260200191505060405180910390f35b61022d61089b565b6040518082815260200191505060405180910390f35b6102af6004803603606081101561025957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506108a5565b604051808215151515815260200191505060405180910390f35b6102d161093e565b604051808260ff1660ff16815260200191505060405180910390f35b6103396004803603604081101561030357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610955565b604051808215151515815260200191505060405180910390f35b61035b6109ec565b005b6103a96004803603604081101561037357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610b5a565b604051808215151515815260200191505060405180910390f35b610405600480360360208110156103d957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610bd5565b604051808215151515815260200191505060405180910390f35b610427610bf2565b604051808215151515815260200191505060405180910390f35b610449610c09565b005b61048d6004803603602081101561046157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610c1b565b6040518082815260200191505060405180910390f35b6104e5600480360360208110156104b957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610c63565b005b6104ef610cd4565b005b6104f9610e43565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561053957808201518184015260208101905061051e565b50505050905090810190601f1680156105665780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6105b66004803603602081101561058a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610ee5565b005b6105c0610f56565b005b61060e600480360360408110156105d857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610f68565b604051808215151515815260200191505060405180910390f35b6106746004803603604081101561063e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610fff565b604051808215151515815260200191505060405180910390f35b6106d0600480360360208110156106a457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611096565b604051808215151515815260200191505060405180910390f35b61074c6004803603604081101561070057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506110b3565b6040518082815260200191505060405180910390f35b606060068054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156107fa5780601f106107cf576101008083540402835291602001916107fa565b820191906000526020600020905b8154815290600101906020018083116107dd57829003601f168201915b5050505050905090565b6000600560009054906101000a900460ff1615610889576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260108152602001807f5061757361626c653a207061757365640000000000000000000000000000000081525060200191505060405180910390fd5b610893838361113a565b905092915050565b6000600254905090565b6000600560009054906101000a900460ff161561092a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260108152602001807f5061757361626c653a207061757365640000000000000000000000000000000081525060200191505060405180910390fd5b610935848484611158565b90509392505050565b6000600860009054906101000a900460ff16905090565b6000600560009054906101000a900460ff16156109da576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260108152602001807f5061757361626c653a207061757365640000000000000000000000000000000081525060200191505060405180910390fd5b6109e48383611231565b905092915050565b6109fc6109f76112e4565b610bd5565b610a51576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526030815260200180611f896030913960400191505060405180910390fd5b600560009054906101000a900460ff16610ad3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f5061757361626c653a206e6f742070617573656400000000000000000000000081525060200191505060405180910390fd5b6000600560006101000a81548160ff0219169083151502179055507f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa610b176112e4565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a1565b6000610b6c610b676112e4565b611096565b610bc1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260308152602001806120016030913960400191505060405180910390fd5b610bcb83836112ec565b6001905092915050565b6000610beb8260046114a790919063ffffffff16565b9050919050565b6000600560009054906101000a900460ff16905090565b610c19610c146112e4565b611585565b565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b610c73610c6e6112e4565b610bd5565b610cc8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526030815260200180611f896030913960400191505060405180910390fd5b610cd1816115df565b50565b610ce4610cdf6112e4565b610bd5565b610d39576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526030815260200180611f896030913960400191505060405180910390fd5b600560009054906101000a900460ff1615610dbc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260108152602001807f5061757361626c653a207061757365640000000000000000000000000000000081525060200191505060405180910390fd5b6001600560006101000a81548160ff0219169083151502179055507f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258610e006112e4565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a1565b606060078054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610edb5780601f10610eb057610100808354040283529160200191610edb565b820191906000526020600020905b815481529060010190602001808311610ebe57829003601f168201915b5050505050905090565b610ef5610ef06112e4565b611096565b610f4a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260308152602001806120016030913960400191505060405180910390fd5b610f5381611639565b50565b610f66610f616112e4565b611693565b565b6000600560009054906101000a900460ff1615610fed576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260108152602001807f5061757361626c653a207061757365640000000000000000000000000000000081525060200191505060405180910390fd5b610ff783836116ed565b905092915050565b6000600560009054906101000a900460ff1615611084576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260108152602001807f5061757361626c653a207061757365640000000000000000000000000000000081525060200191505060405180910390fd5b61108e83836117ba565b905092915050565b60006110ac8260036114a790919063ffffffff16565b9050919050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600061114e6111476112e4565b84846117d8565b6001905092915050565b60006111658484846119cf565b611226846111716112e4565b6112218560405180606001604052806028815260200161205260289139600160008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006111d76112e4565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611c859092919063ffffffff16565b6117d8565b600190509392505050565b60006112da61123e6112e4565b846112d5856001600061124f6112e4565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611d4590919063ffffffff16565b6117d8565b6001905092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561138f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f45524332303a206d696e7420746f20746865207a65726f20616464726573730081525060200191505060405180910390fd5b6113a481600254611d4590919063ffffffff16565b6002819055506113fb816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611d4590919063ffffffff16565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561152e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602281526020018061207a6022913960400191505060405180910390fd5b8260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b611599816004611dcd90919063ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff167fcd265ebaf09df2871cc7bd4133404a235ba12eff2041bb89d9c714a2621c7c7e60405160405180910390a250565b6115f3816004611e8a90919063ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff167f6719d08c1888103bea251a4ed56406bd0c3e69723c8a1686e017e7bbe159b6f860405160405180910390a250565b61164d816003611e8a90919063ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff167f6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f660405160405180910390a250565b6116a7816003611dcd90919063ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff167fe94479a9f7e1952cc78f2d6baab678adc1b772d936c6583def489e524cb6669260405160405180910390a250565b60006117b06116fa6112e4565b846117ab856040518060600160405280602581526020016120e560259139600160006117246112e4565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611c859092919063ffffffff16565b6117d8565b6001905092915050565b60006117ce6117c76112e4565b84846119cf565b6001905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561185e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806120c16024913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156118e4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180611fb96022913960400191505060405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040518082815260200191505060405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611a55576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602581526020018061209c6025913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611adb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526023815260200180611f666023913960400191505060405180910390fd5b611b4681604051806060016040528060268152602001611fdb602691396000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611c859092919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550611bd9816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611d4590919063ffffffff16565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a3505050565b6000838311158290611d32576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611cf7578082015181840152602081019050611cdc565b50505050905090810190601f168015611d245780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385039050809150509392505050565b600080828401905083811015611dc3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b611dd782826114a7565b611e2c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806120316021913960400191505060405180910390fd5b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b611e9482826114a7565b15611f07576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f526f6c65733a206163636f756e7420616c72656164792068617320726f6c650081525060200191505060405180910390fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550505056fe45524332303a207472616e7366657220746f20746865207a65726f2061646472657373506175736572526f6c653a2063616c6c657220646f6573206e6f742068617665207468652050617573657220726f6c6545524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e63654d696e746572526f6c653a2063616c6c657220646f6573206e6f74206861766520746865204d696e74657220726f6c65526f6c65733a206163636f756e7420646f6573206e6f74206861766520726f6c6545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e6365526f6c65733a206163636f756e7420697320746865207a65726f206164647265737345524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa265627a7a72315820685dce0948bae56a7fac2fbc54228f2054ac2844c5e3283c2156dd1e89c2dec364736f6c634300050c0032526f6c65733a206163636f756e7420697320746865207a65726f2061646472657373",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106101375760003560e01c80636ef8d66d116100b8578063983b2d561161007c578063983b2d561461057457806398650275146105b8578063a457c2d7146105c2578063a9059cbb14610628578063aa271e1a1461068e578063dd62ed3e146106ea57610137565b80636ef8d66d1461044157806370a082311461044b57806382dc1ec4146104a35780638456cb59146104e757806395d89b41146104f157610137565b806339509351116100ff57806339509351146102ed5780633f4ba83a1461035357806340c10f191461035d57806346fbf68e146103c35780635c975abb1461041f57610137565b806306fdde031461013c578063095ea7b3146101bf57806318160ddd1461022557806323b872dd14610243578063313ce567146102c9575b600080fd5b610144610762565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610184578082015181840152602081019050610169565b50505050905090810190601f1680156101b15780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61020b600480360360408110156101d557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610804565b604051808215151515815260200191505060405180910390f35b61022d61089b565b6040518082815260200191505060405180910390f35b6102af6004803603606081101561025957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506108a5565b604051808215151515815260200191505060405180910390f35b6102d161093e565b604051808260ff1660ff16815260200191505060405180910390f35b6103396004803603604081101561030357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610955565b604051808215151515815260200191505060405180910390f35b61035b6109ec565b005b6103a96004803603604081101561037357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610b5a565b604051808215151515815260200191505060405180910390f35b610405600480360360208110156103d957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610bd5565b604051808215151515815260200191505060405180910390f35b610427610bf2565b604051808215151515815260200191505060405180910390f35b610449610c09565b005b61048d6004803603602081101561046157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610c1b565b6040518082815260200191505060405180910390f35b6104e5600480360360208110156104b957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610c63565b005b6104ef610cd4565b005b6104f9610e43565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561053957808201518184015260208101905061051e565b50505050905090810190601f1680156105665780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6105b66004803603602081101561058a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610ee5565b005b6105c0610f56565b005b61060e600480360360408110156105d857600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610f68565b604051808215151515815260200191505060405180910390f35b6106746004803603604081101561063e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610fff565b604051808215151515815260200191505060405180910390f35b6106d0600480360360208110156106a457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611096565b604051808215151515815260200191505060405180910390f35b61074c6004803603604081101561070057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506110b3565b6040518082815260200191505060405180910390f35b606060068054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156107fa5780601f106107cf576101008083540402835291602001916107fa565b820191906000526020600020905b8154815290600101906020018083116107dd57829003601f168201915b5050505050905090565b6000600560009054906101000a900460ff1615610889576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260108152602001807f5061757361626c653a207061757365640000000000000000000000000000000081525060200191505060405180910390fd5b610893838361113a565b905092915050565b6000600254905090565b6000600560009054906101000a900460ff161561092a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260108152602001807f5061757361626c653a207061757365640000000000000000000000000000000081525060200191505060405180910390fd5b610935848484611158565b90509392505050565b6000600860009054906101000a900460ff16905090565b6000600560009054906101000a900460ff16156109da576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260108152602001807f5061757361626c653a207061757365640000000000000000000000000000000081525060200191505060405180910390fd5b6109e48383611231565b905092915050565b6109fc6109f76112e4565b610bd5565b610a51576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526030815260200180611f896030913960400191505060405180910390fd5b600560009054906101000a900460ff16610ad3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f5061757361626c653a206e6f742070617573656400000000000000000000000081525060200191505060405180910390fd5b6000600560006101000a81548160ff0219169083151502179055507f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa610b176112e4565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a1565b6000610b6c610b676112e4565b611096565b610bc1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260308152602001806120016030913960400191505060405180910390fd5b610bcb83836112ec565b6001905092915050565b6000610beb8260046114a790919063ffffffff16565b9050919050565b6000600560009054906101000a900460ff16905090565b610c19610c146112e4565b611585565b565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b610c73610c6e6112e4565b610bd5565b610cc8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526030815260200180611f896030913960400191505060405180910390fd5b610cd1816115df565b50565b610ce4610cdf6112e4565b610bd5565b610d39576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526030815260200180611f896030913960400191505060405180910390fd5b600560009054906101000a900460ff1615610dbc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260108152602001807f5061757361626c653a207061757365640000000000000000000000000000000081525060200191505060405180910390fd5b6001600560006101000a81548160ff0219169083151502179055507f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258610e006112e4565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a1565b606060078054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610edb5780601f10610eb057610100808354040283529160200191610edb565b820191906000526020600020905b815481529060010190602001808311610ebe57829003601f168201915b5050505050905090565b610ef5610ef06112e4565b611096565b610f4a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260308152602001806120016030913960400191505060405180910390fd5b610f5381611639565b50565b610f66610f616112e4565b611693565b565b6000600560009054906101000a900460ff1615610fed576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260108152602001807f5061757361626c653a207061757365640000000000000000000000000000000081525060200191505060405180910390fd5b610ff783836116ed565b905092915050565b6000600560009054906101000a900460ff1615611084576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260108152602001807f5061757361626c653a207061757365640000000000000000000000000000000081525060200191505060405180910390fd5b61108e83836117ba565b905092915050565b60006110ac8260036114a790919063ffffffff16565b9050919050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600061114e6111476112e4565b84846117d8565b6001905092915050565b60006111658484846119cf565b611226846111716112e4565b6112218560405180606001604052806028815260200161205260289139600160008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006111d76112e4565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611c859092919063ffffffff16565b6117d8565b600190509392505050565b60006112da61123e6112e4565b846112d5856001600061124f6112e4565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611d4590919063ffffffff16565b6117d8565b6001905092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561138f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f45524332303a206d696e7420746f20746865207a65726f20616464726573730081525060200191505060405180910390fd5b6113a481600254611d4590919063ffffffff16565b6002819055506113fb816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611d4590919063ffffffff16565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561152e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602281526020018061207a6022913960400191505060405180910390fd5b8260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b611599816004611dcd90919063ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff167fcd265ebaf09df2871cc7bd4133404a235ba12eff2041bb89d9c714a2621c7c7e60405160405180910390a250565b6115f3816004611e8a90919063ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff167f6719d08c1888103bea251a4ed56406bd0c3e69723c8a1686e017e7bbe159b6f860405160405180910390a250565b61164d816003611e8a90919063ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff167f6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f660405160405180910390a250565b6116a7816003611dcd90919063ffffffff16565b8073ffffffffffffffffffffffffffffffffffffffff167fe94479a9f7e1952cc78f2d6baab678adc1b772d936c6583def489e524cb6669260405160405180910390a250565b60006117b06116fa6112e4565b846117ab856040518060600160405280602581526020016120e560259139600160006117246112e4565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611c859092919063ffffffff16565b6117d8565b6001905092915050565b60006117ce6117c76112e4565b84846119cf565b6001905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561185e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806120c16024913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156118e4576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526022815260200180611fb96022913960400191505060405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040518082815260200191505060405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611a55576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602581526020018061209c6025913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611adb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526023815260200180611f666023913960400191505060405180910390fd5b611b4681604051806060016040528060268152602001611fdb602691396000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611c859092919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550611bd9816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611d4590919063ffffffff16565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a3505050565b6000838311158290611d32576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611cf7578082015181840152602081019050611cdc565b50505050905090810190601f168015611d245780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385039050809150509392505050565b600080828401905083811015611dc3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b611dd782826114a7565b611e2c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806120316021913960400191505060405180910390fd5b60008260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055505050565b611e9482826114a7565b15611f07576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f526f6c65733a206163636f756e7420616c72656164792068617320726f6c650081525060200191505060405180910390fd5b60018260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550505056fe45524332303a207472616e7366657220746f20746865207a65726f2061646472657373506175736572526f6c653a2063616c6c657220646f6573206e6f742068617665207468652050617573657220726f6c6545524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e63654d696e746572526f6c653a2063616c6c657220646f6573206e6f74206861766520746865204d696e74657220726f6c65526f6c65733a206163636f756e7420646f6573206e6f74206861766520726f6c6545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e6365526f6c65733a206163636f756e7420697320746865207a65726f206164647265737345524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa265627a7a72315820685dce0948bae56a7fac2fbc54228f2054ac2844c5e3283c2156dd1e89c2dec364736f6c634300050c0032",
  "sourceMap": "301:221:1:-;;;371:149;8:9:-1;5:2;;;30:1;27;20:12;5:2;371:149:1;;;;;;;;;;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;371:149:1;;;;;;;;;;;;;19:11:-1;14:3;11:20;8:2;;;44:1;41;34:12;8:2;71:11;66:3;62:21;55:28;;123:4;118:3;114:14;159:9;141:16;138:31;135:2;;;182:1;179;172:12;135:2;219:3;213:10;330:9;325:1;311:12;307:20;289:16;285:43;282:58;261:11;247:12;244:29;233:115;230:2;;;361:1;358;351:12;230:2;384:12;379:3;372:25;420:4;415:3;411:14;404:21;;0:432;;371:149:1;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;371:149:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;19:11:-1;14:3;11:20;8:2;;;44:1;41;34:12;8:2;71:11;66:3;62:21;55:28;;123:4;118:3;114:14;159:9;141:16;138:31;135:2;;;182:1;179;172:12;135:2;219:3;213:10;330:9;325:1;311:12;307:20;289:16;285:43;282:58;261:11;247:12;244:29;233:115;230:2;;;361:1;358;351:12;230:2;384:12;379:3;372:25;420:4;415:3;411:14;404:21;;0:432;;371:149:1;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;371:149:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;466:5;473:7;482:9;318:24:6;329:12;:10;;;:12;;:::i;:::-;318:10;;;:24;;:::i;:::-;::7;329:12;:10;;;:12;;:::i;:::-;318:10;;;:24;;:::i;:::-;1023:5:8;1013:7;;:15;;;;;;;;;;;;;;;;;;512:4:11;504:5;:12;;;;;;;;;;;;:::i;:::-;;536:6;526:7;:16;;;;;;;;;;;;:::i;:::-;;564:8;552:9;;:20;;;;;;;;;;;;;;;;;;416:163;;;371:149:1;;;301:221;;788:96:4;833:15;867:10;860:17;;788:96;:::o;786:119:6:-;842:21;855:7;842:8;:12;;;;;;:21;;;;:::i;:::-;890:7;878:20;;;;;;;;;;;;786:119;:::o;::7:-;842:21;855:7;842:8;:12;;;;;;:21;;;;:::i;:::-;890:7;878:20;;;;;;;;;;;;786:119;:::o;260:175:5:-;337:18;341:4;347:7;337:3;;;:18;;:::i;:::-;336:19;328:63;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;424:4;401;:11;;:20;413:7;401:20;;;;;;;;;;;;;;;;:27;;;;;;;;;;;;;;;;;;260:175;;:::o;779:200::-;851:4;894:1;875:21;;:7;:21;;;;867:68;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;952:4;:11;;:20;964:7;952:20;;;;;;;;;;;;;;;;;;;;;;;;;945:27;;779:200;;;;:::o;301:221:1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
  "deployedSourceMap": "301:221:1:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;301:221:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;644:81:11;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;644:81:11;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;688:138:13;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;688:138:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;1559:89:10;;;:::i;:::-;;;;;;;;;;;;;;;;;;;524:158:13;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;524:158:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;1472:81:11;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;832:168:13;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;832:168:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;1892:117:8;;;:::i;:::-;;502:140:12;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;502:140:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;494:107:7;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;494:107:7;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;1130:76:8;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;703:77:7;;;:::i;:::-;;1706:108:10;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1706:108:10;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;607:90:7;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;607:90:7;;;;;;;;;;;;;;;;;;;:::i;:::-;;1687:115:8;;;:::i;:::-;;838:85:11;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;838:85:11;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;607:90:6;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;607:90:6;;;;;;;;;;;;;;;;;;;:::i;:::-;;703:77;;;:::i;:::-;;1006:178:13;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;1006:178:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;388:130;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;388:130:13;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;494:107:6;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;494:107:6;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;2230:132:10;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;2230:132:10;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;644:81:11;681:13;713:5;706:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;644:81;:::o;688:138:13:-;767:4;1359:7:8;;;;;;;;;;;1358:8;1350:37;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;790:29:13;804:7;813:5;790:13;:29::i;:::-;783:36;;688:138;;;;:::o;1559:89:10:-;1603:7;1629:12;;1622:19;;1559:89;:::o;524:158:13:-;617:4;1359:7:8;;;;;;;;;;;1358:8;1350:37;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;640:35:13;659:4;665:2;669:5;640:18;:35::i;:::-;633:42;;524:158;;;;;:::o;1472:81:11:-;1513:5;1537:9;;;;;;;;;;;1530:16;;1472:81;:::o;832:168:13:-;926:4;1359:7:8;;;;;;;;;;;1358:8;1350:37;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;949:44:13;973:7;982:10;949:23;:44::i;:::-;942:51;;832:168;;;;:::o;1892:117:8:-;395:22:7;404:12;:10;:12::i;:::-;395:8;:22::i;:::-;387:83;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1550:7:8;;;;;;;;;;;1542:40;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1960:5;1950:7;;:15;;;;;;;;;;;;;;;;;;1980:22;1989:12;:10;:12::i;:::-;1980:22;;;;;;;;;;;;;;;;;;;;;;1892:117::o;502:140:12:-;576:4;395:22:6;404:12;:10;:12::i;:::-;395:8;:22::i;:::-;387:83;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;592:22:12;598:7;607:6;592:5;:22::i;:::-;631:4;624:11;;502:140;;;;:::o;494:107:7:-;550:4;573:21;586:7;573:8;:12;;:21;;;;:::i;:::-;566:28;;494:107;;;:::o;1130:76:8:-;1169:4;1192:7;;;;;;;;;;;1185:14;;1130:76;:::o;703:77:7:-;746:27;760:12;:10;:12::i;:::-;746:13;:27::i;:::-;703:77::o;1706:108:10:-;1763:7;1789:9;:18;1799:7;1789:18;;;;;;;;;;;;;;;;1782:25;;1706:108;;;:::o;607:90:7:-;395:22;404:12;:10;:12::i;:::-;395:8;:22::i;:::-;387:83;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;671:19;682:7;671:10;:19::i;:::-;607:90;:::o;1687:115:8:-;395:22:7;404:12;:10;:12::i;:::-;395:8;:22::i;:::-;387:83;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1359:7:8;;;;;;;;;;;1358:8;1350:37;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1756:4;1746:7;;:14;;;;;;;;;;;;;;;;;;1775:20;1782:12;:10;:12::i;:::-;1775:20;;;;;;;;;;;;;;;;;;;;;;1687:115::o;838:85:11:-;877:13;909:7;902:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;838:85;:::o;607:90:6:-;395:22;404:12;:10;:12::i;:::-;395:8;:22::i;:::-;387:83;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;671:19;682:7;671:10;:19::i;:::-;607:90;:::o;703:77::-;746:27;760:12;:10;:12::i;:::-;746:13;:27::i;:::-;703:77::o;1006:178:13:-;1105:4;1359:7:8;;;;;;;;;;;1358:8;1350:37;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1128:49:13;1152:7;1161:15;1128:23;:49::i;:::-;1121:56;;1006:178;;;;:::o;388:130::-;463:4;1359:7:8;;;;;;;;;;;1358:8;1350:37;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;486:25:13;501:2;505:5;486:14;:25::i;:::-;479:32;;388:130;;;;:::o;494:107:6:-;550:4;573:21;586:7;573:8;:12;;:21;;;;:::i;:::-;566:28;;494:107;;;:::o;2230:132:10:-;2302:7;2328:11;:18;2340:5;2328:18;;;;;;;;;;;;;;;:27;2347:7;2328:27;;;;;;;;;;;;;;;;2321:34;;2230:132;;;;:::o;2500:149::-;2566:4;2582:39;2591:12;:10;:12::i;:::-;2605:7;2614:6;2582:8;:39::i;:::-;2638:4;2631:11;;2500:149;;;;:::o;3107:300::-;3196:4;3212:36;3222:6;3230:9;3241:6;3212:9;:36::i;:::-;3258:121;3267:6;3275:12;:10;:12::i;:::-;3289:89;3327:6;3289:89;;;;;;;;;;;;;;;;;:11;:19;3301:6;3289:19;;;;;;;;;;;;;;;:33;3309:12;:10;:12::i;:::-;3289:33;;;;;;;;;;;;;;;;:37;;:89;;;;;:::i;:::-;3258:8;:121::i;:::-;3396:4;3389:11;;3107:300;;;;;:::o;3802:207::-;3882:4;3898:83;3907:12;:10;:12::i;:::-;3921:7;3930:50;3969:10;3930:11;:25;3942:12;:10;:12::i;:::-;3930:25;;;;;;;;;;;;;;;:34;3956:7;3930:34;;;;;;;;;;;;;;;;:38;;:50;;;;:::i;:::-;3898:8;:83::i;:::-;3998:4;3991:11;;3802:207;;;;:::o;788:96:4:-;833:15;867:10;860:17;;788:96;:::o;5962:302:10:-;6056:1;6037:21;;:7;:21;;;;6029:65;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6120:24;6137:6;6120:12;;:16;;:24;;;;:::i;:::-;6105:12;:39;;;;6175:30;6198:6;6175:9;:18;6185:7;6175:18;;;;;;;;;;;;;;;;:22;;:30;;;;:::i;:::-;6154:9;:18;6164:7;6154:18;;;;;;;;;;;;;;;:51;;;;6241:7;6220:37;;6237:1;6220:37;;;6250:6;6220:37;;;;;;;;;;;;;;;;;;5962:302;;:::o;779:200:5:-;851:4;894:1;875:21;;:7;:21;;;;867:68;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;952:4;:11;;:20;964:7;952:20;;;;;;;;;;;;;;;;;;;;;;;;;945:27;;779:200;;;;:::o;911:127:7:-;970:24;986:7;970:8;:15;;:24;;;;:::i;:::-;1023:7;1009:22;;;;;;;;;;;;911:127;:::o;786:119::-;842:21;855:7;842:8;:12;;:21;;;;:::i;:::-;890:7;878:20;;;;;;;;;;;;786:119;:::o;::6:-;842:21;855:7;842:8;:12;;:21;;;;:::i;:::-;890:7;878:20;;;;;;;;;;;;786:119;:::o;911:127::-;970:24;986:7;970:8;:15;;:24;;;;:::i;:::-;1023:7;1009:22;;;;;;;;;;;;911:127;:::o;4496:258:10:-;4581:4;4597:129;4606:12;:10;:12::i;:::-;4620:7;4629:96;4668:15;4629:96;;;;;;;;;;;;;;;;;:11;:25;4641:12;:10;:12::i;:::-;4629:25;;;;;;;;;;;;;;;:34;4655:7;4629:34;;;;;;;;;;;;;;;;:38;;:96;;;;;:::i;:::-;4597:8;:129::i;:::-;4743:4;4736:11;;4496:258;;;;:::o;2017:155::-;2086:4;2102:42;2112:12;:10;:12::i;:::-;2126:9;2137:6;2102:9;:42::i;:::-;2161:4;2154:11;;2017:155;;;;:::o;7351:332::-;7461:1;7444:19;;:5;:19;;;;7436:68;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7541:1;7522:21;;:7;:21;;;;7514:68;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7623:6;7593:11;:18;7605:5;7593:18;;;;;;;;;;;;;;;:27;7612:7;7593:27;;;;;;;;;;;;;;;:36;;;;7660:7;7644:32;;7653:5;7644:32;;;7669:6;7644:32;;;;;;;;;;;;;;;;;;7351:332;;;:::o;5228:464::-;5343:1;5325:20;;:6;:20;;;;5317:70;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5426:1;5405:23;;:9;:23;;;;5397:71;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5499;5521:6;5499:71;;;;;;;;;;;;;;;;;:9;:17;5509:6;5499:17;;;;;;;;;;;;;;;;:21;;:71;;;;;:::i;:::-;5479:9;:17;5489:6;5479:17;;;;;;;;;;;;;;;:91;;;;5603:32;5628:6;5603:9;:20;5613:9;5603:20;;;;;;;;;;;;;;;;:24;;:32;;;;:::i;:::-;5580:9;:20;5590:9;5580:20;;;;;;;;;;;;;;;:55;;;;5667:9;5650:35;;5659:6;5650:35;;;5678:6;5650:35;;;;;;;;;;;;;;;;;;5228:464;;;:::o;1732:187:9:-;1818:7;1850:1;1845;:6;;1853:12;1837:29;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;1837:29:9;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1876:9;1892:1;1888;:5;1876:17;;1911:1;1904:8;;;1732:187;;;;;:::o;834:176::-;892:7;911:9;927:1;923;:5;911:17;;951:1;946;:6;;938:46;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1002:1;995:8;;;834:176;;;;:::o;510:180:5:-;589:18;593:4;599:7;589:3;:18::i;:::-;581:64;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;678:5;655:4;:11;;:20;667:7;655:20;;;;;;;;;;;;;;;;:28;;;;;;;;;;;;;;;;;;510:180;;:::o;260:175::-;337:18;341:4;347:7;337:3;:18::i;:::-;336:19;328:63;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;424:4;401;:11;;:20;413:7;401:20;;;;;;;;;;;;;;;;:27;;;;;;;;;;;;;;;;;;260:175;;:::o",
  "source": "pragma solidity >=0.4.25 <0.6.0;\n\nimport \"../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol\";\nimport \"../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20Mintable.sol\";\nimport \"../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20Pausable.sol\";\n\n \ncontract Example is ERC20Mintable, ERC20Pausable, ERC20Detailed {\n    constructor(string memory _name, string memory _symbol, uint8 _decimals)\n        ERC20Detailed(_name, _symbol, _decimals)\n        public\n    {\n\n    }\n}",
  "sourcePath": "/home/criq/truffle/Metacoin/contracts/Example.sol",
  "ast": {
    "absolutePath": "/home/criq/truffle/Metacoin/contracts/Example.sol",
    "exportedSymbols": {
      "Example": [
        43
      ]
    },
    "id": 44,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 18,
        "literals": [
          "solidity",
          ">=",
          "0.4",
          ".25",
          "<",
          "0.6",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:32:1"
      },
      {
        "absolutePath": "/home/criq/truffle/Metacoin/node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol",
        "file": "../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol",
        "id": 19,
        "nodeType": "ImportDirective",
        "scope": 44,
        "sourceUnit": 1257,
        "src": "34:87:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/criq/truffle/Metacoin/node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20Mintable.sol",
        "file": "../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20Mintable.sol",
        "id": 20,
        "nodeType": "ImportDirective",
        "scope": 44,
        "sourceUnit": 1285,
        "src": "122:87:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/criq/truffle/Metacoin/node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20Pausable.sol",
        "file": "../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20Pausable.sol",
        "id": 21,
        "nodeType": "ImportDirective",
        "scope": 44,
        "sourceUnit": 1387,
        "src": "210:87:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 22,
              "name": "ERC20Mintable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1284,
              "src": "321:13:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC20Mintable_$1284",
                "typeString": "contract ERC20Mintable"
              }
            },
            "id": 23,
            "nodeType": "InheritanceSpecifier",
            "src": "321:13:1"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 24,
              "name": "ERC20Pausable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1386,
              "src": "336:13:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC20Pausable_$1386",
                "typeString": "contract ERC20Pausable"
              }
            },
            "id": 25,
            "nodeType": "InheritanceSpecifier",
            "src": "336:13:1"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 26,
              "name": "ERC20Detailed",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1256,
              "src": "351:13:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC20Detailed_$1256",
                "typeString": "contract ERC20Detailed"
              }
            },
            "id": 27,
            "nodeType": "InheritanceSpecifier",
            "src": "351:13:1"
          }
        ],
        "contractDependencies": [
          223,
          411,
          518,
          606,
          1198,
          1256,
          1284,
          1386,
          1455
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 43,
        "linearizedBaseContracts": [
          43,
          1256,
          1386,
          606,
          518,
          1284,
          411,
          1198,
          1455,
          223
        ],
        "name": "Example",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 41,
              "nodeType": "Block",
              "src": "512:8:1",
              "statements": []
            },
            "documentation": null,
            "id": 42,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 36,
                    "name": "_name",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 29,
                    "src": "466:5:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  {
                    "argumentTypes": null,
                    "id": 37,
                    "name": "_symbol",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 31,
                    "src": "473:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  {
                    "argumentTypes": null,
                    "id": 38,
                    "name": "_decimals",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 33,
                    "src": "482:9:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  }
                ],
                "id": 39,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 35,
                  "name": "ERC20Detailed",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1256,
                  "src": "452:13:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_type$_t_contract$_ERC20Detailed_$1256_$",
                    "typeString": "type(contract ERC20Detailed)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "452:40:1"
              }
            ],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 34,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29,
                  "name": "_name",
                  "nodeType": "VariableDeclaration",
                  "scope": 42,
                  "src": "383:19:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "383:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 31,
                  "name": "_symbol",
                  "nodeType": "VariableDeclaration",
                  "scope": 42,
                  "src": "404:21:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 30,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "404:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 33,
                  "name": "_decimals",
                  "nodeType": "VariableDeclaration",
                  "scope": 42,
                  "src": "427:15:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 32,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "427:5:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "382:61:1"
            },
            "returnParameters": {
              "id": 40,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "512:0:1"
            },
            "scope": 43,
            "src": "371:149:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 44,
        "src": "301:221:1"
      }
    ],
    "src": "0:522:1"
  },
  "legacyAST": {
    "absolutePath": "/home/criq/truffle/Metacoin/contracts/Example.sol",
    "exportedSymbols": {
      "Example": [
        43
      ]
    },
    "id": 44,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 18,
        "literals": [
          "solidity",
          ">=",
          "0.4",
          ".25",
          "<",
          "0.6",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:32:1"
      },
      {
        "absolutePath": "/home/criq/truffle/Metacoin/node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol",
        "file": "../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol",
        "id": 19,
        "nodeType": "ImportDirective",
        "scope": 44,
        "sourceUnit": 1257,
        "src": "34:87:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/criq/truffle/Metacoin/node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20Mintable.sol",
        "file": "../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20Mintable.sol",
        "id": 20,
        "nodeType": "ImportDirective",
        "scope": 44,
        "sourceUnit": 1285,
        "src": "122:87:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "/home/criq/truffle/Metacoin/node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20Pausable.sol",
        "file": "../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20Pausable.sol",
        "id": 21,
        "nodeType": "ImportDirective",
        "scope": 44,
        "sourceUnit": 1387,
        "src": "210:87:1",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 22,
              "name": "ERC20Mintable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1284,
              "src": "321:13:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC20Mintable_$1284",
                "typeString": "contract ERC20Mintable"
              }
            },
            "id": 23,
            "nodeType": "InheritanceSpecifier",
            "src": "321:13:1"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 24,
              "name": "ERC20Pausable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1386,
              "src": "336:13:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC20Pausable_$1386",
                "typeString": "contract ERC20Pausable"
              }
            },
            "id": 25,
            "nodeType": "InheritanceSpecifier",
            "src": "336:13:1"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 26,
              "name": "ERC20Detailed",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1256,
              "src": "351:13:1",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC20Detailed_$1256",
                "typeString": "contract ERC20Detailed"
              }
            },
            "id": 27,
            "nodeType": "InheritanceSpecifier",
            "src": "351:13:1"
          }
        ],
        "contractDependencies": [
          223,
          411,
          518,
          606,
          1198,
          1256,
          1284,
          1386,
          1455
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 43,
        "linearizedBaseContracts": [
          43,
          1256,
          1386,
          606,
          518,
          1284,
          411,
          1198,
          1455,
          223
        ],
        "name": "Example",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "body": {
              "id": 41,
              "nodeType": "Block",
              "src": "512:8:1",
              "statements": []
            },
            "documentation": null,
            "id": 42,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 36,
                    "name": "_name",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 29,
                    "src": "466:5:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  {
                    "argumentTypes": null,
                    "id": 37,
                    "name": "_symbol",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 31,
                    "src": "473:7:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  {
                    "argumentTypes": null,
                    "id": 38,
                    "name": "_decimals",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 33,
                    "src": "482:9:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  }
                ],
                "id": 39,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 35,
                  "name": "ERC20Detailed",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1256,
                  "src": "452:13:1",
                  "typeDescriptions": {
                    "typeIdentifier": "t_type$_t_contract$_ERC20Detailed_$1256_$",
                    "typeString": "type(contract ERC20Detailed)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "452:40:1"
              }
            ],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 34,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 29,
                  "name": "_name",
                  "nodeType": "VariableDeclaration",
                  "scope": 42,
                  "src": "383:19:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "383:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 31,
                  "name": "_symbol",
                  "nodeType": "VariableDeclaration",
                  "scope": 42,
                  "src": "404:21:1",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 30,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "404:6:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 33,
                  "name": "_decimals",
                  "nodeType": "VariableDeclaration",
                  "scope": 42,
                  "src": "427:15:1",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint8",
                    "typeString": "uint8"
                  },
                  "typeName": {
                    "id": 32,
                    "name": "uint8",
                    "nodeType": "ElementaryTypeName",
                    "src": "427:5:1",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint8",
                      "typeString": "uint8"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "382:61:1"
            },
            "returnParameters": {
              "id": 40,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "512:0:1"
            },
            "scope": 43,
            "src": "371:149:1",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          }
        ],
        "scope": 44,
        "src": "301:221:1"
      }
    ],
    "src": "0:522:1"
  },
  "compiler": {
    "name": "solc",
    "version": "0.5.12+commit.7709ece9.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.0.19",
  "updatedAt": "2019-12-09T05:01:34.127Z",
  "devdoc": {
    "methods": {
      "allowance(address,address)": {
        "details": "See {IERC20-allowance}."
      },
      "balanceOf(address)": {
        "details": "See {IERC20-balanceOf}."
      },
      "decimals()": {
        "details": "Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5,05` (`505 / 10 ** 2`).     * Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei.     * NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}."
      },
      "mint(address,uint256)": {
        "details": "See {ERC20-_mint}.     * Requirements:     * - the caller must have the {MinterRole}."
      },
      "name()": {
        "details": "Returns the name of the token."
      },
      "pause()": {
        "details": "Called by a pauser to pause, triggers stopped state."
      },
      "paused()": {
        "details": "Returns true if the contract is paused, and false otherwise."
      },
      "symbol()": {
        "details": "Returns the symbol of the token, usually a shorter version of the name."
      },
      "totalSupply()": {
        "details": "See {IERC20-totalSupply}."
      },
      "unpause()": {
        "details": "Called by a pauser to unpause, returns to normal state."
      }
    }
  },
  "userdoc": {
    "methods": {}
  }
}