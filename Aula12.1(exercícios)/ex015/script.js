function verificar(){
    var data = new Date()
    
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO]Verifique os dados e tente novamente')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            gênero = 'homem'
            if(idade >=0 && idade <10){
                img.setAttribute('src','fotomenino.png')
            }else if(idade <= 21){
                img.setAttribute('src','fotoOjovem.png')
            }else if(idade <= 50){
                img.setAttribute('src','fotoadulto.png')
            }else{
                img.setAttribute('src','fotoidoso.png')
            }
        
        }else if(fsex[1].checked){
            gênero = "mulher"
            if(idade >=0 && idade <10){
                img.setAttribute('src','fotomenina.png')
            }else if(idade <= 21){
                img.setAttribute('src','fotoAjovem.png')
            }else if(idade < 50){
                img.setAttribute('src','fotoadulta.png')
            }else{
                img.setAttribute('src','fotoidosa.png')
            }
        }
        res.style.textAlign= 'center'
        res.innerHTML = `Detectamos ${gênero} de ${idade} anos`
        res.appendChild(img)
        
    }

}