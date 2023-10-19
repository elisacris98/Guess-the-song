const songs = [
    {
    title: "21 Guns",
    artist: "Green Day",
    mp3Path: "SONGS/21 guns - Greenday.mp3"
    
    },
    {
     title: "99 Problems",
     artist: "Jay-Z",
    mp3Path: "SONGS/99 Problems - Jay-Z.mp3"
    },
    
    {
    title: "A Milli",
    artist: " Lil Wayne",
    mp3Path: "SONGS/A Milli - Lil Wayne.mp3"
    },

    {
    title: "Bye Bye Bye",
    artist: "NYSYNC",
    mp3Path: "SONGS/Bye Bye Bye - NYSYNC.mp3"
    },

    {
    title: "Complicated",
    artist: "Avirl Lavinge",
    mp3Path: "SONGS/Complicated - Avirl Lavinge.mp3"
    },

    {
    title: "Crazy",
    artist:"Gnarles Barkley",
    mp3Path: "SONGS/Crazy - Gnarles Barkley.mp3"
    },

    {
    title: "Crazy In Love",
    artist: "Beyonce",
    mp3Path: "SONGS/Crazy in Love - Beyonce.mp3"
    },

    {
    title: "Cry Me A River",
    artist: "Justin Timberlake",
    mp3Path: "SONGS/Cry me a river - Justin Timberlake.mp3"
    },

    {
    title: "Hips Don't Lie",
    artist: "Shakira",
    mp3Path: "SONGS/Hips don't lie - Shakira .mp3"
    },

    {
    title: "Hollaback Girl",
    artist: "Gwen Stefani",
    mp3Path: "SONGS/Hollaback Girl - Gwen Stefani.mp3" 
    },

    {
    title: "In Da Club",
    artist: "50 Cent",
    mp3Path: "SONGS/In Da Club - 50 cent.mp3"
    },

    {
    title: "Let Me Love You",
    artist: "Mario",
    mp3Path: "SONGS/Let me love you - Mario.mp3"
    },

    {
    title: "Lose Yourself",
    artist: " Eminem",
    mp3Path: "SONGS/Lose yourself - Eminem.mp3"
    },

    {
    title: "Misery Business",
    artist: "Paramore",
    mp3Path: "SONGS/Misery Business - Paramore.mp3"   
    },

    {
    title: "Ms. Jackson",
    artist: "Outkast",
    mp3Path: "SONGS/Ms. Jackson - Outkast.mp3" 
    },

    {
    title: "Pokerface",
    artist: "Lady Gaga",
    mp3Path: "SONGS/Pokerface - Lady Gaga.mp3"
    },

    {
    title: "Pon De Replay",
    artist: "Rihanna",
    mp3Path: "SONGS/Pon De Replay - Rihanna.mp3"
    },

    {
    title: "Toxic",
    artist: "Britney Spears",
    mp3Path: "SONGS/Toxic - Britney Spears.mp3"
    },

    {
    title: "Work It",
    artist: "Missy Elliot",
    mp3Path: "SONGS/Work It - Missy Elliot.mp3"
    },

    {
    title: "Yeah!",
    artist: "Usher",
    mp3Path: "SONGS/Yeah! - Usher.mp3"
    }

]

const songTitlePTag = document.getElementById("song-title")
const optionButtons = document.querySelectorAll(".optionBtn")
const audioElement = document.getElementById("songHolder");
const nextBtn = document.querySelector(".next")
const scoreboard = document.getElementById("score");
let currentSongIndex = 0;
let score = 0;
let songDuration = 15000; // 15 seconds
let answerSelectionTime = 5000; // 5 seconds
let songTimer;
let answerSelectionTimer;




function playSong() {
    // const songTitle = song[currentSongIndex].title;
    // document.getElementById("song-title").textContent = songTitle;

    if (currentSongIndex < songs.length){
        audioElement.pause()
        audioElement.currentTime = 0
        audioElement.src = songs[currentSongIndex].mp3Path;
        audioElement.play();

        songTimer = setTimeout(stopSong, songDuration);
        
    
        const options = generateOptions();
        displayOptions(options);

        if (currentSongIndex === 0) {
            score = 0;
            scoreboard.textContent = score;
        }
        // Set a timer for answer selection time
        answerSelectionTimer = setTimeout(() => {
            // Handle the case where no answer is selected in time
            console.log("Time's up for this song!");
            displayCorrectAnswer();
        }, songDuration + answerSelectionTime);

    } else {
        console.log("You got a score of ", score)
    }
}




playSong()

function stopSong() {
    audioElement.pause();
    clearTimeout(answerSelectionTimer);
    displayCorrectAnswer();
}

function displayCorrectAnswer(){
    const correctAnswer = songs[currentSongIndex].title;
    songTitlePTag.textContent = `Correct Answer: ${correctAnswer}`;
    optionButtons.forEach((btn) => {
        btn.disabled = true;
    });
}

function generateOptions() {
    const options = [];
    const correctAnswer = songs[currentSongIndex].title;

    options.push(correctAnswer);

    while (options.length < 4) {
        const randomIndex = Math.floor(Math.random()* songs.length);
        const randomTitle = songs[randomIndex].title;
        if (options.indexOf(randomTitle)=== -1 && randomTitle !== correctAnswer) {
            options.push(randomTitle);
        }
    }
    
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
    const optionButtons = document.querySelectorAll(".optionBtn")
    for (let i = 0; i < optionButtons.length; i++){
        optionButtons[i].textContent = options[i];
    }
}

function selectOption(button){
    // Check User choice against correct answer
    const userGuess = button.textContent;
    const answer = songs[currentSongIndex].title



    if (userGuess === answer) {
        score++
        scoreboard.textContent = score;
        console.log("You got it right")
    } else {
        console.log("You wrong!")
    }

    songTitlePTag.textContent = answer;

    // Disable all buttons after user selection
    optionButtons.forEach(btn => {
        btn.disabled = true
    })

    // Pause currently playing song
    audioElement.pause()
}

nextBtn.addEventListener("click", () => {
    currentSongIndex++
    songTitlePTag.textContent = "";

    optionButtons.forEach(btn => {
        btn.disabled = false
    });
    
    
    playSong()
});

function startGame() {
    document.getElementById("start-button").disabled = true;
    playSong();
}

function nextSong() {
    currentSongIndex++;
    songTitlePTag.textContent = "";
    optionButtons.forEach(btn => {
        btn.disabled = false;
    });
    playSong();
}

function startGame() {
    const startButton = document.getElementById("start-button");
    startButton.style.display = "none"; 
    playSong();
}

