let inp = document.querySelector("#inp");
let btn = document.querySelector("#btnSubmit");
let ul = document.querySelector("#container");

function createElement(taskText) {
    let li = document.createElement("li");
    if (taskText.trim() !== "") {
        li.innerHTML = `
            <span>${taskText}</span>
            <button class='editBtn'>Edit</button>
            <button class='deleteBtn'>Delete</button>
        `;
        ul.appendChild(li);
        inp.value = "";

        let editBtn = li.querySelector(".editBtn");
        let deleteBtn = li.querySelector(".deleteBtn");

        editBtn.addEventListener("click", function () {
            let getText = prompt("Update your task");
            if (getText !== "") {
                let span = li.querySelector("span");
                span.innerHTML = getText;
            }
        });

        deleteBtn.addEventListener("click", function () {
            li.remove();
        });

        li.draggable = true;
        li.addEventListener("dragstart", function () {
            li.classList.add("drag");
        });

        li.addEventListener("dragend", function () {
            li.classList.remove("drag");
        });

        return li;
    } else {
        alert("Please enter a task!");
    }
}

btn.addEventListener("click", function () {
    let taskText = inp.value.trim();
    if (taskText !== "") {
        let taskElement = createElement(taskText);
        ul.appendChild(taskElement);
        inp.value = "";
    }
});

ul.addEventListener("dragover", function (event) {
    event.preventDefault();
    
    let draggableEvent = document.querySelector(".drag");
    ul.appendChild(draggableEvent);
});
