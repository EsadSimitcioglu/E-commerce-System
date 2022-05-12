function signUp() {
  let name = document.getElementById("firstName").value; 
  let surname = document.getElementById("lastName").value; 
  let email = document.getElementById("Email").value; 
  let password = document.getElementById("pass").value; 
  let rePassword = document.getElementById("passAgain").value; 
  let code = document.getElementById("verificationCode").value;
  let isMfa = document.getElementById("mfaOption").checked

  if(password != rePassword){
      alert("Your Passwords Doesn't Match. Try Again...")
      return
  }

  if(document.getElementById("customerOption").checked){
      axios.post('http://localhost:8080/customer', {
      name: name, 
      surname: surname, 
      password : password,
      email : email,
      code : code,
      isMfa : isMfa
    })
    .then(function (response) {
      console.log(response);
      if(response.data == "../LoginPage/login.html")
        alert("Registered succesfully !")
      else
        alert("Failed to register !")
      window.location.href = response.data
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
      email : email,
      code : code,
      isMfa : isMfa
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  document.getElementById("firstName").value = ""
  document.getElementById("lastName").value = ""
  document.getElementById("Email").value = ""
  document.getElementById("pass").value = ""
  document.getElementById("passAgain").value = ""
  document.getElementById("verificationCode").value = "" 
}
function sendVerificationCode(){
  let email = document.getElementById("Email").value;
  if(document.getElementById("customerOption").checked){
    axios.post('http://localhost:8080/customer/verification',{
      "email":email
  })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  else{
    axios.post('http://localhost:8080/storeOwner/verification',{
      "email":email
  })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}
