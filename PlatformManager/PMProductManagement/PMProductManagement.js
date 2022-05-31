window.onload = function() {

    var products = ""
    axios.get("http://localhost:8080/products/new")
      .then(function (response) {
        for(var i = 0; i < response.data.length; i++) {
            var productId = response.data[i].id
            var productName = response.data[i].name
            var productDescription = response.data[i].description
            var isSuspended = response.data[i].suspended

            if(isSuspended){
              products += '<div class="row border-bottom" id="shoppingCard" style="padding: 0% 7% 0% 7%"><div class="col"><p class="text" style="margin-top: 37%;"> ' + productDescription + '</p></div><div class="col"><p class="text" style="margin-top: 37%;">' + productName + '</p></div><div class="col"><p class="text"><button disabled onClick = "acceptProduct(' + productId + ')" type="button" class="btn btn-success button" id="acceptButton"style="margin-top: 25%;">SUSPEND</button></p></div><div class="col"><p class="text"><button onClick = "rejectProduct(' + productId + ')" type="button" class="btn btn-success button" id="rejectButton"style="margin-top: 25%;">UNSUSPEND</button></p></div></div>'
            }
            else {
              products += '<div class="row border-bottom" id="shoppingCard" style="padding: 0% 7% 0% 7%"><div class="col"><p class="text" style="margin-top: 37%;"> ' + productDescription + '</p></div><div class="col"><p class="text" style="margin-top: 37%;">' + productName + '</p></div><div class="col"><p class="text"><button onClick = "acceptProduct(' + productId + ')" type="button" class="btn btn-success button" id="acceptButton"style="margin-top: 25%;">SUSPEND</button></p></div><div class="col"><p class="text"><button disabled onClick = "rejectProduct(' + productId + ')" type="button" class="btn btn-success button" id="rejectButton"style="margin-top: 25%;">UNSUSPEND</button></p></div></div>'
            }

        }
          document.getElementById("card").innerHTML = products
      })
      .catch(function (error) {
        console.log(error);
    })
    if(!window.location.hash) {
      window.location = window.location + '#loaded';
      window.location.reload();
    }

}

function acceptProduct(productId) {
    axios.put(`http://localhost:8080/products/${productId}/accept`)
      .then(function (response) {
        alert("The Product CONFIRMED")
        console.log(response);
        window.location.reload();
      })
      .catch(function (error) {
        console.log(error);
      });
}

function rejectProduct(productId) {
    axios.put(`http://localhost:8080/products/${productId}/reject`)
      .then(function (response) {
        alert("The Product REJECTED")
        console.log(response);
        window.location.reload();
      })
      .catch(function (error) {
        console.log(error);
      });
}


