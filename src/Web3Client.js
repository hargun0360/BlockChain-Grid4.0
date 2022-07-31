import Web3 from 'web3';
import Flipkart from './build/contracts/Flipkart.json'

let selectedAccount;
let isInitialized = false
let flipkartContract;

export const init = async () => {
  let provider = window.ethereum;

  if (typeof provider !== 'undefined') {

    provider.request({ method: 'eth_requestAccounts' }).then(accounts => {
      selectedAccount = accounts[0]
      console.log('selected account is' + selectedAccount);
    }).catch(err => {
      console.log(err);
      return;
    });

    window.ethereum.on('accountsChanged', function (accounts) {
      selectedAccount = accounts[0]
      console.log("Selected account is changed to " + selectedAccount);
    });
  }
  
  const web3 = new Web3(provider);

  const networkId = await web3.eth.net.getId()

  flipkartContract = new web3.eth.Contract(Flipkart.abi, Flipkart.networks[networkId].address);

  isInitialized = true
};

export const generateWarranty = async ({productId,productName,ownerAddress,expiryDate}) => {

  if (!isInitialized) {
    await init()
  }

  console.log(await flipkartContract.methods.createWarranty(productId,productName,ownerAddress,expiryDate).send({ from: selectedAccount }))

}

export const getProductDetails = async(props) => {
  if (!isInitialized) {
    await init()
  }

  const response = await flipkartContract.methods.getProductDetails(props).call();
  if(response){
    return response
  }
}

export const claimWarranty = async({productId}) => {
  if (!isInitialized) {
    await init()
  }
  const response = await flipkartContract.methods.claim(productId).send({from: selectedAccount})
  if(response){
    return response
  }
}


export const transfer = async({productId, receiverAddress}) => {
  if (!isInitialized) {
    await init()
  }
  const response = await flipkartContract.methods.transferWarranty(productId, receiverAddress).send({from: selectedAccount})
  if(response){
    return response
  }
}


export const getMyWarrenty = async() => {
  if (!isInitialized) {
    await init()
  }
  const response = await flipkartContract.methods.getMyProducts(selectedAccount).call();
  if(response){
    return response
  }
}
