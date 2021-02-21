$(document).ready(function () {
  // ======= Reload-Img Start ======= //
  $(window).on("load", function () {
    $(".loading").fadeOut("slow");
  });
  // ======= Reload-Img End ======= //


  // ======= Events On Scroll Start ======= //
  // === Nav Bg-Color Start === //
  let color = "#000000";
  let rgbaCol =
    "rgba(" +
    parseInt(color.slice(-6, -4), 16) +
    "," +
    parseInt(color.slice(-4, -2), 16) +
    "," +
    parseInt(color.slice(-2), 16) +
    ",0.5)";

  window.onscroll = function () {
    if ($(window).scrollTop() >= 750) {
      $("nav").css("background-color", "#1B1B1B");
    } else {
      $("nav").css("background-color", rgbaCol);
    }
    // === Nav Bg-Color End === //

    // === Header Position Start === //
    if ($(window).scrollTop() >= 33) {
      $("header").css("top", "0px");
      $(".search-area-holder").css("top", "80px");
      $(".login-box-holder").css("top", "80px");
      $(".navbar-items").css({ height: "100%", top: "0px" });
    } else {
      $("header").css("top", "33px");
      $(".search-area-holder").css("top", "112px");
      $(".login-box-holder").css("top", "112px");
      $(".navbar-items").css({ height: "98%", top: "33px" });
    }
    // === Header Position End === //
  };
  // ======= Events On Scroll End ======= //


  // ======= Changing Link To Active OnClick Start ======= //
  $(document).on("click", ".navbar-items .nav-item", function () {
    $(this).addClass("active-link").siblings().removeClass("active-link");
    // $(".account .nav-item").removeClass("active-link");
  });
  // ======= Changing Link To Active OnClick End ======= //


  // ======= Counter-Up Start ======= //
  $(".counter-up").counterUp({
    delay: 10,
    time: 1000,
  });
  // ======= Counter-Up End ======= //

  
  // ======= Making visible or invisible the Search-Box and Login-Area on click and replacing icon - Start ======= //
  $(document).on("click", ".icon-btn", function (e) {
    e.preventDefault();
    if (
      !$(this).siblings().hasClass("visible") && !$(this).children().hasClass("flaticon-close")) {
      $(this).siblings().addClass("visible").parent().siblings().children(".holder-div").removeClass("visible");
      $(this).children().addClass("flaticon-close");
      $(this).parent().siblings().find("i").removeClass("flaticon-close");
    } else {
      $(this).siblings().removeClass("visible");
      $(this).children().removeClass("flaticon-close");
    }
  });
  // ======= Making visible or invisible the Search-Box and Login-Area on click and replacing icon - End ======= //


  // ======= Go to Reset Password Area and back - Start ======= //
  $(document).on("click", ".forgotten-password-link", function (e) {
    e.preventDefault();
    $(".reset-password").removeClass("d-none");
    $(".login-box").addClass("d-none");
  });

  $(document).on("click", ".go-back", function (e) {
    e.preventDefault();
    $(".reset-password").addClass("d-none");
    $(".login-box").removeClass("d-none");
  });
  // ======= Go to Reset Password Area and back - End ======= //


  // ======= Back To Top Btn - Start ======= //
  $(window).scroll(function(){
    if ($(this).scrollTop() > 300) {
      $("#topBtn").css({"transform": "translateY(0)", "visibility": "visible"});
    }else{
      $("#topBtn").css({"transform": "translateY(200px)", "visibility": "hidden"});
    }
  });

  $("#topBtn").click(function(){
    $("html, body").animate({scrollTop: 0}, 500);
  });
  // ======= Back To Top Btn - End ======= //
});




// ======= Navbar Hamburger Effect Start ======= //
let menuIcon = document.querySelector(".hamburger");
let navbar = document.querySelector(".navbar-items");

menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("change");
  navbar.classList.toggle("active");
  document.body.classList.toggle("stop-scroll");
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


