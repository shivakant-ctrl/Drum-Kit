let buttons = document.getElementsByClassName('drum')

// Find Key and Play Sound
function findAndPlay(text) {
    let soundName
    switch(text) {
        case 'w':
            soundName = 'tom-1'
            break
        case 'a':
            soundName = 'tom-2'
            break
        case 's':
            soundName = 'tom-3'
            break
        case 'd':
            soundName = 'tom-4'
            break
        case 'j':
            soundName = 'crash'
            break
        case 'k':
            soundName = 'kick-bass'
            break
        case 'l':
            soundName = 'snare'
            break
    }

    let soundUrl = 'sounds/' + soundName + '.mp3'
    let audio = new Audio(soundUrl)
    audio.play()
}

// Animate Button
function buttonAnimation(text) {
    document.querySelector('.' + text).classList.add('pressed')
    setTimeout(function() {
        document.querySelector('.' + text).classList.remove('pressed')
    }, 200)
    
}

// Detect Clicks
for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        let buttonContent = this.innerText
        findAndPlay(buttonContent)
        buttonAnimation(buttonContent)
    })
}

// Detect Keypresses
document.addEventListener('keydown', function(event) {
    let keyPressed = event.key
    findAndPlay(keyPressed)
    buttonAnimation(keyPressed)
})





