const observer = new IntersectionObserver((entries)=> {
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            
            entry.target.classList.add("show")
        }else{
            entry.target.classList.remove("show");
        }
    })
})

const header = document.querySelector("header");

const runner = document.querySelector(".runner img");
const oldMan = document.querySelector(".old_man img");

const runnerSpeed = 0.2;   //velocidad
const oldManSpeed = 0.05;

runner.classList.add("enter");
runner.addEventListener("animationend", () => {
    runner.classList.remove("enter");
});

const entryDistance = 900; // px de scroll hasta que old_man termine de entrar

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    runner.style.transform = `translateX(${scrollY * runnerSpeed}px)`;

    // old_man entra desde la izquierda (empieza fuera, -300px, y llega a 0)
    const oldManProgress = Math.min(scrollY / entryDistance, 1);
    const oldManX = -600 + (oldManProgress * 500); // de -300px a 0px
    oldMan.style.transform = `translateX(${oldManX}px)`;

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

const todoElements = document.querySelectorAll(".todo")

todoElements.forEach(el => observer.observe(el))