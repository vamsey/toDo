const inputBox = document.getElementById("input-box");
const listcnt = document.getElementById("listcnt");

function addtask() {
    if (inputBox.value === '') {
        alert("You must write something");
    } else {
        let li = document.createElement("li");
        li.textContent = inputBox.value;
        listcnt.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}
listcnt.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listcnt.innerHTML);
}

function showTask() {
    listcnt.innerHTML = localStorage.getItem("data");
}
showTask();
const filterLinks = document.querySelectorAll('.dropdown-content a');

filterLinks.forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const filter = this.getAttribute("data-filter");
        const allTasks = document.querySelectorAll("#listcnt li");

        allTasks.forEach(task => {
            if (filter === "completed") {
                task.style.display = task.classList.contains("checked") ? "block" : "none";
            } else if (filter === "incomplete") {
                task.style.display = task.classList.contains("checked") ? "none" : "block";
            }
        });
    });
});
inputBox.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        addtask();
    }
});