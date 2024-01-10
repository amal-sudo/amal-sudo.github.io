let input1 = window.prompt("Enter the number of minutes:");

if (input1 < 0 || isNaN(input1)) {
    alert('Invalid input. Please enter a positive number of minutes.');
} 
else {
    const countdown = document.getElementById('timer');
    countdown.innerHTML = `${input1}:00`;
    let time = input1 * 60;
    let counting;

    function myfunction() {
        const min = Math.floor(time / 60);
        let seconds = time % 60;

        seconds = seconds < 10 ? '0' + seconds : seconds;

        countdown.innerHTML = `${min}:${seconds}`;

        time--;

        if (time < 0) {
            clearInterval(counting);
            alert('Countdown has finished!');
        }
    }

    function pause() {
        clearInterval(counting);
    }

    function play() {
        counting = setInterval(myfunction, 1000);
    }

    function reset() {
        clearInterval(counting);
        countdown.innerHTML = "00:00";
        input1 = window.prompt("Enter the number of minutes:");
        if (input1 >= 0 && !isNaN(input1)) {
            countdown.innerHTML = `${input1}:00`;
            time = input1 * 60;
            counting = setInterval(myfunction, 1000);
        } else {
            alert('Invalid input. Please enter a positive number of minutes.');
        }
    }

    // Initial setup
    counting = setInterval(myfunction, 1000);
    if (interval = 0) {
        stopTimer(); 
    }
}

function stopTimer() {
    clearInterval(interval);
}