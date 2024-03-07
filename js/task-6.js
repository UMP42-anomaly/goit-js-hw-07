function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxes = document.getElementById("boxes");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const input = document.querySelector("input");

createBtn.addEventListener("click", () => {
  if (input.value >= 1 && input.value <= 100) {
    for (let i = 0; i < input.value; i++) {
      const elem = document.createElement("div");
      const size = 30 + (10 * i)
      elem.style.width = `${size}px`;
      elem.style.height = `${size}px`;
      elem.style.backgroundColor = getRandomHexColor();
      boxes.appendChild(elem);
    };
  } else {
    alert("The number in the field must be from 1 to 100 inclusive.");
  };
});

destroyBtn.addEventListener("click", () => {
  const childs = boxes.querySelectorAll("div");
  for (let i = 0; i < childs.length; i++) {
    const child = childs[i];
    boxes.removeChild(child);
  };
});