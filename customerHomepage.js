var productList = new Array();
var orderList = new Array()

window.onload = function() {
  axios.get(`http://localhost:8080/products`)
      .then(function (response) {
        for(var i = 0;i<response.data.length;i++){
          var products = new Object();
          products.id = response.data[i].id
          products.name = response.data[i].name
          products.price = response.data[i].price
          productList.push(products)
        }
      })
      .catch(function (error) {
        console.log(error);
    });
};

function addBasket(id,name,price){
  var obj = { "id": id, "name": name, "price" : price}
  orderList.push(obj)
  sessionStorage.setItem('orderList',JSON.stringify(orderList))
}

function searchProduct() {
  const keyword = document.getElementById("searchTextField").value 

  axios.get(`http://localhost:8080/products/searchName/${keyword}`)
      .then(function (response) {
        for(var i = 0;i<response.data.length;i++){
          
        }
      })
      .catch(function (error) {
        console.log(error);
    });
}

function getDetailsOfProducts(id){

}





