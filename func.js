const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})

var loginLink = document.getElementById('login-form');
var homeLink = document.getElementById('home');
var skillLink = document.getElementById('skill');
var contactLink = document.getElementById('contact');
var educationLink = document.getElementById('education');
var achivementLink = document.getElementById('achivement');

function home() {
    homeLink.style.display = 'block';
    loginLink.style.display = 'none';
    skillLink.style.display = 'none';
    contactLink.style.display = 'none';
    educationLink.style.display = 'none';
    achivementLink.style.display = 'none';

}

function skill() {
    homeLink.style.display = 'none';
    loginLink.style.display = 'none';
    skillLink.style.display = 'block';
    contactLink.style.display = 'none';
    educationLink.style.display = 'none';
    achivementLink.style.display = 'none';
}

function contact() {
    homeLink.style.display = 'none';
    loginLink.style.display = 'none';
    skillLink.style.display = 'none';
    contactLink.style.display = 'block';
    educationLink.style.display = 'none';
    achivementLink.style.display = 'none';
}

function education() {
    homeLink.style.display = 'none';
    loginLink.style.display = 'none';
    skillLink.style.display = 'none';
    contactLink.style.display = 'none';
    educationLink.style.display = 'block';
    achivementLink.style.display = 'none';
}

function achivement() {
    homeLink.style.display = 'none';
    loginLink.style.display = 'none';
    skillLink.style.display = 'none';
    contactLink.style.display = 'none';
    educationLink.style.display = 'none';
    achivementLink.style.display = 'block';
}

function logins() {
    homeLink.style.display = 'none';
    loginLink.style.display = 'block';
    skillLink.style.display = 'none';
    contactLink.style.display = 'none';
    educationLink.style.display = 'none';
    achivementLink.style.display = 'none';
}

var x = document.getElementById('login');
var y = document.getElementById('register');
var z = document.getElementById('btn');

function register() {
    x.style.left = '-400px';
    y.style.left = '50px';
    z.style.left = '110px';
}

function login() {
    x.style.left = '50px';
    y.style.left = '450px';
    z.style.left = '0px';
}

var modal = document.getElementById('login-form');
window.onclick = function(event) {
    console.log('event is ', event);
    if (event.target == modal) {
        modal.style.display = "none";
    }
}