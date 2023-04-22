var animateButton = function (e) {

  e.preventDefault;
  //reset animation
  e.target.classList.remove('animate');

  e.target.classList.add('animate');
  setTimeout(function () {
    e.target.classList.remove('animate');
  }, 700);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener('click', animateButton, false);
}

const observer = new IntersectionObserver((enteries) => {
  enteries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
    }
    else {
      entry.target.classList.remove('in');
    }
  });
});


const elements = document.querySelectorAll('.our-team-content');
elements.forEach((el) => observer.observe(el));


const Option_Observer = new IntersectionObserver((options) => {
  options.forEach((option) => {
    if (option.isIntersecting) {
      var bar = document.querySelector('.top-bar-container')
      var opt = document.querySelector('#top-bar-options')
      bar.classList.add('clearTop')
      opt.classList.remove('top-bar-options')
      opt.classList.add('clear-options')

    }
    else {
      var bar = document.querySelector('.top-bar-container')
      var opt = document.querySelector('#top-bar-options')
      bar.classList.remove('clearTop')
      opt.classList.add('top-bar-options')
      opt.classList.remove('clear-options')
    }
  });
});


const topBar = document.querySelectorAll('.location-marker');
topBar.forEach((bar) => Option_Observer.observe(bar));