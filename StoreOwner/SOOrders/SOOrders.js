function cancerOrder(orderId){
    axios.delete(`http://localhost:8080/customerOrder/${orderId}`)
      .then(function (response) {
        console.log(response)    
      }).catch(function (error) {
        console.log(error);
      });

    }

function shipped() {
    console.log("shipped");
    axios.put('http://localhost:8080/customerOrder/updateStatus/1/status/SHIPPED', {

      })
      .then(function (response) {
        console.log(response);
        location.reload()
      })
      .catch(function (error) {
        console.log(error);
      });

      alert("Status changed to SHIPPED")
}


function delivered() {
    console.log("delivered")

    axios.put('http://localhost:8080/customerOrder/updateStatus/1/status/DELIVERED', {

      })
      .then(function (response) {
        console.log(response);
        location.reload()
      })
      .catch(function (error) {
        console.log(error);
      });

    alert("Status changed to DELIVERED")
}

function inProcess() {
    console.log("in process")

    axios.put('http://localhost:8080/customerOrder/updateStatus/1/status/IN_PROCESS', {

      })
      .then(function (response) {
        console.log(response);
        location.reload()
      })
      .catch(function (error) {
        console.log(error);
      });

    alert("Status changed to IN PROCESS")
}

