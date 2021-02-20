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




// ======= Login Validation Start ======= //
// selecting elements
let loginForm = document.getElementById("login");
let emailBox = document.querySelector(".email");
let passwordBox = document.querySelector(".password");
let resetForm = document.getElementById("reset-form");
let resetEmail = document.querySelector(".email-for-resetting-password");
let msgForReset = document.querySelector(".success");
let resetPassArea = document.querySelector(".reset-password");
let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;


// email - blur event
emailBox.addEventListener("blur", function () {
  if (emailBox.value == "" || emailBox.value.length < 8) {
    emailBox.style.border = "2px solid red";
  } else {
    emailBox.style.border = "1px solid black";
  }
});

// password - blur event
passwordBox.addEventListener("blur", function () {
  if (passwordBox.value == "" || passwordBox.value.length < 6) {
    passwordBox.style.border = "2px solid red";
  } else {
    passwordBox.style.border = "1px solid black";
  }
});

// password - input event
passwordBox.addEventListener("input", function () {
  passwordBox.style.border = "1px solid black";
});

// email - input event
emailBox.addEventListener("input", function () {
  emailBox.style.border = "1px solid black";
});


// login form - submit event
loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  if (emailBox.value == "" || emailBox.value.length < 8) {
    emailBox.style.border = "2px solid red";
  } else {
    emailBox.style.border = "1px solid black";
  }

  if (passwordBox.value == "" || passwordBox.value.length < 6) {
    passwordBox.style.border = "2px solid red";
  } else {
    passwordBox.style.border = "1px solid black";
  }
});


// reset-email - blur event
resetEmail.addEventListener("blur", function () {
    if (resetEmail.value == "" || resetEmail.value.length < 8) {
      resetEmail.style.border = "2px solid red";
    } else {
      resetEmail.style.border = "1px solid black";
    }
  });
  

  // reset-email - input event
  resetEmail.addEventListener("input", function () {
    resetEmail.style.border = "1px solid black";
  });
  
  
  // reset-password form - submit event
  resetForm.addEventListener("submit", function (e) {
    e.preventDefault();
    if (resetEmail.value == "" || resetEmail.value.length < 8) {
      resetEmail.style.border = "2px solid red";
    } else {
      resetEmail.style.border = "1px solid black";
      msgForReset.classList.remove("hidden");
      resetPassArea.classList.add("d-none");
    }
  });
// ======= Login Validation End ======= //




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
      userName.style.border = "2px solid red";
    } else {
      userName.style.border = "1px solid black";
    }
});

// username - input event
userName.addEventListener("input", function () {
    userName.style.border = "1px solid black";
}); 



// email - blur event
signUpEmail.addEventListener("blur", function () {
    if (signUpEmail.value == "" || signUpEmail.value.length < 8) {
      signUpEmail.style.border = "2px solid red";
    } else {
      signUpEmail.style.border = "1px solid black";
    }
});

// email - input event
signUpEmail.addEventListener("input", function () {
    signUpEmail.style.border = "1px solid black";
});  
  


// password - blur event
signUpPassword.addEventListener("blur", function () {
    if (signUpPassword.value == "" || signUpPassword.value.length < 6) {
      signUpPassword.style.border = "2px solid red";
    } else {
      signUpPassword.style.border = "1px solid black";
    }
});
  
// password - input event
signUpPassword.addEventListener("input", function () {
    signUpPassword.style.border = "1px solid black";
});



// repeat-password - input event
repeatPassword.addEventListener("input", function () {
    repeatPassword.style.border = "1px solid black";
});

// repeat-password - blur event
repeatPassword.addEventListener("blur", function(){
    if (repeatPassword.value !== signUpPassword.value) {
        repeatPassword.style.border = "2px solid red";
    } else {
      repeatPassword.style.border = "1px solid black";
    }
});



// sign-up form - submit event
signUpForm.addEventListener("submit", function (e) {
    e.preventDefault();
    // username
    if (userName.value == "") {
        userName.style.border = "2px solid red";
    } else {
        userName.style.border = "1px solid black";
    }

    // sign-up-email
    if (signUpEmail.value == "" || signUpEmail.value.length < 8) {
      signUpEmail.style.border = "2px solid red";
    } else {
      signUpEmail.style.border = "1px solid black";
    }

    if (!signUpEmail.matches(pattern)) {
      signUpEmail.style.border = "2px solid red";
    } else {
      signUpEmail.style.border = "1px solid black";
    }

  
    // sign-up-password
    if (signUpPassword.value == "" || signUpPassword.value.length < 6) {
      signUpPassword.style.border = "2px solid red";
    } else {
      signUpPassword.style.border = "1px solid black";
    }

    // repeat-password
    if (repeatPassword.value == "") {
        repeatPassword.style.border = "2px solid red";
    } else {
        repeatPassword.style.border = "1px solid black";
    }

    if (repeatPassword.value !== signUpPassword.value) {
        repeatPassword.style.border = "2px solid red";
    } else {
      repeatPassword.style.border = "1px solid black";
    }
});
// ======= Sign-Up Validation Start ======= //