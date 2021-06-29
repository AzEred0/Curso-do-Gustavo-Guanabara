var horario = new Date()
var horario3= Date() 
var hora = horario.getHours()
var min = horario.getMinutes()
var seg = horario.getSeconds()

var gmt = horario.toGMTString() 
var str = horario.toLocaleTimeString() 
var data = horario.toLocaleDateString() 

console.log(`Agora são exatamente ${hora +':'+ min + ':' + seg} horas`) // hora local porém manualmente por linha de código

if(hora<6 || hora>=23){
    console.log('Tenha uma boa madrugada')
}
else if(hora<12){
    console.log('Tenha um bom dia')
}else if(hora<=18){
    console.log('Tenha uma boa tarde')
}else{
    console.log('Tenha uma boa noite')
}

console.log(str) // hora local
console.log(gmt) // hora e data de acordo com greenwich
console.log(data) // data local
console.log(horario3) // hora e data de acordo com Brasília