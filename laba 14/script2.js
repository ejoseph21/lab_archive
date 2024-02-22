let listContainer = document.getElementById("listContainer");
let list;
  
    function createList(type) {
      clearList();
      
      if (type === 'unordered') {
        list = document.createElement("ul");
      } else if (type === 'ordered') {
        list = document.createElement("ol");
      }
      
      listContainer.appendChild(list);
    }
    
    function addElement(position) {
      if (!list) {
        alert("Список не создан!");
        return;
      }
  
      let newItem = document.createElement("li");
      let text = document.createTextNode("Новый элемент");
      newItem.appendChild(text);
  
      if (position === 'begin') {
        list.prepend(newItem);
      } else if (position === 'end') {
        list.appendChild(newItem);
      }
    }
    
    function changeColor() {
      if (!list) {
        alert("Список не создан!");
        return;
      }
  
      let listItems = list.children;
      
      for (let i = 0; i < listItems.length; i++) {
        if (i % 2 === 0) {
          listItems[i].style.color = "black";
        } else {
          listItems[i].style.color = "red";
        }
      }
    }
    
    function clearList() {
      if (list) {
        listContainer.removeChild(list);
        list = null;
      }
    }