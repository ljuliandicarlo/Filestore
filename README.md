# Filestore - Store your files on Ethereum with IPFS.
Traditional file storage platforms utilize centralized servers and networks to store users files, furthermore granting them with the ability to gatekeep and censor data. With the emergence of distributed-ledger technologies such as Ethereum and IPFS, developers now have the ability to build permissionless and trustless applications that are free of such limitations.

Filestore is a client-side application that allows users to store files on the Ethereum blockchain using the IPFS protocol and a web3 wallet. Simply choose a file from your local machine, write a description, press upload, confrim the transaction in MetaMask, and your files are then stored on an immutable and tamper-proof ledger.

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

## Step 6. Testing
`$ truffle test`
Will execute the following tests:
- If the deployment has been successful.
- If the contract has a name.
- If the file has been uploaded.
- If the file is listed with its attributes.


## Step 7. Run the Front End Application
`$ npm start`
Visit this URL in your browser: http://localhost:3000

Now simply choose a file from your local machine, write a description, press upload, and confrim the transaction in MetaMask. Your files are then stored on an immutable and tamper-proof ledger, accessible with an internet connection and your Ethereum wallet. 