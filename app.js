function onReady(){
  let toDos = JSON.parse(localStorage.getItem("to-do-app")) || [];
  const addToDoForm = document.getElementById('addToDoForm');
  let id = toDos.length || 0;

  function createNewToDo(){
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) { return; }

    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: ++id
    });
    newToDoText.value = '';

    renderTheUI();
  }

  function renderTheUI(){
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    localStorage.setItem("to-do-app", JSON.stringify(toDos))

    toDos.forEach(function(toDo){
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');

      newLi.id = toDo.id;
      checkbox.type = "checkbox";
      checkbox.checked = toDo.complete;
      checkbox.addEventListener('change', () => {
        event.preventDefault();
        toDo.complete = checkbox.checked;
        renderTheUI();
      })

      const deleteButton = document.createElement('button');

      // set button label
      deleteButton.innerHTML = "delete";
      deleteButton.addEventListener('click', () => {
        event.preventDefault();
        toDos = toDos.filter(function(currentToDo) {
          return currentToDo.id !== toDo.id
        })
        renderTheUI();
      });

      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(deleteButton);
    });

  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });

  renderTheUI();
}

window.onload = function () {
  onReady();
};
