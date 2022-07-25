// const { default: Web3 } = require("web3");

solc = require("solc");

fs=require('fs');

Web3 = require("web3");
 let web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));

const fileContent = fs.readFileSync("lib.sol").toString();

console.log(fileContent);

var input = {
    language: "Solidity",
    sources: {
      "lib.sol": {
        content: fileContent,
      },
    },
  
    settings: {
      outputSelection: {
        "*": {
          "*": ["*"],
        },
      },
    },
  };
  
  var output=JSON.parse(solc.compile(JSON.stringify(input)));
  console.log(output);
  ABI= output.contracts["lib.sol"]["Library"].abi;
  bytecode=output.contracts["lib.sol"]["Library"].evm.bytecode.object;
  console.log("abi:",ABI);
 console.log("bytecode:",bytecode);
  //fs.savefile

  contract = new web3.eth.Contract(ABI);

//   web3.eth.getAccounts().then((accounts) => {console.log("Accounts:",accounts); defaultAccount = accounts[0];console.log(defaultAccount);
//   contract.deploy({data:bytecode}).send({from:defaultAccount,gas:600000})
// .on("receipt",(receipt)=>{console.log("contract Address", receipt.contractAddress);})
//     })  .then((contract.methods.get_details().call((err,data)=>{console.log("Initial Value: ",data);});
// });
// });
