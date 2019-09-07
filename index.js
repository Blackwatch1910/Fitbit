var colorBlack = document.getElementById('black');
var colorRed = document.getElementById('red');
var colorBlue = document.getElementById('blue');
var colorPurple = document.getElementById('purple');

var image = document.getElementById('image');

var time = document.getElementById('button1');
var heart = document.getElementById('button2');

var timeText = document.getElementById('timetext');
var heart1 = document.getElementById('heart')

//color change events
colorBlack.addEventListener('click', function() {
    image.src = "https://i.imgur.com/iOeUBV7.png";
});

colorRed.addEventListener('click', function() {
    image.src = "https://i.imgur.com/PTgQlim.png";
})

colorBlue.addEventListener('click', function() {
    image.src = "https://i.imgur.com/Mplj1YR.png";
})

colorPurple.addEventListener('click', function() {
    image.src = "https://i.imgur.com/xSIK4M8.png";
})

//watch events
time.addEventListener('click', function() {
    heart1.style.display = 'none';
    timeText.style.display = 'block'
});

heart.addEventListener('click', function() {
    timeText.style.display = 'none'
    heart1.style.display = 'block'
})

//display time in watch
function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  
  function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    // add a zero in front of numbers<10
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('timetext').innerHTML = h + ":" + m + ":" + s;
    t = setTimeout(function() {
      startTime()
    }, 500);
  }
  startTime();