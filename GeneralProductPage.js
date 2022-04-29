// init Isotope
// var $grid = $('#product-list').isotope({
//     // options
//   });
//   // filter items on button click
//   $('.filter-button-group').on( 'click', 'button', function() {
//     var filterValue = $(this).attr('data-filter');
//     $grid.isotope({ filter: filterValue });
//   });

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
          allProducts += "<div class=\"col-lg-4 col-md-6 col-sm-6\" align=\"center\"><div class=\"product-item\" onclick=\"addBasket(" + response.data[i].id + "," + '\'' + response.data[i].name + '\'' + "," + response.data[i].price + ")\"><a><img class=\"img-fluid\" src=images\\unsplash_NOpsC3nWTzY.svg></a><div class=\"bottom\"><h4><img class=\"cart\" src=\"images\\Vector.svg\">$" + response.data[i].price + "</h4></div></div></div>"
        }
  
        console.log(allProducts)
        document.getElementById("product-list").innerHTML = allProducts
      })
      .catch(function (error) {
        console.log(error);
    })

    
};


function addBasket(id,name,price){
  console.log("Called")
  var obj = { "id": id, "name": name, "price" : price}
  orderList.push(obj)
  sessionStorage.setItem('orderList',JSON.stringify(orderList))
}

function sortAscending() {
  var allProducts = ""

  console.log("Clicked ascending")
  axios.get(`http://localhost:8080/products/ascending`)
      .then(function (response) {
        for(var i = 0; i < response.data.length; i++) {
          console.log(response.data[i].name)
          console.log(response.data[i].price)
          console.log(response.data[i].id)
          allProducts += "<div class=\"col-lg-4 col-md-6 col-sm-6\" align=\"center\"><div class=\"product-item\" onclick=\"addBasket(" + response.data[i].id + "," + '\'' + response.data[i].name + '\'' + "," + response.data[i].price + ")\"><a><img class=\"img-fluid\" src=images\\unsplash_NOpsC3nWTzY.svg></a><div class=\"bottom\"><h4><img class=\"cart\" src=\"images\\Vector.svg\">$" + response.data[i].price + "</h4></div></div></div>"
        }
  
        console.log(allProducts)
        document.getElementById("product-list").innerHTML = allProducts
      })
      .catch(function (error) {
        console.log(error);
    })
}

function sortDescending() {
  var allProducts = ""

  console.log("Clicked descending")
  axios.get(`http://localhost:8080/products/descending`)
      .then(function (response) {
        for(var i = 0; i < response.data.length; i++) {
          console.log(response.data[i].name)
          console.log(response.data[i].price)
          console.log(response.data[i].id)
          allProducts += "<div class=\"col-lg-4 col-md-6 col-sm-6\" align=\"center\"><div class=\"product-item\" onclick=\"addBasket(" + response.data[i].id + "," + '\'' + response.data[i].name + '\'' + "," + response.data[i].price + ")\"><a><img class=\"img-fluid\" src=images\\unsplash_NOpsC3nWTzY.svg></a><div class=\"bottom\"><h4><img class=\"cart\" src=\"images\\Vector.svg\">$" + response.data[i].price + "</h4></div></div></div>"
        }
  
        console.log(allProducts)
        document.getElementById("product-list").innerHTML = allProducts
      })
      .catch(function (error) {
        console.log(error);
    })
}