var foto1=document.querySelector('div#foto')
var idadee=document.querySelector('input#idade')
var idade1=Number(idadee.value)
var texto=document.getElementById('text')
function cli() { 
    if(idade1 <18) {
        //texto.innerHTML+=`Você é uma criança!`
    img.src='criança.png'}
    else if(idade1 > 18){//texto.innerHTML=`adulto`
    img.src='adulto.png'}
}
