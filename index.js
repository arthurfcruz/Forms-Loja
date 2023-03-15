const nomeLoja = document.getElementById('nome')
nomeLoja.addEventListener("change", (event) =>{
    console.log(event.target.value)
})
nomeLoja.addEventListener('focus', (event) => {
    event.target.style.outlineColor = 'purple'
})

const enderecoLoja = document.getElementById('endereco')
enderecoLoja.addEventListener("change", (event) =>{
    console.log(event.target.value)
})
enderecoLoja.addEventListener('focus', (event) => {
    event.target.style.outlineColor = 'purple'
})

const diaLoja = document.getElementById('dia')
diaLoja.addEventListener("change", (event) =>{
    console.log("segunda")
})
diaLoja.addEventListener('focus', (event) => {
    event.target.style.outlineColor = 'purple'
})

const dia1Loja = document.getElementById('dia1')
dia1Loja.addEventListener("change", (event) =>{
    console.log("terca")
})
dia1Loja.addEventListener('focus', (event) => {
    event.target.style.outlineColor = 'purple'
})

const dia2Loja = document.getElementById('dia2')
dia2Loja.addEventListener("change", (event) =>{
    console.log("quarta")
})
dia2Loja.addEventListener('focus', (event) => {
    event.target.style.outlineColor = 'purple'
})

const dia3Loja = document.getElementById('dia3')
dia3Loja.addEventListener("change", (event) =>{
    console.log("quinta")
})
dia3Loja.addEventListener('focus', (event) => {
    event.target.style.outlineColor = 'purple'
})

const dia4Loja = document.getElementById('dia4')
dia4Loja.addEventListener("change", (event) =>{
    console.log("sexta")
})
dia4Loja.addEventListener('focus', (event) => {
    event.target.style.outlineColor = 'purple'
})

const dia5Loja = document.getElementById('dia5')
dia5Loja.addEventListener("change", (event) =>{
    console.log("sabado")
})
dia5Loja.addEventListener('focus', (event) => {
    event.target.style.outlineColor = 'purple'
})

const dia6Loja = document.getElementById('dia6')
dia6Loja.addEventListener("change", (event) =>{
    console.log("domingo")
})
dia6Loja.addEventListener('focus', (event) => {
    event.target.style.outlineColor = 'purple'
})

const abrirLoja = document.getElementById('abrir')
abrirLoja.addEventListener("change", (event) =>{
    console.log(event.target.value)
})
abrirLoja.addEventListener('focus', (event) => {
    event.target.style.outlineColor = 'purple'
})

const fecharLoja = document.getElementById('fechar')
fecharLoja.addEventListener("change", (event) =>{
    console.log(event.target.value)
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
    console.log("preparando envio...")
    event.preventDefault()
})