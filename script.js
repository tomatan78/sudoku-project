// -------------1st page - log in--------------- //

let correctId = "abcd";
let correctPass = 1234;
let wrongIdAlert = document.getElementById("wrongIdAlert");
let wrongPassAlert = document.getElementById("wrongPassAlert");

// checking log in info.
function checkIdAndPass() {
  var id = document.getElementById("user").value;
  let pass = document.getElementById("password").value;

  if (id == correctId && pass == correctPass) {
    location.href = "lvlChoice.html";

    // display the correct error if the user enter wrong values.
  } else if (id != correctId && pass != correctPass) {
    wrongIdAlert.innerHTML =
      "The username you entered is incorrect, Please try again.";
    wrongPassAlert.innerHTML =
      "The password you entered is incorrect, Please try again.";

    wrongIdAlert.style.position = "relative";
    wrongIdAlert.style.bottom = "10px";
    wrongIdAlert.style.fontSize = "12px";
    wrongIdAlert.style.color = "red";

    wrongPassAlert.style.position = "relative";
    wrongPassAlert.style.bottom = "10px";
    wrongPassAlert.style.fontSize = "12px";
    wrongPassAlert.style.color = "red";
  } else if (id != correctId) {
    wrongIdAlert.innerHTML =
      "The username you entered is incorrect, Please try again.";
    wrongIdAlert.style.position = "relative";
    wrongIdAlert.style.bottom = "10px";
    wrongIdAlert.style.fontSize = "12px";
    wrongIdAlert.style.color = "red";
  } else if (pass != correctPass) {
    wrongPassAlert.innerHTML =
      "The password you entered is incorrect, Please try again.";
    wrongPassAlert.style.position = "relative";
    wrongPassAlert.style.bottom = "10px";
    wrongPassAlert.style.fontSize = "12px";
    wrongPassAlert.style.color = "red";
  }
  if (id == correctId) {
    wrongIdAlert.innerHTML = "";
  }
  if (pass == correctPass) {
    wrongPassAlert.innerHTML = "";
  }

  // setting the id value for using it in the next page.
  localStorage.setItem("user", id);
}

//Enter activating on user input
let input1 = document.getElementById("user");
input1.addEventListener("keypress", function (event) {
  if (event.key == "Enter") {
    document.getElementById("logInBtn").click();
  }
});
//Enter activating on password input
let input2 = document.getElementById("password");
input2.addEventListener("keypress", function (event) {
  if (event.key == "Enter") {
    document.getElementById("logInBtn").click();
  }
});
