

document.querySelectorAll(".machine").forEach(machine => {
    machine.addEventListener("click", () => {
        window.location.href = machine.dataset.href;
    });
});