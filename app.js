
const display = document.getElementById("display");

let timer = null;
let startTime = 0;
let elapsedTime = 0;
var isRn = false;

function start(){

    if(!isRn){
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update,10);
        console.log(timer);
        isRn = true;
    }
    console.log(startTime);
}


function stop(){

        if(isRn){
            clearInterval(timer);
            elapsedTime = Date.now() - startTime;
            isRn = false;
        }

}

function reset(){
    clearInterval(timer);
    timer = null;
    startTime = 0;
    elapsedTime = 0;
    isRn = false;
    display.textContent = "00:00:00:00"
}

function update(){
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    var hrs = Math.floor(elapsedTime/(1000*60*60));
   
    var min = Math.floor(elapsedTime/(1000*60)%60);
   
    var scnds = Math.floor(elapsedTime/1000 % 60);
   
    var milliscnds = Math.floor(elapsedTime % 1000 /10); 
    hrs = String(hrs).padStart(2,0);
    min =  String(min).padStart(2,0);
    scnds =  String(scnds).padStart(2,0);
    milliscnds =  String(milliscnds).padStart(2,0);

    display.textContent = `${hrs}:${min}:${scnds}:${milliscnds}`
}