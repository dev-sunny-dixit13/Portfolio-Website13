// Typing Effect
const textArray = ["Web Developer", "Full Stack Developer", "Creative Coder",".NET Full Stack Developer"];
let index = 0;
let charIndex = 0;
const typingElement = document.getElementById("typing");

function typeEffect() {
    if (charIndex < textArray[index].length) {
        typingElement.textContent += textArray[index].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 100);
    } else {
        setTimeout(eraseEffect, 1000);
    }
}

function eraseEffect() {
    if (charIndex > 0) {
        typingElement.textContent = textArray[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, 50);
    } else {
        index = (index + 1) % textArray.length;
        setTimeout(typeEffect, 200);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    if (textArray.length) setTimeout(typeEffect, 500);
});