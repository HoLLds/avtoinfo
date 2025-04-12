function revealElements() {
    const elements = document.querySelectorAll('main, .content-container');
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('visible');
        }, index * 200);
    });
}

window.addEventListener('load', revealElements);