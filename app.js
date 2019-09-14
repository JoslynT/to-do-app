
function onReady() {
  var toDos = [];
   let id= 0;
  const addToDoForm = document.getElementById('addToDoForm');

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });

  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');
    toDoList.textContent = '';
    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      const btn = document.createElement('input');
      btn.type = "button";
      btn.value = "delete";
      btn.dataid = toDo.id;
      btn.addEventListener('click', event => {
         toDos = toDos.filter(function(item){
           return item.id !== toDo.id;
         })

        renderTheUI ();
      });
      newLi.textContent = toDo.title;
      newLi.appendChild(btn);
      toDoList.appendChild(newLi);

    });
  }

  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) { return; }
    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id
    });

    id++;

    newToDoText.value = '';
    renderTheUI();
  }

  renderTheUI();
}



window.onload = function() {
   onReady();
 };
