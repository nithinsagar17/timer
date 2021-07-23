var start = document.getElementById("start");
var reset = document.getElementById("reset");

var wm = document.getElementById("wminutes");
var ws = document.getElementById("wseconds");

var bm =document.getElementById("bminutes");
var bs = document.getElementById("bseconds");

var startTimer;
var timer;

function timer() {
    console.log("function called");
    console.log(ws.value);
   
    if(ws.value!= 0){
        ws.value--;
    }else if(wm.value !=0 && ws.value ==0){
        ws.value =59;
        wm.value--;
    }
     if(wm.value==0 && ws.value==0){ if(bs.value!=0){
         bs.value--;
     }else if(bm.value!=0 && bs.value ==0){
         bm.value--;
        bs.value=59;
     }
        
 }return;
    
 }
start.addEventListener("click",function(){

    function startInterval(){
        startTimer = setInterval(function(){
            timer();
        },1000);
    }
    startInterval();
  

})

reset.addEventListener("click",function(){


wm.value=0;
ws.value=0;
bm.value=0;
bs.value=0;
 stopInterval()
 
})


function stopInterval(){
    clearInterval(startTimer);
}
