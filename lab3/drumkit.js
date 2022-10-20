// document.body
document.addEventListener('keypress', onKeyPress)

const KeyToSound = {
    'q': 's1',
    'w': 's2',
    'e': 's3',
    'r': 's4',
    't': 's5',
    'a': 's6',
    's': 's7',
    'd': 's8',
    'f': 's9',
}

function onKeyPress(event) {
    const key = event.key
    // ktory dzwiek w zaleznosci od klawisza
    const sound = KeyToSound[event.key]
    /*
    switch (event.key) {
        case 'a':
            sound = SOUND.clap
        break;
        case 's':
            sound = SOUND.hihat
        break;
    }*/
    playSound(sound)
}


function playSound(sound) {
    if (!sound) {
        return
    }
    const audioTag = document.querySelector('#' + sound)
    audioTag.currentTime = 0 
    audioTag.play()
}

// Date.now()