const m = document.querySelector('body');
const im = document.querySelectorAll('.movement');
const windowWidth = window.innerWidth / 3;
const windowWidth2 = window.innerWidth / 4;
const windowWidth3 = window.innerWidth / 5;
const windowHeight = window.innerHeight / 3;

m.addEventListener('mousemove', (e) => {
  const mouseX = e.clientX / windowWidth;
  const mouseX2 = e.clientX / windowWidth2;
  const mouseX3 = e.clientX / windowWidth3;
  const mouseZ = 1 - (e.clientX / 20000);
  const mouseZ2 = 1.2 + (e.clientX / 10000);
  const mouseR1 = (e.clientY / 500);
  const mouseY = e.clientY / windowHeight;
  const mouseY2 = mouseY * 10000;
  im[0].style.transform = `translate3d(${mouseX}%, -${mouseY}%, 0) scale(${mouseZ}) rotate(-${mouseR1}deg)`;
  im[1].style.transform = `translate3d(${mouseX2}%, -${mouseY}%, 0) scale(${mouseZ2}) rotate(${mouseR1}deg)`;
  im[2].style.transform = `translate3d(${mouseX3}%, -${mouseY}%, 0) scale(${mouseZ}) rotate(-${mouseR1}deg)`;
  im[3].style.transform = `translate3d(${mouseX2}%, -${mouseY}%, 0) scale(${mouseZ}) rotate(${mouseR1}deg)`;
  im[4].style.transform = `translate3d(${mouseX}%, -${mouseY}%, 0) scale(${mouseZ2}) rotate(${mouseR1}deg)`;
  im[5].style.transform = `translate3d(${mouseX3}%, -${mouseY}%, 0) scale(${mouseZ}) rotate(${mouseR1}deg)`;
  im[6].style.transform = `translate3d(${mouseX}%, -${mouseY}%, 0) scale(${mouseZ2}) rotate(${mouseR1}deg)`;
  im[7].style.transform = `translate3d(${mouseX3}%, -${mouseY}%, 0) scale(${mouseZ}) rotate(${mouseR1}deg)`;
  im[8].style.transform = `translate3d(${mouseX2}%, -${mouseY}%, 0) scale(${mouseZ2}) rotate(${mouseR1}deg)`;
  im[9].style.transform = `translate3d(${mouseX}%, -${mouseY}%, 0) scale(${mouseZ2}) rotate(${mouseR1}deg)`;
});

function openNav() {
  document.getElementById("mySidebar").style.width = "100%";
  document.getElementById("main").style.marginLeft = "0";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}
// scroll animations
/*
window.onscroll = function() {stickNav()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function stickNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("navtitle").style.top = "0";
  } else {
    document.getElementById("navtitle").style.top = "-200px";
  }
}
*/

window.addEventListener(
  "scroll",
  () => {
    document.body.style.setProperty(
      "--scroll",
      window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
    );
  },
  false
);

window.addEventListener(
  "scroll",
  () => {
    document.body.style.setProperty(
      "--scroll",
      window.pageYOffset / (document.body.offsetHeight - (window.innerHeight))
    );
  },
  false
);

//play and pause audio

var myAudio0 = document.getElementById("myAudio0");
var isPlaying0 = false;
function togglePlay0() {
  isPlaying0 ? myAudio0.pause() : myAudio0.play();
};
myAudio0.onplaying = function() {
  isPlaying0 = true;
};
myAudio0.onpause = function() {
  isPlaying0 = false;
};

var myAudio1 = document.getElementById("myAudio1");
var isPlaying1 = false;
function togglePlay1() {
  isPlaying1 ? myAudio1.pause() : myAudio1.play();
};
myAudio1.onplaying = function() {
  isPlaying1 = true;
};
myAudio1.onpause = function() {
  isPlaying1 = false;
};

var myAudio2 = document.getElementById("myAudio2");
var isPlaying2 = false;
function togglePlay2() {
  isPlaying2 ? myAudio2.pause() : myAudio2.play();
};
myAudio2.onplaying = function() {
  isPlaying2 = true;
};
myAudio2.onpause = function() {
  isPlaying2 = false;
};

var myAudio3 = document.getElementById("myAudio3");
var isPlaying3 = false;
function togglePlay3() {
  isPlaying3 ? myAudio3.pause() : myAudio3.play();
};
myAudio3.onplaying = function() {
  isPlaying3 = true;
};
myAudio3.onpause = function() {
  isPlaying3 = false;
};

var myAudio4 = document.getElementById("myAudio4");
var isPlaying4 = false;
function togglePlay4() {
  isPlaying4 ? myAudio4.pause() : myAudio4.play();
};
myAudio4.onplaying = function() {
  isPlaying4 = true;
};
myAudio4.onpause = function() {
  isPlaying4 = false;
};

var myAudio5 = document.getElementById("myAudio5");
var isPlaying5 = false;
function togglePlay5() {
  isPlaying5 ? myAudio5.pause() : myAudio5.play();
};
myAudio5.onplaying = function() {
  isPlaying5 = true;
};
myAudio5.onpause = function() {
  isPlaying5 = false;
};

var myAudio6 = document.getElementById("myAudio6");
var isPlaying6 = false;
function togglePlay6() {
  isPlaying6 ? myAudio6.pause() : myAudio6.play();
};
myAudio6.onplaying = function() {
  isPlaying6 = true;
};
myAudio6.onpause = function() {
  isPlaying6 = false;
};

//posicao randomica das bolinhas
// collect all the divs
var divs = document.getElementsByClassName('d');
var cont = document.getElementById("sons");
// get window width and height
var winWidth = cont.clientWidth;
var winHeight = cont.clientHeight;

// i stands for "index". you could also call this banana or haircut. it's a variable
for ( var i=0; i < divs.length; i++ ) {
 	
    // shortcut! the current div in the list
    var thisDiv = divs[i];
    
    // get random numbers for each element
    randomTop = getRandomNumber(0, winHeight);
    randomLeft = getRandomNumber(0, winWidth);
    
    // update top and left position
    thisDiv.style.top = randomTop +"px";
    thisDiv.style.left = randomLeft +"px";
    
}

// function that returns a random number between a min and max
function getRandomNumber(min, max) {
    
  return Math.random() * (max - min) + min;
    
}