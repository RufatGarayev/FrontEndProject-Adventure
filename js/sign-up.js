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


  // ======= Making visible or invisible the Search-Box and Login-Area on click and replacing icon - Start ======= //
  $(document).on("click", ".icon-btn", function (e) {
    e.preventDefault();
    if (
      !$(this).siblings().hasClass("visible") &&
      !$(this).children().hasClass("flaticon-close")
    ) {
      $(this).siblings().addClass("visible").parent().siblings().children(".holder-div").removeClass("visible");
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

    // errors 
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


    // login form - submit event
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


  // ======= Sign-Up Validation Start ======= //
  $(function() {
    // hiding alerts
    $(".username-alert").hide();
    $(".email-alert").hide();
    $(".password-alert").hide();
    $(".repeat-pass-alert").hide();
    $(".checkbox-alert").hide();

    // errors 
    let error_username = false;
    let error_email = false;
    let error_password = false;
    let error_repeat_pass = false;
    let error_checkbox = false;

    // focusout event
    $(".username").focusout(function(){
       check_username();
    });
    $(".sign-up-email").focusout(function() {
       check_email();
    });
    $(".sign-up-password1").focusout(function() {
       check_password();
    });
    $(".repeat-pass").focusout(function() {
       check_repeat_pass();
    });

    // click event
    $("#terms-checkbox").click(function() {
       click_checkbox();
    });


    // username   
    function check_username() {
       let pattern = /^[a-zA-Z]*$/;
       let userNameVal = $(".username").val();
       if (userNameVal === "") {
        $(".username-alert").html("Username must be filled out!");
        $(".username-alert").show();
        $(".username").css("border","2px solid red");
        $(".username").parent().next().css("margin-top","33px");
        $(".username").siblings(".fa-exclamation-circle").removeClass("d-none");
        $(".username").siblings(".fa-check-circle").addClass("d-none");
        error_username = true;
      }else if (userNameVal.length < 3){
        $(".username-alert").html("Username must be at least 3 character!");
        $(".username-alert").show();
        $(".username").css("border","2px solid red");
        $(".username").parent().next().css("margin-top","33px");
        $(".username").siblings(".fa-exclamation-circle").removeClass("d-none");
        $(".username").siblings(".fa-check-circle").addClass("d-none");
        error_username = true;
      }else if (!pattern.test(userNameVal)){
        $(".username-alert").html("Username must contain letters!");
        $(".username-alert").show();
        $(".username").css("border","2px solid red");
        $(".username").parent().next().css("margin-top","33px");
        $(".username").siblings(".fa-exclamation-circle").removeClass("d-none");
        $(".username").siblings(".fa-check-circle").addClass("d-none");
        error_username = true;
      }else {
         $(".username-alert").hide();
         $(".username").css("border","2px solid green");
         $(".username").parent().next().css("margin-top","15px");
         $(".username").siblings(".fa-check-circle").removeClass("d-none");
         $(".username").siblings(".fa-exclamation-circle").addClass("d-none");
       }
    }

    // email
    function check_email() {
       let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
       let signUpEmailVal = $(".sign-up-email").val();
       if (signUpEmailVal === "") {
        $(".email-alert").html("Email must be filled out!");
        $(".email-alert").show();
        $(".sign-up-email").css("border","2px solid red");
        $(".sign-up-email").parent().next().css("margin-top","33px");
        $(".sign-up-email").siblings(".fa-exclamation-circle").removeClass("d-none");
        $(".sign-up-email").siblings(".fa-check-circle").addClass("d-none");
        error_email = true;
      }else if(!pattern.test(signUpEmailVal)){
        $(".email-alert").html("Please enter valid Email.");
        $(".email-alert").show();
        $(".sign-up-email").css("border","2px solid red");
        $(".sign-up-email").parent().next().css("margin-top","33px");
        $(".sign-up-email").siblings(".fa-exclamation-circle").removeClass("d-none");
        $(".sign-up-email").siblings(".fa-check-circle").addClass("d-none");
        error_email = true;
      } else {
         $(".email-alert").hide();
         $(".sign-up-email").css("border","2px solid green");
         $(".sign-up-email").parent().next().css("margin-top","15px");
         $(".sign-up-email").siblings(".fa-check-circle").removeClass("d-none");
         $(".sign-up-email").siblings(".fa-exclamation-circle").addClass("d-none");
       }
    }

    // password
    function check_password() {
       let signUpPassVal = $(".sign-up-password1").val();
       if (signUpPassVal === "") {
          $(".password-alert").html("Password must be filled out!");
          $(".password-alert").show();
          $(".sign-up-password1").css("border","2px solid red");
          $(".sign-up-password1").parent().next().css("margin-top","33px");
          $(".sign-up-password1").siblings(".fa-exclamation-circle").removeClass("d-none");
          $(".sign-up-password1").siblings(".fa-check-circle").addClass("d-none");
          error_password = true;
       } else if(signUpPassVal.length < 8){
          $(".password-alert").html("Password must be at least 8 character!");
          $(".password-alert").show();
          $(".sign-up-password1").css("border","2px solid red");
          $(".sign-up-password1").parent().next().css("margin-top","33px");
          $(".sign-up-password1").siblings(".fa-exclamation-circle").removeClass("d-none");
          $(".sign-up-password1").siblings(".fa-check-circle").addClass("d-none");
          error_password = true;
       } else {
          $(".password-alert").hide();
          $(".sign-up-password1").css("border","2px solid green");
          $(".sign-up-password1").parent().next().css("margin-top","15px");
          $(".sign-up-password1").siblings(".fa-check-circle").removeClass("d-none");
          $(".sign-up-password1").siblings(".fa-exclamation-circle").addClass("d-none");
       }
    }

    // repeat-password
    function check_repeat_pass() {
       let signUpPassVal = $(".sign-up-password1").val();
       let signUpRepeatPassVal = $(".repeat-pass").val();
       if (signUpRepeatPassVal === "") {
          $(".repeat-pass-alert").html("Repeat password must be filled out!");
          $(".repeat-pass-alert").show();
          $(".repeat-pass").css("border","2px solid red");
          $(".repeat-pass").parent().next().css("margin-top","20px");
          $(".repeat-pass").siblings(".fa-exclamation-circle").removeClass("d-none");
          $(".repeat-pass").siblings(".fa-check-circle").addClass("d-none");
          error_repeat_pass = true;
       } else if (signUpPassVal !== signUpRepeatPassVal){
          $(".repeat-pass-alert").html("Passwords don't match.");
          $(".repeat-pass-alert").show();
          $(".repeat-pass").css("border","2px solid red");
          $(".repeat-pass").parent().next().css("margin-top","20px");
          $(".repeat-pass").siblings(".fa-exclamation-circle").removeClass("d-none");
          $(".repeat-pass").siblings(".fa-check-circle").addClass("d-none");
          error_repeat_pass = true;
       }else {
          $(".repeat-pass-alert").hide();
          $(".repeat-pass").css("border","2px solid green");
          $(".repeat-pass").parent().next().css("margin-top","0px");
          $(".repeat-pass").siblings(".fa-check-circle").removeClass("d-none");
          $(".repeat-pass").siblings(".fa-exclamation-circle").addClass("d-none");
       }
    }

    // checkbox
    function click_checkbox() {
       let checkBox = $("#terms-checkbox");
       if ($(checkBox).prop("checked") == false) {
          $(".checkbox-alert").html("You haven't accepted the terms yet.");
          $(".checkbox-alert").show();
          error_checkbox = true;
       } else {
          $(".checkbox-alert").hide();
       }
    }

    // sign-up form - submit event
    $("#sign-up").submit(function() {
       error_username = false;
       error_email = false;
       error_password = false;
       error_repeat_pass = false;
       error_checkbox = false;

       check_username();
       check_email();
       check_password();
       check_repeat_pass();
       click_checkbox();

       if (error_username === false && error_email === false && error_password === false && error_repeat_pass === false && error_checkbox === false) {
          alert("Registration Successfull");
          return true;
       } else {
          alert("Please Fill the form Correctly");
          return false;
       }
    });
 });
  // ======= Sign-Up Validation End ======= //
});