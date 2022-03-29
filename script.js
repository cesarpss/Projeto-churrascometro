// carne - 400gr por pessoa + 6horas 650gr
// cerveja -1200ml p/ pessoas + 6horas 2000ml
// refrigerante/agua - 1000ml por pessoa + 6horas 1500ml
// criança vale por 0,5

  

function calcular(){  
var nome = document.getElementById("nome").value
var adulto = document.getElementById("adulto").value
var adulto0alcool = document.getElementById("adulto2").value
var criancas = document.getElementById("crianca").value
var duracao = document.getElementById("duracao").value
        
var resultado = document.getElementById("resultado")   
    
var qtdCarne = carnepp(duracao) * adulto + (carnepp(duracao) / 2 * criancas)
var qtdcerveja = cervejapp(duracao) * (adulto - adulto0alcool)
var qtdbebidas = (refrigerantepp(duracao) / 3 * adulto) + (refrigerantepp(duracao) * adulto0alcool) + (refrigerantepp(duracao) * criancas)

resultado.innerHTML = `<h4>${(nome)}, para o seu churrasco você irá precisar de:</h4>`
resultado.innerHTML += `<li>${Math.ceil(qtdCarne)} kg de carne</li>`
resultado.innerHTML += `<li>${Math.ceil(qtdcerveja / 1000)} litros de cerveja</li>`
resultado.innerHTML += `<li>${Math.ceil(qtdbebidas / 1000)} litros de refrigerante/suco</li>`
}

function carnepp(duracao){
    if(duracao >= 4){
        return 0.650
    }

    else{
        return 0.450
    }
}

function cervejapp(duracao){
    if(duracao >= 5){
        return 2800
    }

    else{
        return 1800
    }
}

function refrigerantepp(duracao){
    if(duracao >= 4){
        return 1000
    }

    else{
        return 500
    }
}

