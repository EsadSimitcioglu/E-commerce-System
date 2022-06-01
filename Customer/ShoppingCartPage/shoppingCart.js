
var orderList = new Array()

window.onload = function() {
    orderList = JSON.parse(sessionStorage.getItem('orderList')); 

    var subTotal = 0


    for(var i = 0; i < orderList.length; i++) {
        subTotal += orderList[i].price
    }

    document.getElementById("totalValue1").innerHTML = "$" + subTotal
    document.getElementById("totalValue2").innerHTML = "$" + subTotal
    document.getElementById("totalValue2").value = subTotal

    var shoppingCard = ""
    console.log(shoppingCard)
    for(var i = 0; i < orderList.length; i++) {
        shoppingCard += "<div class='row border-bottom'><div class='col-lg-3 col-md-3 col-sm-12 m-auto'><div class='product'><img class='img-fluid' src='images\\unsplash_nvQemFKRBUo.svg'></div></div><div class='col-lg-3 col-md-3 col-sm-12 m-auto'><p class='text text-start fs-6'>" + orderList[i].name +  "</p><p class='text text-start fs-6 text-secondary'>Size: STD</p></div><div class='col-lg-2 col-md col-sm-12 m-auto'><p id = p" + orderList[i].id + " value='" + orderList[i].price +"' class='text'>$" + orderList[i].price + "</p></div><div class='col-lg-2 col-md col-sm-12 m-auto'><div class='row'><div class='col'><form><div class='value-button' id='decrease' onclick='decreaseValue(" + orderList[i].id + ")' value='Decrease Value'><i class='fa-solid fa-circle-minus' style='color:#161850'></i></div><input type='number' class = 'number' id= " + orderList[i].id + " value=" + orderList[i].quantity + "><div class='value-button' id='increase' onclick='increaseValue(" + orderList[i].id + ")' value='Increase Value'><i class='fa-solid fa-circle-plus' style='color:#161850'></i></div></form></div></div></div></div>"
    }

    document.getElementById("shoppingCard").innerHTML = shoppingCard
};

function increaseValue(id) {
    var value = parseInt(document.getElementById(id).value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById(id).value = value;

    var productPriceWithDollar =document.getElementById("p" + id).innerHTML
    let productPrice = parseInt(productPriceWithDollar.substring(1));
    
    var subTotal = document.getElementById("totalValue2").value
    subTotal = productPrice + subTotal
    document.getElementById("totalValue1").innerHTML = "$" + subTotal
    document.getElementById("totalValue1").value = subTotal
    document.getElementById("totalValue2").innerHTML = "$" + subTotal
    document.getElementById("totalValue2").value = subTotal
    
  }

  function decreaseValue(id) {
    var value = parseInt(document.getElementById(id).value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById(id).value = value;

    var productPriceWithDollar =document.getElementById("p" + id).innerHTML
    let productPrice = parseInt(productPriceWithDollar.substring(1));

    var subTotal = document.getElementById("totalValue2").value
    subTotal = subTotal - productPrice
    document.getElementById("totalValue1").innerHTML = "$" + subTotal
    document.getElementById("totalValue1").value = subTotal
    document.getElementById("totalValue2").innerHTML = "$" + subTotal
    document.getElementById("totalValue2").value = subTotal

  }