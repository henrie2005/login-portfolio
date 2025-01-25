function validateLogin() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var errorMessage = document.getElementById("errorMessage");

  var validEmail = "henrie@gmail.com";
  var validPassword = "henrie123";

  if (email === validEmail && password === validPassword) {
    window.location.href = "portfolio.html";
  } else {
    errorMessage.textContent = "Email atau password salah.";
  }
}
