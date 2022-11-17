const sec = 1000;
const min = sec * 60;
let reload_speed = min*10;

setTimeout(() => {
    document.location.reload();
}, reload_speed);
  