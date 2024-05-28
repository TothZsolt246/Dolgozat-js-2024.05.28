document.addEventListener("DOMContentLoaded", function() {
    const divs = document.querySelectorAll('body > div');
    if (divs.length >= 5) {
        divs[0].textContent = "Első";
        divs[divs.length - 1].textContent = "Utolsó";
        divs[2].textContent = "Harmadik";

        for (let i = 1; i < divs.length - 1; i++) {
            if (i !== 2) {
                divs[i].textContent = `Elem indexe a body-ban: ${i + 1}`;
            }
        }
    }
});