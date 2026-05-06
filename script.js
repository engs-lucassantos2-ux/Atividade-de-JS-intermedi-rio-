let lista_nomes = ["Jeferson", "Dionathan", "uLton"]
const texto = document.getElementById("texto")
const botao_first = document.getElementById("botao-first")
const botao_last = document.getElementById("botao-last")
const botao_remove_first = document.getElementById("botao-remove-first")
const botao_remove_last = document.getElementById("botao-remove-last")
const lista_pagina = document.getElementById("lista")
const contagem = document.getElementById("Contagem")
const filtrar_nomes = document.getElementById("filtrar-nomes")
const maiscula = document.getElementById("maisculo")

function renderizar(){
    lista_pagina.innerHTML = ""
    for(let item of lista_nomes){
        let elemento = document.createElement('li')
        elemento.innerText = item
        lista_pagina.appendChild (elemento)

    }
    atualizarContagem()
}

function contarNomes(){
    let contador = 0
    lista_nomes.forEach(nome =>{
        if(nome.length > 5){
            contador++
        }
    })
    return contador
}

function atualizarContagem(){
    contagem.innerText = `Nomes contados: ${contarNomes()}`
}

filtrar_nomes.addEventListener("click",() => {
    lista_pagina.innerHTML = ""
        lista_nomes.filter(nome => nome.length > 5).forEach(nome =>{
            let elemento = document.createElement("li")
            elemento.innerText = nome
            lista_pagina.appendChild(elemento)
        })
}) 

document.addEventListener("DOMContentLoaded", ()=>{
    renderizar()
})

botao_first.addEventListener("click", ()=>{
    if(texto.value !== ""){
        lista_nomes.unshift(texto.value)
        texto.value = ""
        renderizar()
    }
})

botao_last.addEventListener("click", ()=>{
    if(texto.value !== ""){
        lista_nomes.push(texto.value)
        texto.value = ""
        renderizar()
    }
})

botao_remove_first.addEventListener("click", ()=>{
        lista_nomes.shift()
        renderizar()
})

botao_remove_last.addEventListener("click", ()=>{
        lista_nomes.pop()
        renderizar()
})

maiscula.addEventListener("click", () => {
    lista_nomes = lista_nomes.map(nome => nome.toUpperCase())
    renderizar()
});