function carregar(){

    var msg=window.document.getElementById('msg')
    var img=window.document.getElementById('imagem')

    var data = new Date()
    var hora =data.getHours()
    var min = data.getMinutes()
    var dia = data.getDate()
    var mês = data.toLocaleDateString('pt-BR',{month: 'long'})
    var ano = data.getFullYear()

    if(hora>=0 && hora <12){
        img.src = 'fotomanha.png'
        document.body.style.background= "#d3bd63"
    }else if(hora>=12 && hora<18){
        img.src = 'fototarde.png'
        document.body.style.background= "#8c54af"
    }else{
        img.src ='fotonoite.png'
        document.body.style.background= "#252d9c"
    }

   

    msg.innerHTML= (`No momento são ${hora} horas e ${min} minutos do dia ${dia} de ${mês} do ano de ${ano}`)

}