function infoEnabled(){
    document.getElementById("changePasswordButton").disabled = false
}

function passwordEnabled(){
    document.getElementById("changePasswordButton").disabled = false
}

function changeProfileInfo(){
   
}

function changePassword(){
    let oldPassword = document.getElementById("oldPasswordTextField").value
    let password = document.getElementById("newPasswordTextField").value; 
    let rePassword = document.getElementById("reNewPasswordTextField").value; 

    axios.get(`http://localhost:8080/customer/${id}`)
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
        id: id, 
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
        name: id, 
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