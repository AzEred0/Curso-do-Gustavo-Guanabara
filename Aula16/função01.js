function parimpar(n){ // n é nosso parâmetro
    
    if(n%2==0){       // a operação matemática dentro do IF é nossa ação
        return 'par'  // par e ímpar são nossos retornos 
    }else{
        return 'ímpar'
    }
}
let res = parimpar(8) // essa é a nossa chamada pra verificar a ação

console.log(`Meu número é ${res}`)