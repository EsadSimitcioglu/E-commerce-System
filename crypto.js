async function connectWallet(){
    sessionStorage.removeItem("wallet")
    accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    sessionStorage.setItem('wallet',accounts[0])
}

async function donate() {
    await window.ethereum
      .request({
        method: 'eth_sendTransaction',
        params: [
          {
            from: sessionStorage.getItem("walletAccounts"),
            to: '0xd1662A85927ee6c18921BBD59CBa5060B20946c7',
            value: Number(100000000000000000n).toString(16),
            gasPrice: Number(2500000).toString(16),
            gas: Number(21000).toString(16),
          },
        ],
      })
      .then((txHash) => console.log(txHash))
      .catch((error) => console.error);
}

async function sendEther(storeOwnerAdress, totalEther){
  let wei = etherToWei(totalEther)
  await window.ethereum
      .request({
        method: 'eth_sendTransaction',
        params: [
          {
            from: sessionStorage.getItem("walletAccounts"),
            to: storeOwnerAdress,
            value: wei.toString(16),
            gasPrice: Number(2500000).toString(16),
            gas: Number(21000).toString(16),
          },
        ],
      })
      .then((txHash) => console.log(txHash))
      .catch((error) => console.log("Not accepted"));
}

async function order(){
  let orders = JSON.parse(sessionStorage.getItem("orderList"))
  for(let i = 0 ; i < orders.length ; i++) {
    let storeOwner = await getStoreOwnerOfProduct(orders[i])
    let walletAddress = storeOwner.walletAddress
    sendEther(walletAddress, orders[i].price)
  }
}

async function getStoreOwnerOfProduct(product){
  return (await getStoreOfProduct(product)).storeOwner
}

async function getStoreOfProduct(product){
  let productId = product.id
  let store = await axios.get(`http://localhost:8080/store/product/${productId}`)
  .then(function (response) {
    return response.data
  })
  .catch(function (error) {
    console.log(error);
  });
  return store
}

function etherToWei(ether){
  return Number(ether * Math.pow(10, 18))
}