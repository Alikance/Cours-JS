const questionContaineur = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.querySelector("p");

console.log(btn1, btn2);
console.log(response);

questionContaineur.addEventListener("click", () => {
  questionContaineur.classList.toggle("question-clicked");
});

btn1.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "green";
});

btn2.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "red";
});

//////// Mouse Event
const mousemove = document.querySelector(".mousemove");
console.log(mousemove);

window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});
//moussdown

window.addEventListener("mousedown", () => {
  mousemove.style.transform = "scale(2) translate(-25%, -25%)";
});

window.addEventListener("mouseup", () => {
  mousemove.style.transform = "scale(1) translate(-50%, -50%)";
  mousemove.style.border = "2px solid teal";
});

questionContaineur.addEventListener("mouseenter", () => {
  questionContaineur.style.background = "rgba(0,0,0,0.6)";
});

questionContaineur.addEventListener("mouseout", () => {
  questionContaineur.style.background = "pink";
});

response.addEventListener("mouseover", () => {
  response.style.transform = "rotate(2deg)";
});

// Key press event

const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");
const ring = (key) => {
  const audio = new Audio();
  audio.src = key + ".mp3";
  audio.play();
};

document.addEventListener("keypress", (e) => {
  key.textContent = e.key;
  if (e.key === "j") keypressContainer.style.background = "blue";
  else keypressContainer.style.background = "red";
  if (e.key === "z") ring(e.key);
});

// Scroll Event
const nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
  if (window.scrollY > 120) nav.style.top = 0;
  else nav.style.top = "-50px";
});

// Form Event - Fin de vidéo 02H00
