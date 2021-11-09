document.querySelector(".button1").style.backgroundColor = document.querySelector(`[name='default-color']`).value;
document.querySelector(".button2").style.backgroundColor = document.querySelector(`[name='default-color']`).value;
document.querySelector(".button3").style.backgroundColor = document.querySelector(`[name='default-color']`).value;
document.querySelector(".button4").style.backgroundColor = document.querySelector(`[name='default-color']`).value;

document.querySelector(".button1").addEventListener("mouseenter", function() {
    document.querySelector(".button1").style.backgroundColor = document.querySelector(`[name='hover-color']`).value; });
document.querySelector(".button1").addEventListener("mouseleave", function() {
    document.querySelector(".button1").style.backgroundColor = document.querySelector(`[name='default-color']`).value; });

document.querySelector(".button2").addEventListener("mouseenter", function() {
    document.querySelector(".button2").style.backgroundColor = document.querySelector(`[name='hover-color']`).value; });
document.querySelector(".button2").addEventListener("mouseleave", function() {
    document.querySelector(".button2").style.backgroundColor = document.querySelector(`[name='default-color']`).value; });

document.querySelector(".button3").addEventListener("mouseenter", function() {
    document.querySelector(".button3").style.backgroundColor = document.querySelector(`[name='hover-color']`).value; });
document.querySelector(".button3").addEventListener("mouseleave", function() {
    document.querySelector(".button3").style.backgroundColor = document.querySelector(`[name='default-color']`).value; });
            
document.querySelector(".button4").addEventListener("mouseenter", function() {
    document.querySelector(".button4").style.backgroundColor = document.querySelector(`[name='hover-color']`).value; });
document.querySelector(".button4").addEventListener("mouseleave", function() {
    document.querySelector(".button4").style.backgroundColor = document.querySelector(`[name='default-color']`).value; });