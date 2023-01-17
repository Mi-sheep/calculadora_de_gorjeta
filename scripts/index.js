let valor = 0
let porcemg = -1
let pessoas = 0
let botaoatualg = 0

function recebervalor() {
    valor = Number(document.querySelector("#bill-input").value)
    validacao()
}

function receberporcentagem(nm) {
    if (botaoatualg !== 0) {
        botaoatualg.classList.remove("buttom-selected")
    }

    if (nm === 0) {
        porcemg = Number(document.querySelector("#tip-input").value)
        validacao()
        return
    }

    porcemg = nm

    botaoatualg = document.querySelector(`input[value = "${nm}%"]`)
    botaoatualg.classList.add("buttom-selected")
    document.querySelector("#tip-input").value = ""

    validacao()
}

function recebernumpessoas() {
    pessoas = Number(document.querySelector("#people-input").value)
    validacao()
}

function validacao() {
    if (valor > 0 && porcemg > -1 && pessoas > 0) {
        calculartotais()
        return
    }
    return
}

function calculartotais() {
    const gorjetaporpessoa = ((valor / 100) * porcemg) / pessoas
    const totalporpessoa = valor / pessoas + gorjetaporpessoa

    const pgorjeta = document.querySelector("#tip-amount__result")
    pgorjeta.innerText = `$${gorjetaporpessoa.toFixed(2)}`

    const ptotal = document.querySelector("#total__result")
    ptotal.innerText = `$${totalporpessoa.toFixed(2)}`
}

function reset() {
    valor = 0
    porcemg = -1
    pessoas = 0

    document.querySelector("#bill-input").value = ""

    if (botaoatualg !== 0) {
        botaoatualg.classList.remove("buttom-selected")
    }

    botaoatualg = 0

    document.querySelector("#tip-input").value = ""

    document.querySelector("#people-input").value = ""

    const pgorjeta = document.querySelector("#tip-amount__result")
    pgorjeta.innerText = '$0.00'

    const ptotal = document.querySelector("#total__result")
    ptotal.innerText = '$0.00'
}