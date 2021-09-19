{function clock(){
var currentdate = new Date();

var hours = currentdate.getHours();
var minutes = currentdate.getMinutes();
var seconds = currentdate.getSeconds();
var zone = "AM";

if(seconds <10){
    seconds = "0"+seconds;
}

if(hours >12){
    hours = hours-12;
}
if(hours >11){
   zone="PM" 
}else{
    zone="AM"
}
document.getElementById("clock").innerHTML = hours+":"+minutes+":"+seconds+" "+zone;

}

setInterval( clock,1000)}