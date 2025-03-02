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
response.style.background = "green"; });

btn2.addEventListener("click", () => {
    response.classList.add("show-response");
    response.style.background = "red"; });   

    //////// Mouse Event
const mousemove = document.querySelector(".mousemove");
console.log(mousemove);

window.addEventListener("mousemove", (e) => {
mousemove.style.left = e.pageX + "px";
mousemove.style.top = e.pageY + "px"
});     

// Fin de la vidéo 22.08 heures 