let hrs=document.getElementById("hours")
let mins=document.getElementById("minutes")
let scnds=document.getElementById("seconds")
let _100prts=document.getElementById("_100parts")
let stp=document.getElementById("stop")
let start=document.getElementById("start")
let reset=document.getElementById("reset")
let interval
let seconds=00
let minutes=00
let hours=00
let incrementer=00
let _100parts=00
let atStart=true

if(atStart){
  hrs.innerHTML=00
  mins.innerHTML=00
  scnds.innerHTML=00
  _100prts.innerHTML=00
}

let startFunc=()=>{
  // console.log("Clicked Start")
  clearInterval(interval)
  interval=setInterval(startTimer,10)
}
let resetFunc=()=>{
  // console.log("Clicked Rest")
    clearInterval(interval)
    seconds=00
    minutes=00
    hours=00
    incrementer=00
    _100parts=00
    hrs.innerHTML=00
    mins.innerHTML=00
    scnds.innerHTML=00
    _100prts.innerHTML=00
}
let stpFunc=()=>{
  // console.log("Clicked Stop")
  clearInterval(interval)
}

start.addEventListener("click", startFunc)
stp.addEventListener("click", stpFunc)
reset.addEventListener("click", resetFunc)

// const timer=()=>{
//   interval=setInterval(startTimer, 10)
// }

const startTimer=()=>{
  
  incrementer+=10
  
  _100parts=incrementer/10
  if(incrementer>1000){
     incrementer=00
  }
  
  if(_100parts==100){
    _100prts.innerHTML=00
    seconds+=1
    _100parts=00
  }
  _100prts.innerHTML=_100parts
  
  if(seconds==60){
    scnds.innerHTML=00
    minutes+=1
    seconds=00
  }
  scnds.innerHTML=seconds
  
  if(minutes==60){
    mins.innerHTML=00
    hours+=1
    minutes=00
  }
  mins.innerHTML=minutes

  hrs.innerHTML=hours
}

// timer();
