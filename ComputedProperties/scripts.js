const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");
const yellow = document.querySelector(".yellow");

const center = document.querySelector(".center");

//console.log(window.getComputedStyle(red).backgroundColor);

const getBGColor = (S) => {
    return window.getComputedStyle(S).backgroundColor;
}

console.log(getBGColor(yellow));