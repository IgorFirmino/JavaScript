function calcular(){
    var num = document.getElementById('num')
    var tab = document.getElementById('seltab')

    if(num.value.length == 0){
        window.alert('ERRO - Digite um número')
    }else{
        var n1 =Number(num.value)
        for(var c = 1;c <= 10; c++){
            var item = document.createElement('option')
            item.text = `${n1} x ${c} = ${n1 * c}`
            tab.appendChild(item)
        }
    } 
}
