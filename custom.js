let sign = document.querySelector(".sign");
let log = document.querySelector(".log");
let signUp = document.querySelector(".sign-up");
let logIn = document.querySelector(".log-in");

sign.onclick = function () {
  log.classList.remove("active");
  sign.classList.add("active");
  ////////////////////////////////////
  logIn.classList.remove("active");
  signUp.classList.add("active");
};

log.onclick = function () {
  sign.classList.remove("active");
  log.classList.add("active");
  ////////////////////////////////////
  signUp.classList.remove("active");
  logIn.classList.add("active");
};
