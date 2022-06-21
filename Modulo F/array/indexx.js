var num = [3,6,2,4,1,5,8,33]
num.push(4)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length}`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(4)
if(pos == -1){
    console.log('Valor não encontrado')
}else{
    console.log(`O valor 8 está na posição ${pos}`)
}


