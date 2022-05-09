

function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagen')
    var data = new Date()
    var hora = data.getHours()
    //definir a hora
    //var hora = 14
    if (hora >= 0 && hora < 12) {
        //Morning
        img.src = 'img1.png'
        document.body.style.background = '##ffbf00'
        msg.innerHTML = `It's now ${hora} hours, the best time to say thank you is now. Write what you are grateful for in your gratitude journal!!`
    } else if (hora >= 12 && hora <= 18) {
        //Aftenion
        img.src = 'img2.png'
        document.body.style.background = '##ff8000'
        msg.innerHTML = `Now is ${hora} hours. “When you are grateful, fear disappears and abundance appears.”
        —Anthony Robbins`
    } else {
        //Nigh
        img.src = "img3.png"
        document.body.style.background = '#2093c3'
        msg.innerHTML = `It's now ${hora} hours, be grateful now. “No duty is more urgent than giving thanks.”
        —James Allen`
    }
}