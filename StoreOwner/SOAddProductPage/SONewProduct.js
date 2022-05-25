
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



function saveChanges(){

    var productName = document.getElementById("nameTextField").value
    var productPrice = document.getElementById("priceTextField").value
    var productQuantity = document.getElementById("number").value
    var productDescription = document.getElementById("descriptionTextField").value
    var select = document.getElementById('language');
    var productType = select.options[select.selectedIndex].value;
    var suspended = "WAITING"
    var review = 0

    var storeObject = new Object()

    storeObject.id = sessionStorage.getItem("storeID")

    axios.post('http://localhost:8080/products',{
        name: productName,
        price: productPrice, 
        quantity: productQuantity, 
        type : productType,
        description: productDescription,
        store : storeObject,
        suspended: suspended,
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