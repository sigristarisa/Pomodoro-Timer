// green: "#095809"
// red: "#d11c1c"
// yellow: "#f8c464"

const pomodoroTimer = ((flowMin, restMin) => {
  // define minute to second
  let flowSec = flowMin * 60;
  let restSec = restMin * 60;

  // get the element from html
  const minute = document.getElementById("minute");
  const second = document.getElementById("second");
  const startButton = document.getElementById("startButton");
  const title = document.getElementById("title");
  const timer = document.getElementById("timer");

  // booleans
  let flow = true;
  let flowOn = true;
  let restOn = true;
  let flowCount = 0;

  // show the setting time
  minute.innerText = String((flowSec - (flowSec % 60)) / 60).padStart(2, 0);
  second.innerText = String(flowSec % 60).padStart(2, 0);

  // make the button clickable
  startButton.addEventListener("click", () => {
    // ------------------ FLOW ------------------ //

    if (flow) {
      // change the background color to green
      document.body.style.backgroundColor = "#095809";
      // change the button color to red
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

      if (flowOn) {
        // set the interval to count down for the flow
        flowTimer = setInterval(() => {
          if (flowSec > 0) {
            flowSec--;
            minute.innerText = String((flowSec - (flowSec % 60)) / 60).padStart(
              2,
              0
            );
            second.innerText = String(flowSec % 60).padStart(2, 0);
          }
          // when the flow timer hits 00:00 display the break
          // count how many flow the user had
          else if (flowSec === 0) {
            flowCount++;

            // if flow set is less than 4 ...
            if (flowCount < 4) {
              clearInterval(flowTimer);
              // change the colors and text
              document.body.style.backgroundColor = "#f8c464";
              title.style.color = "#d11c1c";
              timer.style.color = "#095809";

              startButton.onmouseover = () => {
                startButton.style.color = "#f8c464";
                startButton.style.backgroundColor = "#d11c1c";
              };
              startButton.onmouseout = () => {
                startButton.style.color = "#f8c464";
                startButton.style.backgroundColor = "#095809";
              };

              title.innerText = "Take a break!";
              startButton.innerText = "Start";

              //display the time for the break
              restSec = restMin * 60;
              minute.innerText = String(
                (restSec - (restSec % 60)) / 60
              ).padStart(2, 0);
              second.innerText = String(restSec % 60).padStart(2, 0);
              flow = !flow;
              restOn = true;
            } else {
              clearInterval(flowTimer);
              console.log("you did 4 laps!");
            }
          }
        }, 1000);
        // change to break mode
        flowOn = false;
      }

      // pause the timer
      else {
        clearInterval(flowTimer);
        startButton.innerText = "Continue";
        flowOn = true;
      }
    }

    // ---------------------- REST ---------------------- //
    else {
      // change the button color and its text
      startButton.innerText = "Pause";
      startButton.style.backgroundColor = "#d11c1c";
      startButton.style.color = "#d11c1c";
      // change the button color when hovered
      startButton.onmouseover = () => {
        startButton.style.color = "#f8c464";
        startButton.style.backgroundColor = "#095809";
      };
      startButton.onmouseout = () => {
        startButton.style.color = "#f8c464";
        startButton.style.backgroundColor = "#d11c1c";
      };

      if (restOn) {
        // set the interval to count down for the break
        restTimer = setInterval(() => {
          if (restSec > 0) {
            restSec--;
            minute.innerText = String((restSec - (restSec % 60)) / 60).padStart(
              2,
              0
            );
            second.innerText = String(restSec % 60).padStart(2, 0);
          } else if (restSec === 0) {
            // change the background color when the timer starts
            document.body.style.backgroundColor = "#095809";
            timer.style.color = "#f8c464";
            // change the button color and its text
            startButton.innerText = "Start";
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

            clearInterval(restTimer);
            title.innerText = "Let's get back to work!";
            flowSec = flowMin * 60;
            minute.innerText = String((flowSec - (flowSec % 60)) / 60).padStart(
              2,
              0
            );
            second.innerText = String(flowSec % 60).padStart(2, 0);
            flow = !flow;
            flowOn = true;
          }
        }, 1000);
        restOn = false;
      } else {
        clearInterval(restTimer);
        startButton.innerText = "Continue";
        restOn = true;
      }
    }
  });
})(0.2, 0.1);
