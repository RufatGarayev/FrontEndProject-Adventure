$(document).ready(function () {
// ======= Reload-Img Start ======= //
  $(window).on("load", function () {
    $(".loading").fadeOut("slow");
  });
// ======= Reload-Img End ======= //


// ======= Nav Bg-Color On Scroll Start ======= //
var color = '#000000';
var rgbaCol = 'rgba(' + parseInt(color.slice(-6,-4),16)
    + ',' + parseInt(color.slice(-4,-2),16)
    + ',' + parseInt(color.slice(-2),16)
    +',0.5)';

  window.onscroll = function() {
    if ($(window).scrollTop() >= 750) {
      $("nav").css("background-color", "#1D1E21");
    } else {
      $("nav").css("background-color", rgbaCol);
    }
  };
// ======= Nav Bg-Color On Scroll End ======= //


// ======= Changing Link To Active OnClick Start ======= //
  $(document).on("click", ".navbar-items .nav-item", function(){
    $(this).addClass("active-link").siblings().removeClass("active-link");
    $(".account .nav-item").removeClass("active-link");
  });

  $(document).on("click", ".account .nav-item", function(){
    $(this).addClass("active-link").siblings().removeClass("active-link");
    $(".navbar-items .nav-item").removeClass("active-link");
  });
// ======= Changing Link To Active OnClick End ======= //
});



// ======= Navbar Hamburger Effect Start ======= //
let menuIcon = document.querySelector(".hamburger");
let navbar = document.querySelector(".navbar-items");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("change");
  navbar.classList.toggle("active");
});
// ======= Navbar Hamburger Effect End ======= //



// ======= Type Writer Effect Start ======= //
// ES6 Class
class TypeWriter {
  constructor(txtElement, words, wait = 1000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    this.isDeleting = false;
  }

  type() {
    // Current index of word
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fullTxt = this.words[current];

    // Check if deleting
    if (this.isDeleting) {
      // Remove char
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      // Add char
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    // Insert txt into element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    // Initial Type Speed
    let typeSpeed = 100;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    // If word is complete
    if (!this.isDeleting && this.txt === fullTxt) {
      // Make pause at end
      typeSpeed = this.wait;
      // Set delete to true
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      // Move to next word
      this.wordIndex++;
      // Pause before start typing
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

// Init On DOM Load
document.addEventListener("DOMContentLoaded", init);

// Init App
function init() {
  const txtElement = document.querySelector(".txt-type");
  const words = JSON.parse(txtElement.getAttribute("data-words"));
  const wait = txtElement.getAttribute("data-wait");
  // Init TypeWriter
  new TypeWriter(txtElement, words, wait);
}
// ======= Type Writer Effect End ======= //
