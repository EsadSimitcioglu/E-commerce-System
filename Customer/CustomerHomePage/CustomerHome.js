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

    var allProducts = ""
    axios.get(`http://localhost:8080/products`)
      .then(function (response) {
        for(var i = 0; i < response.data.length; i++) {
          console.log(response.data[i].name)
          console.log(response.data[i].price)
          console.log(response.data[i].id)
          allProducts += "<div class=\"col-lg-4 col-md-6 col-sm-6\" align=\"center\"><div class=\"product\" onclick=\"addBasket(" + response.data[i].id + "," + '\'' + response.data[i].name + '\'' + "," + response.data[i].price + ")\"><a><img class=\"img-fluid\" src=images\\unsplash_NOpsC3nWTzY.svg></a><div class=\"bottom\"><h4><img class=\"cart\" src=\"images\\Vector.svg\">" + response.data[i].price + " ETH" + "</h4></div></div></div>"
        }
  
        console.log(allProducts)
        document.getElementById("products").innerHTML = allProducts
      })
      .catch(function (error) {
        console.log(error);
    })

    
};

function addBasket(id,name,price){
  var obj = { "id": id, "name": name, "price" : price, "quantity" : 1}

  for(var i = 0;i<orderList.length;i++){
    if(orderList[i].id == id){
      orderList[i].quantity++
      sessionStorage.setItem('orderList',JSON.stringify(orderList))
      return
    }
  }
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





