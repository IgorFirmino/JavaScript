let pessoa ={
nome:'Agnes Mariana Pereira',
idade:21,
altura:1.58,
sexo:'F',
peso:62,
calculo_imc(){
     return this.peso /(this.altura * this.altura)
    }
}
console.log(pessoa.calculo_imc())
if (pessoa.calculo_imc() < 18.5){
    console.log('Magreza')
}else if (pessoa.calculo_imc() >= 18.5 && pessoa.calculo_imc() <= 24.9){
    console.log('Normal')
}else if (pessoa.calculo_imc() >= 25 && pessoa.calculo_imc() <= 29.9){
    console.log('Sobrepeso')
}else if (pessoa.calculo_imc() >= 30 && pessoa.calculo_imc() <= 34.9){
    console.log('Obesidade grau I')
}else if (pessoa.calculo_imc() >= 35 && pessoa.calculo_imc() <= 39.9){
    console.log('Obesidade grau II')
}else{
    console.log('Obesidade grau III')
}
