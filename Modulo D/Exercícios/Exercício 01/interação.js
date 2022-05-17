var msg=document.getElementById('msg')
var img=document.getElementById('imagem')
var data=new Date()
//var hora=data.getHours()
var hora =17
msg.innerHTML=`<p>Agora são exatamente ${hora} hora.</p>`
if(hora >=0 && hora<12){
    img.src='manhã.png'
    msg.innerHTML+='Bom Dia!'
    document.body.style.backgroundColor='#d4bdb4'}
else if(hora >=12 && hora<18){img.src='tarde.png'
    msg.innerHTML+='Boa tarde!'
    document.body.style.backgroundColor='#bd7222'
    }
else if(hora >=18 && hora <=23)
    {img.src='noite.png'
    msg.innerHTML+='Boa noite!'
    document.body.style.backgroundColor='#1d272f'}