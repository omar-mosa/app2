document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            let count = parseInt(button.textContent);

            if (count > 1) {
                button.textContent = count - 1;
            } else {
                button.textContent = "تم";
                button.disabled = true;
                button.style.backgroundColor = "#27ae60";
                button.style.cursor = "default";
            }
        });
    });
});

