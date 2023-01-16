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
    giroHours = giroHours + Minutes / 60 * 30;
    giroMinutes = Minutes / 60 *360;
    giroSeconds = Seconds /60 * 360;
    
    document.querySelector(".horas").style.transform= "rotate(" + giroHours + ".deg)";
    document.querySelector(".minutos").style.transform= "rotate(" + giroMinutes + ".deg)";
    document.querySelector(".segundos").style.transform= "rotate(" + giroSeconds + ".deg)";
}

setInterval(ChangeOclock,1000);
