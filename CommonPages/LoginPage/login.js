function login() {
    let email = document.getElementById("Email").value
    let password = document.getElementById("pass").value
    let mfaCode = document.getElementById("code").value
    
    if(document.getElementById("managerOption").checked){
      location.href = "../../PlatformManager/PMSaleAnalysis/PMSaleAnalysis.html"
    }
    if(document.getElementById("customerOption").checked){
      
      axios.post('http://localhost:8080/customer/mfa', {
        email: email,
        mfaCode: mfaCode
      })
    
      axios.get(`http://localhost:8080/customer/${email}`)
      .then(function (response) {
        console.log(response.data)
        if(response.data.password == password  && response.data.canLogin) {
          alert("Customer Logged In")
          sessionStorage.setItem("email",response.data.email)
          sessionStorage.setItem("password",response.data.password)
          sessionStorage.setItem("firstName",response.data.name)
          sessionStorage.setItem("lastName",response.data.surname)
          sessionStorage.setItem("ID",response.data.id)
          sessionStorage.setItem("Address",response.data.address)

          sessionStorage.setItem("userType","Customer")
          location.href = "../../Customer/CustomerHomePage/CustomerHome.html"
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

      axios.get(`http://localhost:8080/platformManager/${email}`)
      .then(function (response) {
        console.log(response.data)
        if(response.data.password == password) {
          alert("Platform Manager Logged In")
          sessionStorage.setItem("userType","Manager")
          location.href = "../../PlatformManager/PMSaleAnalysis/PMSaleAnalysis.html"
        }
        else  {
          console.log("Wrong credentials");
        }
      })
      .catch(function (error) {
        console.log(error);
    });

      
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
          location.href = "../../StoreOwner/SOProductManagement/SOProductManagement.html"

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