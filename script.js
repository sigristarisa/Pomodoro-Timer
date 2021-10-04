const timer = document.createElementbyId("timer");

// timer function //
let minute = 25;
let second = 60;

const reduceSecond = () => {
  second--;
  console.log(`second:${second}`);
  if (second <= 0) {
    second = 60;
  }
};

const reduceMinute = () => {
  minute--;
  console.log(`minute:${minute}`);
  if (minute <= 0) {
    minute = 25;
  }
};

const secondTimer = setInterval(reduceSecond, 1000);
const minuteTimer = setInterval(reduceMinute, 60000);
