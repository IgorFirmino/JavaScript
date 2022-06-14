function verificar(){
    var formu = document.querySelector('input#txtano')
    var fano =Number(formu.value)
    var res = document.querySelector('div#res')
    var data = new Date()
    var ano = data.getFullYear()
    var img = document.createElement('img')
    img.setAttribute('id','foto')

    if(fano == 0 || fano > ano){
        window.alert('[ERRO] - Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano
        var genero = ''
        if (fsex[0].checked){
            genero = 'masculino'     
            if(idade > 0 && idade < 10){
                img.setAttribute('src', 'criança-m.png')
            }else if(idade >= 10 && idade < 21){
                img.setAttribute('src', 'adolescente-m.png')
            }else if(idade < 50){
                img.setAttribute('src', 'adulto m.png')
            }else{
                img.setAttribute('src', 'velho.png')
            }
        }else if (fsex[1].checked){
            genero = 'feminino'
            if(idade > 0 && idade < 10){
                img.setAttribute('src', 'criança f.png')
            }else if(idade >= 10 && idade < 21){
                img.setAttribute('src', 'adolescente f.png')
            }else if(idade < 50){
                img.setAttribute('src', 'adulto-f.png')
            }else{
                img.setAttribute('src', 'velha f.png')
            }
        }

        res.style.textAlign ='center'
        res.innerHTML=`Detectamos ${genero} com ${idade} Anos.`
        res.appendChild(img)
    }
    
}