function calcular(){
    var num = document.getElementById('num')
    var tab = document.querySelector('select#seltab')

    if(num.value.length == 0){
        window.alert('ERRO - Digite um número')
    }else{
        var num =Number(num.value)
        for(var c = 1;c <=10;c++){
            tab.innerHTML=`${num} x ${c} = ${num*c}`
        }
    }
    
    
}
