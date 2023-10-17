const song = [
    {
    title: "21 Guns",
    artist: "Green Day",
    mp3Path: "21 guns - Greenday.mp3"
    
    },
    {
     title: "99 Problems",
     artist: "Jay-Z",
    mp3Path: "99 Problems - Jay-Z.mp3"
    },
    
    {
    title: "A Milli",
    artist: " Lil Wayne",
    mp3Path: "A Milli - Lil Wayne.mp3"
    },

    {
    title: "Bye Bye Bye",
    artist: "NYSYNC",
    mp3Path: "Bye Bye Bye - NYSYNC.mp3"
    },

    {
    title: "Complicated",
    artist: "Avirl Lavinge",
    mp3Path: "Complicated - Avirl Lavinge.mp3"
    },

    {
    title: "Crazy",
    artist:"Gnarles Barkley",
    mp3Path: "Crazy - Gnarles Barkley.mp3"
    },

    {
    title: "Crazy In Love",
    artist: "Beyonce",
    mp3Path: "Crazy in Love - Beyonce.mp3"
    },

    {
    title: "Cry Me A river",
    artist: "Justin Timberlake",
    mp3Path: "Cry me a river - Justin Timberlake.mp3"
    },

    {
    title: "Hips Don't Lie",
    artist: "Shakira",
    mp3Path: "Hips don't lie - Shakira .mp3"
    },

    {
    title: "Hollaback Girl",
    artist: "Gwen Stefani",
    mp3Path: "Hollaback Girl - Gwen Stefani.mp3" 
    },

    {
    title: "In Da Club",
    artist: "50 Cent",
    mp3Path: "In Da Club - 50 cent.mp3"
    },

    {
    title: "Let Me Love You",
    artist: "Mario",
    mp3Path: "Let me love you - Mario.mp3"
    },

    {
    title: "Lose Yourself",
    artist: " Eminem",
    mp3Path: "Lose yourself - Eminem.mp3"
    },

    {
    title: "Misery Business",
    artist: "Paramore",
    mp3Path: "Misery Business - Paramore.mp3"   
    },

    {
    title: "Ms. Jackson",
    artist: "Outkast",
    mp3Path: "Ms. Jackson - Outkast.mp3" 
    },

    {
    title: "Pokerface",
    artist: "Lady Gaga",
    mp3Path: "Pokerface - Lady Gaga.mp3"
    },

    {
    title: "Pon De Replay",
    artist: "Rihanna",
    mp3Path: "Pon De Replay - Rihanna.mp3"
    },

    {
    title: "Toxic",
    artist: "Britney Spears",
    mp3Path: "Toxic - Britney Spears.mp3"
    },

    {
    title: "Work It",
    artist: "Missy Elliot",
    mp3Path: "Work It - Missy Elliot.mp3"
    },

    {
    title: "Yeah!",
    artist: "Usher",
    mp3Path: "Yeah! - Usher.mp3"
    }


    


]

let currentSongIndex = 0;


function playSong() {
    const songTitle = song[currentSongIndex].title;
    document.getElementById("song-title").textContent = songTitle;

    const audioElement = document.getElementById("audio-player");
    audioElement.src = song[currentSongIndex].mp3Path;
    audioElement.play();


    const options = generateOptions(currentSongIndex);
    displayOptions(options);

}



function generateOptions(currentIndex) {
    const options = [];
    const correctAnswer = song[currentIndex].title;

    while (options.length < 4) {
        const randomIndex = Math.floor(Math.random()* song.length);
        const randomTitle = song[randomIndex].title;
        if (options.indexOf(randomTitle)=== -1 && randomTitle !== correctAnswer) {
            options.push(randomTitle);
        }
    }
    options.push(correctAnswer);
    return shuffleArray(options);

}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}


function displayOptions(options) {
    const optionButtons = document.getElementById("option-buttons").getElementsByTagName("button");
    for (let i = 0; i < optionButtons.length; i++){
        optionButtons[i].textContent = options[i];
    }
}

function selectOption(button){
    const userGuess = button.textContent;
    document.getElementById("user-guess").value = userGuess;
}