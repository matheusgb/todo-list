// selectors

const input = document.querySelector('#texto-tarefa');
const botao = document.querySelector('#criar-tarefa');
const lista = document.querySelector('#lista-tarefas');
const botao2 = document.querySelector('#apaga-tudo');
const botao3 = document.querySelector('#remover-finalizados');
const riscados = document.getElementsByClassName('completed');
const botao4 = document.querySelector('#salvar-tarefas');
const sobe = document.querySelector('#mover-cima');
const desce = document.querySelector('#mover-baixo');
const removersel = document.querySelector('#remover-selecionado');

// funções

function addLista() {
  const liLista = document.createElement('li');
  const escrita = document.createTextNode(input.value);
  liLista.appendChild(escrita);
  lista.appendChild(liLista);

  input.value = '';
}

function cliques(event) {

  if (event.target.className === 'completed') {
    event.target.className = '';
  } else {
    event.target.className = 'completed';
  }
}

function selecao(event) {
  for (const i of lista.children) {
    i.classList.remove('cinza');
  }
  if (event.target.className === '') {
    event.target.className = 'cinza';
  }
}

function apaga() {
  lista.innerHTML = '';
}

function remover() {
  while (riscados.length > 0) {
    lista.removeChild(riscados[0]);
  }
}

function salvar() {
  localStorage.setItem('lista', JSON.stringify(lista.innerHTML));
}
// parse transforma texto em objeto, ou seja, de volta ao htmlcollection
lista.innerHTML = JSON.parse(localStorage.getItem('lista'));

function descendo() {
  for (const i of lista.children) {
    if (i.className === 'cinza' && i.nextSibling !== null) {
      lista.insertBefore(i.nextSibling, i);
      break;
    }
  }
}

function subindo() {
  for (const i of lista.children) {
    if (i.className === 'cinza' && i.previousSibling !== null) {
      lista.insertBefore(i, i.previousSibling);
    }
  }
}

function removercinza() {
  for (const i of lista.children) {
    if (i.className === 'cinza') {
      i.remove();
    }
  }
}
// listeners

botao.addEventListener('click', addLista);
lista.addEventListener('click', selecao);
lista.addEventListener('dblclick', cliques);
botao2.addEventListener('click', apaga);
botao3.addEventListener('click', remover);
botao4.addEventListener('click', salvar);
sobe.addEventListener('click', subindo);
desce.addEventListener('click', descendo);
removersel.addEventListener('click', removercinza)
