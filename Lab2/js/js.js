let numID = 5;

let newItem = document.getElementById('newitem');

newItem.addEventListener('keypress', addTask);

function doneFunction(checkbox) {
  let span = document.getElementById(checkbox.value);
  if(checkbox.checked) {
    span.classList.add('done');
  }
  else{
    span.classList.remove('done');
  }
}

function addTask(tecla) {
  if(tecla.keyCode == 13) {
    if(newItem.value == '') {
      alert("Ingrese una tarea.");
    }
    else {
      numID += 1;
      let mySpan = document.createElement('span');
      mySpan.id = numID;

      let myText = document.createTextNode(newItem.value);

      let myInput = document.createElement('input');
      myInput.setAttribute('type', 'checkbox');
      myInput.value = numID;
      myInput.setAttribute('onclick', 'doneFunction(this)');

      let myList = document.createElement('li');

      mySpan.appendChild(myText);
      myList.appendChild(myInput);
      myList.appendChild(mySpan);
      document.getElementById('lista').appendChild(myList);
    }
    newItem.value = '';
  }
}
