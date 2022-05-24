function suspend() {
    console.log("suspended product");

    axios.put('http://localhost:8080/products/1/suspend', {

      })
      .then(function (response) {
        console.log(response);
        location.reload()
      })
      .catch(function (error) {
        console.log(error);
      });

      alert("Product SUSPENDED")
}


function unsuspend() {
    console.log("unsuspended product");

    axios.put('http://localhost:8080/products/1/unsuspend', {

      })
      .then(function (response) {
        console.log(response);
        location.reload()
      })
      .catch(function (error) {
        console.log(error);
      });

      alert("Product UNSUSPENDED")
}
