const nomeLoja = document.getElementById('nome')
nomeLoja.addEventListener("change", (event) =>{
    window.localStorage.setItem('nome', event.target.value)
})

const enderecoLoja = document.getElementById('endereco')
enderecoLoja.addEventListener("change", (event) =>{
    window.localStorage.setItem('endereco', event.target.value)
})

const diaLoja = document.getElementById('dia')
diaLoja.addEventListener("change", (event) =>{
    window.localStorage.setItem('dia', "segunda")
})

const dia1Loja = document.getElementById('dia1')
dia1Loja.addEventListener("change", (event) =>{
    window.localStorage.setItem('dia1', "terca")
})

const dia2Loja = document.getElementById('dia2')
dia2Loja.addEventListener("change", (event) =>{
    window.localStorage.setItem('dia2', "quarta")
})

const dia3Loja = document.getElementById('dia3')
dia3Loja.addEventListener("change", (event) =>{
    window.localStorage.setItem('dia3', "quinta")
})

const dia4Loja = document.getElementById('dia4')
dia4Loja.addEventListener("change", (event) =>{
    window.localStorage.setItem('dia4', "sexta")
})

const dia5Loja = document.getElementById('dia5')
dia5Loja.addEventListener("change", (event) =>{
    window.localStorage.setItem("dia5", "sabado")
})

const dia6Loja = document.getElementById('dia6')
dia6Loja.addEventListener("change", (event) =>{
    window.localStorage.setItem('dia6', "domingo")
})

const abrirLoja = document.getElementById('abrir')
abrirLoja.addEventListener("change", (event) =>{
    window.localStorage.setItem('abrir', event.target.value)
})

const fecharLoja = document.getElementById('fechar')
fecharLoja.addEventListener("change", (event) =>{
    window.localStorage.setItem('fechar', event.target.value)
})

const submitForm = document.getElementById('submit')

const formulario = document.getElementById('formulario')

formulario.addEventListener("submit", (event) =>{
    window.localStorage.setItem('formulario',"preparando envio...")
    event.preventDefault()
})

function flex() {
    formulario.style.display = "flex";
    document.getElementById("semana").style.flexDirection = "column";
    formulario.style.flexDirection = "column";
}

function grid() {
    formulario.style.display = "grid";
    formulario.style.gridTemplateColumns = 'auto auto auto';
    formulario.style.gridTemplateRows = 'auto auto auto'
}