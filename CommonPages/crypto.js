async function connectWallet() {
  sessionStorage.removeItem("wallet")
  accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
  sessionStorage.setItem('wallet', accounts[0])
}

async function orderAll() {
  const orders = JSON.parse(sessionStorage.getItem("orderList"))
  const storeOwnerIds = await getStoreOwnerIdsOfOrders(orders)
  addStoreOwnerIdsToOrders(storeOwnerIds, orders)
  const ordersGroupByStoreOwnerId = groupByStoreOwnerId(orders)

  for (const [storeOwnerId, orders] of ordersGroupByStoreOwnerId.entries()) {
    walletAddressOfStoreOwner = await getWalletAddressOfStoreOwner(storeOwnerId)
    totalEtherPayment = calculateTotalPaymentToStoreOwner(orders)
    try {
      await sendEther(walletAddressOfStoreOwner, totalEtherPayment)
      await createInvoice(orders)
      await createOrder(orders,totalEtherPayment)
    } catch (error) {
      console.log(error)
    }
  }
}

async function getStoreOwnerIdsOfOrders(list) {
  const storeOwners = []
  for (i = 0; i < list.length; i++) {
    productId = list[i].id
    await axios.get(`http://localhost:8080/store/product/${productId}`)
      .then(function (response) {
        storeOwners.push(response.data.storeOwner.id)
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return storeOwners
}

function addStoreOwnerIdsToOrders(storeOwnerIds, products) {
  for (i = 0; i < products.length; i++) {
    products[i]["storeOwnerId"] = storeOwnerIds[i]
  }
}

function groupByStoreOwnerId(list) {
  const map = new Map()
  list.forEach((product) => {
    const key = product.storeOwnerId
    const collection = map.get(key);
    if (!collection) {
      map.set(key, [product]);
    } else {
      collection.push(product);
    }
  });
  return map;
}

async function getWalletAddressOfStoreOwner(storeOwnerId) {
  const response = await axios.get(`http://localhost:8080/storeOwner/walletAddress/${storeOwnerId}`)
  return response.data
}

function calculateTotalPaymentToStoreOwner(orders) {
  totalPayment = 0.0
  orders.forEach((order) => totalPayment += order.price * order.quantity)
  return totalPayment
}

async function sendEther(storeOwnerAddress, totalEther) {
  let wei = etherToWei(totalEther)
  await window.ethereum
    .request({
      method: 'eth_sendTransaction',
      params: [
        {
          from: sessionStorage.getItem("wallet"),
          to: storeOwnerAddress,
          value: wei.toString(16)
        },
      ],
    })
    .then((txHash) => console.log(txHash))
    .catch(function (error) {
      alert(error.message)
      throw error
    });
}

function etherToWei(ether) {
  return Number(ether * Math.pow(10, 18))
}

async function createInvoice(orders) {
  productIds = await getProductIdsFromOrders(orders)
  quantities = await getProductQuantitiesFromOrders(orders)
  console.log(productIds)
  console.log(quantities)
  const data = JSON.stringify({
    customerId: parseInt(sessionStorage.getItem("ID")),
    storeOwnerId: parseInt(orders[0].storeOwnerId),
    productIds: productIds,
    quantities: quantities
  })
  const config = {
    headers: { 'Content-Type': 'application/json' }
  }
  await axios.post('http://localhost:8080/invoice/', data, config)
}

async function createOrder(orders,price) {
  productIds = await getProductIdsFromOrders(orders)
  quantities = await getProductQuantitiesFromOrders(orders)

  await axios.get(`http://localhost:8080/store/${orders[0].storeOwnerId}`)
      .then(function (response) {

        const data = JSON.stringify({
          customerId: parseInt(sessionStorage.getItem("ID")),
          storeId: response.data.id,
          status: "IN_PROCESS",
          date: "2022-06-01",
          price: price,
          productIds: productIds,
          quantities: quantities
        })
        const config = {
          headers: { 'Content-Type': 'application/json' }
        }
        axios.post('http://localhost:8080/customerOrder', data, config)
      })
      .catch(function (error) {
        console.log(error);
      });
    await axios.get('http://localhost:8080/') 
}

async function getProductIdsFromOrders(orders) {
  ids = []
  for (i = 0; i < orders.length; i++) {
    await ids.push(parseInt(orders[i].id))
  }
  return ids
}

async function getProductQuantitiesFromOrders(orders) {
  quantities = []
  for (i = 0; i < orders.length; i++) {
    await quantities.push(parseInt(orders[i].quantity))
  }
  return quantities
}

function postOrder(order) {
  axios.post('http://localhost:8080/customer/order', {
    customer_id: sessionStorage.getItem('ID'),
    product_id: orders[i].id,
    quantity: orders[i].quantity
  })
}
