const contactForm = document.querySelector(".contact-form");
const formStatus = document.querySelector(".form-status");

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  formStatus.textContent =
    "Учебная проверка пройдена. Заявка не отправлена: обработчик формы пока не подключён.";
});
