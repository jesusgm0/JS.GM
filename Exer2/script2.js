let vlIn, result, taxa, mes
taxa = 0.007
vlIn = prompt("Informe o valor inicial depositado")
mes = prompt("Informe a quantidade de meses da aplicação: ")
result = parseFloat(vlIn) + parseFloat(vlIn * taxa* mes)
alert("O valor total da aplicação é :" + result.toFixed(2))