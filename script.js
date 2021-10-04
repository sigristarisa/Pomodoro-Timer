const timer = ((min) => {
  // define minute to second
  let sec = min * 60;

  // get the element from html
  const minute = document.getElementById("minute");
  const second = document.getElementById("second");
  const startButton = document.getElementById("startButton");
  let timerStart = true;

  // make the button clickable
  startButton.addEventListener("click", () => {
    // change the background color when the timer starts
    document.body.style.backgroundColor = "#095809";

    // start the timer
    if (timerStart) {
      // set the interval to count down
      timerFunction = setInterval(() => {
        sec--;
        minute.innerText = String((sec - (sec % 60)) / 60).padStart(2, 0);
        second.innerText = String(sec % 60).padStart(2, 0);
      }, 1000);

      // change the button color and its text
      startButton.innerText = "Pause";
      startButton.style.backgroundColor = "#d11c1c";
      startButton.style.color = "#f8c464";
      // change the button color when hovered
      startButton.onmouseover = () => {
        startButton.style.color = "#d11c1c";
        startButton.style.backgroundColor = "#f8c464";
      };
      startButton.onmouseout = () => {
        startButton.style.color = "#f8c464";
        startButton.style.backgroundColor = "#d11c1c";
      };
      timerStart = !timerStart;
    }

    // pause the timer
    else {
      clearInterval(timerFunction);
      startButton.innerText = "Restart";
      timerStart = !timerStart;
    }
  });
})(25);
