let i = 0, totalTask = 0, pandingTask = 0;

function addItem() {
    let toDoList = document.getElementById("myList");
    let addNewTask = document.getElementById("addNewTask");
    let addNewTaskValue = document.getElementById("addNewTask").value;

    if (addNewTaskValue != "") {
        let li = document.createElement("li");
        let para = document.createElement("p");
        let button = document.createElement("button");

        li.setAttribute('id', addNewTask.value);

        li.appendChild(para);
        li.appendChild(button);

        para.appendChild(document.createTextNode(addNewTask.value));
        button.appendChild(document.createTextNode("X"));

        toDoList.appendChild(li);

        li.id = "task" + i;

        para.classList.add("nameTask");
        para.id = "para" + i;
        para.onclick = function () { doneItem(this.id) };

        button.classList.add("btnTask");
        button.id = "button" + i;
        button.onclick = function () { removeItem(li.id) };

        i++, totalTask++, pandingTask++;
        document.getElementById("pandingTask").innerHTML = pandingTask;
        document.getElementById("totalTask").innerHTML = totalTask;

        document.getElementById("addNewTask").value = "";
    }

    else {
        alert("Please Enter Real Task");
    }
}

function doneItem(idName) {
    document.getElementById(idName).style.textDecoration = "line-through";

    if (pandingTask > 0) {
        pandingTask--;
        document.getElementById("pandingTask").innerHTML = pandingTask;
    }
}

function removeItem(liIdName) {
    document.getElementById(liIdName).style.display = "none";

    if (pandingTask > 0) {
        pandingTask--;
        document.getElementById("pandingTask").innerHTML = pandingTask;
    }

    if (totalTask > 0) {
        totalTask--;
        document.getElementById("totalTask").innerHTML = totalTask;
    }

    if (pandingTask < totalTask && pandingTask != 0) {
        pandingTask = totalTask;
        document.getElementById("pandingTask").innerHTML = pandingTask;
    }
}
