const divh = document.getElementsByClassName('hora')[0]
const imagem = document.getElementsByClassName('img')[0]
const body = document.body
const conteiner = document.getElementsByClassName('principal')[0]
const footer = document.getElementById('credito')

const agora = new Date()
const hora = agora.getHours()
const min = agora.getMinutes()

divh.innerHTML = `Agora são ${hora}:${min}`

if(hora < 5){
    imagem.style.background = 'url(img/madrugada.jpg)'
    imagem.style.backgroundPosition = 'center 20%'
    imagem.style.backgroundSize = 'cover'
    body.style.background = 'linear-gradient(to top, #021221, #213651, #415270)'
    conteiner.style.color = 'white'
    conteiner.style.background = '#42526C'
    footer.style.color = 'white'
} else if(hora < 12){
    imagem.style.background = 'url(img/manha.jpg)'
    imagem.style.backgroundPosition = 'right center'
    imagem.style.backgroundSize = 'cover'
    body.style.background = '#FAF1BB'
    conteiner.style.background = 'white'
}
else if (hora > 12 && hora < 18){
    imagem.style.background = 'url(img/tarde.jpg)'
    imagem.style.backgroundPosition = 'right top'
    imagem.style.backgroundSize = 'cover'
    body.style.background = '#EE8A33'
    conteiner.style.background = '#F5A351'
    footer.style.color = 'white'

} else if(hora >= 18){
    imagem.style.background = 'url(img/noite.jpg)'
    imagem.style.backgroundPosition = 'center 70%'
    imagem.style.backgroundSize = 'cover'
    body.style.background = '#0F2426'
    conteiner.style.background = '#061E22'
    conteiner.style.color = 'white'
    credito.style.color = 'white'
}

if (min < 10){
    divh.innerText = `Agora são ${hora}:0${min}`
}

if (hora < 10){
    divh.innerText = `Agora são 0${hora}:${min}`
}

if (hora < 10 && min < 10){
    divh.innerText = `Agora são 0${hora}:0${min}`
}