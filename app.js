function onReady(){
  let todos = [];
  let currentToDoId = 1;
  const ADD_TODO_FORM = document.getElementById("addToDoForm");
  const NEW_TODO_TEXT = document.getElementById("newToDoText");
  const TODO_LIST = document.getElementById("toDoList");

  ADD_TODO_FORM.addEventListener('submit', (event) => {
    event.preventDefault();

    let title = NEW_TODO_TEXT.value;

    let todoObj = {
      name: title,
      id: currentToDoId
    };

    currentToDoId++;

    todos.push(todoObj);

    console.log(todos);

    let newLi = document.createElement('li'); // <li></li>
    newLi.textContent = title; // <li>Woo!</li>

    let checkbox = document.createElement('input');
    checkbox.type = "checkbox";

    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Delete";


    deleteBtn.addEventListener('click', function(event) {
      let todoText = this.parentElement.childNodes[0].nodeValue;
      todos.forEach(function(todoItem, index){
        if(todoItem.name == todoText){
          // delete that item
          todos.splice(index, 1);
        }
        console.log(todos);
      })
      TODO_LIST.removeChild(this.parentElement);
    });


    newLi.appendChild(checkbox);
    newLi.appendChild(deleteBtn);
    TODO_LIST.appendChild(newLi);
    NEW_TODO_TEXT.value = "";
  });
};

window.onload = function() {
  onReady();
};
