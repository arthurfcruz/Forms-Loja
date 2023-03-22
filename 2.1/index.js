const nomeLoja = document.getElementById('nome')
nomeLoja.addEventListener("change", (event) =>{
    window.localStorage.setItem('nome', event.target.value)
})
nomeLoja.addEventListener('focus', (event) => {
    event.target.style.outlineColor = 'purple'
})

const enderecoLoja = document.getElementById('endereco')
enderecoLoja.addEventListener("change", (event) =>{
    window.localStorage.setItem('endereco', event.target.value)
})
enderecoLoja.addEventListener('focus', (event) => {
    event.target.style.outlineColor = 'purple'
})

const diaLoja = document.getElementById('dia')
diaLoja.addEventListener("change", (event) =>{
    window.localStorage.setItem('dia', "segunda")
})
diaLoja.addEventListener('focus', (event) => {
    event.target.style.outlineColor = 'purple'
})

const dia1Loja = document.getElementById('dia1')
dia1Loja.addEventListener("change", (event) =>{
    window.localStorage.setItem('dia1', "terca")
})
dia1Loja.addEventListener('focus', (event) => {
    event.target.style.outlineColor = 'purple'
})

const dia2Loja = document.getElementById('dia2')
dia2Loja.addEventListener("change", (event) =>{
    window.localStorage.setItem('dia2', "quarta")
})
dia2Loja.addEventListener('focus', (event) => {
    event.target.style.outlineColor = 'purple'
})

const dia3Loja = document.getElementById('dia3')
dia3Loja.addEventListener("change", (event) =>{
    window.localStorage.setItem('dia3', "quinta")
})
dia3Loja.addEventListener('focus', (event) => {
    event.target.style.outlineColor = 'purple'
})

const dia4Loja = document.getElementById('dia4')
dia4Loja.addEventListener("change", (event) =>{
    window.localStorage.setItem('dia4', "sexta")
})
dia4Loja.addEventListener('focus', (event) => {
    event.target.style.outlineColor = 'purple'
})

const dia5Loja = document.getElementById('dia5')
dia5Loja.addEventListener("change", (event) =>{
    window.localStorage.setItem("dia5", "sabado")
})
dia5Loja.addEventListener('focus', (event) => {
    event.target.style.outlineColor = 'purple'
})

const dia6Loja = document.getElementById('dia6')
dia6Loja.addEventListener("change", (event) =>{
    window.localStorage.setItem('dia6', "domingo")
})
dia6Loja.addEventListener('focus', (event) => {
    event.target.style.outlineColor = 'purple'
})

const abrirLoja = document.getElementById('abrir')
abrirLoja.addEventListener("change", (event) =>{
    window.localStorage.setItem('abrir', event.target.value)
})
abrirLoja.addEventListener('focus', (event) => {
    event.target.style.outlineColor = 'purple'
})

const fecharLoja = document.getElementById('fechar')
fecharLoja.addEventListener("change", (event) =>{
    window.localStorage.setItem('fechar', event.target.value)
})
fecharLoja.addEventListener('focus', (event) => {
    event.target.style.outlineColor = 'purple'
})

const submitForm = document.getElementById('submit')

submitForm.addEventListener('focus', (event) => {
    event.target.style.outlineColor = 'purple'
})

const formulario = document.getElementById('formulario')

formulario.addEventListener("submit", (event) =>{
    window.localStorage.setItem('formulario',"preparando envio...")
    event.preventDefault()
})