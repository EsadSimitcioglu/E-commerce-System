function login() {
    let email = document.getElementById("Email").value
    let password = document.getElementById("pass").value

    
    console.log(email)
    console.log(password)

    axios.get(`http://localhost:8080/customer/${email}`)
      .then(function (response) {
        if(response.data == password) {
          console.log("Logged In")
        }
        else {
          console.log("Wrong credentials");
        }
      })
      .catch(function (error) {
        console.log(error);
    });
}