const  container = document.querySelector(".container");
let btns = document.querySelector(".btns");
let start = document.querySelector("#start");
let pause = document.querySelector("#stop");
let reset = document.querySelector("#reset");
let time = document.querySelectorAll("span");
//let milis = document.querySelectorAll("#ms");

 //let milisec = document.createElement("span");
 //milis.appendChild(milisec);

let hour = 0;
let min = 0;
let sec = 0;
let ms = 0;
let timer = null;


function stopwatch(){
    ms++;
    if(ms == 100){
        sec++;
        ms = 0;
    }
    else if(sec == 60){
        min++;
        sec = 0;
    }
    else if(min == 60){
        hour++;
        min = 0;
        sec = 0;
    }
        time[3].innerHTML = ms;
       // milisec.innerHTML = ms;
        time[2].innerHTML = sec;
        time[1].innerHTML = min;
        time[0].innerHTML = hour;
}

start.addEventListener('click', ()=>{
    if (timer != null) {
        clearInterval(timer);
    }
    
    timer = setInterval(stopwatch, 10);
});

pause.addEventListener('click', ()=>{
    clearInterval(timer);
});;

reset.addEventListener('click', ()=>{
     hour = 0;
     min = 0;
     sec = 0;
     ms = 0;

    clearInterval(timer);

        time[3].innerHTML = "00";
       // milisec.innerHTML = "00";
        time[2].innerHTML = "00";
        time[1].innerHTML = "00";
        time[0].innerHTML = "00";
});
