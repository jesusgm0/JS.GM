let ind
ind = prompt("Informe o índice de poluição:")
if(ind>= 0.05 && ind<= 0.25){
    alert(" O índice de poluição é Aceitável, não é necessário convocar nenhum grupo industrial.")
}else if( ind>= 0.3 && ind< 0.4){
    alert(" O nível de poluição é Intermédiario, e as indústrias do grupo 1 devem suspender suas atividades. ")
}else if(ind>= 0.4 && ind< 0.5){
    alert("O nível de poluição é Alto, e as indústrias dos grupos 1 e 2 devem suspender suas atividades.")
}else if(ind>= 0.5){
    alert(" O nível de poluição é Grave, e todos os grupos devem suspender suas atividades. ")
}