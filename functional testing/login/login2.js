// Verify that the username field accepts only valid input and rejects invalid input
document.getElementById("username").addEventListener("input", function() {
    var usernameInput = document.getElementById("username");
    if (usernameInput.validity.valid) {
      usernameInput.setCustomValidity("");
    } else {
      usernameInput.setCustomValidity("Please enter a valid username");
    }
  });
  
  // Verify that the password field accepts only valid input and rejects invalid input
  document.getElementById("password").addEventListener("input", function() {
    var passwordInput = document.getElementById("password");
    if (passwordInput.validity.valid) {
      passwordInput.setCustomValidity("");
    } else {
      passwordInput.setCustomValidity("Please enter a valid password");
    }
  });
  
  // Verify that the login button is enabled only when both the username and password fields are filled
  document.getElementById("username").addEventListener("input", checkLoginValidity);
  document.getElementById("password").addEventListener("input", checkLoginValidity);
  
  function checkLoginValidity() {
    var usernameInput = document.getElementById("username");
    var passwordInput = document.getElementById("password");
    var loginBtn = document.getElementById("loginBtn");
    
    if (usernameInput.validity.valid && passwordInput.validity.valid) {
      loginBtn.disabled = false;
    } else {
      loginBtn.disabled = true;
    }
  }
  
  // Verify that clicking the forgot password link takes the user to the password reset page
  document.getElementById("forgotPassword").addEventListener("click", function(event) {
    event.preventDefault();
    // redirect to password reset page
  });
  
  // Verify that incorrect login credentials result in an error message
  document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    var errorMessage = document.getElementById("errorMessage");
    var usernameInput = document.getElementById("username");
    var passwordInput = document.getElementById("password");
    
    if (usernameInput.value === "validUsername" && passwordInput.value === "validPassword") {
      errorMessage.innerHTML = "";
      // login successful, redirect to home page
    } else {
      errorMessage.innerHTML = "Invalid username or password";
    }
  });
  