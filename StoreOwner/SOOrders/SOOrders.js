window.onload = function() {
    var orders = ""

    axios.get("http://localhost:8080/customerOrder/all")
      .then(function (response) {
        for(var i = 0; i < response.data.length; i++) {
            var date = response.data[i].date
            var orderId = response.data[i].orderID
            var price = response.data[i].price
            
            // orders += "<div class=\"row shadow p-5 mb-5 bg-body rounded mx-1\" id=\"product-detailss\">  <div class=\"col-lg-2 col-md-2 col-sm-12\">    <p class=\"text\" id=\"orderID\">#" + orderId + "</p></div>          <div class=\"col-lg-2 col-md-2 col-sm-12\"> <p class=\"text\" id=\"orderDate\">" + date + "</p></div>      <div class=\"col-lg-2 col-md-2 col-sm-12\">  <p class=\"text\">$" + price + "</p></div>   <div class=\"col-lg-2 col-md-2 col-sm-12\">   <div class=\"dropdownsize\">  <a class=\"btn btn-outline-success dropdown-toggle\" href=\"#\" role=\"button\" id=\"dropdownMenuLink\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">Status</a>   <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuLink\">  <li><a onclick=\"shipped()\" class=\"dropdown-item\" href=\"#\">Shipped</a></li>  <li><a onclick=\"delivered()\" class=\"dropdown-item\" href=\"#\">Delivered</a></li>  <li><a onclick=\"shipped()\" class=\"dropdown-item\" href=\"#\">In Process</a></li>  </ul>   </div></div><div class=\"col\">    </div></div></div>"
             orders += '<div class="col-lg-2 col-md-2 col-sm-12"><p class="text" id="orderID">#' + orderId + '</p></div><div class="col-lg-2 col-md-2 col-sm-12"><p class="text" id="orderDate">01/02/22</p></div><div class="col-lg-2 col-md-2 col-sm-12"><p class="text" id="">$' +  price + '</p></div><div class="col-lg-2 col-md-2 col-sm-12"><div class="dropdownsize"><a class="btn btn-outline-success dropdown-toggle" href="#" role="button"id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">Status</a><ul class="dropdown-menu" aria-labelledby="dropdownMenuLink"><li><a onclick="shipped(' + orderId + ')" class="dropdown-item" href="#">Shipped</a></li><li><a onclick="delivered(' + orderId + ')" class="dropdown-item" href="#">Delivered</a></li><li><a onclick="inProcess(' + orderId + ')" class="dropdown-item" href="#">In Process</a></li></ul></div></div><div class="col"><div class="row justify-content-end"><p class="text"><button type="button" onclick="cancerOrder(' + orderId + ')" class="btn btn-success button"id="cancelOrderButton">CANCEL ORDER</button></p></div></div>'
            //orders += '<div class="col-lg-2 col-md-2 col-sm-12"><p class="text" id="orderID">#' + orderId + '</p></div><div class="col-lg-2 col-md-2 col-sm-12"><p class="text" id="orderDate">01/02/22</p></div><div class="col-lg-2 col-md-2 col-sm-12"><p class="text" id="">$' +  price + '</p></div><div class="col-lg-2 col-md-2 col-sm-12">        <div class="dropdownsize"><select class="btn btn-outline-success dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false"><option onClick="saveChanges()" class="dropdown-item" value="SHIPPED">SHIPPED</option><option class="dropdown-item" value="DELIVERED">DELIVERED</option><option class="dropdown-item" value="IN PROCESS">IN PROCESS</option></select></div>        </div><div class="col"><div class="row justify-content-end"><p class="text"><button type="button" onclick="cancerOrder(' + orderId + ')" class="btn btn-success button"id="cancelOrderButton">CANCEL ORDER</button></p></div></div>'

        }
          document.getElementById("product-detailss").innerHTML = orders

        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
    })

    document.getElementById("product-detailss")
  };


function cancerOrder(orderId){
    axios.delete(`http://localhost:8080/customerOrder/${orderId}`)
      .then(function (response) {
        alert("Order Canceled...")
        console.log(response)    
        window.location.reload()
      }).catch(function (error) {
        console.log(error);
      });

    }

function shipped(orderId) {
    console.log("shipped");
    axios.put(`http://localhost:8080/customerOrder/updateStatus/${orderId}/status/SHIPPED`, {

      })
      .then(function (response) {
        console.log(response);
        document.getElementById("dropdownMenuLink").innerHTML = "SHIPPED"
      })
      .catch(function (error) {
        console.log(error);
      });

      alert("Status changed to SHIPPED")
}


function delivered(orderId) {
    console.log("delivered")

    axios.put(`http://localhost:8080/customerOrder/updateStatus/${orderId}/status/DELIVERED`, {

      })
      .then(function (response) {
        console.log(response);
        document.getElementById("dropdownMenuLink").innerHTML = "DELIVERED"
      })
      .catch(function (error) {
        console.log(error);
      });

    alert("Status changed to DELIVERED")
}

function inProcess(orderId) {
    console.log("in process")

    axios.put(`http://localhost:8080/customerOrder/updateStatus/${orderId}/status/IN_PROCESS`, {

      })
      .then(function (response) {
        console.log(response);
        document.getElementById("dropdownMenuLink").innerHTML = "IN PROCESS"
      })
      .catch(function (error) {
        console.log(error);
      });

    alert("Status changed to IN PROCESS")
}

function saveChanges() {


}



