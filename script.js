const form = document.querySelector("#inquiry-form");
const statusMessage = document.querySelector("#form-status");

function setStatus(message, type) {
  statusMessage.textContent = message;
  statusMessage.dataset.type = type;
}

form?.addEventListener("submit", async (event) => {
  event.preventDefault();

  const endpoint = form.dataset.endpoint?.trim();
  const formData = new FormData(form);

  if (formData.get("website")) {
    form.reset();
    setStatus("Thanks, your inquiry was received.", "success");
    return;
  }

  if (!endpoint) {
    setStatus("This form is almost ready. Please email us for now while we finish connecting inquiries.", "error");
    return;
  }

  const submitButton = form.querySelector("button[type='submit']");
  submitButton.disabled = true;
  submitButton.textContent = "Sending...";
  setStatus("", "");

  formData.append("submittedAt", new Date().toISOString());
  formData.append("pageUrl", window.location.href);

  try {
    await fetch(endpoint, {
      method: "POST",
      mode: "no-cors",
      body: new URLSearchParams(formData),
    });

    form.reset();
    setStatus("Thanks, your inquiry was received. We'll follow up soon.", "success");
  } catch (error) {
    setStatus("Something went wrong. Please try again or email us directly.", "error");
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = "Send inquiry";
  }
});
