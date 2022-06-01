
var customerID = sessionStorage.getItem("ID")
let customerEmail = sessionStorage.getItem("email")
let infoEnable = false
let passwordEnable = false


window.onload = function() {


  axios.get(`http://localhost:8080/customer/${customerEmail}`)
      .then(function (response) {
        document.getElementById("nameTextField").value = response.data.name
        document.getElementById("surnameTextField").value = response.data.surname
        document.getElementById("emailTextField").value = response.data.email
        document.getElementById("oldPasswordTextField").value = response.data.password
        document.getElementById("addressTextField").value = response.data.address
      })
      .catch(function (error) {
        console.log(error);
    });

  

};

function importFile(){
  let input = document.createElement("input")
  input.type = "file"
  input.webkitdirectory = "true"

  input.onchange = _this => {
    console.log(URL.createObjectURL(input.files[0]))
    document.getElementById("image").src = URL.createObjectURL(input.files[0])
  }
  input.click()
}

function infoEnabled(){
    document.getElementById("nameTextField").disabled = false
    document.getElementById("surnameTextField").disabled = false
    document.getElementById("emailTextField").disabled = false
    document.getElementById("addressTextField").disabled = false

    infoEnable = true
}

function infoDisabled(){
  document.getElementById("nameTextField").disabled = true
  document.getElementById("surnameTextField").disabled = true
  document.getElementById("emailTextField").disabled = true
  document.getElementById("addressTextField").disabled = true
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

   
    axios.get(`http://localhost:8080/customer/${customerID}/password`)
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

    axios.put('http://localhost:8080/customer/password', {
        id: customerID,
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
    let name = document.getElementById("nameTextField").value
    let surname = document.getElementById("surnameTextField").value; 
    let email = document.getElementById("emailTextField").value; 
    let address = document.getElementById("addressTextField").value;


    axios.put('http://localhost:8080/customer/info', {
        id: customerID,
        name: name, 
        surname: surname, 
        email : email,
        address: address
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