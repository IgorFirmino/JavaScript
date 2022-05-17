function verificar(){
    var data=new Date()
    var ano=data.getFullYear()
    var fano=document.getElementById('txtano')
    var res=document.getElementById('res')
    
    if(fano.value.length ==0 || fano.value > ano){
        window.alert('ERRO!!! Verifique os dados e tente novamente!')}
        else{var fsex=document.getElementsByName('radsex')
        var idade=ano - Number(fano.value)
        var gênero=''
        var img = document.createElement('img')
        img.setAttribute('id','foto')

        if(fsex[0].checked){gênero='Homem'
            if(idade>=00 && idade <=11){
                //criança
                img.setAttribute('src','criança-m.png')
            }else if(idade<= 18){
                //jovem
                img.setAttribute('src','adolescente m.png')
            }else if(idade < 64){
                //adulto
                img.setAttribute('src','adulto m.png')
            }else if(idade <130){
                //idoso
                img.setAttribute('src','velho.png')
            }
            } else if (fsex[1].checked){gênero='Mulher'
            if(idade>=00 && idade <=11){
                //criança
                img.setAttribute('src','criança f.png')
            }else if(idade<= 18){
                //jovem
                img.setAttribute('src','adolescente f.png')
            }else if(idade < 64){
                //adulto
                img.setAttribute('src','adulto-f.png')
            }else if(idade <130){
                //idoso 
                img.setAttribute('src','velha f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos ${gênero} com ${idade} anos.</p>`
        img.style.textAlign='center'
        res.appendChild(img)
    }
    
    
    
}