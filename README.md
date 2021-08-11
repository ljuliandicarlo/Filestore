# Filestore - Store your files on Ethereum with IPFS.
Traditional file storage platforms utilize centralized servers and networks to store users files, furthermore granting them with the ability to gatekeep and censor your data. With the emergence of distributed-ledger technologies such as Ethereum and IPFS, developers now have the ability to build permissionless and trustless applications that are free of such issues.

Filestore is a client-side application that allows users to store and view files on the Ethereum blockchain using the IPFS protocol and a web3 wallet. 

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
See free video tutorial for full explanation of these steps:
- Unlock Metamask
- Connect metamask to your local Etherum blockchain provided by Ganache.
- Import an account provided by ganache.

## Step 6. Run the Front End Application
`$ npm start`
Visit this URL in your browser: http://localhost:3000

If you get stuck, please reference the free video tutorial.