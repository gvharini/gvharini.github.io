function clock(){
  
  var monthsNames = ["Jun", "Feb", "Mar", "Apr", "May", "June", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  var dayNames = ["San", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
  var today = new Date();

  document.getElementById('Date').innerHTML = (dayNames[today.getDay()] + " , " + today.getDate() + "" + monthsNames[today.getMonth()] + " , " + today.getFullYear());

  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  var day = h<11 ? "AM" : "PM";

  h = h<10? '0'+h: h;
  m = m<10? '0'+m: m;
  s = s<10? '0'+s: s;
  document.getElementById('hours').innerHTML = h;
  document.getElementById('min').innerHTML = m;
  document.getElementById('sec').innerHTML = s;

}var inter = setInterval(clock,400);

var x = setInterval(function() {

  var now = new Date().getTime();
    
  var distance = countDownDate - now;
    
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  }, 1000);
  








































