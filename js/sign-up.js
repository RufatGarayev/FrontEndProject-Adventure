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


  // ======= Making visible or invisible the Search-Box and Login-Area on click and replacing icon - Start ======= //
  $(document).on("click", ".icon-btn", function (e) {
    e.preventDefault();
    if (
      !$(this).siblings().hasClass("visible") &&
      !$(this).children().hasClass("flaticon-close")
    ) {
      $(this)
        .siblings()
        .addClass("visible")
        .parent()
        .siblings()
        .children(".holder-div")
        .removeClass("visible");
      $(this).children().addClass("flaticon-close");
      $(this).parent().siblings().find("i").removeClass("flaticon-close");
    } else {
      $(this).siblings().removeClass("visible");
      $(this).children().removeClass("flaticon-close");
    }
  });
  // ======= Making visible or invisible the Search-Box and Login-Area on click and replacing icon - End ======= //


  // ======= Going to Reset Password Area and back - Start ======= //
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
  // ======= Going to Reset Password Area and back - End ======= //


  // ======= Back To Top Btn - Start ======= //
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $("#topBtn").css({ transform: "translateY(0)", visibility: "visible" });
    } else {
      $("#topBtn").css({
        transform: "translateY(200px)",
        visibility: "hidden",
      });
    }
  });

  $("#topBtn").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 500);
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


// ======= Sign-Up Validation Start ======= //
// selecting elements
let signUpForm = document.getElementById("sign-up");
let userName = document.querySelector(".username");
let signUpEmail = document.querySelector(".sign-up-email");
let signUpPassword = document.querySelector(".sign-up-password");
let repeatPassword = document.querySelector(".repeat-pass");

// username blur event
userName.addEventListener("blur", function () {
  if (userName.value == "") {
    this.style.border = "2px solid red";
    this.parentNode.nextElementSibling.classList.remove("d-none");
    this.parentNode.nextElementSibling.innerHTML = `${icon} Name must be filled out!`;
    return false;
  } else {
    this.style.border = "1px solid black";
    this.parentNode.nextElementSibling.classList.add("d-none");
  }
});

// username - input event
userName.addEventListener("input", function () {
  this.style.border = "1px solid black";
  this.parentNode.nextElementSibling.classList.add("d-none");
});

// email - blur event
signUpEmail.addEventListener("blur", function () {
  if (signUpEmail.value == "") {
    this.style.border = "2px solid red";
    this.parentNode.nextElementSibling.classList.remove("d-none");
    this.parentNode.nextElementSibling.innerHTML = `${icon} Email must be filled out!`;
    return false;
  } else if (!signUpEmail.value.match(pattern)) {
    this.style.border = "2px solid red";
    this.parentNode.nextElementSibling.classList.remove("d-none");
    this.parentNode.nextElementSibling.innerHTML = `${icon} Please enter valid Email Address.`;
    return false;
  } else {
    this.style.border = "1px solid black";
    this.parentNode.nextElementSibling.classList.add("d-none");
  }
});

// email - input event
signUpEmail.addEventListener("input", function () {
  this.style.border = "1px solid black";
  this.parentNode.nextElementSibling.classList.add("d-none");
});

// password - blur event
signUpPassword.addEventListener("blur", function () {
  if (signUpPassword.value == "") {
    this.style.border = "2px solid red";
    this.parentNode.nextElementSibling.classList.remove("d-none");
    this.parentNode.nextElementSibling.innerHTML = `${icon} Password must be filled out!`;
    return false;
  } else if (signUpPassword.value.length < 6) {
    this.style.border = "2px solid red";
    this.parentNode.nextElementSibling.classList.remove("d-none");
    this.parentNode.nextElementSibling.innerHTML = `${icon} Password must be at least 6 character!`;
    return false;
  } else {
    this.style.border = "1px solid black";
    this.parentNode.nextElementSibling.classList.add("d-none");
  }
});

