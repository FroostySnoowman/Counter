var countDownDate = new Date("Aug 13, 2022 13:00:00").getTime();

var x = setInterval(function () {

    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("demo").innerHTML = days + " Day   " + hours + " Hours   "
        + minutes + " Minutes   " + seconds + " Seconds   ";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "Released! https://fwoostybots.com/";
    }
}, 1000);
