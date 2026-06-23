const modals = {
  client: document.querySelector("#client-modal"),
  team: document.querySelector("#team-modal"),
};

const firstFocusableSelector = "input, button, select, textarea, [tabindex]:not([tabindex='-1'])";

document.querySelectorAll("[data-open-modal]").forEach((button) => {
  button.addEventListener("click", () => {
    const modalName = button.dataset.openModal;
    const modal = modals[modalName];

    if (!modal) {
      return;
    }

    clearModalMessage(modal);
    modal.showModal();
    const firstFocusable = modal.querySelector(firstFocusableSelector);
    firstFocusable?.focus();
  });
});

document.querySelectorAll("[data-close-modal]").forEach((button) => {
  button.addEventListener("click", () => {
    button.closest("dialog")?.close();
  });
});

document.querySelectorAll(".modal").forEach((modal) => {
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.close();
    }
  });
});

document.querySelectorAll("[data-form]").forEach((form) => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const message = form.querySelector(".modal__message");
    const formType = form.dataset.form;

    if (formType === "client") {
      const accessKey = form.elements.accessKey.value.trim();
      message.textContent = accessKey
        ? "Ключ принят. Позже подключим настоящий вход."
        : "Введите ключ доступа.";
      return;
    }

    const login = form.elements.login.value.trim();
    const password = form.elements.password.value.trim();
    message.textContent = login && password
      ? "Данные приняты. Позже подключим авторизацию."
      : "Введите логин и пароль.";
  });
});

function clearModalMessage(modal) {
  const message = modal.querySelector(".modal__message");

  if (message) {
    message.textContent = "";
  }
}
