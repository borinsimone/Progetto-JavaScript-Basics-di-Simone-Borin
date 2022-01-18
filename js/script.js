let part = document.getElementById("part");
let toggler = document.getElementById("toggler");
let hero = document.getElementById("hero");
let content = document.getElementById("content");
let info = document.getElementById("info");
let plusElement = document.createElement("div");
let minusElement = document.createElement("div");
let num = document.createElement("p");
let resetCounter = document.createElement("div");
let i = 0;
// CREATE CONTENT
function createContent() {
  plusElement.classList.add("plusClass");
  minusElement.classList.add("minusClass");
  num.classList.add("numClass");
  resetCounter.classList.add("resetCounter");
  content.classList.add("contentFadeIn");

  hero.appendChild(resetCounter);
  content.appendChild(minusElement);
  content.appendChild(num);
  num.innerHTML = i;

  content.appendChild(plusElement);
}

toggler.addEventListener("click", function () {
  toggler.classList.add("bounce");
  partLeft.classList.add("partFadeVertical");
  partRight.classList.add("partFadeVertical");
  partTop.classList.add("partFadeHorizontal");
  partBottom.classList.add("partFadeHorizontal");
  createContent();
});

// COUNTER & FANCY STUFF
plusElement.addEventListener("click", function () {
  i++;
  num.innerHTML = i;
  num.classList.remove("animation");
  resetFade();
});
minusElement.addEventListener("click", function () {
  i--;
  num.innerHTML = i;
  resetFade();
  num.classList.remove("animation");
});

resetCounter.addEventListener("click", function () {
  if (i != 0) {
    num.classList.add("animation");
    i = 0;
    resetFade();
    num.innerHTML = i;
  }
});

function resetFade() {
  if (i != 0) {
    resetCounter.classList.add("infoVisible");
  } else {
    resetCounter.classList.remove("infoVisible");
  }
}
