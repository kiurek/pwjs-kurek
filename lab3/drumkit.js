// document.body
document.addEventListener('keypress', onKeyPress)

let record = document.querySelectorAll("#startRecording");
const record1 = record[0];
const record2 = record[1];
const record3 = record[2];
const record4 = record[3];

let recordToPlay = document.querySelectorAll("#checkPlay");
const recordToPlay1 = recordToPlay[0];
const recordToPlay2 = recordToPlay[1];
const recordToPlay3 = recordToPlay[2];
const recordToPlay4 = recordToPlay[3];

let allSounds = [];
let soundArray1 = [];
let soundArray2 = [];
let soundArray3 = [];
let soundArray4 = [];

let customSoundArray = [];

let buttons = document.querySelectorAll(".record");
const allChannels = document.querySelector('#allChannels');
const selectedChannels = document.querySelector             ("#selectedChannels");

const button1 = buttons[0];
const button2 = buttons[1];
const button3 = buttons[2];
const button4 = buttons[3];

allChannels.addEventListener('click', () => {
    allSounds.forEach((element, i ) => {
        setTimeout(() => {
            playSound(element);
        }, i * 500);
    });
});

function saveCustomSound() {
    if (recordToPlay1.checked) {
        customSoundArray = [...soundArray1, ...customSoundArray];
    }
    if (recordToPlay2.checked) {
        customSoundArray = [...soundArray2, ...customSoundArray];
    }
    if (recordToPlay3.checked) {
        customSoundArray = [...soundArray3, ...customSoundArray];
    }
    if (recordToPlay4.checked) {
        customSoundArray = [...soundArray4, ...customSoundArray];
    };
}

selectedChannels.addEventListener("click", () => {
    saveCustomSound();

    customSoundArray.forEach((element, i) =>  {
        setTimeout(() => {
            playSound(element);
        }, i * 500);
    });
});

buttons.forEach((element) => {
    element.addEventListener("click", () => {
      if (element.className === "record1") {
        soundArray1.forEach((element, i) => {
          setTimeout(() => {
            playSound(element);
          }, i * 500);
        });
      } else if (element.className === "record2") {
        soundArray2.forEach((element, i) => {
          setTimeout(() => {
            playSound(element);
          }, i * 500);
        });
      } else if (element.className === "record3") {
        soundArray3.forEach((element, i) => {
          setTimeout(() => {
            playSound(element);
          }, i * 500);
        });
      } else if (element.className === "record4") {
        soundArray4.forEach((element, i) => {
          setTimeout(() => {
            playSound(element);
          }, i * 500);
        });
      }
    });
  });

  function saveSound(key) {
    allSounds.push(key);
    if (record1.checked) {
      soundArray1.push(key);
    } else if (record2.checked) {
      soundArray2.push(key);
    } else if (record3.checked) {
      soundArray3.push(key);
    } else {
      soundArray4.push(key);
    }
  }

  function onKeyPress(event) {
    const key = event.key;
  
    switch (key) {
      case "q":
        playSound("s1");
        saveSound("s1");
        break;
      case "w":
        playSound("s2");
        saveSound("s2");
        break;
      case "e":
        playSound("s3");
        saveSound("s3");
        break;
      case "r":
        playSound("s4");
        saveSound("s4");
        break;
      case "t":
        playSound("s5");
        saveSound("s5");
        break;
      case "a":
        playSound("s6");
        saveSound("s6");
        break;
      case "s":
        playSound("s7");
        saveSound("s7");
        break;
      case "d":
        playSound("s8");
        saveSound("s8");
        break;
      case "f":
        playSound("s9");
        saveSound("s9");
        break;
    }
  }
  
  function playSound(sound) {
    const audioTag = document.querySelector("#" + sound);
    audioTag.currentTime = 0;
    audioTag.play();
  }

/*
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

/*
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
    }
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

*/

// Date.now()