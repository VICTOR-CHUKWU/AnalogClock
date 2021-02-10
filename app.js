const secondsHand = document.querySelector('.second-hand');
const minuteHnad = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');



setInterval(setClockTime, 1000);

function setClockTime() {
    const getDate = new Date();
    const getSeconds = getDate.getSeconds()/60;
    const getMinutes = (getSeconds + getDate.getMinutes())/60;
    const getHours = (getMinutes + getDate.getHours())/12;


    rotateClock(secondsHand, getSeconds);
    rotateClock(minuteHnad, getMinutes);
    rotateClock(hourHand, getHours);
}

// console.log(setClockTime())

function rotateClock (element, rotation) {
    element.style.setProperty('--rotation', rotation * 360)
}
setClockTime()