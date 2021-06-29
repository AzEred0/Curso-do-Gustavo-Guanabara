let num = [5, 6, 7, 4 ,3]

//console.log(num.length) // fala o tamanho de itens do vetor
num.push(2) // adiciona o número ao vetor
num.sort() // ordena em ordem crescente os números do vetores
/*console.log(num)
for(let pos = 0; pos< num.length ; pos ++){
    console.log(num[pos])
}
*/

for(let pos in num){
    console.log(num[pos])
}

let pos = num.indexOf(1) // num.indexOf() serve para retornar o valor de determinada posição no vetor
if(pos==-1){
    console.log('Valor não encontrado')
}else{
    console.log(`sua posição é ${pos}`)
}
