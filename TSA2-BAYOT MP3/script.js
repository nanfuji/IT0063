document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll('.day-button');
    const boxContainer = document.getElementById('box-container');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const color = window.getComputedStyle(button).getPropertyValue('background-color');

            const box = document.createElement('div');
            box.classList.add('box');
            box.style.backgroundColor = color;

            boxContainer.innerHTML = '';
            boxContainer.appendChild(box);

            setTimeout(() => {
                box.classList.add('move-up');
                setTimeout(() => {
                    box.classList.add('change-color');
                }, 1000);
            }, 100);
        });
    });
});
