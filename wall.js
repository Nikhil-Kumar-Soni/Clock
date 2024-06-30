var hr = 0;
var min = 0;
var sc = 0;
var d = new Date;

setInterval(
  function(){
    d = new Date();
    hr = d.getHours() * 30 + Math.round (min/12);
    min = d.getMinutes() * 6;
    sc = d.getSeconds() * 6;
    document.getElementById("sc-hand").style.transform = "rotate(" + sc + "deg";
    document.getElementById("min-hand").style.transform = "rotate(" + min + "deg"
    document.getElementById("hr-hand").style.transform = "rotate(" + hr + "deg"
  },1000
);

// for digital clock

function showTime(){
var d = new Date();
var h = new Date().getHours();
var m = new Date().getMinutes();
var s = new Date().getSeconds();
var session = "PM";

if(h > 12){
  h = h - 12;
}

if(h >= 12){
  session = "AM";
}

h = h < 10 ? "0"+ h : h;
m = m < 10 ? "0"+ m : m;
s = s < 10 ? "0"+ s : s;

var time = h + ":" + m + ":" + s + " " + session;
document.getElementsByClassName('digital')[0].innerText = time;
setTimeout(showTime,1000);
}

// for calander

function updateTimeAndDate() {
  const now = new Date();
  const dateElement = document.getElementById('date');

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const dateString = now.toLocaleDateString('en-US', options);
 

  dateElement.textContent = dateString;
}

setInterval(updateTimeAndDate, 1000);
updateTimeAndDate();
