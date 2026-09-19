
picture = document.querySelector("img.picture")


picture.classList.add("enter");
picture.addEventListener("animationend", () => {
    picture.classList.remove("enter");
});
