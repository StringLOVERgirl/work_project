  // JavaScript код для эффекта следа

  
  export function cursor(e) {
    // 1. Создаем новый div-элемент для точки
    const trailElement = document.createElement('div');
    trailElement.classList.add('mouse-trail-element'); // Добавляем класс для стилей

    // 2. Устанавливаем позицию точки по координатам мыши
    // Вычитаем половину ширины/высоты (7.5px для 15px), чтобы точка была по центру курсора
    trailElement.style.left = (e.pageX - 7.5) + 'px';
    trailElement.style.top = (e.pageY - 7.5) + 'px';
    trailElement.style.boxShadow = '10px 0 2px rgb(120, 93, 99)'

    // 3. Добавляем точку на страницу (в body)
    document.body.appendChild(trailElement);

    // 4. Устанавливаем таймер для удаления этой точки
    // Длительность таймера (10000 мс = 10 секунд) должна соответствовать длительности CSS-анимации
    const animationDuration = 3000;
    setTimeout(() => {
        // Проверяем, что элемент еще существует в DOM, прежде чем пытаться его удалить
        // Это важно, чтобы избежать ошибок, если элемент по какой-то причине уже был удален
        // if (trailElement && trailElement.parentNode) {
            trailElement.remove(); // Удаляем точку со страницы
        // }
    }, animationDuration);
  }