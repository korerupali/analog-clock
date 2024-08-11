setInterval(() => {
    date = new Date();
    hourTime = date.getHours();
    minTime = date.getMinutes();
    secTime = date.getSeconds();
    hourRotation = 30*hourTime + minTime/2;
    minRotation = 6*minTime;
    secRotation = 6*secTime;

    hour.style.transform = `rotate(${hourRotation}deg)`;
    minute.style.transform = `rotate(${minRotation}deg)`;
    second.style.transform = `rotate(${secRotation}deg)`;
}, 1000);