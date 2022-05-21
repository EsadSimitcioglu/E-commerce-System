function cancerOrder(orderId){
    axios.delete(`http://localhost:8080/customerOrder/${orderId}`)
      .then(function (response) {
        console.log(response)    
      }).catch(function (error) {
        console.log(error);
      });

    }