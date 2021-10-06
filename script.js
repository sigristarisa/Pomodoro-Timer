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

  // ------------------------- FLOW ------------------------- //
  if (startButton.className === "flow") {
    startButton.addEventListener("click", () => {
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
            startButton.className = "rest";
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
    });
  } else if (startButton.className === "rest") {
    startButton.addEventListener("click", () => {
      console.log("hi from the rest");
    });
  }
})(0.25, 0.25);