// ======= Countdown Start ======= //
function countdown() {
  var now = new Date();
  var eventDate = new Date(2021, 03, 13);

  var currentTiime = now.getTime();
  var eventTime = eventDate.getTime();

  var remTime = eventTime - currentTiime;

  if (remTime <= 0) {
    document.getElementById("discount").style.display = "none";
    return;
  }

  var s = Math.floor(remTime / 1000);
  var m = Math.floor(s / 60);
  var h = Math.floor(m / 60);
  var d = Math.floor(h / 24);

  h %= 24;
  m %= 60;
  s %= 60;

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  document.querySelector(".days").textContent = d;
  document.querySelector(".days").innerText = d;

  document.querySelector(".hours").textContent = h;
  document.querySelector(".minutes").textContent = m;
  document.querySelector(".seconds").textContent = s;

  setTimeout(countdown, 1000);
}

countdown();
// ======= Countdown End ======= //



// ======= Login Validation Start ======= //
// selecting elements
let loginForm = document.getElementById("login");
let loginEmail = document.querySelector(".email");
let loginPassword = document.querySelector(".password");
let resetForm = document.getElementById("reset-form");
let resetEmail = document.querySelector(".email-for-resetting-password");
let msgForReset = document.querySelector(".success");
let resetPassArea = document.querySelector(".reset-password");
let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
let icon = '<i class="far fa-times-circle"></i>';


// email - input event
loginEmail.addEventListener("input", function () {
  this.style.border = "1px solid black";
  this.parentNode.nextElementSibling.classList.add("d-none");
});

// password - input event
loginPassword.addEventListener("input", function () {
  this.style.border = "1px solid black";
  this.parentNode.nextElementSibling.classList.add("d-none");
});


// login form - submit event
loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  // login-email
  if (loginEmail.value == "") {
    loginEmail.style.border = "2px solid red";
    loginEmail.parentNode.nextElementSibling.classList.remove("d-none");
    loginEmail.parentNode.nextElementSibling.innerHTML = `${icon} Email must be filled out!`;
    return false;
  } else if (!loginEmail.value.match(pattern)) {
    loginEmail.style.border = "2px solid red";
    loginEmail.parentNode.nextElementSibling.classList.remove("d-none");
    loginEmail.parentNode.nextElementSibling.innerHTML = `${icon} Please enter valid Email Address.`;
    return false;
  } else {
    loginEmail.style.border = "1px solid black";
    loginEmail.parentNode.nextElementSibling.classList.add("d-none");
  }

  // login-password
  if (loginPassword.value == "") {
    loginPassword.style.border = "2px solid red";
    loginPassword.parentNode.nextElementSibling.classList.remove("d-none");
    loginPassword.parentNode.nextElementSibling.innerHTML = `${icon} Password must be filled out!`;
    return false;
  } else if (loginPassword.value.length < 6) {
    loginPassword.style.border = "2px solid red";
    loginPassword.parentNode.nextElementSibling.classList.remove("d-none");
    loginPassword.parentNode.nextElementSibling.innerHTML = `${icon} Password must be at least 6 character!`;
    return false;
  } else {
    loginPassword.style.border = "1px solid black";
    loginPassword.parentNode.nextElementSibling.classList.add("d-none");
  }
});
// ======= Login Validation End ======= //


// ======= Reset Password Start ======= //
// email - input event
resetEmail.addEventListener("input", function () {
  this.style.border = "1px solid black";
  this.parentNode.nextElementSibling.classList.add("d-none");
});

// form - submit event
resetForm.addEventListener("submit", function (e) {
  e.preventDefault();
  if (resetEmail.value == "") {
    resetEmail.style.border = "2px solid red";
    resetEmail.parentNode.nextElementSibling.classList.remove("d-none");
    resetEmail.parentNode.nextElementSibling.innerHTML = `${icon} Email must be filled out!`;
    return false;
  } else if (!resetEmail.value.match(pattern)) {
    resetEmail.style.border = "2px solid red";
    resetEmail.parentNode.nextElementSibling.classList.remove("d-none");
    resetEmail.parentNode.nextElementSibling.innerHTML = `${icon} Please enter valid Email Address.`;
    return false;
  } else {
    resetEmail.style.border = "1px solid black";
    resetEmail.parentNode.nextElementSibling.classList.add("d-none");
  }
});
// ======= Reset Password End ======= //