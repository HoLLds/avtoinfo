// Получаем все элементы кругов и модальные окна
const circleItems = document.querySelectorAll('.circle-item');
const modals = document.querySelectorAll('.modal');

// Функция для открытия модального окна
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'block';
    document.body.classList.add('no-scroll');
}

// Функция для закрытия модального окна
function closeModal(modal) {
    modal.style.display = 'none';
    document.body.classList.remove('no-scroll');
}

// Добавляем обработчики событий для кругов
circleItems.forEach(item => {
    item.addEventListener('click', (event) => {
        event.preventDefault(); // Предотвращаем переход по ссылке
        const modalId = item.getAttribute('data-modal');
        openModal(modalId);
    });
});

// Добавляем обработчики событий для кнопок закрытия
modals.forEach(modal => {
    const closeBtn = modal.querySelector('.close');
    closeBtn.addEventListener('click', () => {
        closeModal(modal);
    });

    // Закрываем модальное окно при клике вне окна
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal(modal);
        }
    });
});

// Открытие модального окна


// Закрытие модального окна
