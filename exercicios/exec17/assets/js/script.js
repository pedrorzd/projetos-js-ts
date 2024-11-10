const inputTarefa = document.querySelector(".input-nova-tarefa");
const buttonAddTarefa = document.querySelector(".btn-adicionar-tarefa");
const listaTarefas = document.querySelector(".tarefas");

function criaItemLista() {
  const li = document.createElement("li");
  return li;
}

function limpaInput() {
  inputTarefa.value = "";
}

function createDeleteButton(li) {
  li.innerText += " ";
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Excluir";
  deleteButton.setAttribute('class','deleteButton')
  li.appendChild(deleteButton);
}

function criaTarefa(textoInput) {
  const li = criaItemLista();
  li.innerHTML = textoInput;
  listaTarefas.appendChild(li);
  limpaInput();
  createDeleteButton(li);
  salvarTarefa();
}

function salvarTarefa(){
  const liTarefa = listaTarefas.querySelectorAll('li')
  const listaDeTarefas = [];

  for(let tarefa of liTarefa){
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace('Excluir', '').trim();
    listaDeTarefas.push(tarefaTexto);
  }

  const tarefasJSON = JSON.stringify(listaDeTarefas);
  localStorage.setItem('tarefasJSON', tarefasJSON);
}

buttonAddTarefa.addEventListener("click", function () {
  if (!inputTarefa.value) return;
  criaTarefa(inputTarefa.value);
});

inputTarefa.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
  }
});

document.addEventListener("click", function (e) {
  const element = e.target;
  
  if (element.classList.contains('deleteButton')){
    element.parentElement.remove();
    salvarTarefa();
  }
});
 