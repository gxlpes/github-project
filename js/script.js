////////////////////// color theme changer
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
