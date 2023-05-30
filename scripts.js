function calcular (n1, n2){
    var n1=parseFloat(document.getElementById("n1").value)
    var n2=parseFloat(document.getElementById("n2").value)
    var selector= document.getElementById("selector").value
    var resultadoGet = document.getElementById("resultado");
switch (selector){
    case '+':
        var soma = (n1 + n2)
        resultadoGet.textContent = soma
        document.getElementById("resultado").innerHTML = `O resultado da soma de ${n1} + ${n2} é = ${soma}`
        break
    case '-':
        var sub = (n1 - n2)
        resultadoGet.textContent = sub
        document.getElementById("resultado").innerHTML = `O resultado da subtração de ${n1} - ${n2} é = ${sub}`
        break
    case 'x':
        var mult = (n1 * n2)
        resultadoGet.textContent = mult
        document.getElementById("resultado").innerHTML = `O resultado da multiplicação de ${n1} x ${n2} é = ${mult}`
        break
    case '/':
        var div = (n1 / n2)
        resultadoGet.textContent = div
        document.getElementById("resultado").innerHTML = `O resultado da divisão de ${n1} / ${n2} é = ${div.toFixed(2)}`
        break        
    }
if (isNaN(n1) || isNaN(n2))
    document.getElementById("resultado").innerHTML = "Valor inválido por favor inserir valor válido"

}

