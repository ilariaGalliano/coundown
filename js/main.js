const app = document.getElementById('app');

//const birthday = new Date('07 november 2021');
//console.log(birthday);

const second = 1000;
const minute = second * 60;
const hours = minute * 60;
const day = hours * 24; // milliseconds to calculate the countdown

function countdown(){
    const today = new Date();

    const date = document.getElementById('date').value;
    //const birthday = new Date('07 november 2021');
    const birthday = new Date(date).getTime();
    console.log(birthday);
    const timeSpan = birthday - today;
    console.log(timeSpan);

    if (timeSpan <= -day) {
        app.innerHTML = 'Hope you had a nice Birthday!';
        clearInterval(countdown);
        return;
    }
    if (timeSpan <= 0) {
        app.innerHTML = 'Happy Birthday!';
        clearInterval(countdown);
        return;
    } 

    const days = Math.floor(timeSpan / day);
    const hour = Math.floor((timeSpan % day) / hours);
    const minutes = Math.floor((timeSpan % hours) / minute);
    const seconds = Math.floor((timeSpan % minute)/ second);

    app.innerHTML = `${days} days ${hour} hours ${minutes} minutes ${seconds} seconds to your Birthday!!`;

}

setInterval(countdown, 4000);