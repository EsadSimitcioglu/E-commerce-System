
var productIds = [];


window.onload = function() {
  console.log(sessionStorage.getItem("ID"))
};


function getFilterResearch() {
    
}

function searchProduct() {
  const keyword = document.getElementById("searchTextField").value 

  axios.get(`http://localhost:8080/products/searchName/${keyword}`)
      .then(function (response) {
        for(var i = 0;i<response.length;i++){
          productIds.push(response[i])
        }
      })
      .catch(function (error) {
        console.log(error);
    });
}


function addBasket(id){
  productIds.push(id)
  sessionStorage.setItem("productIds", JSON.stringify(productIds)); //store ids
  console.log(productIds)
}


