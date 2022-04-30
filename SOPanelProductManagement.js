
var productList = new Array()

window.onload = function () {
    var storeOwnerID = sessionStorage.getItem("ID")
    console.log(storeOwnerID)
    axios.get(`http://localhost:8080/store/${storeOwnerID}`)
      .then(function (response) {
        sessionStorage.setItem("storeID",response.data.id)
        
      })
      .catch(function (error) {
        console.log(error);
    });

    


    var storeID = sessionStorage.getItem("storeID")
    var allProducts = ""
    axios.get(`http://localhost:8080/products/store/${storeID}`)
      .then(function (response) {
        for(var i = 0; i < response.data.length; i++) {
          productList.push(response.data[i].id)
          allProducts +=  "<div class='row' id='product-details'><div class='col-lg-2 col-md-2 col-sm-12 m-auto'> <div class='product'><img class='img-responsive' src='images\\unsplash_NOpsC3nWTzY.svg' alt='Product image'></div></div><div class='col-lg-2 col-md-2 col-sm-12 m-auto'><div class='product'><p class='text'>" + response.data[i].name + "</p></div></div><div class='col-lg-2 col-md-2 col-sm-12 m-auto'><div class='product' id='bottom-box-details'><p class='text'>" + response.data[i].description + "</p></div></div><div class='col-lg-2 col-md-2 col-sm-12 m-auto'><div class='row'><form><div class='value-button' id='decrease' onclick='decreaseValue(" + response.data[i].id + ")'value='Decrease Value'><i class='fa-solid fa-circle-minus'style='color:#161850'></i></div><input type='number' id=" + response.data[i].id + " value=" + response.data[i].quantity + " /><div class='value-button' id='increase' onclick='increaseValue(" + response.data[i].id + ")'value='Increase Value'><i class='fa-solid fa-circle-plus' style='color:#161850'></i></div></form></div></div><div class='col m-auto'><p class='text'>$ " + response.data[i].price + "</p></div></div>"
        }
          document.getElementById("all-products").innerHTML = allProducts
          if(!window.location.hash) {
            window.location = window.location + '#loaded';
            window.location.reload();
	        }
      })
      .catch(function (error) {
        console.log(error);
    })
}

function newProduct() {
  location.href = "AddProductPage.html"
}

function saveChanges() {
  for(var i = 0;i<productList.length;i++){
    axios.put('http://localhost:8080/products/stock', {
      id: productList[i],
      quantity : document.getElementById(productList[0]).value
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}

function increaseValue(productID) {
  var value = parseInt(document.getElementById(productID).value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById(productID).value = value;
}

function decreaseValue(productID) {
  var value = parseInt(document.getElementById(productID).value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById(productID).value = value;
}

