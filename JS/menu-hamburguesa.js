const nav = document.querySelector("#nav")
const abrir = document.querySelector("#link7")
const cerrar = document.querySelector("#link6")

abrir.addEventListener("click", () => {
    nav.classList.add("visible")
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible")
})