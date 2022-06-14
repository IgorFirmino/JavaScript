function contar(){
    var formulario_inicio = document.querySelector("input#inicio")
    var formulario_fim = document.querySelector("input#fim")
    var formulario_passo = document.querySelector("input#passo")
    var res = document.querySelector("div#res")
    var inicio = Number(formulario_inicio.value)
    var fim = Number(formulario_fim.value)
    var passo = Number(formulario_passo.value)
    
    if (passo == 0 || inicio == 0 || fim == 0){
        innerHTML='Impossível contar'
       // window.alert("[ERRO] falta dados")
    }else{
        res.innerHTML='Contando: <br>'
        if(passo <= 0){
            window.alert('Passo inválido considerando PASSO 1')
            passo = 1
        }
        if (inicio < fim){
            for(var c = inicio; c < fim ; c += passo){
                res.innerHTML +=`${c} \u{1f449}`
            }
        }else{
            for(var c = inicio; c >= fim; c -= passo){
                res.innerHTML +=`${c} \u{1f449}`
            }
        }
    }
    res.innerHTML+=`\u{1f3c1}`
   
}