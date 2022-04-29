
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
};