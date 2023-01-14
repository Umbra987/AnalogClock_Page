function ChangeOclock(){

let date = new Date();
let hours = date.getHours();
let Minutes = date.getMinutes();
let Seconds = date.getSeconds();

if(hours<=12){
    giroHours = hours / 12 *360;
}
else{
    giroHours = hours / 24 * 360;
}
giroHours= Minutes / 60 * 30;
giroMinutes = Minutes / 60 *360;
giroSeconds = Seconds /60 * 360;

console.log(date);
console.log(giroHours);
console.log(giroMinutes);
console.log(giroSeconds);

document.querySelector(".horas").style.transform= "rotate(" + giroHours + ".deg)";
document.querySelector(".horas").style.transform= "rotate(" + giroMinutes + ".deg)";
document.querySelector(".horas").style.transform= "rotate(" + giroSeconds + ".deg)";
}

setInterval(ChangeOclock,1000);
