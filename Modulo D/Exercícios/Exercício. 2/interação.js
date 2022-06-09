function verificar(){
    var nasc = document.querySelector('input#txtano')
    var masc = document.querySelector('input#mas')
    var femi = document.querySelector('input#fem')
    var res = document.querySelector('div#res')
    var sex = document.getElementsByClassName('radsex')
    var nas = Number(nasc)
    var data = new Date
    var ano = data.getFullYear()
    var idade = ano - nas

    if(sex == masc){
        window.alert('asddasd')
    }else if(sex == femi){

    }

}