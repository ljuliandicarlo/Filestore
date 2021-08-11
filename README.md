# Filestore - Client side application that allows users to store and view their files on the Ethereum blockchain using IPFS. 
Build your first decentralized application, or Dapp, on the Ethereum Network with this tutorial!

Here is a diagram explaining how the application works:
https://youtu.be/3681ZYbDSSk


Follow the steps below to download, install, and run this project.

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


## Step 4. Compile & Deploy Election Smart Contract
`$ truffle migrate --reset`
Each time you restart Ganache you must migrate the Filestore smart contract in order for the application to run.

## Step 5. Configure Metamask
See free video tutorial for full explanation of these steps:
- Unlock Metamask
- Connect metamask to your local Etherum blockchain provided by Ganache.
- Import an account provided by ganache.

## Step 6. Run the Front End Application
`$ npm run dev`
Visit this URL in your browser: http://localhost:3000

If you get stuck, please reference the free video tutorial.