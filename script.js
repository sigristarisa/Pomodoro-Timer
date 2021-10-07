// green: "#095809"
// red: "#d11c1c"
// yellow: "#f8c464"

const pomodoroTimer = ((flowMin, restMin, longRestMin) => {
  // define minute to second
  let flowSec = flowMin * 60;
  let restSec = restMin * 60;
  let longRestSec = longRestMin * 60;

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
    startButton.innerText = "Pause";
    // ------------------ FLOW ------------------ //
    if (flow) {
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
            }
            // once 4 sets of flow is over, move on to a long break
            else {
              clearInterval(flowTimer);
              title.innerText = "You deserve a long break!";
              startButton.innerText = "Start";
              longRestSec = longRestMin * 60;
              minute.innerText = String(
                (longRestSec - (longRestSec % 60)) / 60
              ).padStart(2, 0);
              second.innerText = String(longRestSec % 60).padStart(2, 0);
              flow = false;
              restOn = true;
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
      if (restOn) {
        // set the interval to count down for the break
        restTimer = setInterval(() => {
          // if the flow count is less than 4...
          if (flowCount < 4) {
            if (restSec > 0) {
              restSec--;
              minute.innerText = String(
                (restSec - (restSec % 60)) / 60
              ).padStart(2, 0);
              second.innerText = String(restSec % 60).padStart(2, 0);
            } else if (restSec === 0) {
              clearInterval(restTimer);
              title.innerText = "Let's get back to work!";
              flowSec = flowMin * 60;
              minute.innerText = String(
                (flowSec - (flowSec % 60)) / 60
              ).padStart(2, 0);
              second.innerText = String(flowSec % 60).padStart(2, 0);
              flow = !flow;
              flowOn = true;
            }
          } // -------- LONG REST -------- //
          else {
            if (longRestSec > 0) {
              longRestSec--;
              minute.innerText = String(
                (longRestSec - (longRestSec % 60)) / 60
              ).padStart(2, 0);
              second.innerText = String(longRestSec % 60).padStart(2, 0);
              startButton.innerText = "Pause";
            } else if (longRestSec === 0) {
              flowCount = 0;
              clearInterval(restTimer);
              title.innerText = "Well rested? Let's start!";
              flowSec = flowMin * 60;
              minute.innerText = String(
                (flowSec - (flowSec % 60)) / 60
              ).padStart(2, 0);
              second.innerText = String(flowSec % 60).padStart(2, 0);
              flow = true;
              flowOn = true;
            }
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
})(25, 5, 15);
