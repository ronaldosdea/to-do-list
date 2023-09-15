const btnAdicionar = document.getElementById('adicionar')
const valorTarefa = document.getElementById('texto-input')

btnAdicionar.addEventListener('click', (evento)=>{
    evento.preventDefault();
    if(valorTarefa.value == ''){
        alert('Digite uma tarefa valida')
       } else{
           const tarefa = criarTarefa(valorTarefa.value)
            renderizarTarefa(tarefa)
       }

    valorTarefa.value = ''

  
})
const listaTarefa = document.querySelector('ul')

listaTarefa.addEventListener('click',(elemento) =>{

    const itemClicado = elemento.target

    if(itemClicado.classList.contains('excluir')){
     
     itemClicado.parentElement.parentElement.remove()

    }
    if(itemClicado.classList.contains('concluir')){
        
        itemClicado.parentElement.parentElement.firstElementChild.classList.toggle('concluido')

    }
    
})

function criarTarefa (valorTarefa){
       const li = document.createElement('li')
       
    li.innerHTML = ` 
    <p>${valorTarefa}</p>
    <div>
        <button class="excluir"></button>
        <button class="concluir"></button>
    </div>`
    
      return li
}

 function renderizarTarefa(tarefa){
    const listaTarefa = document.querySelector('ul')

   listaTarefa.appendChild(tarefa)
}
