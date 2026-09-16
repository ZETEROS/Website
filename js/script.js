const commands = document.querySelectorAll(".terminal-command");

commands.forEach(command => {

    const text = command.classList.contains("projects")
        ? "$ explore --projects "
        : "$ explore --pwned-machines ";

    const textElement = command.querySelector(".command");

    let i = 0;

    function typeWriter() {

        if (i < text.length) {

            textElement.textContent += text.charAt(i);
            i++;

            setTimeout(typeWriter, 150);
        }
    }

    typeWriter();
});