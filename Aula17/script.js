let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []


function isNumero(n){
    if(Number(n) >= 1 && Number(n)<=100){
        return true
    }else{
        return false
    }
}

function inLista(n,l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function Adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} foi adicionado`
        lista.appendChild(item)
        res.innerHTML= ''
    }else{
        window.alert('Valor inválido ou já adicionado')
    }
    num.value = ''
    num.focus()
}

function Finalizar(){
    if(valores.length == 0){
        window.alert('Adicione valores antes de finalizar')
    }else{
        //let total = valores.length
        let maior = valores[0]
        let menor = valores[0] 
        let soma = 0
        let media = 0
        
        for(let pos in valores){
            soma += valores[pos]
            media = soma/valores.length
            
            if(valores[pos] > maior)
                maior = valores[pos]
            
            if(valores[pos] < menor) 
                menor=valores[pos]
        }
        
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${valores.length} números adicionados </p>`
        res.innerHTML += `<p>O maior valor adicionado foi ${menor} </p>`
        res.innerHTML += `<p>O menor valor adicionado foi ${maior} </p>`
        res.innerHTML += `<p>A soma dos números é ${soma} </p>`
        res.innerHTML += `<p>A média dos números é ${media} </p>`


    }
}
