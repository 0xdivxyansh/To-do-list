const inputbox = document.getElementById("input-box");
const listcontainer = document.getElementById("List-container");

function addtask() {
    if (inputbox.value.trim() === '') {  // Trim to avoid spaces being counted as input
        alert("You must write the message!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);
        

        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputbox.value = "";
    saveData();
}

listcontainer.addEventListener("click", function(e) {
    if(e.target.tagName=== "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }

    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
},false);

function saveData() {
    localStorage.setItem("data", listcontainer.innerHTML);
}

function showTask()
{
    listcontainer.innerHTML=localStorage.getItem("data");
}
showTask();