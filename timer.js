let input1= window.prompt("minutes:");
if (input1<0){
    alert('unvalid');
    let input1= window.prompt("minutes:");
    const countdown = document.getElementById('timer');
countdown.innerHTML = `${input1}:00`;
let time= input1*60;


let counting= setInterval(myfunction, 1000);

function myfunction(){
    const min= Math.floor(time/60);
    let seconds= time %60;

    seconds= seconds < 10 ? '0' + seconds : seconds;

    countdown.innerHTML = `${min}:${seconds}`;

    time--;
    
}


function pause(){
    clearInterval(counting);
}

function play(){
    counting= setInterval(myfunction, 1000);
    myfunction();
}

function reset(){
    clearInterval(counting);
    countdown.innerHTML = "00:00";
    input1= window.prompt("minutes:");
    countdown.innerHTML = `${input1}:00`;
    time= input1*60;
    counting= setInterval(myfunction, 1000);
}
}
else{
const countdown = document.getElementById('timer');
countdown.innerHTML = `${input1}:00`;
let time= input1*60;


let counting= setInterval(myfunction, 1000);

function myfunction(){
    const min= Math.floor(time/60);
    let seconds= time %60;

    seconds= seconds < 10 ? '0' + seconds : seconds;

    countdown.innerHTML = `${min}:${seconds}`;

    time--;
    
}


function pause(){
    clearInterval(counting);
}

function play(){
    counting= setInterval(myfunction, 1000);
    myfunction();
}

function reset(){
    clearInterval(counting);
    countdown.innerHTML = "00:00";
    input1= window.prompt("minutes:");
    countdown.innerHTML = `${input1}:00`;
    time= input1*60;
    counting= setInterval(myfunction, 1000);
}}
