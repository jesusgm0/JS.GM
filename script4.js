let num
num = prompt("Informe um número:")
if(num %2==0 && num >=0){
    alert("O número que você digitou foi: "+ num+", e ele é par e positivo")
}else if(num %2 != 0 && num >=0){
    alert("O número que você digitou foi: "+ num+ ", e ele é ímpar e positivo")
}else if(num%2==0 && num <0){
    alert("O número que você digitou foi: "+ num+ ", e ele par e negativo")
}else if(num %2 !=0 && num <0){
    alert("O número que você digitou foi: "+ num+ ", e ele é ímpar e negativo")
}