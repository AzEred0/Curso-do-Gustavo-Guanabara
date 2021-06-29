function calcular(){

    let inicio = document.getElementById('txt1')
    let fim = document.getElementById('txt2')
    let passo = document.getElementById('txt3')
    let res = document.getElementById('res')
    
    if(inicio.value.length==0 || fim.value.length==0 || passo.value.length==0){
        window.alert('[ERRO]Faltam dados a ser preenchidos')
    }else{
        res.innerHTML = 'Contando:'
        
        let num1 = Number(inicio.value)
        let num2 = Number(fim.value)
        let num3 = Number(passo.value)
        if(num3 <= 0){
            num3=1
        }
        if(num1<num2){
            for(let c = num1;c <= num2; c += num3){
                res.innerHTML += `${c} \u{27A1}`
            }
        }else{
            for(let c = num1; c >=num2; c -=num3){
                res.innerHTML += `${c} \u{27A1}`
            }
        }
        res.innerHTML += `\u{1F6D1}`
    }


}