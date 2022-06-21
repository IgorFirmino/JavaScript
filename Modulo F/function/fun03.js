function fatorial(x){
    if(x == 1){
        return true
    }else{
        return x * fatorial(x-1)
    }
}

console.log(fatorial(5));