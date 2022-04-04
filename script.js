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
        return 0.500
    }

    else{
        return 0.300
    }
}

function cervejapp(duracao){
    if(duracao >= 5){
        return 2300
    }

    else{
        return 1300
    }
}

function refrigerantepp(duracao){
    if(duracao >= 4){
        return 600
    }

    else{
        return 400
    }
}

