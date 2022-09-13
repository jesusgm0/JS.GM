let b, h, area;
b= prompt("Informe o valor da base:")
h= prompt("Informe o valor da altura:")
area= (b*h)/2
if(b<= 0 || h<=0){
    alert(" Os valores são inválidos!")
}else{
    alert("O valor da Área é: "+ area)
}