const cookie = document.querySelector(".cookie");

const acceptBtn = document.querySelector(".button_accept");
const declineBtn = document.querySelector(".button_decline");

acceptBtn.addEventListener("click", () => {
  cookie.style.display = "none";
});

declineBtn.addEventListener("click", () => {
  cookie.style.display = "none";
});

