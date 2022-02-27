let progressBar = document.querySelector('.progres-bar');
let progresValueBar = 0;

let interval = setInterval(() => {
    if (progresValueBar <= 100) {
        progressBar.style.width = `${progresValueBar}%`;
        progresValueBar += 1;
    } else {
        clearInterval(interval);
    }
}, 30)