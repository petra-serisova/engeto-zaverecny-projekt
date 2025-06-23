const yourPassword = document.getElementById("your-password");
const yourPasswordControl = document.getElementById("your-password-control");

// functions
const comparePasswords = () => {
  const password = yourPassword.value;
  const confirmPassword = yourPasswordControl.value;

  yourPassword.classList.remove("input-content-ok", "input-content-not-ok");
  yourPasswordControl.classList.remove(
    "input-content-ok",
    "input-content-not-ok"
  );

  yourPassword.style.border = "";
  yourPasswordControl.style.border = "";

  if (password === "" && confirmPassword === "") {
    return;
  }

  if (password !== "" && confirmPassword === "") {
    yourPassword.classList.add("input-content-not-ok");
    yourPasswordControl.classList.add("input-content-not-ok");
    return;
  }

  if (password === confirmPassword) {
    yourPassword.classList.add("input-content-ok");
    yourPasswordControl.classList.add("input-content-ok");
  } else {
    yourPassword.classList.add("input-content-not-ok");
    yourPasswordControl.classList.add("input-content-not-ok");
  }
};

yourPassword.addEventListener("input", comparePasswords);
yourPasswordControl.addEventListener("input", comparePasswords);
