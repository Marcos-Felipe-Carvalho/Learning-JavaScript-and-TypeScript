const lblTimer = document.querySelector(".timer");

const generateTimer = (seconds) =>{
    const date = new Date(seconds * 1000);
    return date.toLocaleTimeString('pt-BR',{
        timeZone: 'UTC',
        timeStyle: 'medium'
    })
}
let seconds = 0;
let control;
const startTimer = () =>{
    control = setInterval(()=>{
        const timer = generateTimer(seconds++);
        lblTimer.innerHTML = timer;
    },1000)
}

const pauseTimer = () =>{
    lblTimer.classList.add("pause");
    clearInterval(control);
}


const restart = () =>{
    lblTimer.innerHTML = "00:00:00";
    seconds = 0;
}
document.querySelector(".btn-start").addEventListener('click',startTimer);
document.querySelector(".btn-pause").addEventListener('click',pauseTimer);
document.querySelector(".btn-restart").addEventListener('click',restart);