const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const navbar = document.querySelector(".nav-center");

const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

btn.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
  }
  document.body.style.backgroundColor = hexColor;
  color.textContent = hexColor;
  color.style.color = hexColor;
  btn.style.color = hexColor;
  navbar.style.color = hexColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
