const resultDiv = document.querySelector("#lista-mensajes")
const form = document.getElementById("formulario")
window.addEventListener("load", function () {
    const storedMessages = JSON.parse(sessionStorage.getItem("messages")) || []

    for (const message of storedMessages) {
        createNewText(message)
    }
})

form.addEventListener("submit", function (e) {
    e.preventDefault()
    const mensaje = document.querySelector("#mensaje").value
    const storedMessages = JSON.parse(sessionStorage.getItem("messages")) || []
    storedMessages.push(mensaje)
    sessionStorage.setItem("messages", JSON.stringify(storedMessages))
    createNewText(mensaje)
})

function createNewText(message) {
    let newText = document.createElement("p")
    newText.textContent = message
    resultDiv.appendChild(newText)
}
