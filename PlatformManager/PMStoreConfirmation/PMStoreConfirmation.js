window.onload = function() {

    var stores = ""
    axios.get("http://localhost:8080/store/pending")
      .then(function (response) {
        for(var i = 0; i < response.data.length; i++) {
            var storeName = response.data[i].name
            var storeId = response.data[i].id
            stores +=  '<div class="row shadow p-5 mb-5 bg-body rounded mx-1" id="product-detailss"><div class="row shadow p-5 mb-5 bg-body rounded mx-1" id="product-detailss"><div class="col-lg-3 col-md-3 col-sm-12"><p class="text" id="storeName">' + storeName + '</p></div><div class="col-lg-2 col-md-2 col-sm-12"></div><div class="col-lg-3 col-md-3 col-sm-12"><p class="text"><button type="button" onClick = "acceptStore(' + storeId + ')" class="btn btn-success button" id="acceptButton">ACCEPT</button></p></div><div class="col"></div><div class="col-lg-3 col-md-3 col-sm-12"><p class="text"><button type="button" onClick = "rejectStore(' + storeId + ')" class="btn btn-success button"id="rejectButton">REJECT</button></p></div></div></div>'
        }
          document.getElementById("product-detailss").innerHTML = stores
      })
      .catch(function (error) {
        console.log(error);
    })
    if(!window.location.hash) {
      window.location = window.location + '#loaded';
      window.location.reload();
    }

}

function acceptStore(storeId) {
    axios.put('http://localhost:8080/store/confirmation',{
        storeId : storeId,
        storeConfirmationType: "ACCEPTED", 
      })
      .then(function (response) {
        alert("The Store CONFIRMED")
        console.log(response);
        window.location.reload();
      })
      .catch(function (error) {
        console.log(error);
      });
}

function rejectStore(storeId) {
    axios.put('http://localhost:8080/store/confirmation',{
        storeId : storeId,
        storeConfirmationType: "REJECTED", 
      })
      .then(function (response) {
        alert("The Store REJECTED")
        console.log(response);
        window.location.reload();
      })
      .catch(function (error) {
        console.log(error);
      });
}

