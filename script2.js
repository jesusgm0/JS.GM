let  N, sal, E, Tot;
N = prompt("Informe a quantidade de horas trabalhadas:")
sal = N*10
E = N - 50
Tot = E*20
if(N> 50){
    alert("O valor do salario total, é: "+ (Tot + sal)+"\n E o valor das horas extras é:" + Tot)
}else{
    alert("O valor do salario total é: "+ sal)}