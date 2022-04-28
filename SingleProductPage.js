
var productName
var productPrice
var productDescription

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

window.onload = function() {
  axios.get(`http://localhost:8080/products/${id}`)
      .then(function (response) {
          productName = response.data.name
          productPrice = response.data.price
          productDescription = response.data.description
      })
      .catch(function (error) {
        console.log(error);
    });
};