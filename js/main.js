window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var header = document.querySelector('.header');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
}


// Hedef tarihi buraya girin: (Yıl, Ay - 1, Gün, Saat, Dakika)
var countDownDate = new Date("Mar 12, 2024 09:25:00").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();
    
  var distance = countDownDate - now;
    
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  var countdownText =  formatTime(days) + "  days    " + formatTime(hours) + "  hours    " + formatTime(minutes) + "  minutes    " + formatTime(seconds) + "  seconds  ";

    
  document.getElementById("countdown").innerHTML =  countdownText + "</span>";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);

function formatTime(time) {
  return time < 10 ? "0" + time : time;
}


// Hedef tarihi buraya girin: (Yıl, Ay - 1, Gün, Saat, Dakika)
var countDownDate2 = new Date("Mar 12, 2024 09:25:00").getTime();

var x2 = setInterval(function() {

  var now2 = new Date().getTime();
    
  var distance2 = countDownDate2 - now2;
    
  var days2 = Math.floor(distance2 / (1000 * 60 * 60 * 24));
  var hours2 = Math.floor((distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes2 = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds2 = Math.floor((distance2 % (1000 * 60)) / 1000);
  
  var countdownText2 =  formatTime(days2) + "  days    " + formatTime(hours2) + "  hours    " + formatTime(minutes2) + "  minutes    " + formatTime(seconds2) + "  seconds  ";

    
  document.getElementById("countdown2").innerHTML =  countdownText2 + "</span>";

  if (distance2 < 0) {
    clearInterval(x2);
    document.getElementById("countdown2").innerHTML = "EXPIRED";
  }
}, 1000);

function formatTime(time) {
  return time < 10 ? "0" + time : time;
}