var orderList = new Array()

window.onload = function() {
    orderList = JSON.parse(sessionStorage.getItem('orderList')); 

    var subTotal = 0


    for(var i = 0; i < orderList.length; i++) {
        subTotal += orderList[i].price
    }

    document.getElementById("totalValue1").innerHTML = "$" + subTotal
    document.getElementById("totalValue2").innerHTML = "$" + subTotal

    var shoppingCard = ""
    for(var i = 0; i < orderList.length; i++) {
        var productCount = 1
        for(var j = i+1;j<orderList.length;j++){
            if(orderList[i].id == orderList[j].id){
                productCount+=1
                orderList.splice(j,1);
            }
        }
        shoppingCard += "<div class='row border-bottom'><div class='col-lg-3 col-md-3 col-sm-12 m-auto'><div class='product'><img class='img-fluid' src='images\\unsplash_nvQemFKRBUo.svg'></div></div><div class='col-lg-3 col-md-3 col-sm-12 m-auto'><p class='text text-start fs-6'>" + orderList[i].name +  "</p><p class='text text-start fs-6 text-secondary'>Size: STD</p></div><div class='col-lg-2 col-md col-sm-12 m-auto'><p class='text' id = 'price_" + orderList[i].id + "'>$" + orderList[i].price + "</p></div><div class='col-lg-2 col-md col-sm-12 m-auto'><div class='row'><div class='col'><form><div class='value-button' id='decrease' onclick='decreaseValue(" + orderList[i].id + ")' value='Decrease Value'><i class='fa-solid fa-circle-minus' style='color:#161850'></i></div><input type='number' class ='number' id=" + orderList[i].id + " value=" + productCount + " /><div class='value-button' id='increase' onclick='increaseValue(" + orderList[i].id + ")' value='Increase Value'><i class='fa-solid fa-circle-plus' style='color:#161850'></i></div></form></div></div></div></div>"
    }

    document.getElementById("shoppingCard").innerHTML = shoppingCard
};

function increaseValue(productID) {
    var total = document.getElementById("totalValue2").innerHTML
    total = total.substring(1)

    var price = document.getElementById("price_" + productID).innerHTML
    price = price.substring(1)
    
    var value = parseInt(document.getElementById(productID).value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    total = parseInt(price) + parseInt(total)
    document.getElementById("totalValue1").innerHTML = "$" + total
    document.getElementById("totalValue2").innerHTML = "$" + total
    document.getElementById(productID).value = value;
  }

  function decreaseValue(productID) {
    var total = document.getElementById("totalValue2").innerHTML
    total = total.substring(1)

    var price = document.getElementById("price_" + productID).innerHTML
    price = price.substring(1)
    var value = parseInt(document.getElementById(productID).value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    total = parseInt(total) - parseInt(price)  
    document.getElementById("totalValue1").innerHTML = "$" + total
    document.getElementById("totalValue2").innerHTML = "$" + total
    document.getElementById(productID).value = value;
  }