console.log('Namaste Duniya');
let myAudioElement = new Audio('/music/1.mp3');


// making my audio play on clicking the master play/pause
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('progressBar');
let myGif = document.getElementById('myGift');


// Play/Pause
masterPlay.addEventListener('click', ()=>{
    if ( myAudioElement.paused || myAudioElement.currentTime == 0 ){
        myAudioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        myGif.style.opacity = 1;
    }
    else{
        myAudioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        myGif.style.opacity = 0;
    }
})

// updating master progress bar
myAudioElement.addEventListener('timeupdate', ()=>{
    let progressPerc = parseInt((myAudioElement.currentTime/myAudioElement.duration)*100);
    myProgressBar.value = progressPerc;
})


myProgressBar.addEventListener('change', ()=>{
    myAudioElement.currentTime = (myProgressBar.value*myAudioElement.duration)/100;
})


