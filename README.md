# Filestore - Store your files on Ethereum with IPFS.
Traditional file storage platforms utilize centralized servers and networks to store users files, furthermore granting them with the ability to gatekeep and censor data. With the emergence of distributed-ledger technologies such as Ethereum and the InterPlanetary File System (IPFS), developers now have the ability to build permissionless and trustless applications that are free of such limitations.

Filestore is a client-side application that allows users to store files on IPFS using Ethereum-based smart contracts and a web3 wallet. The application utilizes the following stack: web3.js, Solidity smart contracts, an Ethereum RPC connection via Ganache, Truffle suite, and React.js. The purpose of this application is not necessarily the utility, but rather to serve as a starting point and template for building client facing dApps that store any sort of data on Ethereum and IPFS. 

## Dependencies
Install the following prerequisites: 
- NPM: https://nodejs.org
- Truffle: https://github.com/trufflesuite/truffle
- Ganache: http://truffleframework.com/ganache/
- Metamask: https://metamask.io/


## Step 1. Clone the project
`git clone https://github.com/ljuliandicarlo/Filestore`

## Step 2. Install dependencies
```
$ cd Filestore
$ npm install
```
## Step 3. Start Ganache
Open the Ganache GUI client that you downloaded and installed. This will start your local blockchain instance. Make sure that you keep Ganache running throughout the migration / deployment process.


## Step 4. Compile & Deploy Filestore Smart Contract
`$ truffle migrate --reset`
Each time you restart Ganache you must migrate the Filestore smart contract in order for the application to run.

## Step 5. Configure Metamask
Import Ganache account to Metamask by following these steps:
- Unlock Metamask.
- Go to networks and then custom RPC.
- Give the network a name.
- Input `HTTP://127.0.0.1:7545` for the RPC URL.
- 1337 for chain ID and then save.
- Pick an account in Ganache and copy the private key. 
- Go to import account in Metamask and paste the private key.
- There should now be 100 test Ether in your account.  

Filestore smart contracts can also be deployed to the main or testnets by configuring the `truffle-config.js` file - Ropsten test network is already included. From there you must modify the `.env` file to include an Infura (https://infura.io/) API key and the private key to your Metamask wallet. You can then get some test Ether from a variety of faucets for deployment.
Make sure to `.gitignore` your `.env` to protect your private and API keys in production.

## Step 6. Testing
`$ truffle test`
Will execute the following tests:
- If the deployment has been successful.
- If the contract has a name.
- If the file has been uploaded with assigned attributes.
- If the file is listed with assigned attributes.


## Step 7. Run the Front End Application
`$ npm start`
To launch the React app and then visit this URL in your browser: http://localhost:3000

Now simply choose a file from your local machine, write a description, press upload, and confrim the transaction in MetaMask. Your files are then stored on an immutable and tamper-proof ledger, accessible with an internet connection and your Ethereum wallet. Enjoy! 