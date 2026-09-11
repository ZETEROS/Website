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

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

const todoElements = document.querySelectorAll(".todo")

todoElements.forEach(el => observer.observe(el))