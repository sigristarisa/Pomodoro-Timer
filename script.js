const timer = ((min) => {
  let sec = min * 60;

  const minute = document.getElementById("minute");
  const second = document.getElementById("second");
  const startButton = document.getElementById("startButton");

  const startTimer = () => {
    setInterval(() => {
      sec--;
      minute.innerText = String((sec - (sec % 60)) / 60).padStart(2, 0);
      second.innerText = String(sec % 60).padStart(2, 0);
    }, 1000);
  };

  startButton.onclick = startTimer;
})(25);
