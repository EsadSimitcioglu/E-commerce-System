
var storeOwnerEmail = sessionStorage.getItem("email")
var storeOwnerID = sessionStorage.getItem("ID")

window.onload = function() {
    document.getElementById("nameTextField").value = sessionStorage.getItem("storeName")
    document.getElementById("emailTextField").value = storeOwnerEmail
  };

  function infoEnabled(){
    document.getElementById("nameTextField").disabled = false
    document.getElementById("emailTextField").disabled = false
    infoEnable = true
}

function passwordEnabled(){
    document.getElementById("oldPasswordTextField").disabled = false
    document.getElementById("newPasswordTextField").disabled = false
    document.getElementById("reNewPasswordTextField").disabled = false
    passwordEnable = true
}

function changePassword(){
    let oldPassword = document.getElementById("oldPasswordTextField").value
    let password = document.getElementById("newPasswordTextField").value; 
    let rePassword = document.getElementById("reNewPasswordTextField").value; 

   
    axios.get(`http://localhost:8080/storeOwner/${customerID}/password`)
      .then(function (response) {
        if(response.data != oldPassword) {
          alert("Old Password didn't match with your password")
          return
        }
      })
      .catch(function (error) {
        console.log(error);
    });

    if(password != rePassword){
        alert("Your Passwords Doesn't Match. Try Again...")
        return
    }

    axios.put('http://localhost:8080/storeOwner/password', {
        id: storeOwnerID,
        password : password
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}

function changeInfo(){
    let name = document.getElementById("nameTextField").value
    let email = document.getElementById("emailTextField").value; 

    axios.put('http://localhost:8080/storeOwner/info', {
        id: storeOwnerID,
        email : email
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}

function saveChanges(){

    if(infoEnable){
        changeInfo()
    }
    if(passwordEnable){
        changePassword()
    }

}