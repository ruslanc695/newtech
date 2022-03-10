window.onload = () => {
    if (window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    } else {
        document.querySelector('.header').classList.remove('active');
    }
}


window.onscroll = () => {
    navbar.classList.remove('show');
    menuButton.classList.remove('fa-times');

    if (window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    } else {
        document.querySelector('.header').classList.remove('active');
    }
}

/*header changed text*/
consoleText(['Lorem ipsum dolor sit.', 'Lorem ipsum dolor sit amet consectetur.', 'Lorem ipsum, dolor sit amet consectetur adipisicing.'], 'text', ['white']);

function consoleText(words, id, colors) {
    if (colors === undefined) colors = ['#fff'];
    var visible = true;
    var con = document.getElementById('console');
    var letterCount = 1;
    var x = 1;
    var waiting = false;
    var target = document.getElementById(id)
    target.setAttribute('style', 'color:' + colors[0])
    window.setInterval(function() {
        if (letterCount === 0 && waiting === false) {
            waiting = true;
            target.innerHTML = words[0].substring(0, letterCount)
            window.setTimeout(function() {
                var usedColor = colors.shift();
                colors.push(usedColor);
                var usedWord = words.shift();
                words.push(usedWord);
                x = 1;
                target.setAttribute('style', 'color:' + colors[0])
                letterCount += x;
                waiting = false;
            }, 1000)
        } else if (letterCount === words[0].length + 1 && waiting === false) {
            waiting = true;
            window.setTimeout(function() {
                x = -1;
                letterCount += x;
                waiting = false;
            }, 2000)
        } else if (waiting === false) {
            target.innerHTML = words[0].substring(0, letterCount)
            letterCount += x;
        }
    }, 40)
    window.setInterval(function() {
        if (visible === true) {
            con.className = 'console-underscore hidden'
            visible = false;
        } else {
            con.className = 'console-underscore'
            visible = true;
        }
    }, 400)
}
/*header changed text*/



const navbar = document.querySelector('.header .navbar');
const menuButton = document.querySelector('.header .menu');
const headerText = document.querySelector('.header .console-container');



jQuery(document).ready(function($) {
    $('.counter').counterUp({
        delay: 10,
        time: 3000
    });
});

$('.owl-carousel').owlCarousel({
    loop: true,
    nav: false,
    autoplay: true,
    onmouse: false,
    autoplayHoverPause: true,
    smartSpeed: 800,
    autoplayTimeout: 1800,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        400: {
            items: 2,
            margin: 20
        },
        600: {
            items: 3,
            margin: 40
        },
        1000: {
            items: 4,
            margin: 50
        },
        2440: {
            items: 5,
            margin: 50
        }
    }
});





menuButton.addEventListener('click', () => {
    navbar.classList.toggle('show');
    menuButton.classList.toggle('fa-times');
});



$(document).ready(function() {
    $('#body').show();
    $('#msg').hide();
});