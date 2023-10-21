const time = document.getElementsByTagName('span');
const controls = document.getElementsByTagName('button');
const watch = document.getElementsByClassName('main-wraper');

let seconds = 0;
let minutes = 0;
let hours = 0;


// Control Function
let control = ()=>{
    let interval = setInterval(() => {
        seconds++;
        if(seconds === 60){
        seconds = 0;
        minutes++;
        }
        if(minutes === 60){
        minutes = 0;
        hours++;
        }
        time[0].innerHTML = hours < 10 ? `0${hours}` : hours;
        time[1].innerHTML = minutes < 10 ? `0${minutes}` : minutes;
        time[2].innerHTML = seconds < 10 ? `0${seconds}` : seconds;

    }, 1000);
    controls[0].disabled = true;
    controls[2].disabled = true;
    controls[1].addEventListener('click', () => {
        clearInterval(interval);
        controls[2].disabled = false;
        controls[0].disabled = false;
        watch[0].style.animationPlayState = "paused";
    });

    watch[0].style.animation = "glow-background 1s 1s infinite";
}



// Start Button , Stop Button
controls[0].addEventListener('click', control)



// Reset Button
controls[2].addEventListener('click', () => {
    seconds = 0;
    minutes = 0;
    hours = 0;
  time[0].innerHTML = "00";
  time[1].innerHTML = "00";
  time[2].innerHTML = "00";
  watch[0].style.animation = "none";
});