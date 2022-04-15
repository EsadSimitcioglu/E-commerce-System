
var productIds = [];

function getFilterResearch() {
    
}

function addBasket(id){
  productIds.push(id)
  sessionStorage.setItem("productIds", JSON.stringify(productIds)); //store ids
  console.log(productIds)
}


