const form = document.getElementById("taskForm");
const input = document.getElementById("taskInput");
const list = document.getElementById("taskList");
const reloadButton = document.getElementById("reload");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// erstellt einen Listeneintrag
function createListItem(task) {
    const li = document.createElement("li");
    li.id = task.id;

    li.textContent = task.content + " ";

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Löschen";

    deleteButton.style.backgroundColor = "red";
    deleteButton.style.color = "white";
    deleteButton.style.marginLeft = "10px";

    deleteButton.addEventListener("click", () => {

        console.log(task.id);

        tasks = tasks.filter(item => item.id !== task.id);

        localStorage.setItem("tasks", JSON.stringify(tasks));

        li.remove();

    });

    li.appendChild(deleteButton);

    return li;
}

// Liste anzeigen
function renderList() {

    list.innerHTML = "";

    tasks.forEach(task => {
        list.appendChild(createListItem(task));
    });

}

// Seite laden
window.addEventListener("load", renderList);

// Formular
form.addEventListener("submit", (event) => {

    event.preventDefault();

    const value = input.value.trim();

    if (!value) return;

    const task = {
        id: "task-" + crypto.randomUUID().replaceAll("-", ""),
        content: value
    };

    tasks.unshift(task);

    localStorage.setItem("tasks", JSON.stringify(tasks));

    renderList();

    form.reset();

});

// Reload
reloadButton.addEventListener("click", () => {

    location.reload();

});