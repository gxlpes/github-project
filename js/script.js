document.querySelector(".return").addEventListener("click", () => {
  location.reload();
});

document.querySelector("button").addEventListener("click", () => {
  const mainContainer = document.querySelector(".main-container");
  const userContainer = document.querySelector(".user-page");
  userContainer.style.display = "flex";
  mainContainer.classList.add("hidden");
  setInterval((mainContainer.style.display = "none"), 5000);
});
