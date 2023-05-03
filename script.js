// stuff for the nav bar 
$(document).ready(function(){
  $(window).scroll(function(){
    var scrollTop = $(window).scrollTop();
    if (scrollTop > 49) {
        $('body').addClass('header-fixed');
    } else {
        $('body').removeClass('header-fixed');
    }
    
    var topOffset = $('#demosection2').offset().top;
    var headerHeight = $('#topnav').height();
    var transitionPoint = topOffset - headerHeight;
    if (scrollTop > transitionPoint) {
        $('#topnav').addClass('alt-header');
    } else {
        $('#topnav').removeClass('alt-header');
    }
  });
});

//confetti click
function changeMe() {
  document.getElementById("shootingStars").src = "images/confetti.gif";
}

function changeMeBack() {
  document.getElementById("shootingStars").src = "images/reg.png";
}

//stars hover
function changeMe2() {
  document.getElementById("kspa").src = "images/kspaconfetti.gif";
}

function changeMeBack2() {
  document.getElementById("kspa").src = "images/kspalabel.png";
}

// form 
function message() {
  var first= document.getElementById("fn").value; 
  var last= document.getElementById("ln").value; 
  alert(first + " " + last + ", you should follow @juliann.photography on Instagram")
}
