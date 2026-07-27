setTimeout(() => {
    const message = document.createElement("div");

    message.textContent =
        "Sonderangebot: Sichern Sie sich 20 % Rabatt auf Ihren nächsten Einkauf!";

    message.className =
        "bg-blue-500 text-white p-6 rounded-lg text-center shadow-lg";

    document
        .getElementById("message-container")
        .appendChild(message);

}, 3000);