const playbutton = document.querySelector('#play');
const resetbutton = document.querySelector('#reset');
const pausebutton = document.querySelector('#pause');
const lapbutton = document.querySelector('#lap');
const clearbutton = document.querySelector('#clear');
const minutes_display = document.querySelector('#minutes');
const seconds_display = document.querySelector('#seconds');
const centiseconds_display = document.querySelector('#centiseconds');
const lapList = document.querySelector('.laps');
const outer_circle = document.querySelector('.outercircle');
let centiseconds = 0;
let seconds = 0;
let minutes = 0;
let lapnum = 1;
let intervalId;
playbutton.addEventListener('click',start);
pausebutton.addEventListener('click',stop);
resetbutton.addEventListener('click',reset);
lapbutton.addEventListener('click',addlap);
clearbutton.addEventListener('click',clearlaps);

function start() {
    intervalId = setInterval(update_stopwatch, 10);
    pausebutton.classList.remove('hide');
    resetbutton.classList.remove('hide');
    lapbutton.classList.remove('hide');
    outer_circle.classList.add('animation-bg');
    

}
function update_stopwatch(){
    centiseconds++;
    if(centiseconds === 100){
        centiseconds = 0;
        seconds++;
    }
    if(seconds === 60){
        seconds = 0;
        minutes++;
    }
    centiseconds_display.innerHTML = centiseconds;
    seconds_display.innerHTML = String(seconds)+':';
    minutes_display.innerHTML = String(minutes)+':';

}
function stop(){
    clearInterval(intervalId);
    outer_circle.classList.remove('animation-bg');
}
function reset(){
    clearInterval(intervalId);
    outer_circle.classList.remove('animation-bg');
    centiseconds_display.innerHTML = '00';
    seconds_display.innerHTML = '00:';
    minutes_display.innerHTML = '00:';
    centiseconds=0;
    seconds=0;
    minutes=0;
    pausebutton.classList.add('hide');
    resetbutton.classList.add('hide');
    lapbutton.classList.add('hide');

}
function addlap(){
    const lapTime = '#'+String(lapnum)+"   "+String(minutes)+':'+String(seconds)+':'+String(centiseconds);
    clearbutton.classList.remove('hide');
    const lapItem = document.createElement('p');
    lapItem.classList.add('lap-number');
    lapItem.innerHTML = lapTime
    lapList.appendChild(lapItem);
    lapnum++;
    

}
function clearlaps(){
    for(var i=1;i<lapnum;i++){
        lastchild = lapList.lastChild;
        lapList.removeChild(lastchild);
    }
    lapnum = 1
    clearbutton.classList.add('hide');
   
}

