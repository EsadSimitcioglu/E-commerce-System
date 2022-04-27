function login() {
    let email = document.getElementById("Email").value
    let password = document.getElementById("pass").value

    axios.get(`http://localhost:8080/customer/${email}`)
      .then(function (response) {
        if(response.data.password == password) {
          alert("Logged In")

          sessionStorage.setItem("email",response.data.email)
          sessionStorage.setItem("password",response.data.password)
          sessionStorage.setItem("firstName",response.data.name)
          sessionStorage.setItem("lastName",response.data.surname)
          sessionStorage.setItem("ID",response.data.id)

          if(document.getElementById("customerOption").checked){
            sessionStorage.setItem("userType","Customer")
          }
          else if(document.getElementById("managerOption").checked){
            sessionStorage.setItem("userType","Manager")
          }
          else{
            sessionStorage.setItem("userType","StoreOwner")
          }

          location.href = "customerHomepage.html"

        }
        else {
          console.log("Wrong credentials");
        }
      })
      .catch(function (error) {
        console.log(error);
    });
}