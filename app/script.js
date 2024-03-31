function getRandomDiscount() {
    // Генеруємо випадкове число від 10 до 30 (включно)
    return Math.floor(Math.random() * (30 - 10 + 1)) + 10;
}

function showDiscountAlert() {
    // Отримуємо випадкове число знижки
    let discount = getRandomDiscount();
    // Виводимо повідомлення з випадковим числом знижки
    alert("Вам надано знижку " + discount + "%!");
}

// Функція для руху тексту
function moveText() {
    let container = document.getElementsByClassName('slide')[0];
    let texts = document.getElementsByClassName('text');
    let containerWidth = container.offsetWidth;

    for (let i = 0; i < texts.length; i++) {
        let text = texts[i];
        let textWidth = text.offsetWidth;
        let textLeft = parseInt(text.style.left) || 0;

        // Рухаємо текст вліво
        textLeft--;

        // Якщо текст вийшов за межі контейнера, перемістимо його знову на початок
        if (textLeft <= -textWidth) {
            textLeft = containerWidth;
        }

        // Застосовуємо зміщення до тексту
        text.style.left = textLeft + 'px';
    }

    // Запускаємо знову анімацію
    requestAnimationFrame(moveText);
}

// Починаємо анімацію
moveText();