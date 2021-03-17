// ======= Login Validation Start ======= //
$(function () {
   // hiding alerts
   $(".login-email-alert").hide();
   $(".login-pass-alert").hide();

   // errors 
   let login_error_email = false;
   let login_error_password = false;

   // keyup event
   $(".login-email").keyup(function () {
      check_login_email();
   });
   $(".login-pass").keyup(function () {
      check_login_password();
   });


   // email
   function check_login_email() {
      let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      let loginEmailVal = $(".login-email").val();
      if (loginEmailVal === "") {
         $(".login-email-alert").html("Email must be filled out!");
         $(".login-email-alert").show();
         $(".login-email").css("border", "2px solid red");
         $(".login-email").parent().next().css("margin-top", "33px");
         $(".login-email").siblings(".fa-exclamation-circle").removeClass("d-none");
         $(".login-email").siblings(".fa-check-circle").addClass("d-none");
         login_error_email = true;
      } else if (!pattern.test(loginEmailVal)) {
         $(".login-email-alert").html("Please enter valid Email.");
         $(".login-email-alert").show();
         $(".login-email").css("border", "2px solid red");
         $(".login-email").parent().next().css("margin-top", "33px");
         $(".login-email").siblings(".fa-exclamation-circle").removeClass("d-none");
         $(".login-email").siblings(".fa-check-circle").addClass("d-none");
         login_error_email = true;
      } else {
         $(".login-email-alert").hide();
         $(".login-email").css("border", "2px solid green");
         $(".login-email").parent().next().css("margin-top", "15px");
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
         $(".login-pass").css("border", "2px solid red");
         $(".login-pass").parent().next().css("margin-top", "33px");
         $(".login-pass").siblings(".fa-exclamation-circle").removeClass("d-none");
         $(".login-pass").siblings(".fa-check-circle").addClass("d-none");
         login_error_password = true;
      } else if (loginPassVal.length < 8) {
         $(".login-pass-alert").html("Password must be at least 8 character!");
         $(".login-pass-alert").show();
         $(".login-pass").css("border", "2px solid red");
         $(".login-pass").parent().next().css("margin-top", "33px");
         $(".login-pass").siblings(".fa-exclamation-circle").removeClass("d-none");
         $(".login-pass").siblings(".fa-check-circle").addClass("d-none");
         login_error_password = true;
      } else {
         $(".login-pass-alert").hide();
         $(".login-pass").css("border", "2px solid green");
         $(".login-pass").parent().next().css("margin-top", "10px");
         $(".login-pass").siblings(".fa-check-circle").removeClass("d-none");
         $(".login-pass").siblings(".fa-exclamation-circle").addClass("d-none");
      }
   }


   // login form - submit event
   $("#login").submit(function () {
      login_error_email = false;
      login_error_password = false;

      check_login_email();
      check_login_password();

      if (login_error_email === false && login_error_password === false) {
         alert("Login Successfull");
         return true;
      } else {
         return false;
      }
   });
});
// ======= Login Validation End ======= //


