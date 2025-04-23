function revealElements() {
    const elements = document.querySelectorAll('main, .content-container');
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('visible');
        }, index * 200);
    });
}

window.addEventListener('load', revealElements);

// Все элементы списка и модальные окна
const listItems = document.querySelectorAll('.page-text-list li');
const modals = document.querySelectorAll('.modal');

// Функция для открытия модального окна
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'block';
}

// Функция для закрытия модального окна
function closeModal(modal) {
    modal.style.display = 'none';
}

// Обработчики событий для элементов списка
listItems.forEach(item => {
    item.addEventListener('click', () => {
        const modalId = item.getAttribute('data-modal');
        openModal(modalId);
    });
});

// Обработчики событий для кнопок закрытия
modals.forEach(modal => {
    const closeBtn = modal.querySelector('.close');
    closeBtn.addEventListener('click', () => {
        closeModal(modal);
    });

    // Закрытие модального окно при клике вне окна
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal(modal);
        }
    });
});