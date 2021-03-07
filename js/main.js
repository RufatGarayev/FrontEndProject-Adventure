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
    if ($(window).scrollTop() >= 600) {
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
    // toggle navbar
    $(".navbar-items").toggleClass("active");
    // toggle filter btn
    $(".sidebar-filter-toggle").toggleClass("hide-filter-btn");

    // disable scroll
    if ($(".navbar-items").hasClass("active")) {
      $(document.body).addClass("stop-scroll");
    }else{
      // enable scroll
      $(document.body).removeClass("stop-scroll");
    }


    $(document).mouseup(function(e) {
      if (!$("header").is(e.target) && $("header").has(e.target).length === 0 && 
        !$("#top-header").is(e.target) && $("#top-header").has(e.target).length === 0)
      {
        // enable scroll
        $(document.body).removeClass("stop-scroll");
        // return;
      }
      else{
        // disable scroll
        $(document.body).addClass("stop-scroll");
      }
    });
   });
  // ======= Show or Hide navbar items when click on Hamburger btn - End ======= //


  // ======= Counter-Up Start ======= //
  $(".counter-up").counterUp({
    delay: 10,
    time: 1000,
  });
  // ======= Counter-Up End ======= //

  
  // ======= Making visible or invisible the Search-Box and Login-Area on click and replacing icon - Start ======= //
  // show or hide search-box and login-area, and change icons when click them
  $(document).on("click", ".icon-btn", function (e) {
    e.preventDefault();
    if (!$(this).siblings().hasClass("visible") && !$(this).children().hasClass("flaticon-close")) {
      $(this).siblings().addClass("visible").parent().siblings().children(".holder-div").removeClass("visible");
      $(this).children().addClass("flaticon-close");
      $(this).parent().siblings().find("i").removeClass("flaticon-close");
    } else {
      $(this).siblings().removeClass("visible");
      $(this).children().removeClass("flaticon-close");
    }

    // hide search-box and login-area, and change icons when click outside
    $(document).mouseup(function(e) {
      if (
          !$(".search-area-holder").is(e.target) && $(".search-area-holder").has(e.target).length === 0 &&
          !$(".login-box-holder").is(e.target) && $(".login-box-holder").has(e.target).length === 0 &&
          !$(".icon-btn").is(e.target) && $(".icon-btn").has(e.target).length === 0
         )
      {
        $(".search-area-holder").removeClass("visible").siblings().children().removeClass("flaticon-close");
        $(".login-box-holder").removeClass("visible").siblings().children().removeClass("flaticon-close");
      }
    });
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
    $("html, body").animate({scrollTop: 0}, 100);
  });
  // ======= Back To Top Btn - End ======= //


  // ======= Price Range Filter - Start ======= //
  if($('.slider-tour-sorting').length){
    $( function() {
        $( ".slider-tour-sorting" ).slider({
        range: true,
        min: 50,
        max: 150,
        values: [ 55, 150 ],
        slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + "  -  $" + ui.values[ 1 ] );
        }
        });
        $( "#amount" ).val( "$" + $( ".slider-tour-sorting" ).slider( "values", 0 ) +
        "  -  $" + $( ".slider-tour-sorting" ).slider( "values", 1 ) );
    } );
   }
  // ======= Price Range Filter - End ======= //


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


  // ======= Send Message Start ======= //
  $(function() {
      // hiding the alerts
      $(".name-alert").hide();
      $(".msg-email-alert").hide();
      $(".subject-alert").hide();
      $(".msg-alert").hide();
  
      // errors 
      let msg_error_name = false;
      let msg_error_email = false;
      let msg_error_subject = false;
      let msg_error_message = false;
  
      // keyup event
      $(".name").keyup(function() {
        check_msg_name();
      });
      $(".send-msg-email").keyup(function() {
        check_msg_email();
      });
      $(".subject").keyup(function() {
        check_msg_subject();
      });
      $(".msg-area").keyup(function() {
        check_message();
      });
  
  
      // name
      function check_msg_name() {
        let nameVal = $(".name").val();
        if (nameVal === "") {
         $(".name-alert").html("Name must be filled out!");
         $(".name-alert").show();
         $(".name").css("border","2px solid red");
         $(".name").parent().next().css("margin-top","33px");
         $(".name").siblings(".fa-exclamation-circle").removeClass("d-none");
         $(".name").siblings(".fa-check-circle").addClass("d-none");
         msg_error_name = true;
       }else if (nameVal.length < 3){
         $(".name-alert").html("Name must be at least 3 character!");
         $(".name-alert").show();
         $(".name").css("border","2px solid red");
         $(".name").parent().next().css("margin-top","33px");
         $(".name").siblings(".fa-exclamation-circle").removeClass("d-none");
         $(".name").siblings(".fa-check-circle").addClass("d-none");
         msg_error_name = true;
       } else {
          $(".name-alert").hide();
          $(".name").css("border","2px solid green");
          $(".name").parent().next().css("margin-top","15px");
          $(".name").siblings(".fa-check-circle").removeClass("d-none");
          $(".name").siblings(".fa-exclamation-circle").addClass("d-none");
       }
      }

      // email
      function check_msg_email() {
        let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        let emailVal = $(".send-msg-email").val();
        if (emailVal === "") {
         $(".msg-email-alert").html("Email must be filled out!");
         $(".msg-email-alert").show();
         $(".send-msg-email").css("border","2px solid red");
         $(".send-msg-email").parent().next().css("margin-top","33px");
         $(".send-msg-email").siblings(".fa-exclamation-circle").removeClass("d-none");
         $(".send-msg-email").siblings(".fa-check-circle").addClass("d-none");
         msg_error_email = true;
       }else if (!pattern.test(emailVal)){
         $(".msg-email-alert").html("Please enter valid Email.");
         $(".msg-email-alert").show();
         $(".send-msg-email").css("border","2px solid red");
         $(".send-msg-email").parent().next().css("margin-top","33px");
         $(".send-msg-email").siblings(".fa-exclamation-circle").removeClass("d-none");
         $(".send-msg-email").siblings(".fa-check-circle").addClass("d-none");
         msg_error_email = true;
       } else {
          $(".msg-email-alert").hide();
          $(".send-msg-email").css("border","2px solid green");
          $(".send-msg-email").parent().next().css("margin-top","15px");
          $(".send-msg-email").siblings(".fa-check-circle").removeClass("d-none");
          $(".send-msg-email").siblings(".fa-exclamation-circle").addClass("d-none");
       }
      }
  
      // subject
      function check_msg_subject() {
        let subjectVal = $(".subject").val();
        if (subjectVal === "") {
         $(".subject-alert").html("Subject must be filled out!");
         $(".subject-alert").show();
         $(".subject").css("border","2px solid red");
         $(".subject").parent().next().css("margin-top","33px");
         $(".subject").siblings(".fa-exclamation-circle").removeClass("d-none");
         $(".subject").siblings(".fa-check-circle").addClass("d-none");
         msg_error_subject = true;
       }else if (subjectVal.length < 3){
         $(".subject-alert").html("Subject must be at least 3 character!");
         $(".subject-alert").show();
         $(".subject").css("border","2px solid red");
         $(".subject").parent().next().css("margin-top","33px");
         $(".subject").siblings(".fa-exclamation-circle").removeClass("d-none");
         $(".subject").siblings(".fa-check-circle").addClass("d-none");
         msg_error_subject = true;
       } else {
          $(".subject-alert").hide();
          $(".subject").css("border","2px solid green");
          $(".subject").parent().next().css("margin-top","15px");
          $(".subject").siblings(".fa-check-circle").removeClass("d-none");
          $(".subject").siblings(".fa-exclamation-circle").addClass("d-none");
       }
      }

      // message
      function check_message() {
        let msgVal = $(".msg-area").val();
        if (msgVal === "") {
         $(".msg-alert").html("Message must be filled out!");
         $(".msg-alert").show();
         $(".msg-area").css("border","2px solid red");
         $(".msg-area").parent().next().css("margin-top","33px");
         msg_error_message = true;
       }else if (msgVal.length < 20){
         $(".msg-alert").html("Message must be at least 20 character!");
         $(".msg-alert").show();
         $(".msg-area").css("border","2px solid red");
         $(".msg-area").parent().next().css("margin-top","33px");
         msg_error_message = true;
       } else {
          $(".msg-alert").hide();
          $(".msg-area").css("border","2px solid green");
          $(".msg-area").parent().next().css("margin-top","15px");
       }
     }
  
  
      // send message form - submit event
      $("#send-msg").submit(function(e) {
        e.preventDefault();

         msg_error_name = false;
         msg_error_email = false;
         msg_error_subject = false;
         msg_error_message = false;
  
         check_msg_name();
         check_msg_email();
         check_msg_subject();
         check_message();
  
         if (msg_error_name === false && msg_error_email === false && msg_error_subject === false && msg_error_message === false) {
            alert("Your message was sent Successfully");
            return true;
         } else {
            alert("Please Fill the form Correctly");
            return false;
         }
      });
  });
  // ======= Send Message End ======= //


  // ======= Sorting Dropdown Start ======= //
  $("#tours .dropdown").click(function() {
    // toggle the dropdown menu
    $("#tours .menu").toggleClass("#tours showMenu");
    // toggle the arrow icon
    $("#tours .dropdown i").toggleClass("#tours rotate");

    $("#tours .menu li").click(function() {
      // equalize p to li
      $("#tours .dropdown p").html($(this).html());
      // hide dropdown menu
      $("#tours .menu").removeClass("#tours showMenu");
      // rotate the arrow icon
      $("#tours .dropdown i").removeClass("#tours rotate");
    });

    $(document).mouseup(function(e) {
      if (!$("#tours .dropdown").is(e.target) && $("#tours .dropdown").has(e.target).length === 0) {
        // hide dropdown menu
        $("#tours .menu").removeClass("#tours showMenu");
        // rotate the arrow icon
        $("#tours .dropdown i").removeClass("#tours rotate");
      }
    });
  });
  // ======= Sorting Dropdown End ======= //


  // ======= Show or Hide Sidebar Filter - Start ======= //
  $(document).on("click", ".sidebar-filter-toggle", function (e) {
    e.preventDefault();
    // toggle sidebar
    $(".sidebar-area").toggleClass("show-sidebar");
    // toggle bg-color
    $(".dark-bgcolor").toggleClass("show-dark-bgcolor");

    // disable scroll
    if ($(".sidebar-area").hasClass("show-sidebar")) {
      $(document.body).addClass("stop-scroll");
    }else{
      // enable scroll
      $(document.body).removeClass("stop-scroll");
    }

    $(document).mouseup(function(e) {
      if (!$(".sidebar-area").is(e.target) && $(".sidebar-area").has(e.target).length === 0)
      {
        // hide sidebar when click outside
        $(".sidebar-area").removeClass("show-sidebar");
        // cancel dark bg-color
        $(".dark-bgcolor").removeClass("show-dark-bgcolor");
        // disable scroll
        $(document.body).removeClass("stop-scroll");
      }else{
        // enable scroll
        $(document.body).addClass("stop-scroll");
      }
    });
  });
  // ======= Show or Hide Sidebar Filter - End ======= //


  // ======= Show appropriate Image when click a small image - Start ======= //
  $(document).on("click", "#tour .small-img-box a", function (e) {
    e.preventDefault();

    $(this).parent().addClass("#tour active-img");
    $(this).parent().parent().siblings().find(".small-img-box").removeClass("#tour active-img");   
    $("#tour .tour-img-box img").attr("src", $(this).attr("href"));
  });
  // ======= Show appropriate Image when click a small image - End ======= //


  // ======= Show appropriate tab content when click a tab button - Start ======= //
  $(document).on("click", ".tour-tabs li a", function (e) {
    e.preventDefault();
    
    $(".tour-tabs li a").removeClass("active-tabBtn");
    $(this).addClass("active-tabBtn");
    $(".tab-items .tab-content").hide();
    $($(this).data("value")).show();
  });
  // ======= Show appropriate tab content when click a tab button - End ======= //


  // ======= Countdown Start ======= //
  let countdown = () => {
    // select time
    let now = new Date();
    let eventDate = new Date('Mart 13, 2021 00:00:00');
    let currentTiime = now.getTime();
    let eventTime = eventDate.getTime();
    let remTime = eventTime - currentTiime;

    // hide discount section when the time is up
    if (remTime <= 0) {
      $("#discount").css("display", "none");
      return;
    }

    // calculate sec, min, hour and day
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

    // add the measures of time into compatible elements
    $(".days").text(d);
    $(".days").text(d);

    $(".hours").text(h);
    $(".minutes").text(m);
    $(".seconds").text(s);

    setTimeout(countdown, 1000);
  }

  countdown();
  // ======= Countdown End ======= //

  
  // ======= Read More Start ======= //
  $(document).on("click", ".readMore-btn", function(){
    // show more text or hide
    $(".read-more").toggleClass("show-more-text");
    
    // change the btn text
    if ($(".read-more").hasClass("show-more-text")) {
      $(".readMore-btn").text("Read Less...");
    }else{
      $(".readMore-btn").text("Read More...");
    }
  });
  // ======= Read More End ======= //


 // ======= Increase or Decrease the Quantity - Start ======= //
 // taking count
 let count;

 // taking price
 let price = $(".total-price .price").text();

 // price calculation function
 function total() {
    let total = count * price;
    $(".total-price .price").text(total);
 }

 $(document).on("click", ".increase-decrease .plus-btn", function(){
    // getting value of input
    count = $(".increase-decrease .amount").val();

    // input value increment by 1
    count++;

    // setting increment input value
    $(".increase-decrease .amount").val(count);

    // enable minus-btn, if count > 1
    if (count > 1) {
      $(".increase-decrease .minus-btn").removeAttr("disabled");
    }
    
    // disable plus-btn, if count >= 10
    if (count >= 10){
      $(".increase-decrease .plus-btn").attr("disabled", true);
    }

    total();
 });

 $(document).on("click", ".increase-decrease .minus-btn", function(){
    // getting value of input
    count = $(".increase-decrease .amount").val();

    // input value increment by 1
    count--;

    //setting increment input value
    $(".increase-decrease .amount").val(count);

    // disable minus-btn, if count === 1
    if (count === 1) {
      $(".increase-decrease .minus-btn").attr("disabled", true);
    }

    // enable plus-btn, if count < 10
    if (count < 10) {
      $(".increase-decrease .plus-btn").removeAttr("disabled");
    }

    total();
 });
 // ======= Increase or Decrease the Quantity - End ======= //


  // ======= Tour Filter and Background-color of Button when click on it - Start ======= //
  $(".tour-holder").isotope({
    itemSelector: ".item-col",
    percentPosition: true,
    layoutMode: "fitRows"
  });
    
  $(document).on("click", ".category-btns li a", function(e){
    e.preventDefault();
      $(this).addClass("active-btn");
      $(this).parent().siblings().children().removeClass("active-btn");
  
      let selector = $(this).attr("data-filter");
      $(".tour-holder").isotope({
        filter: selector
      });
      return false;
  });
  // ======= Tour Filter and Background-color of Button when click on it - End ======= //
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
