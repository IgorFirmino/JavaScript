function carregar() {
    var msg = window.document.querySelector('div#msg')
    var img = window.document.getElementById('imagem')
    var date = new Date()
    //var horas = date.getHours()
   // var horas = getMinutes()
   var horas = 21
    msg.innerHTML = `Agora são ${horas} horas.`

    if(horas > 0 && horas < 12){
        img.src = 'fotos/manhã.png'
        document.body.style.background ='#e2cd9f'
    }else if(horas >= 12 && horas <= 18){
        img.src = 'fotos/tarde.png'
        document.body.style.background ='#BAA29D'
    }else {
        img.src = 'fotos/noite.png'
        document.body.style.background ='#103778'
    }
}
