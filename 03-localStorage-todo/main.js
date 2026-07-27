const form = document.getElementById("myForm");
const input = document.getElementById("textInput");
const list = document.getElementById("list");
const reloadButton = document.getElementById("reload");

// Daten aus localStorage laden
let items = JSON.parse(localStorage.getItem("items")) || [];

// Liste anzeigen
function renderList() {
    list.innerHTML = "";

    items.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        list.appendChild(li);
    });
}

// Beim Laden anzeigen
window.addEventListener("load", renderList);

// Formular absenden
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const value = input.value.trim();

    if (value === "") return;

    // Neuen Eintrag am Anfang speichern
    items.unshift(value);

    localStorage.setItem("items", JSON.stringify(items));

    renderList();

    form.reset();
});

// Seite neu laden
reloadButton.addEventListener("click", () => {
    location.reload();
});