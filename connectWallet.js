async function connectWallet(){
    sessionStorage.removeItem("walletAccounts")
    accounts = []
    accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    sessionStorage.setItem('walletAccounts',accounts)
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