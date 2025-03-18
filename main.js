const counters = document.getElementById("counters");
const yzid = document.getElementById("yzid");
const reset = document.getElementById("reset");
const yn9os = document.getElementById("yn9os");

let count = 0;

yzid.onclick = function(){
    count++;
    counters.textContent = count;
}
yn9os.onclick = function(){
    count--;
    counters.textContent = count;
}
reset.onclick = function(){
    count = 0;
    counters.textContent = count;
}
