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


   // ======= Show or Hide navbar items when click on Hamburger btn - Start ======= //
   $(document).on("click", ".hamburger", function () {
    $(this).toggleClass("change");
    $(".navbar-items").toggleClass("active");
    $(document.body).toggleClass("stop-scroll");
  });
  // ======= Show or Hide navbar items when click on Hamburger btn - End ======= //


  // ======= Changing Link To Active OnClick Start ======= //
  $(document).on("click", ".navbar-items .nav-item", function () {
    $(this).addClass("active-link").siblings().removeClass("active-link");
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



  // ======= Login Validation Start ======= //
  $(function() {
    // hiding alerts
    $(".login-email-alert").hide();
    $(".login-pass-alert").hide();

    // errors 
    let login_error_email = false;
    let login_error_password = false;

    // keyup event
    $(".login-email").keyup(function() {
      check_login_email();
    });
    $(".login-pass").keyup(function() {
      check_login_password();
    });


    // email
    function check_login_email() {
       let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
       let loginEmailVal = $(".login-email").val();
       if (loginEmailVal === "") {
        $(".login-email-alert").html("Email must be filled out!");
        $(".login-email-alert").show();
        $(".login-email").css("border","2px solid red");
        $(".login-email").parent().next().css("margin-top","33px");
        $(".login-email").siblings(".fa-exclamation-circle").removeClass("d-none");
        $(".login-email").siblings(".fa-check-circle").addClass("d-none");
        login_error_email = true;
      }else if(!pattern.test(loginEmailVal)){
        $(".login-email-alert").html("Please enter valid Email.");
        $(".login-email-alert").show();
        $(".login-email").css("border","2px solid red");
        $(".login-email").parent().next().css("margin-top","33px");
        $(".login-email").siblings(".fa-exclamation-circle").removeClass("d-none");
        $(".login-email").siblings(".fa-check-circle").addClass("d-none");
        login_error_email = true;
      } else {
         $(".login-email-alert").hide();
         $(".login-email").css("border","2px solid green");
         $(".login-email").parent().next().css("margin-top","15px");
         $(".login-email").siblings(".fa-check-circle").removeClass("d-none");
         $(".login-email").siblings(".fa-exclamation-circle").addClass("d-none");
       }
    }

    // password
    function check_login_password() {
       let loginPassVal = $(".login-pass").val();
       if (loginPassVal === "") {
          $(".login-pass-alert").html("Password must be filled out!");
          $(".login-pass-alert").show();
          $(".login-pass").css("border","2px solid red");
          $(".login-pass").parent().next().css("margin-top","33px");
          $(".login-pass").siblings(".fa-exclamation-circle").removeClass("d-none");
          $(".login-pass").siblings(".fa-check-circle").addClass("d-none");
          login_error_password = true;
       } else if(loginPassVal.length < 8){
          $(".login-pass-alert").html("Password must be at least 8 character!");
          $(".login-pass-alert").show();
          $(".login-pass").css("border","2px solid red");
          $(".login-pass").parent().next().css("margin-top","33px");
          $(".login-pass").siblings(".fa-exclamation-circle").removeClass("d-none");
          $(".login-pass").siblings(".fa-check-circle").addClass("d-none");
          login_error_password = true;
       } else {
          $(".login-pass-alert").hide();
          $(".login-pass").css("border","2px solid green");
          $(".login-pass").parent().next().css("margin-top","10px");
          $(".login-pass").siblings(".fa-check-circle").removeClass("d-none");
          $(".login-pass").siblings(".fa-exclamation-circle").addClass("d-none");
       }
    }


    // login form - submit event
    $("#login").submit(function() {
       login_error_email = false;
       login_error_password = false;

       check_login_email();
       check_login_password();

       if (login_error_email === false && login_error_password === false) {
          alert("Login Successfull");
          return true;
       } else {
          alert("Please Fill the form Correctly");
          return false;
       }
    });
  });
  // ======= Login Validation End ======= //


  // ======= Reset Password Start ======= //
  $(function() {
    // hiding alerts
    $(".reset-email-alert").hide();

    // error
    let error_reset_email = false;

    // keyup event
    $(".email-for-reset-pass").keyup(function() {
      check_reset_email();
    });


    // email
    function check_reset_email() {
       let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
       let resetEmailVal = $(".email-for-reset-pass").val();
       if (resetEmailVal === "") {
        $(".reset-email-alert").html("Email must be filled out!");
        $(".reset-email-alert").show();
        $(".email-for-reset-pass").css("border","2px solid red");
        $(".email-for-reset-pass").parent().next().css("margin-top","33px");
        $(".email-for-reset-pass").siblings(".fa-exclamation-circle").removeClass("d-none");
        $(".email-for-reset-pass").siblings(".fa-check-circle").addClass("d-none");
        error_reset_email = true;
      }else if(!pattern.test(resetEmailVal)){
        $(".reset-email-alert").html("Please enter valid Email.");
        $(".reset-email-alert").show();
        $(".email-for-reset-pass").css("border","2px solid red");
        $(".email-for-reset-pass").parent().next().css("margin-top","33px");
        $(".email-for-reset-pass").siblings(".fa-exclamation-circle").removeClass("d-none");
        $(".email-for-reset-pass").siblings(".fa-check-circle").addClass("d-none");
        error_reset_email = true;
      } else {
         $(".reset-email-alert").hide();
         $(".email-for-reset-pass").css("border","2px solid green");
         $(".email-for-reset-pass").parent().next().css("margin-top","0px");
         $(".email-for-reset-pass").siblings(".fa-check-circle").removeClass("d-none");
         $(".email-for-reset-pass").siblings(".fa-exclamation-circle").addClass("d-none");
       }
    }


    // reset - submit event
    $("#reset-form").submit(function(e) {
      e.preventDefault();

       error_reset_email = false;

       check_reset_email();

       if (error_reset_email === false) {
          $(".reset-password").addClass("d-none");
          $(".success").removeClass("hidden");
          return true;
       } else {
          alert("Please Fill the Email Correctly");
          return false;
       }
    });
  });
  // ======= Reset Password End ======= //


  // ======= Subscribe Email Validation Start ======= //
  $(function() {
    // hiding alerts
    $(".subs-email-alert").hide();

    // error
    let error_subs_email = false;

    // keyup event
    $(".subscribe-email").keyup(function() {
      check_subscribe_email();
    });


    // email
    function check_subscribe_email() {
       let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
       let subsEmailVal = $(".subscribe-email").val();
       if (subsEmailVal === "") {
        $(".subs-email-alert").html("Email must be filled out!");
        $(".subs-email-alert").show();
        $(".subscribe-email").css("border","2px solid red");
        $(".subscribe-email").parent().siblings(".fa-exclamation-circle").removeClass("d-none");
        $(".subscribe-email").parent().siblings(".fa-check-circle").addClass("d-none");
        error_subs_email = true;
      }else if(!pattern.test(subsEmailVal)){
        $(".subs-email-alert").html("Please enter valid Email.");
        $(".subs-email-alert").show();
        $(".subscribe-email").css("border","2px solid red");
        $(".subscribe-email").parent().siblings(".fa-exclamation-circle").removeClass("d-none");
        $(".subscribe-email").parent().siblings(".fa-check-circle").addClass("d-none");
        error_subs_email = true;
      } else {
         $(".subs-email-alert").hide();
         $(".subscribe-email").css("border","2px solid green");
         $(".subscribe-email").parent().siblings(".fa-check-circle").removeClass("d-none");
         $(".subscribe-email").parent().siblings(".fa-exclamation-circle").addClass("d-none");
       }
    }


    // subscribe - submit event
    $("#subscribe-form").submit(function(e) {
      e.preventDefault();

       error_subs_email = false;

       check_subscribe_email();

       if (error_subs_email === false) {
        alert("You subscribed Correctly. Thank You!");
          return true;
       } else {
          alert("Please Fill the Email Correctly");
          return false;
       }
    });
  });
  // ======= Subscribe Email Validation End ======= //
});



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
  let now = new Date();
  let eventDate = new Date('Mart 13, 2021 00:00:00');

  let currentTiime = now.getTime();
  let eventTime = eventDate.getTime();

  let remTime = eventTime - currentTiime;

  if (remTime <= 0) {
    document.getElementById("discount").style.display = "none";
    return;
  }

  let s = Math.floor(remTime / 1000);
  let m = Math.floor(s / 60);
  let h = Math.floor(m / 60);
  let d = Math.floor(h / 24);

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