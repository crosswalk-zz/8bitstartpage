var set_date = function() {
  var d = new Date();
  var months = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.", "Jul.", "Aug.", "Sept.", "Oct.", "Nov.", "Dec."];
  var days = ["Sun.", "Mon.", "Tue.", "Wed.", "Thur.", "Fri.", "Sat."];
  var hours = d.getHours();
  var mins = d.getMinutes();
  var secs = d.getSeconds();
  var day = days[d.getDay()];
  var month = months[d.getMonth()];
  var date = d.getDate();
  var year = d.getFullYear();
  var period = "AM";
  if (hours >= 0 && hours < 12) {
    period = "AM";
    if (hours === 0) {
      hours = "12";
    }
  } else {
    if (hours !== 12) {
      hours = hours - 12;
    }
    period = "PM";
  }
  if (secs < 10) {
    secs = "0" + secs;
  }
  if (mins < 10) {
    mins = "0" + mins;
  }
  document.getElementById("date").children[0].textContent = hours + ":" + mins + ":" + secs + " " + period;
  document.getElementById("date").children[1].textContent = day + " " + month + " " + date + ", " + year;
  var update_date = window.setTimeout(set_date, 500);
}
