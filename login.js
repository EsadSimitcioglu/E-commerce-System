function login() {
    let email = document.getElementById("Email").value
    let password = document.getElementById("pass").value

    if(document.getElementById("customerOption").checked){
      axios.get(`http://localhost:8080/customer/${email}`)
      .then(function (response) {
        if(response.data.password == password) {
          alert("Customer Logged In")

          sessionStorage.setItem("email",response.data.email)
          sessionStorage.setItem("password",response.data.password)
          sessionStorage.setItem("firstName",response.data.name)
          sessionStorage.setItem("lastName",response.data.surname)
          sessionStorage.setItem("ID",response.data.id)

          sessionStorage.setItem("userType","Customer")
          location.href = "customerHomepage.html"
        }
        else  {
          console.log("Wrong credentials");
        }
      })
      .catch(function (error) {
        console.log(error);
    });
      
    }
    else if(document.getElementById("managerOption").checked){
      sessionStorage.setItem("userType","Manager")
    }
    else if(document.getElementById("storeOwnerOption").checked){

      axios.get(`http://localhost:8080/storeOwner/${email}`)
      .then(function (response) {
        if(response.data.password == password) {
          alert("Store OwnerLogged In")

          console.log(response.data)

          sessionStorage.setItem("email",response.data.email)
          sessionStorage.setItem("password",response.data.password)
          sessionStorage.setItem("firstName",response.data.name)
          sessionStorage.setItem("lastName",response.data.surname)
          sessionStorage.setItem("ID",response.data.id)

          sessionStorage.setItem("userType","StoreOwner")
          location.href = "SOPanelProductManagement.html"

        }
        else {
          console.log(response.data)
          console.log("Wrong credentials");
        }
      })
      .catch(function (error) {
        console.log(error);
    });
 
    }

    
}