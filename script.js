// Custom Cursor
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", e=>{
cursor.style.left = e.clientX + "px";
cursor.style.top = e.clientY + "px";
});

// Scroll Reveal
const reveals = document.querySelectorAll(".reveal");
window.addEventListener("scroll", ()=>{
reveals.forEach(el=>{
const windowHeight = window.innerHeight;
const elementTop = el.getBoundingClientRect().top;
if(elementTop < windowHeight - 100){
el.style.opacity = 1;
el.style.transform = "translateY(0)";
}
});
});
reveals.forEach(el=>{
el.style.opacity = 0;
el.style.transform = "translateY(100px)";
el.style.transition = "1s";
});

// Particles
tsParticles.load("particles",{
particles:{
number:{value:80},
size:{value:2},
move:{speed:1},
links:{enable:true,color:"#ff0000"},
color:{value:"#ff0000"}
}
});
