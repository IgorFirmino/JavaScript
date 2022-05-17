var agora =new Date()
var hora =agora.getHours()
var hora =8
console.log(`Agora são exatamente ${hora} hora!`)
if(hora < 6){console.log('boa madrugada')}
else if(hora <=12){console.log('bom dia !')}
else if(hora <18){console.log('boa tarde !')}
else {console.log('Boa noite')}