// password - input event
signUpPassword.addEventListener("input", function () {
  this.style.border = "1px solid black";
  this.parentNode.nextElementSibling.classList.add("d-none");
});

// repeat-password - blur event
repeatPassword.addEventListener("change", function () {
  if (repeatPassword.value == "") {
    repeatPassword.style.border = "2px solid red";
    repeatPassword.parentNode.nextElementSibling.classList.remove("d-none");
    repeatPassword.parentNode.nextElementSibling.innerHTML = `${icon} Repeat password must be filled out!`;
    return false;
  } else if (repeatPassword.value !== signUpPassword.value) {
    this.style.border = "2px solid red";
    this.parentNode.nextElementSibling.classList.remove("d-none");
    this.parentNode.nextElementSibling.innerHTML = `${icon} Passwords don't match.`;
    return false;
  } else {
    this.style.border = "1px solid black";
    this.parentNode.nextElementSibling.classList.add("d-none");
  }
});

// repeat-password - input event
repeatPassword.addEventListener("input", function () {
  this.style.border = "1px solid black";
  this.parentNode.nextElementSibling.classList.add("d-none");
});


// sign-up form - submit event
signUpForm.addEventListener("submit", function (e) {
  e.preventDefault();
  // username
  if (userName.value == "") {
    userName.style.border = "2px solid red";
    userName.parentNode.nextElementSibling.classList.remove("d-none");
    userName.parentNode.nextElementSibling.innerHTML = `${icon} Name must be filled out!`;
    return false;
  } else {
    userName.style.border = "1px solid black";
    userName.parentNode.nextElementSibling.classList.add("d-none");
  }

  // sign-up-email
  if (signUpEmail.value == "") {
    signUpEmail.style.border = "2px solid red";
    signUpEmail.parentNode.nextElementSibling.classList.remove("d-none");
    signUpEmail.parentNode.nextElementSibling.innerHTML = `${icon} Email must be filled out!`;
    return false;
  } else if (!signUpEmail.value.match(pattern)) {
    signUpEmail.style.border = "2px solid red";
    signUpEmail.parentNode.nextElementSibling.classList.remove("d-none");
    signUpEmail.parentNode.nextElementSibling.innerHTML = `${icon} Please enter valid Email Address.`;
    return false;
  } else {
    signUpEmail.style.border = "1px solid black";
    signUpEmail.parentNode.nextElementSibling.classList.add("d-none");
  }

  // sign-up-password
  if (signUpPassword.value == "") {
    signUpPassword.style.border = "2px solid red";
    signUpPassword.parentNode.nextElementSibling.classList.remove("d-none");
    signUpPassword.parentNode.nextElementSibling.innerHTML = `${icon} Password must be filled out!`;
    return false;
  } else if (signUpPassword.value.length < 6) {
    signUpPassword.style.border = "2px solid red";
    signUpPassword.parentNode.nextElementSibling.classList.remove("d-none");
    signUpPassword.parentNode.nextElementSibling.innerHTML = `${icon} Password must be at least 6 character!`;
    return false;
  } else {
    signUpPassword.style.border = "1px solid black";
    signUpPassword.parentNode.nextElementSibling.classList.add("d-none");
  }

  // repeat-password
  if (repeatPassword.value == "") {
    repeatPassword.style.border = "2px solid red";
    repeatPassword.parentNode.nextElementSibling.classList.remove("d-none");
    repeatPassword.parentNode.nextElementSibling.innerHTML = `${icon} Password must be filled out!`;
    return false;
  } else if (repeatPassword.value !== signUpPassword.value) {
    repeatPassword.style.border = "2px solid red";
    repeatPassword.parentNode.nextElementSibling.classList.remove("d-none");
    repeatPassword.parentNode.nextElementSibling.innerHTML = `${icon} Passwords don't match.`;
    return false;
  } else {
    repeatPassword.style.border = "1px solid black";
    repeatPassword.parentNode.nextElementSibling.classList.add("d-none");
  }
});
// ======= Sign-Up Validation End ======= //