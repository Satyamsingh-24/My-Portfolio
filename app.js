document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();
    document.getElementById("response-message").textContent = "Thank you for your message! I'll get back to you soon.";
});
