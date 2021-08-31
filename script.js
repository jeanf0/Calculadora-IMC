var altura = document.getElementById("altura")
var peso = document.getElementById('peso')
var resultado = document.getElementById('res')

function calcular(){
    var a = Number(altura.value)
    var p = Number(peso.value)
    var res = Number(resultado.value)

    if(a.lenght == 0 || p.lenght == 0){
        alert("[ERRO] Digite as informações corretamente")
    } else if (a <= 0 || p <=0){
        alert("[ERRO] Digite as informações corretamente")
        } else{
            resultado.innerHTML =''
            res = p/(a * a)
            total = res.toFixed(2)
            resultado.innerHTML +=`O seu IMC é ${total}`
        }

    
    

}
