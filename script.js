const firstFocusableSelector = "input, button, select, textarea, [tabindex]:not([tabindex='-1'])";

document.querySelectorAll("[data-open-modal]").forEach((button) => {
  button.addEventListener("click", () => {
    const modalName = button.dataset.openModal;
    const modal = document.querySelector(`#${modalName}-modal`);

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
  });
});

document.querySelectorAll("[data-crm-view]").forEach((button) => {
  button.addEventListener("click", () => {
    const viewName = button.dataset.crmView;
    const view = document.querySelector(`[data-view="${viewName}"]`);

    if (!view) {
      return;
    }

    document.querySelectorAll("[data-crm-view]").forEach((item) => {
      item.classList.toggle("is-active", item === button);
    });
    document.querySelectorAll("[data-view]").forEach((item) => {
      item.classList.toggle("is-active", item === view);
    });
  });
});

document.querySelectorAll("[data-board-mode]").forEach((button) => {
  button.addEventListener("click", () => {
    const mode = button.dataset.boardMode;

    document.querySelectorAll("[data-board-mode]").forEach((item) => {
      item.classList.toggle("is-active", item === button);
    });
    document.querySelectorAll("[data-board-panel]").forEach((panel) => {
      panel.hidden = panel.dataset.boardPanel !== mode;
    });
  });
});

document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("click", () => selectProject(card));
  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      selectProject(card);
    }
  });
});

function clearModalMessage(modal) {
  const message = modal.querySelector(".modal__message");

  if (message) {
    message.textContent = "";
  }
}

function selectProject(card) {
  document.querySelectorAll(".project-card").forEach((item) => {
    item.classList.toggle("is-selected", item === card);
  });

  updateText("[data-detail-title]", card.dataset.projectTitle);
  updateText("[data-detail-client]", card.dataset.projectClient);
  updateText("[data-detail-phase]", card.dataset.projectPhase);
  updateText("[data-detail-state]", card.dataset.projectState);
  updateText("[data-detail-owner]", card.dataset.projectOwner);
  updateText("[data-detail-next]", card.dataset.projectNext);
  updateText("[data-detail-progress]", `${card.dataset.projectProgress}%`);

  const progress = document.querySelector("[data-detail-progressbar]");

  if (progress) {
    progress.value = Number(card.dataset.projectProgress || 0);
  }
}

function updateText(selector, text) {
  const element = document.querySelector(selector);

  if (element && text) {
    element.textContent = text;
  }
}
