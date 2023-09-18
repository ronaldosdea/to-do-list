// // // localStorage.setItem('teste', "ronaldo")

// sessionStorage.setItem('teste', 'ronaldo')

// const testeLocal = localStorage.getItem('teste')

// const testeSession = sessionStorage.getItem('teste')

const divLocal = document.getElementById('local')
const divSession = document.getElementById('session')

// localStorage.removeItem('teste')

// divLocal.innerText = testeLocal

// // // divSession.innerText = testeSession

const nomes = ['Ronaldo', 'Bruno', 'renata', 'luciano']

localStorage.setItem('teste', JSON.stringify(nomes))

recuperandoDados = JSON.parse(localStorage.getItem('teste'))

console.log(typeof(recuperandoDados))

recuperandoDados.push('Gustavo')

recuperandoDados.forEach(element => {
    
});

const pessoas = [{

    nome: "Ronaldo",
    idade: 16,
    altura:1.70,
},
{
    nome: 'Gustavo',
    idade: 18,
    altura:1.80,
    profissao: 'maconheiro'
}]

localStorage.setItem('objetos', JSON.stringify(pessoas))

console.log(JSON.parse(localStorage.getItem('objetos')))
