document.querySelector(".return").addEventListener("click", () => {
  location.reload();
});

document.querySelector(".btn-search").addEventListener("click", () => {
  const mainContainer = document.querySelector(".main-container");
  const userContainer = document.querySelector(".user-page");
  userContainer.style.display = "flex";
  mainContainer.classList.add("hidden");
  setInterval((mainContainer.style.display = "none"), 5000);
});

const toggle = function (e) {
  if (e.currentTarget.classList.contains("light--hidden")) {
    document.documentElement.setAttribute("color-mode", "light");
    localStorage.setItem("color-mode", "light");
    return;
  }
  document.documentElement.setAttribute("color-mode", "dark");
  localStorage.setItem("color-mode", "dark");
};

const toggleColorButtons = document.querySelectorAll(".color-mode__btn");
toggleColorButtons.forEach((btn) => {
  btn.addEventListener("click", toggle);
});
