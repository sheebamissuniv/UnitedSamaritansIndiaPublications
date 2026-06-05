const whatsappWidget = document.querySelector("#whatsappWidget");
const whatsappOpen = document.querySelector("#whatsappOpen");
const whatsappClose = document.querySelector("#whatsappClose");
const whatsappPopup = document.querySelector("#whatsappPopup");
const whatsappMessage = document.querySelector("#whatsappMessage");
const whatsappSend = document.querySelector("#whatsappSend");
const whatsappStatus = document.querySelector("#whatsappStatus");
// Internal use only; this number is never rendered in the website UI.
const whatsappRecipient = "917598414987";
const whatsappDefaultMessage = "Hello United Samaritans India, I would like to know more about your publications and services.";
const whatsappGreetingText = "Hello! How can we help you today?";
const whatsappSentText = "Thank you for contacting United Samaritans India. WhatsApp is opening now. We look forward to assisting you.";
const whatsappSessionLimit = 30 * 60 * 1000;
let whatsappPulseTimer;
let whatsappCloseTimer;
let whatsappExpiryTimer;
let whatsappDraftMessage = "";
let whatsappSessionStartedAt = now();
let whatsappSessionUpdatedAt = now();

function now() {
  return Date.now();
}

function trackWhatsappEvent(action) {
  if (typeof window.gtag === "function") {
    window.gtag("event", action, {
      event_category: "WhatsApp Widget",
      event_label: "United Samaritans India"
    });
  }
}

function isWhatsappSessionExpired() {
  return now() - whatsappSessionUpdatedAt > whatsappSessionLimit;
}

function startNewWhatsappSession() {
  whatsappDraftMessage = "";
  whatsappSessionStartedAt = now();
  whatsappSessionUpdatedAt = now();
}

function refreshWhatsappSession() {
  if (isWhatsappSessionExpired()) {
    startNewWhatsappSession();
  } else {
    whatsappSessionUpdatedAt = now();
  }
}

function saveWhatsappDraft() {
  if (!whatsappMessage) return;

  refreshWhatsappSession();
  whatsappDraftMessage = whatsappMessage.value;
}

function clearWhatsappSession() {
  startNewWhatsappSession();
}

function setWhatsappStatus(message = "") {
  if (!whatsappStatus) return;

  whatsappStatus.textContent = message;
  whatsappStatus.classList.toggle("is-visible", Boolean(message));
}

function resetWhatsappWelcomeState({ clearDraft = false } = {}) {
  if (whatsappCloseTimer) window.clearTimeout(whatsappCloseTimer);
  if (clearDraft) clearWhatsappSession();
  if (whatsappMessage) whatsappMessage.value = "";
  setWhatsappStatus();
}

function restoreWhatsappDraft() {
  refreshWhatsappSession();
  if (whatsappMessage) whatsappMessage.value = whatsappDraftMessage;
  setWhatsappStatus();
}

function setWhatsappPopupOpen(isOpen) {
  if (!whatsappWidget || !whatsappOpen || !whatsappPopup) return;

  whatsappWidget.classList.toggle("is-open", isOpen);
  whatsappOpen.setAttribute("aria-expanded", String(isOpen));
  whatsappPopup.setAttribute("aria-hidden", String(!isOpen));

  if (isOpen) {
    restoreWhatsappDraft();
    window.setTimeout(() => whatsappMessage?.focus(), 120);
  } else {
    saveWhatsappDraft();
  }
}

function runWhatsappPulse() {
  if (!whatsappWidget || whatsappWidget.classList.contains("is-open")) return;

  whatsappWidget.classList.add("is-pulsing");
  window.setTimeout(() => {
    whatsappWidget.classList.remove("is-pulsing");
  }, 1900);
}

function showWhatsappWidget() {
  if (!whatsappWidget) return;

  refreshWhatsappSession();
  whatsappWidget.classList.add("is-visible");
  runWhatsappPulse();
  whatsappPulseTimer = window.setInterval(runWhatsappPulse, 15000);
  whatsappExpiryTimer = window.setInterval(expireWhatsappSessionIfNeeded, 60000);
}

function expireWhatsappSessionIfNeeded() {
  if (!isWhatsappSessionExpired()) return;

  resetWhatsappWelcomeState({ clearDraft: true });
}

function completeWhatsappSession() {
  resetWhatsappWelcomeState({ clearDraft: true });
  setWhatsappStatus(whatsappSentText);

  whatsappCloseTimer = window.setTimeout(() => {
    setWhatsappStatus();
    setWhatsappPopupOpen(false);
    resetWhatsappWelcomeState({ clearDraft: true });
  }, 2600);
}

function sendWhatsappMessage() {
  if (isWhatsappSessionExpired()) {
    resetWhatsappWelcomeState({ clearDraft: true });
  }

  const typedMessage = whatsappMessage?.value.trim() || "";
  const message = typedMessage || whatsappDefaultMessage;

  trackWhatsappEvent("whatsapp_send_click");
  const whatsappUrl = `https://wa.me/${whatsappRecipient}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  completeWhatsappSession();
}

if (whatsappWidget && whatsappOpen && whatsappClose && whatsappSend) {
  window.setTimeout(showWhatsappWidget, 5000);

  whatsappOpen.addEventListener("click", () => {
    trackWhatsappEvent("whatsapp_button_click");
    setWhatsappPopupOpen(!whatsappWidget.classList.contains("is-open"));
  });

  whatsappClose.addEventListener("click", () => {
    trackWhatsappEvent("whatsapp_close_click");
    setWhatsappPopupOpen(false);
    whatsappOpen.focus();
  });

  whatsappSend.addEventListener("click", sendWhatsappMessage);

  whatsappMessage?.addEventListener("input", saveWhatsappDraft);

  whatsappMessage?.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setWhatsappPopupOpen(false);
      whatsappOpen.focus();
    }
  });

  window.addEventListener("pagehide", () => {
    if (whatsappPulseTimer) window.clearInterval(whatsappPulseTimer);
    if (whatsappCloseTimer) window.clearTimeout(whatsappCloseTimer);
    if (whatsappExpiryTimer) window.clearInterval(whatsappExpiryTimer);
  });
}
