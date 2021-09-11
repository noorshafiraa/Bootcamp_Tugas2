const Body = document.querySelector("body");
const Header = document.querySelector("header");
const Footer = document.querySelector("footer");
const buttonDark = document.getElementById("buttonDark");
const buttonLight = document.getElementById("buttonLight");
const box1 = document.getElementById("box1")
const box2 = document.getElementById("box2")
const box3 = document.getElementById("box3")

Body.className = "light";
Header.className = "light";
Footer.className = "light";
box1.className = "light";
box2.className = "light";
box3.className = "light";

function DarkMode(){
    Body.className = "dark";
    Header.className = "dark";
    Footer.className = "dark";
    Header.style.color = "white";
    Footer.style.color = "white";
    Body.style.color = "white";
    buttonDark.style.display = "none";
    buttonLight.style.display = "block";
    box1.className = "dark";
    box2.className = "dark";
    box3.className = "dark";
}

function LightMode(){
    Body.className = "light";
    Header.className = "light";
    Footer.className = "light";
    Header.style.color = "black";
    Footer.style.color = "black";
    Body.style.color = "black";
    buttonDark.style.display = "block";
    buttonLight.style.display = "none";
    box1.className = "light";
    box2.className = "light";
    box3.className = "light";
}