window.onload = function() {
    var stores = ""
    axios.get("http://localhost:8080/store")
      .then(function (response) {
        for(var i = 0; i < response.data.length; i++) {
            var storeName = response.data[i].name
            var storeId = response.data[i].id
            var isStoreSuspended = response.data[i].suspended
            
            if (isStoreSuspended==true){
                stores += '<div class="row shadow p-5 mb-5 bg-body rounded mx-1" id="product-detailss"><div class="col-lg-3 col-md-3 col-sm-12"><p class="text" id="storeName">' + storeName + '</p></div><div class="col-lg-2 col-md-2 col-sm-12"></div><div class="col-lg-3 col-md-3 col-sm-12"><p class="text"><button disabled type="button" onClick=unsuspendStore(' + storeId + ') class="btn btn-success button"id="acceptButton">SUSPEND</button></p></div><div class="col"></div><div class="col-lg-3 col-md-3 col-sm-12"><p class="text"><button type="button" onClick=suspendStore(' + storeId + ') class="btn btn-success button"id="rejectButton">UNSUSPEND</button></p></div></div>'
            } 
            else{
                stores += '<div class="row shadow p-5 mb-5 bg-body rounded mx-1" id="product-detailss"><div class="col-lg-3 col-md-3 col-sm-12"><p class="text" id="storeName">' + storeName + '</p></div><div class="col-lg-2 col-md-2 col-sm-12"></div><div class="col-lg-3 col-md-3 col-sm-12"><p class="text"><button type="button" onClick=unsuspendStore(' + storeId + ') class="btn btn-success button"id="acceptButton">SUSPEND</button></p></div><div class="col"></div><div class="col-lg-3 col-md-3 col-sm-12"><p class="text"><button type="button" disabled onClick=suspendStore(' + storeId + ') class="btn btn-success button"id="rejectButton">UNSUSPEND</button></p></div></div>'
            }

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

function suspendStore(storeId) {
    axios.put(`http://localhost:8080/store/${storeId}/suspend`)
      .then(function (response) {
        alert("The Store SUSPENDED")
        console.log(response);
        window.location.reload();
      })
      .catch(function (error) {
        console.log(error);
      });
}

function unsuspendStore(storeId) {
    axios.put(`http://localhost:8080/store/${storeId}/unsuspend`)
      .then(function (response) {
        alert("The Store UNSUSPENDED")
        console.log(response);
        window.location.reload();
      })
      .catch(function (error) {
        console.log(error);
      });
}


