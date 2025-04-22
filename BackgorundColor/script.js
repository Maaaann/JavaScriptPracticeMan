
let buttonEle = document.querySelector(".btn");
let backgroundEle = document.querySelector(".backgroundDiv");

buttonEle.addEventListener("click",changeColor);

Math.random().toString(16).slice(2,8);

function changeColor(){
    document.body.style.background = "#" + Math.random().toString(16).slice(2,8);

}