function addItem(){

    var productName = document.getElementById("nameTextField").value
    var productPrice = document.getElementById("priceTextField").value
    var productQuantity = document.getElementById("number").value
    var productDescription = document.getElementById("descriptionTextField").value
    var select = document.getElementById('language');
    var productType = select.options[select.selectedIndex].value;

    var storeObject = new Object()

    storeObject.id = sessionStorage.getItem("storeID")

    axios.post('http://localhost:8080/products',{
        name: productName,
        price: productPrice, 
        quantity: productQuantity, 
        type : productType,
        description: productDescription,
        store : storeObject
      })
      .then(function (response) {
        alert("The Product Added")
        location.href = "../SOProductManagement/SOProductManagement.html"
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}

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