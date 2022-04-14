
let customerID = -1
let customerEmail = "esad.simitcioglu@ozu.edu.tr"
let infoEnable = false
let passwordEnable = false


window.onload = function() {
    axios.get(`http://localhost:8080/customer/profile/${customerEmail}`)
      .then(function (response) {
        customerID = response.data
      })
      .catch(function (error) {
        console.log(error);
    });
};


function infoEnabled(){
    document.getElementById("nameTextField").disabled = false
    document.getElementById("surnameTextField").disabled = false
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

    axios.get(`http://localhost:8080/customer/${customerID}`)
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

    axios.put(`http://localhost:8080/customer/password`), {
        id: customerID, 
        password: password, 
    }
    .then(function (response) {
        console.log(response);
    })
    .catch(function (error) {
        console.log(error);
    });
}

function changeInfo(){
    let name = document.getElementById("nameTextField").value
    let surname = document.getElementById("surnameTextField").value; 
    let email = document.getElementById("emailTextField").value; 

    axios.put(`http://localhost:8080/customer/info`), {
        id: customerID, 
        name : name,
        surname: surname, 
        email: email
    }
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