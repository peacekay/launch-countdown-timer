const countdown = () => {
  const endDate = new Date("December 31, 2024 00:00:00").getTime();
  const now = new Date().getTime();

  const timeDifference = endDate - now;

  const seconds = 1000;
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;

  let timeDays = Math.floor(timeDifference / days);
  let timeHours = Math.floor((timeDifference % days) / hours);
  let timeMinutes = Math.floor((timeDifference % hours) / minutes);
    let timeSeconds = Math.floor((timeDifference % minutes) / seconds);
    
    timeHours = timeHours < 10 ? '0' + timeHours : timeHours
    timeMinutes = timeMinutes < 10 ? "0" + timeMinutes : timeMinutes;
    timeSeconds = timeSeconds < 10 ? "0" + timeSeconds : timeSeconds;


    document.getElementById('days').innerHTML = timeDays
    document.getElementById("hours").innerHTML = timeHours;
    document.getElementById("minutes").innerHTML = timeMinutes;
    document.getElementById("seconds").innerHTML = timeSeconds;

    
};
setInterval(countdown, 1000)
