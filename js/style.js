//add event lisenter on load when  keys are pressed down

window.addEventListener("keydown",(e)=>{
    //get the  keyscode
   
    //refrence the audio with  the data keys

    let songs = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    let key = document.querySelector(`div[data-keys= "${e.keyCode}"]`)
    
    

    songs.currentTime = 0;
    songs.play()
    




});