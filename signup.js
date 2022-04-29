function signUp() {
    let name = document.getElementById("firstName").value; 
    let surname = document.getElementById("lastName").value; 
    let email = document.getElementById("Email").value; 
    let password = document.getElementById("pass").value; 
    let rePassword = document.getElementById("passAgain").value; 


    if(password != rePassword){
        alert("Your Passwords Doesn't Match. Try Again...")
        return
    }

    if(document.getElementById("customerOption").checked){
        axios.post('http://localhost:8080/customer', {
        name: name, 
        surname: surname, 
        password : password,
        email : email
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
    else if(document.getElementById("storeOwnerOption").checked){
        alert(1)
        axios.post('http://localhost:8080/storeOwner', {
        name: name, 
        surname: surname, 
        password : password,
        email : email
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
}
