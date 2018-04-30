function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', () => {
    event.preventDefault();

    // get the Text
    const title = newToDoText.value; // "max"

    // create a new li
    const newLi = document.createElement('li');

    //create a new input
    const checkbox = document.createElement('input');

    //create delete button
    const button = document.createElement('button');

    // set button label
    button.innerHTML = "delete";
    button.addEventListener('click', () => {
      event.preventDefault();
      button.parentElement.remove();
    });

    // set the input's type to checkbox
    checkbox.type = "checkbox";

    //set the title
    newLi.textContent = title;

    //attach the checkbox to the li
    newLi.appendChild(checkbox);

    //attach the button to the li
    newLi.appendChild(button);

    //attach the li to the ul
    toDoList.appendChild(newLi);

    //empty the input
    newToDoText.value = '';
  });
}

window.onload = function () {
  alert("The window has loaded");
  onReady();
};
