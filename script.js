const pomodoroTimer = ((flowMin, breakMin) => {
  // define minute to second
  let flowSec = flowMin * 60;
  let breakSec = breakMin * 60;

  // get the element from html
  const minute = document.getElementById("minute");
  const second = document.getElementById("second");
  let startButton = document.getElementById("startButton");
  startButton.classList.add("flow");
  const title = document.getElementById("title");
  let flowStart = true;
  let flowCount = 0;

  // show the setting time
  minute.innerText = String((flowSec - (flowSec % 60)) / 60).padStart(2, 0);
  second.innerText = String(flowSec % 60).padStart(2, 0);

  // ------------------------- FLOW ------------------------- //
  if (startButton.className === "flow") startButton.onclick = flow();
  else if (startButton.className === "break")
    startButton.onclick = breakStart();

  const flow = () => {
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
          startButton.classList.remove("flow");
          startButton.classList.add("break");
          console.log(startButton.className);
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

    const breakStart = () => {
      console.log("Hi from the break console");
      document.body.style.backgroundColor = "#d11c1c";
      if (breakStart) {
        // set the interval to count down
        breakTimer = setInterval(() => {
          if (breakSec > 0) {
            breakSec--;
            minute.innerText = String(
              (breakSec - (breakSec % 60)) / 60
            ).padStart(2, 0);
            second.innerText = String(breakSec % 60).padStart(2, 0);
          } else if (breakSec === 0) {
            clearInterval(breakTimer);
            startButton.classList.remove("break");
            startButton.classList.add("flow");
          }
        }, 100);

        // change the button color and its text
        startButton.innerText = "Pause";
        startButton.style.backgroundColor = "#d11c1c";
        startButton.style.color = "#f8c464";
        // change the button color when hovered
        startButton.onmouseover = () => {
          startButton.style.color = "#095809";
          startButton.style.backgroundColor = "#f8c464";
        };
        startButton.onmouseout = () => {
          startButton.style.color = "#f8c464";
          startButton.style.backgroundColor = "#095809";
        };
        flowStart = !flowStart;
      }
      // pause the timer
      else {
        clearInterval(breakTimer);
        startButton.innerText = "Continue";
        breakStart = !breakStart;
      }
    };
  };
})(0.25);
