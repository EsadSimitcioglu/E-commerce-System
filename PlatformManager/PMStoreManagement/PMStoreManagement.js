function suspend() {
    console.log("suspended store");

    axios.put('http://localhost:8080/store/1/suspend', {

      })
      .then(function (response) {
        console.log(response);
        location.reload()
      })
      .catch(function (error) {
        console.log(error);
      });

      alert("Store SUSPENDED")
}


function unsuspend() {
    console.log("unsuspended store");

    axios.put('http://localhost:8080/store/1/unsuspend', {

      })
      .then(function (response) {
        console.log(response);
        location.reload()
      })
      .catch(function (error) {
        console.log(error);
      });

      alert("Store UNSUSPENDED")
}
