// Set the target date and time
var targetDate = new Date("December 18, 2010 21:27:77").getTime();

// Update the countdown every second
var countdownInterval = setInterval(function() {
  var now = new Date().getTime();
  var distance = targetDate - now;

  // Calculate days, hours, minutes, and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the countdown
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // If the countdown is finished, clear the interval
  if (distance < 0) {
    clearInterval(countdownInterval);
    document.getElementById("countdown").innerHTML = "It's her birthday!";
  }
}, 1000);
