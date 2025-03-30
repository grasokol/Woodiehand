// Плавная прокрутка для навигации
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  // Получаем все изображения сертификатов
  const certificateImgs = document.querySelectorAll('.certificates img');
  const modal = document.createElement('div');
  modal.className = 'certificate-modal';
  
  modal.innerHTML = `
    <div class="certificate-modal-content">
      <span class="close-certificate">&times;</span>
      <img src="" alt="Увеличенное изображение сертификата">
    </div>
  `;
  
  document.body.appendChild(modal);
  
  const modalImg = modal.querySelector('img');
  const closeBtn = modal.querySelector('.close-certificate');
  
  // Добавляем обработчики кликов
  certificateImgs.forEach(img => {
    img.addEventListener('click', function() {
      modal.classList.add('active');
      modalImg.src = this.src;
    });
  });
  
  // Закрытие модального окна
  closeBtn.addEventListener('click', function() {
    modal.classList.remove('active');
  });
  
  // Закрытие при клике вне изображения
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });
});

// Функция для листания слайдера
function setupSlider(slider) {
  const content = slider.querySelector('.slider-content');
  const leftArrow = slider.querySelector('.left-arrow');
  const rightArrow = slider.querySelector('.right-arrow');

  const cardWidth = slider.querySelector('.card').offsetWidth + 20; // Ширина карточки + отступ
  const scrollAmount = cardWidth * 2.5; // Прокрутка на 2.5 карточки

  leftArrow.addEventListener('click', () => {
    content.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });

  rightArrow.addEventListener('click', () => {
    content.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });
}

// Настройка всех слайдеров на странице
document.querySelectorAll('.slider').forEach(setupSlider);

// Обработка формы
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
  this.reset();
});