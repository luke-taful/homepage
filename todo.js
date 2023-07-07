x = 0;

function addItem(newText){
    ul = document.getElementById("taskList");

    newListItem = document.createElement("li");
    newListItem.setAttribute('id', 'item '+x);
    newListItem.setAttribute('onclick', 'removeItem(this.id)');

    newText = document.getElementById("itemText").value;
    newListItem.textContent = newText;
    ul.appendChild(newListItem);
    x+=1;
}

function test(){
    document.getElementById("title").innerHTML = "test success";
}

function removeItem(id){
    element = document.getElementById(id);
    element.remove();
}