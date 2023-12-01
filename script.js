const inputbox = document.getElementById("inputbox");
const listcontainer = document.getElementById("listcontainer");

function addtask()
{
    if(inputbox.value === '')
    {
        alert("Input box cannot be empty!");
    }
    else
    {
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    inputbox.value = "";
    savedata()
}

listcontainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI")
    {
        e.target.classList.toggle("checked");
        savedata()
    }
    else if(e.target.tagName === "SPAN")
    {
        e.target.parentElement.remove();
        savedata()
    }
}, false);

function savedata()
{
    localStorage.setItem("data", listcontainer.innerHTML);
}

function displaytask()
{
    listcontainer.innerHTML = localStorage.getItem("data");
}
displaytask();