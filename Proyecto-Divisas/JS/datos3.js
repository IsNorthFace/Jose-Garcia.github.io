var cantidad1 = document.getElementById("cantidad1")
cantidad1.addEventListener('keyup',convertirmoneda)
txtResultado1 = document.getElementById("resultado1")

unidad1 = document.getElementById("unidad1")
unidad1.addEventListener('change',convertirmoneda)

unidad2 = document.getElementById("unidad2")
unidad2.addEventListener('change',convertirmoneda)

var cantidad2 = document.getElementById("cantidad2")
cantidad2.addEventListener('keyup',convertirmedida)
txtResultado2 = document.getElementById("resultado2")

unidad3 = document.getElementById("unidad3")
unidad3.addEventListener('change',convertirmedida)

unidad4 = document.getElementById("unidad4")
unidad4.addEventListener('change',convertirmedida)

var resultado1
var resultado2

function convertirmoneda() {
    if(cantidad1.value==''){
        return
    }

    numero1 = cantidad1.value
    numero1 = parseFloat(numero1)


    if(unidad1.value=="Dolar" && unidad2.value=="Dolar"){
        resultado1 = numero1 * 1
        txtResultado1.innerHTML = numero1 + " Dolares equivalen a " + resultado1 + " Dolares"
    }
    if(unidad1.value=="Dolar" && unidad2.value=="Euro"){
        resultado1 = numero1 * 0.94
        txtResultado1.innerHTML = numero1 + " Dolares equivalen a " + resultado1 + " Euros"
    }
    if(unidad1.value=="Dolar" && unidad2.value=="Peso"){
        resultado1 = numero1 * 735
        txtResultado1.innerHTML = numero1 + " Dolares equivalen a " + resultado1 + " Pesos Argentinos"
    }

    if(unidad1.value=="Euro" && unidad2.value=="Dolar"){
        resultado1 = numero1 * 1.07
        txtResultado1.innerHTML = numero1 + " Euros equivalen a " + resultado1 + " Dolares"
    }
    if(unidad1.value=="Euro" && unidad2.value=="Euro"){
        resultado1 = numero1 * 1
        txtResultado1.innerHTML = numero1 + " Dolares equivalen a " + resultado1 + " Euros"
    }
    if(unidad1.value=="Euro" && unidad2.value=="Peso"){
        resultado1 = numero1 / 380
        txtResultado1.innerHTML = numero1 + " Euros equivalen a " + resultado1 + " Pesos Argentinos"
    }

    if(unidad1.value=="Peso" && unidad2.value=="Dolar"){
        resultado1 = numero1 / 735
        txtResultado1.innerHTML = numero1 + " Pesos Argentinos equivalen a " + resultado1 + " Dolares"
    }
    if(unidad1.value=="Peso" && unidad2.value=="Euro"){
        resultado1 = numero1 * 380
        txtResultado1.innerHTML = numero1 + " Pesos Argentinos equivalen a " + resultado1 + " Euros"
    }
    if(unidad1.value=="Peso" && unidad2.value=="Peso"){
        resultado1 = numero1 * 1
        txtResultado1.innerHTML = numero1 + " Pesos Argentinos equivalen a " + resultado1 + " Pesos Argentinos"
    }
}

function convertirmedida(){
    if(cantidad2.value==''){
        return
    }
    
    numero2 = cantidad2.value
    numero2 = parseFloat(numero2)

    if(unidad3.value=="Kilometros" && unidad4.value=="Kilometros"){
        resultado2 = numero2 * 1
        txtResultado2.innerHTML = numero2 + " Kilometros equivalen a " + resultado2 + " Kilometros"
    }
    if(unidad3.value=="Kilometros" && unidad4.value=="Centimetros"){
        resultado2 = numero2 * 100000
        txtResultado2.innerHTML = numero2 + " Kilometros equivalen a " + resultado2 + " Centimetros"
    }
    if(unidad3.value=="Kilometros" && unidad4.value=="Milimetros"){
        resultado2 = numero2 * 1000000
        txtResultado2.innerHTML = numero2 + " Kilometros equivalen a " + resultado2 + " Milimetro"
    }

    if(unidad3.value=="Centimetros" && unidad4.value=="Kilometros"){
        resultado2 = numero2 / 100000
        txtResultado2.innerHTML = numero2 + " Centimetros equivalen a " + resultado2 + " Kilometros"
    }
    if(unidad3.value=="Centimetros" && unidad4.value=="Centimetros"){
        resultado2 = numero2 * 1
        txtResultado2.innerHTML = numero2 + " Centimetros equivalen a " + resultado2 + " Centimetros"
    }
    if(unidad3.value=="Centimetros" && unidad4.value=="Milimetros"){
        resultado2 = numero2 * 10
        txtResultado2.innerHTML = numero2 + " Centimetros equivalen a " + resultado2 + " Milimetros"
    }

    if(unidad3.value=="Milimetros" && unidad4.value=="Kilometros"){
        resultado2 = numero2 / 100000
        txtResultado2.innerHTML = numero2 + " Milimetros equivalen a " + resultado2 + " Kilometros"
    }
    if(unidad3.value=="Milimetros" && unidad4.value=="Centimetros"){
        resultado2 = numero2 / 10
        txtResultado2.innerHTML = numero2 + " Milimetros equivalen a " + resultado2 + " Centimetros"
    }
    if(unidad3.value=="Milimetros" && unidad4.value=="Milimetros"){
        resultado2 = numero2  * 1
        txtResultado2.innerHTML = numero2 + " Milimetros equivalen a " + resultado2 + " Milimetros"
    }
}