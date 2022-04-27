function login() {
    let email = document.getElementById("Email").value
    let password = document.getElementById("pass").value

    
    console.log(email)
    console.log(password)

    axios.get(`http://localhost:8080/customer/email/${email}`)
      .then(function (response) {
        if(response.data == password) {
          console.log("Logged In")
          sessionStorage.setItem( "true", email)

          // console.log("Printing: " + sessionStorage.getItem("true"))
          window.location.replace("http://127.0.0.1:5500/customerHomepage.html");
        }
        else {
          console.log("Wrong credentials");
        }
      })
      .catch(function (error) {
        console.log(error);
    });
}