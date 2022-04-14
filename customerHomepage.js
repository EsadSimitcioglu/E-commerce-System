function getFilterResearch() {
    let name = document.getElementById("nameTextField").value; 
    let surname = document.getElementById("surnameTextField").value; 
    let email = document.getElementById("emailTextField").value; 
    let password = document.getElementById("passwordTextField").value; 
    let rePassword = document.getElementById("rePasswordTextField").value; 


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