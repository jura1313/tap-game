
var count = 0;
var mines = 1;
var user = document.getElementById('user');
var wih = 50;
var indikato = document.getElementById('indikato');
var indikator = document.getElementById('indikator');
var sta = document.getElementById('start-button');
var sta = document.getElementById('start-button');
var st = document.getElementById('reset');

var cpu;

function start() {
    cpu = setInterval(change,500)
    user.onclick = () => width();
    sta.onclick = null;
}   

function reset() {
        sta.onclick = start();
    st.onclick = null;
}

function change(){
    wih -=mines;
    user.style.width = wih+'%';

    if(wih == 0){
        clearInterval(cpu);
        user.onclick = null;
        indikato.innerText = "Kalah";
    }

}


function width(){
    wih +=25;
    user.style.width = wih+'%';

    if(wih >= 100){

        indikator.innerText = "Menang";
        user.onclick = null;
        clearInterval(cpu); 


    }
}

