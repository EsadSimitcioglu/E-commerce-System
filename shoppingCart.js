
var orderList = new Array()

window.onload = function() {
    orderList = JSON.parse(sessionStorage.getItem('orderList')); 
};