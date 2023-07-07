x = 0;

function addItem(newText){
    ul = document.getElementById("taskList");

    newListItem = document.createElement("li");
    newListItem.setAttribute('id', 'item '+x);
    newListItem.setAttribute('onclick', 'removeItem(this.id)');

    it = document.getElementById("itemText");
    newText = it.value;
    newListItem.textContent = newText;
    ul.appendChild(newListItem);

    it.value = null;
    x+=1;
}

function test(){
    document.getElementById("title").innerHTML = "test success";
}

function removeItem(id){
    element = document.getElementById(id);
    element.remove();
}