const pomodoroTimer = ((flowMin, restMin) => {
  // define minute to second
  let flowSec = flowMin * 60;
  let restSec = restMin * 60;

  // get the element from html
  const minute = document.getElementById("minute");
  const second = document.getElementById("second");
  let startButton = document.getElementById("startButton");
  startButton.className = "flow";
  const title = document.getElementById("title");
  let flowStart = true;
  let restStart = true;
  let flowCount = 0;

  // show the setting time
  minute.innerText = String((flowSec - (flowSec % 60)) / 60).padStart(2, 0);
  second.innerText = String(flowSec % 60).padStart(2, 0);

  startButton.addEventListener("click", () => {
    // ---------------------- FLOW ---------------------- //

    if (startButton.className === "flow") {
      // change the background color when the timer starts
      document.body.style.backgroundColor = "#095809";

      // start the flow timer
      if (flowStart) {
        // set the interval to count down
        flowTimer = setInterval(() => {
          if (flowSec > 0) {
            flowSec--;
            minute.innerText = String((flowSec - (flowSec % 60)) / 60).padStart(
              2,
              0
            );
            second.innerText = String(flowSec % 60).padStart(2, 0);
          } else if (flowSec === 0) {
            flowCount++;
            clearInterval(flowTimer);
            title.innerText = "Take a break!";
            startButton.className = "rest";
            startButton.innerText = "Start";
            minute.innerText = String((restSec - (restSec % 60)) / 60).padStart(
              2,
              0
            );
            second.innerText = String(restSec % 60).padStart(2, 0);
          }
        }, 100);

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
        flowStart = !flowStart;
      }
      // pause the timer
      else {
        clearInterval(flowTimer);
        startButton.innerText = "Continue";
        flowStart = !flowStart;
      }
    }
    // ---------------------- REST ---------------------- //
    else if (startButton.className === "rest") {
      if (restStart) {
        // set the interval to count down
        restTimer = setInterval(() => {
          if (restSec > 0) {
            restSec--;
            minute.innerText = String((restSec - (restSec % 60)) / 60).padStart(
              2,
              0
            );
            second.innerText = String(restSec % 60).padStart(2, 0);
          } else if (restSec === 0) {
            clearInterval(restTimer);
            startButton.className = "flow";
            title.innerText = "Let's get started!";
            startButton.innerText = "Start";
            minute.innerText = String((flowSec - (flowSec % 60)) / 60).padStart(
              2,
              0
            );
            second.innerText = String(flowSec % 60).padStart(2, 0);
          }
        }, 100);

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
        restStart = !restStart;
      }
      // pause the timer
      else {
        clearInterval(restTimer);
        startButton.innerText = "Continue";
        restStart = !restStart;
      }
    }
  });
})(0.5, 0.25);
