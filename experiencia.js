const buttons = document.querySelectorAll('button');
const descriptionText = document.querySelector('.texto-descripcion');

function typeWriter(text, i) {
    if (i < text.length) {
        descriptionText.textContent += text.charAt(i);
        setTimeout(() => {
            typeWriter(text, i + 1)
        }, 50);
    }
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const text = button.getAttribute('data-text');
        descriptionText.textContent = '';
        typeWriter(text, 0);
    });
});
