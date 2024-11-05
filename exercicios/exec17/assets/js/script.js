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

function createButton(li) {
  li.innerText += " ";
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Excluir";
  li.appendChild(deleteButton);
}

function criaTarefa(textoInput) {
  const li = criaItemLista();
  li.innerHTML = textoInput;
  listaTarefas.appendChild(li);
  limpaInput();
  createButton(li);
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
