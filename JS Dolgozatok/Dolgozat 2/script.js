function createDivWithBackgroundChange() {
    const div = document.createElement('div');
    div.classList.add('sajat-div');

    div.addEventListener('click', function() {
        const originalBackground = div.style.backgroundImage;
        div.style.backgroundImage = 'url("képek/dalia_n.png")'; 

        setTimeout(() => {
            div.style.backgroundImage = originalBackground;
        }, 2000);
    });

    return div;
}

document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById('container');
    const newDiv = createDivWithBackgroundChange();
    container.appendChild(newDiv);
});