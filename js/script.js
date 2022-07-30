document.querySelector(".return").addEventListener("click", () => {
  location.reload();
});

document.querySelector(".btn-search").addEventListener("click", () => {
  const input = document.querySelector(".userInput");
  const mainContainer = document.querySelector(".main-container");

  if (input.value.length != 0) {
    const mainContainer = document.querySelector(".main-container");
    const userContainer = document.querySelector(".user-page");
    userContainer.style.display = "flex";

    window.setTimeout(function () {
      userContainer.style.opacity = 1;
    }, 0);

    mainContainer.classList.add("hidden");
    setInterval((mainContainer.style.display = "none"), 5000);
  } else {
    const paraAlert = document.createElement("p");
    paraAlert.innerHTML = "<b>Input wrong!</b>";
    mainContainer.insertAdjacentHTML("afterbegin", paraAlert);
  }
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

////////////////// color picker

document.getElementById("colorPicker").addEventListener("input", myColor);

function myColor() {
  let color = document.getElementById("colorPicker").value;

  let r = document.querySelector(":root");
  let rs = getComputedStyle(r);

  rs.getPropertyValue("--color-main");
  r.style.setProperty("--color-main", `${color}`);

  document.getElementById("box").value = color;
}