// ======= Reset Password Start ======= //
$(function () {
   // hiding alerts
   $(".reset-email-alert").hide();

   // error
   let error_reset_email = false;

   // keyup event
   $(".email-for-reset-pass").keyup(function () {
      check_reset_email();
   });


   // email
   function check_reset_email() {
      let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      let resetEmailVal = $(".email-for-reset-pass").val();
      if (resetEmailVal === "") {
         $(".reset-email-alert").html("Email must be filled out!");
         $(".reset-email-alert").show();
         $(".email-for-reset-pass").css("border", "2px solid red");
         $(".email-for-reset-pass").parent().next().css("margin-top", "33px");
         $(".email-for-reset-pass").siblings(".fa-exclamation-circle").removeClass("d-none");
         $(".email-for-reset-pass").siblings(".fa-check-circle").addClass("d-none");
         error_reset_email = true;
      } else if (!pattern.test(resetEmailVal)) {
         $(".reset-email-alert").html("Please enter valid Email.");
         $(".reset-email-alert").show();
         $(".email-for-reset-pass").css("border", "2px solid red");
         $(".email-for-reset-pass").parent().next().css("margin-top", "33px");
         $(".email-for-reset-pass").siblings(".fa-exclamation-circle").removeClass("d-none");
         $(".email-for-reset-pass").siblings(".fa-check-circle").addClass("d-none");
         error_reset_email = true;
      } else {
         $(".reset-email-alert").hide();
         $(".email-for-reset-pass").css("border", "2px solid green");
         $(".email-for-reset-pass").parent().next().css("margin-top", "0px");
         $(".email-for-reset-pass").siblings(".fa-check-circle").removeClass("d-none");
         $(".email-for-reset-pass").siblings(".fa-exclamation-circle").addClass("d-none");
      }
   }


   // reset - submit event
   $("#reset-form").submit(function (e) {
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
$(function () {
   // hiding alerts
   $(".subs-email-alert").hide();

   // error
   let error_subs_email = false;

   // keyup event
   $(".subscribe-email").keyup(function () {
      check_subscribe_email();
   });


   // email
   function check_subscribe_email() {
      let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      let subsEmailVal = $(".subscribe-email").val();
      if (subsEmailVal === "") {
         $(".subs-email-alert").html("Email must be filled out!");
         $(".subs-email-alert").show();
         $(".subscribe-email").css("border", "2px solid red");
         $(".subscribe-email").parent().siblings(".fa-exclamation-circle").removeClass("d-none");
         $(".subscribe-email").parent().siblings(".fa-check-circle").addClass("d-none");
         error_subs_email = true;
      } else if (!pattern.test(subsEmailVal)) {
         $(".subs-email-alert").html("Please enter valid Email.");
         $(".subs-email-alert").show();
         $(".subscribe-email").css("border", "2px solid red");
         $(".subscribe-email").parent().siblings(".fa-exclamation-circle").removeClass("d-none");
         $(".subscribe-email").parent().siblings(".fa-check-circle").addClass("d-none");
         error_subs_email = true;
      } else {
         $(".subs-email-alert").hide();
         $(".subscribe-email").css("border", "2px solid green");
         $(".subscribe-email").parent().siblings(".fa-check-circle").removeClass("d-none");
         $(".subscribe-email").parent().siblings(".fa-exclamation-circle").addClass("d-none");
      }
   }


   // subscribe - submit event
   $("#subscribe-form").submit(function (e) {
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
$(function () {
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
   $(".username").focusout(function () {
      check_username();
   });
   $(".sign-up-email").focusout(function () {
      check_email();
   });
   $(".sign-up-password1").focusout(function () {
      check_password();
   });
   $(".repeat-pass").focusout(function () {
      check_repeat_pass();
   });

   // click event
   $("#terms-checkbox").click(function () {
      click_checkbox();
   });


   // username   
   function check_username() {
      let pattern = /^[a-zA-Z]*$/;
      let userNameVal = $(".username").val();
      if (userNameVal === "") {
         $(".username-alert").html("Username must be filled out!");
         $(".username-alert").show();
         $(".username").css("border", "2px solid red");
         $(".username").parent().next().css("margin-top", "33px");
         $(".username").siblings(".fa-exclamation-circle").removeClass("d-none");
         $(".username").siblings(".fa-check-circle").addClass("d-none");
         error_username = true;
      } else if (userNameVal.length < 3) {
         $(".username-alert").html("Username must be at least 3 character!");
         $(".username-alert").show();
         $(".username").css("border", "2px solid red");
         $(".username").parent().next().css("margin-top", "33px");
         $(".username").siblings(".fa-exclamation-circle").removeClass("d-none");
         $(".username").siblings(".fa-check-circle").addClass("d-none");
         error_username = true;
      } else if (!pattern.test(userNameVal)) {
         $(".username-alert").html("Username must contain letters!");
         $(".username-alert").show();
         $(".username").css("border", "2px solid red");
         $(".username").parent().next().css("margin-top", "33px");
         $(".username").siblings(".fa-exclamation-circle").removeClass("d-none");
         $(".username").siblings(".fa-check-circle").addClass("d-none");
         error_username = true;
      } else {
         $(".username-alert").hide();
         $(".username").css("border", "2px solid green");
         $(".username").parent().next().css("margin-top", "15px");
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
         $(".sign-up-email").css("border", "2px solid red");
         $(".sign-up-email").parent().next().css("margin-top", "33px");
         $(".sign-up-email").siblings(".fa-exclamation-circle").removeClass("d-none");
         $(".sign-up-email").siblings(".fa-check-circle").addClass("d-none");
         error_email = true;
      } else if (!pattern.test(signUpEmailVal)) {
         $(".email-alert").html("Please enter valid Email.");
         $(".email-alert").show();
         $(".sign-up-email").css("border", "2px solid red");
         $(".sign-up-email").parent().next().css("margin-top", "33px");
         $(".sign-up-email").siblings(".fa-exclamation-circle").removeClass("d-none");
         $(".sign-up-email").siblings(".fa-check-circle").addClass("d-none");
         error_email = true;
      } else {
         $(".email-alert").hide();
         $(".sign-up-email").css("border", "2px solid green");
         $(".sign-up-email").parent().next().css("margin-top", "15px");
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
         $(".sign-up-password1").css("border", "2px solid red");
         $(".sign-up-password1").parent().next().css("margin-top", "33px");
         $(".sign-up-password1").siblings(".fa-exclamation-circle").removeClass("d-none");
         $(".sign-up-password1").siblings(".fa-check-circle").addClass("d-none");
         error_password = true;
      } else if (signUpPassVal.length < 8) {
         $(".password-alert").html("Password must be at least 8 character!");
         $(".password-alert").show();
         $(".sign-up-password1").css("border", "2px solid red");
         $(".sign-up-password1").parent().next().css("margin-top", "33px");
         $(".sign-up-password1").siblings(".fa-exclamation-circle").removeClass("d-none");
         $(".sign-up-password1").siblings(".fa-check-circle").addClass("d-none");
         error_password = true;
      } else {
         $(".password-alert").hide();
         $(".sign-up-password1").css("border", "2px solid green");
         $(".sign-up-password1").parent().next().css("margin-top", "15px");
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
         $(".repeat-pass").css("border", "2px solid red");
         $(".repeat-pass").parent().next().css("margin-top", "20px");
         $(".repeat-pass").siblings(".fa-exclamation-circle").removeClass("d-none");
         $(".repeat-pass").siblings(".fa-check-circle").addClass("d-none");
         error_repeat_pass = true;
      } else if (signUpPassVal !== signUpRepeatPassVal) {
         $(".repeat-pass-alert").html("Passwords don't match.");
         $(".repeat-pass-alert").show();
         $(".repeat-pass").css("border", "2px solid red");
         $(".repeat-pass").parent().next().css("margin-top", "20px");
         $(".repeat-pass").siblings(".fa-exclamation-circle").removeClass("d-none");
         $(".repeat-pass").siblings(".fa-check-circle").addClass("d-none");
         error_repeat_pass = true;
      } else {
         $(".repeat-pass-alert").hide();
         $(".repeat-pass").css("border", "2px solid green");
         $(".repeat-pass").parent().next().css("margin-top", "0px");
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
   $("#sign-up").submit(function () {
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

      if (error_username === false && error_email === false &&
         error_password === false && error_repeat_pass === false &&
         error_checkbox === false) {
         alert("Registration Successfull");
         return true;
      } else {
         alert("Please Fill the form Correctly");
         return false;
      }
   });
});
// ======= Sign-Up Validation End ======= //


// ======= Send Message Validation Start ======= //
$(function () {
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
   $(".name").keyup(function () {
      check_msg_name();
   });
   $(".send-msg-email").keyup(function () {
      check_msg_email();
   });
   $(".subject").keyup(function () {
      check_msg_subject();
   });
   $(".msg-area").keyup(function () {
      check_message();
   });


   // name
   function check_msg_name() {
      let nameVal = $(".name").val();
      if (nameVal === "") {
         $(".name-alert").html("Name must be filled out!");
         $(".name-alert").show();
         $(".name").css("border", "2px solid red");
         $(".name").parent().next().css("margin-top", "33px");
         $(".name").siblings(".fa-exclamation-circle").removeClass("d-none");
         $(".name").siblings(".fa-check-circle").addClass("d-none");
         msg_error_name = true;
      } else if (nameVal.length < 3) {
         $(".name-alert").html("Name must be at least 3 character!");
         $(".name-alert").show();
         $(".name").css("border", "2px solid red");
         $(".name").parent().next().css("margin-top", "33px");
         $(".name").siblings(".fa-exclamation-circle").removeClass("d-none");
         $(".name").siblings(".fa-check-circle").addClass("d-none");
         msg_error_name = true;
      } else {
         $(".name-alert").hide();
         $(".name").css("border", "2px solid green");
         $(".name").parent().next().css("margin-top", "15px");
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
         $(".send-msg-email").css("border", "2px solid red");
         $(".send-msg-email").parent().next().css("margin-top", "33px");
         $(".send-msg-email").siblings(".fa-exclamation-circle").removeClass("d-none");
         $(".send-msg-email").siblings(".fa-check-circle").addClass("d-none");
         msg_error_email = true;
      } else if (!pattern.test(emailVal)) {
         $(".msg-email-alert").html("Please enter valid Email.");
         $(".msg-email-alert").show();
         $(".send-msg-email").css("border", "2px solid red");
         $(".send-msg-email").parent().next().css("margin-top", "33px");
         $(".send-msg-email").siblings(".fa-exclamation-circle").removeClass("d-none");
         $(".send-msg-email").siblings(".fa-check-circle").addClass("d-none");
         msg_error_email = true;
      } else {
         $(".msg-email-alert").hide();
         $(".send-msg-email").css("border", "2px solid green");
         $(".send-msg-email").parent().next().css("margin-top", "15px");
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
         $(".subject").css("border", "2px solid red");
         $(".subject").parent().next().css("margin-top", "33px");
         $(".subject").siblings(".fa-exclamation-circle").removeClass("d-none");
         $(".subject").siblings(".fa-check-circle").addClass("d-none");
         msg_error_subject = true;
      } else if (subjectVal.length < 3) {
         $(".subject-alert").html("Subject must be at least 3 character!");
         $(".subject-alert").show();
         $(".subject").css("border", "2px solid red");
         $(".subject").parent().next().css("margin-top", "33px");
         $(".subject").siblings(".fa-exclamation-circle").removeClass("d-none");
         $(".subject").siblings(".fa-check-circle").addClass("d-none");
         msg_error_subject = true;
      } else {
         $(".subject-alert").hide();
         $(".subject").css("border", "2px solid green");
         $(".subject").parent().next().css("margin-top", "15px");
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
         $(".msg-area").css("border", "2px solid red");
         $(".msg-area").parent().next().css("margin-top", "33px");
         msg_error_message = true;
      } else if (msgVal.length < 20) {
         $(".msg-alert").html("Message must be at least 20 character!");
         $(".msg-alert").show();
         $(".msg-area").css("border", "2px solid red");
         $(".msg-area").parent().next().css("margin-top", "33px");
         msg_error_message = true;
      } else {
         $(".msg-alert").hide();
         $(".msg-area").css("border", "2px solid green");
         $(".msg-area").parent().next().css("margin-top", "15px");
      }
   }

   // send message form - submit event
   $("#send-msg").submit(function (e) {
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
// ======= Send Message Validation End ======= //



// =========== Jquery Validation Plugin =========== //

// ======= Review(Tour Details) Validation Start ======= //
$(function () {
  // the processes that take place in the submission
  $.validator.setDefaults({
      submitHandler: function () {
         alert("Done");
      }
  });

   // rules 
   $("#review-form").validate({
      rules: {
         reviewArea: {
            required: true,
            minlength: 10,
         },
         reviewName: {
            required: true,
            minlength: 2
         },
         reviewEmail: {
            required: true,
            email: true
         }
      },

      highlight: function(element) {
         $(element).css("border", "2px solid red");
         $(element).siblings(".fa-exclamation-circle").removeClass("d-none");
         $(element).siblings(".fa-check-circle").addClass("d-none");
       },
       unhighlight: function(element) {
         $(element).css("border", "2px solid green");
         $(element).siblings(".fa-exclamation-circle").addClass("d-none");
         $(element).siblings(".fa-check-circle").removeClass("d-none");
       }
   });
});
// ======= Review(Tour Details) Validation End ======= //


// ======= Checkout Validation Start ======= //
$(function () {
   // checking if the number true or not
   $.validator.addMethod('checkout-phone', function (value, element) {
      return this.optional(element) || /^\d{3}-\d{3}-\d{2}-\d{2}$/.test(value);
  }, "Please enter a valid Phone Number");

  // the processes that take place in the submission
  $.validator.setDefaults({
      submitHandler: function () {
         $(".order-details").removeClass("d-none");
         $(".checkout-wrapper").addClass("d-none");
         localStorage.removeItem("__cart");
      }
  });

   // rules 
   $("#checkoutForm").validate({
      rules: {
         firstName: {
            required: true,
            minlength: 2
         },
         lastName: {
            required: true,
            minlength: 2
         },
         streetAddress: {
            required: true,
            minlength: 7
         },
         city: {
            required: true,
            minlength: 2
         },
         country: {
            required: true,
            minlength: 2
         },
         phone: 'checkout-phone',

         checkoutEmail: {
            required: true,
            email: true
         }
      },

      highlight: function(element) {
         $(element).css("border", "2px solid red");
         $(element).siblings(".fa-exclamation-circle").removeClass("d-none");
         $(element).siblings(".fa-check-circle").addClass("d-none");
       },
       unhighlight: function(element) {
         $(element).css("border", "2px solid green");
         $(element).siblings(".fa-exclamation-circle").addClass("d-none");
         $(element).siblings(".fa-check-circle").removeClass("d-none");
       }
   });
});
// ======= Checkout Validation End ======= //