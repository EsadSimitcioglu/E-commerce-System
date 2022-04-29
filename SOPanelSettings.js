var storeOwnerEmail = sessionStorage.getItem("email")
var storeOwnerID = sessionStorage.getItem("ID")

let infoEnable = false
let passwordEnable = false

window.onload = function() {
  axios.get(`http://localhost:8080/store/${storeOwnerID}`)
      .then(function (response) {
        document.getElementById("nameTextField").value = response.data.name
      })
      .catch(function (error) {
        console.log(error);
    });

    
    document.getElementById("emailTextField").value = storeOwnerEmail
  };

function infoEnabled(){
    document.getElementById("emailTextField").disabled = false
    infoEnable = true
}

function infoDisabled(){
    document.getElementById("emailTextField").disabled = true
    infoEnable = false
}

function passwordEnabled(){
    document.getElementById("oldPasswordTextField").disabled = false
    document.getElementById("newPasswordTextField").disabled = false
    document.getElementById("reNewPasswordTextField").disabled = false
    passwordEnable = true
}

function passwordDisabled(){
    document.getElementById("oldPasswordTextField").disabled = true
    document.getElementById("newPasswordTextField").disabled = true
    document.getElementById("reNewPasswordTextField").disabled = true
    passwordEnable = false
  }

function changePassword(){
    let oldPassword = document.getElementById("oldPasswordTextField").value
    let password = document.getElementById("newPasswordTextField").value; 
    let rePassword = document.getElementById("reNewPasswordTextField").value; 

   
    axios.get(`http://localhost:8080/storeOwner/${storeOwnerID}/password`)
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
        alert("Password Are Changed")
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}

function changeInfo(){
    let email = document.getElementById("emailTextField").value; 

    axios.put('http://localhost:8080/storeOwner/info', {
        id: storeOwnerID,
        email : email
      })
      .then(function (response) {
        alert("Info's Are Changed")
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}

function saveChanges(){

    if(infoEnable){
        changeInfo()
        infoDisabled()
    }
    if(passwordEnable){
        changePassword()
        passwordDisabled()
    }

}