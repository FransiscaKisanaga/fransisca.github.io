var navLinks = document.querySelectorAll('nav a');
var scrollOffset = 0;
animateScroll();
AOS.init({
    duration: 1000
});
$(setupForm);

//$(function() {
//  $('a[href*=#]').on('click', function(e) {
//    e.preventDefault();
//    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
//  });
//});
document.getElementById("btn1").addEventListener("click", function (event) {
    event.preventDefault()
});
document.getElementById("atom").addEventListener("click", function (event) {
    event.preventDefault()
});
document.getElementById("bacteria1").addEventListener("click", function (event) {
    event.preventDefault()
});
document.getElementById("bacteria2").addEventListener("click", function (event) {
    event.preventDefault()
});
document.getElementById("medicine").addEventListener("click", function (event) {
    event.preventDefault()
});
document.getElementById("bloodcells").addEventListener("click", function (event) {
    event.preventDefault()
});

//Nav scrolling
for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', selectLink);
    navLinks[i].addEventListener('click', setScrollOffset);
}

function selectLink() {
    for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].className = '';
    }
    this.className = 'selected';
}

function animateScroll() {
    var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    var scrollDistance = Math.round(scrollOffset - scrollPosition);
    if (scrollDistance > 0) {
        scrollPosition += Math.ceil(scrollDistance / 10);
        requestAnimationFrame(animateScroll);
    } else if (scrollDistance < 0) {
        scrollPosition += Math.floor(scrollDistance / 10);
        requestAnimationFrame(animateScroll);
    }
    document.documentElement.scrollTop = scrollPosition;
    document.body.scrollTop = scrollPosition;
}

function setScrollOffset(event) {
    event.preventDefault();
    var section = document.querySelector(this.hash);
    scrollOffset = section.offsetTop;
    requestAnimationFrame(animateScroll);
}

//Form setup and validation
function setupForm() {
    $('#message').on('input', remainingChars);
    $('#clearButton').on('click', clearName);
    $('#contactForm').on('submit', checkForm);
}

function remainingChars() {
    console.log(this.id, this.value);
    var remain = this.maxLength - this.value.length;
    if (remain == 1) {
        $('#remaining').text(remain + ' character left');
    } else {
        $('#remaining').text(remain + ' characters left');
    }
}

function clearName() {
    $field = $('#name');
    console.log($field.attr('id'), $field.val());
    $field.val('');
}

function checkForm(e) {
    e.preventDefault();
    if ($('#name').val() && $('#host').val() ) {
        this.submit();
    } else {
      $( '#error' ).html( '' );
      if( !$('#name').val() ) $('#error').append( '<p>You must enter your name</p`>');
      if( !$('#host').val() ) $('#error').append('<p>You must enter your email</p>');
        $('#error p').fadeIn();
        $('#name').focus();
        $('#host').focus();
    }
}
