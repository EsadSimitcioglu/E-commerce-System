
var orderList = new Array()

window.onload = function() {
    orderList = JSON.parse(sessionStorage.getItem('orderList')); 

    // var subTotal = 0


    // for(var i = 0; i < orderList.length; i++) {
    //     subTotal += orderList[i].id
    //     console.log(orderList[i].id)
    // }

    // console.log("Sub total : " + subTotal)

    // document.getElementById("totalValue1").innerHTML = "$" + subTotal
    // document.getElementById("totalValue2").innerHTML = "$" + subTotal


    console.log(orderList)
    console.log(orderList[0].name)
    // "<div class='row border-bottom'><div class='col-lg-3 col-md-3 col-sm-12 m-auto'><div class='product'><img class='img-fluid' src='images\\unsplash_nvQemFKRBUo.svg'></div></div><div class='col-lg-3 col-md-3 col-sm-12 m-auto'><p class='text text-start fs-6'>Blue gold detailed bag</p><p class='text text-start fs-6 text-secondary'>Size: STD</p></div><div class='col-lg-2 col-md col-sm-12 m-auto'><p class='text'>$25</p></div><div class='col-lg-2 col-md col-sm-12 m-auto'><div class='row'><div class='col'><form><div class='value-button' id='decrease' onclick='decreaseValue()' value='Decrease Value'><i class='fa-solid fa-circle-minus' style='color:#161850'></i></div><input type='number' id='number' value='0' /><div class='value-button' id='increase' onclick='increaseValue()' value='Increase Value'><i class='fa-solid fa-circle-plus' style='color:#161850'></i></div></form></div></div></div></div>"
    var shoppingCard = ""
    console.log(shoppingCard)
    for(var i = 0; i < orderList.length; i++) {
        shoppingCard += "<div class='row border-bottom'><div class='col-lg-3 col-md-3 col-sm-12 m-auto'><div class='product'><img class='img-fluid' src='images\\unsplash_nvQemFKRBUo.svg'></div></div><div class='col-lg-3 col-md-3 col-sm-12 m-auto'><p class='text text-start fs-6'>" + orderList[i].name +  "</p><p class='text text-start fs-6 text-secondary'>Size: STD</p></div><div class='col-lg-2 col-md col-sm-12 m-auto'><p class='text'>$" + orderList[i].price + "</p></div><div class='col-lg-2 col-md col-sm-12 m-auto'><div class='row'><div class='col'><form><div class='value-button' id='decrease' onclick='decreaseValue()' value='Decrease Value'><i class='fa-solid fa-circle-minus' style='color:#161850'></i></div><input type='number' id='number' value='0' /><div class='value-button' id='increase' onclick='increaseValue()' value='Increase Value'><i class='fa-solid fa-circle-plus' style='color:#161850'></i></div></form></div></div></div></div>"
    }

    document.getElementById("shoppingCard").innerHTML = shoppingCard

    console.log(shoppingCard)
};

function increaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
  }

  function decreaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('number').value = value;
  }