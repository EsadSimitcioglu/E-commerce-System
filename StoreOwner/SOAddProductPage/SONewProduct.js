
window.addEventListener('load', function() {
  document.querySelector('input[type="file"]').addEventListener('change', function() {
      if (this.files && this.files[0]) {
          var img = document.getElementById('image01');
          console.log(img)
          img.onload = () => {
              URL.revokeObjectURL(img.src);  // no longer needed, free memory
          }
          img.src = URL.createObjectURL(this.files[0]); // set src to blob url
      }
  });
});

window.onload = function () {
  if(sessionStorage.getItem("selectedProductID") > 0){
    axios.get(`http://localhost:8080/products/${sessionStorage.getItem("selectedProductID")}`)
      .then(function (response) {
        document.getElementById("nameTextField").value = response.data.name
        document.getElementById("priceTextField").value = response.data.price
        document.getElementById("number").value = response.data.quantity
        document.getElementById("descriptionTextField").value = response.data.description
        document.getElementById('language').value = response.data.type;
      })
      .catch(function (error) {
        console.log(error);
      });
  }  
}




function saveChanges(){

    var productName = document.getElementById("nameTextField").value
    var productPrice = document.getElementById("priceTextField").value
    var productQuantity = document.getElementById("number").value
    var productDescription = document.getElementById("descriptionTextField").value
    var select = document.getElementById('language');
    var productType = select.options[select.selectedIndex].value;
    var suspended = false
    var confirmationType = "WAITING"
    var review = 0

    var storeObject = new Object()

    storeObject.id = sessionStorage.getItem("storeID")

    if(sessionStorage.getItem("selectedProductID") > 0){
      axios.put('http://localhost:8080/products',{
        id: sessionStorage.getItem("selectedProductID"),
        name: productName,
        price: productPrice, 
        quantity: productQuantity, 
        type : productType,
        description: productDescription,
        store : storeObject,
        suspended: suspended,
        confirmationType : confirmationType,
        review : review,
      })
      .then(function (response) {
        alert("The Product Updated")
        location.href = "../SOProductManagement/SOProductManagement.html"
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    else{
      axios.post('http://localhost:8080/products',{
        name: productName,
        price: productPrice, 
        quantity: productQuantity, 
        type : productType,
        description: productDescription,
        store : storeObject,
        suspended: suspended,
        confirmationType : confirmationType,
        review : review,
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

  function importFile() {
    
  }