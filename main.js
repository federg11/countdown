const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');


function countTimer () {
    const countDownDate = new Date('12/31/2023 00:00:00').getTime();
    //con getTime me devuelve la cantidad de milisegundos que tiene esa fecha

    //convert to milliseconds
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    //calucate every second
    const interval = setInterval(() => {
    
        //get current date
    const now = new Date().getTime();
    const distance = countDownDate - now;
        //calculos a dias-horas-minutos y segundos
    daysEl.innerText = formatNumber(Math.floor(distance / day ));
    hoursEl.innerText = formatNumber(Math.floor((distance % day) / hour));
    minutesEl.innerText = formatNumber(Math.floor((distance % hour) / minute));
    secondsEl.innerText = formatNumber(Math.floor((distance % minute) / second));


    //cuando se llega a la fecha
    if(distance < 0) {
        document.getElementById('headline').innerText = 'llego el gran dia, vamos a disfrutarlo juntos';
        document.getElementById('countdown').style.display = 'none';

        //stop the interval
          clearInterval(interval);  
        }
    }, 1000);

}

function formatNumber(number) {
    if(number < 10) {
        return '0' + number;
    }
    return number;
}

countTimer();