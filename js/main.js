// ======= Reload ======= //
window.addEventListener("load", () => {
  const preload = document.querySelector(".loader");
  preload.classList.add("loader-finish");
});

$(document).ready(function () {
  // ======= Events On Scroll ======= //
  // Nav Bg-Color
  window.onscroll = function () {
    if ($(window).scrollTop() >= 600) {
      $(".navbar").addClass("navbarBg-darkBlack");
    } else {
      $(".navbar").removeClass("navbarBg-darkBlack");
      $(".navbar").addClass("navbarBg-lightBlack");
    }

    // Processes that happen when Scrolling
    if ($(window).scrollTop() >= 33) {
      $("header").addClass("sticky");
      $(".search-area-holder").css("top", "80px");
      $(".login-box-holder").css("top", "80px");
      $(".navbar-items").css({ height: "100%", top: "0px" });
    } else {
      $("header").removeClass("sticky");
      $(".search-area-holder").css("top", "112px");
      $(".login-box-holder").css("top", "112px");
      $(".navbar-items").css({ height: "98%", top: "33px" });
    }
  };

  // ======= Show or Hide navbar items when click on Hamburger btn ======= //
  $(document).on("click", ".hamburger", function () {
    $(this).find(".hamburger-btn").toggleClass("change");
    $(".navbar-items").toggleClass("active");
    $(".dark-bgcolor").toggleClass("active-darkBg");
    $(".sidebar-filter-toggle").toggleClass("hide-filter-btn");

    if ($(".navbar-items").hasClass("active")) {
      $(document.body).addClass("stop-scroll");
      $(".dark-bgcolor").addClass("active-darkBg");
    } else {
      $(document.body).removeClass("stop-scroll");
      $(".dark-bgcolor").removeClass("active-darkBg");
    }

    // processes when click outside
    $(document).mouseup(function (e) {
      if (!$("header").is(e.target) && $("header").has(e.target).length === 0 &&
        !$("#top-header").is(e.target) && $("#top-header").has(e.target).length === 0) {
        $(document.body).removeClass("stop-scroll");
        $(".dark-bgcolor").removeClass("active-darkBg");
        $(".navbar-items").removeClass("active");
        $(".hamburger").find(".hamburger-btn").removeClass("change");
        $(".sidebar-filter-toggle").removeClass("hide-filter-btn");
      }
    });
  });

  // ======= Counter-Up ======= //
  $(".counter-up").counterUp({
    delay: 50,
    time: 4000,
  });

  // ======= Making visible or invisible the Search-Box and Login-Area and replacing the icon when click the btn ======= //
  $(document).on("click", ".icon-btn", function (e) {
    e.preventDefault();
    // hide search-box and login-area, and change icons when click outside
    $(document).mouseup(function (e) {
      if (
        !$(".search-area-holder").is(e.target) && $(".search-area-holder").has(e.target).length === 0 &&
        !$(".login-box-holder").is(e.target) && $(".login-box-holder").has(e.target).length === 0 &&
        !$(".icon-btn").is(e.target) && $(".icon-btn").has(e.target).length === 0
      ) {
        $(".search-area-holder").removeClass("visible").siblings().children().removeClass("flaticon-close").addClass("flaticon-search-interface-symbol");
        $(".login-box-holder").removeClass("visible").siblings().children().removeClass("flaticon-close").addClass("flaticon-user");
      }
    });
  });

  // showing or hiding search-box and changing icons when click the btn
  $(document).on("click", ".search-btn-first", function () {
    if (!$(this).siblings().hasClass("visible") && !$(this).children().hasClass("flaticon-close")) {
      $(this).siblings().addClass("visible").parent().siblings().children(".holder-div").removeClass("visible");
      $(this).children().addClass("flaticon-close").removeClass("flaticon-search-interface-symbol");
      $(this).parent().siblings().find(".icon-btn i").removeClass("flaticon-close").addClass("flaticon-user");
    } else {
      $(this).siblings().removeClass("visible");
      $(this).children().removeClass("flaticon-close").addClass("flaticon-search-interface-symbol");
    }
  });

  // showing or hiding login-area and changing icons when click the btn
  $(document).on("click", ".user-btn", function () {
    if (!$(this).siblings().hasClass("visible") && !$(this).children().hasClass("flaticon-close")) {
      $(this).siblings().addClass("visible").parent().siblings().children(".holder-div").removeClass("visible");
      $(this).children().addClass("flaticon-close").removeClass("flaticon-user");
      $(this).parent().siblings().find(".icon-btn i").removeClass("flaticon-close").addClass("flaticon-search-interface-symbol");
    } else {
      $(this).siblings().removeClass("visible");
      $(this).children().removeClass("flaticon-close").addClass("flaticon-user");
    }
  });

  // ======= Going to Reset Password Area and back ======= //
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

  // ======= Back To Top Btn ======= //
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $("#topBtn").css({ "transform": "translateY(0)", "visibility": "visible" });
    } else {
      $("#topBtn").css({ "transform": "translateY(200px)", "visibility": "hidden" });
    }
  });

  $("#topBtn").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 100);
  });

  // ======= Price Range Filter ======= //
  if ($('.slider-tour-sorting').length) {
    $(function () {
      $(".slider-tour-sorting").slider({
        range: true,
        min: 50,
        max: 99,
        values: [55, 99],
        slide: function (event, ui) {
          $("#amount").val("$" + ui.values[0] + "  -  $" + ui.values[1]);
        }
      });

      $("#amount").val("$" + $(".slider-tour-sorting").slider("values", 0) +
        "  -  $" + $(".slider-tour-sorting").slider("values", 1));
    });
  }

  // ======= Sorting Dropdown ======= //
  $("#tours .dropdown").click(function () {
    $("#tours .menu").toggleClass("#tours showMenu");
    $("#tours .dropdown i").toggleClass("#tours rotate");

    $("#tours .menu li").click(function () {
      $("#tours .dropdown p").html($(this).html());
      $("#tours .menu").removeClass("#tours showMenu");
      $("#tours .dropdown i").removeClass("#tours rotate");
    });

    // processes when click outside
    $(document).mouseup(function (e) {
      if (!$("#tours .dropdown").is(e.target) && $("#tours .dropdown").has(e.target).length === 0) {
        $("#tours .menu").removeClass("#tours showMenu");
        $("#tours .dropdown i").removeClass("#tours rotate");
      }
    });
  });

  // ======= Showing or Hiding Sidebar Filter ======= //
  $(document).on("click", ".sidebar-filter-toggle", function (e) {
    e.preventDefault();
    $(".sidebar-area").toggleClass("show-sidebar");

    // processes when click outside
    $(document).mouseup(function (e) {
      if (!$(".sidebar-area").is(e.target) && $(".sidebar-area").has(e.target).length === 0) {
        $(".sidebar-area").removeClass("show-sidebar");
      }
    });
  });

  // ======= Showing appropriate Image when click a small image ======= //
  $(document).on("click", "#tour .small-img-box a", function (e) {
    e.preventDefault();

    $(this).parent().addClass("#tour active-img");
    $(this).parent().parent().siblings().find(".small-img-box").removeClass("#tour active-img");
    $("#tour .tour-img-box img").attr("src", $(this).attr("href"));
  });

  // ======= Showing appropriate tab content when click a tab button ======= //
  $(document).on("click", ".tour-tabs li a", function (e) {
    e.preventDefault();

    $(".tour-tabs li a").removeClass("active-tabBtn");
    $(this).addClass("active-tabBtn");
    $(".tab-items .tab-content").hide();
    $($(this).data("value")).show();
  });

  // ======= Countdown ======= //
  let countdown = () => {
    // selecting time
    let now = new Date();
    let eventDate = new Date('Mart 13, 2023 00:00:00');
    let currentTiime = now.getTime();
    let eventTime = eventDate.getTime();
    let remTime = eventTime - currentTiime;

    // hiding discount section when the time is up
    if (remTime <= 0) {
      $("#discount").css("display", "none");
      return;
    }

    // calculating sec, min, hour and day
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

    // adding the measures of time into compatible elements
    $(".days").text(d);
    $(".days").text(d);

    $(".hours").text(h);
    $(".minutes").text(m);
    $(".seconds").text(s);

    setTimeout(countdown, 1000);
  }
  countdown();

  // ======= Read More ======= //
  $(document).on("click", ".readMore-btn", function () {
    // showing more text or hiding
    $(".read-more").toggleClass("show-more-text");

    // changing the btn content
    if ($(".read-more").hasClass("show-more-text")) {
      $(".readMore-btn").text("Read Less...");
    } else {
      $(".readMore-btn").text("Read More...");
    }
  });

  // ======= Add To Cart Btn ======= //
  $(document).on("click", ".addToCartBtn", function () {
    let $this = $(this);

    $this.addClass("d-none");
    $this.next(".spinner").removeClass("d-none");

    setTimeout(function () {
      $this.next(".spinner").addClass("d-none");
      $this.siblings(".successIcon").removeClass("d-none");
    }, 500);
  });

  $(document).on("click", ".addToCartBtnBig", function () {
    let $this = $(this);

    $this.find(".spinner").removeClass("d-none");
    $this.removeClass("d-none");

    setTimeout(function () {
      $this.find(".spinner").addClass("d-none");
      $this.find(".successIcon").removeClass("d-none");
    }, 700);

    // if the spinner is visible, hide the success-icon
    if (!$this.find(".spinner").hasClass("d-none")) {
      $this.find(".successIcon").addClass("d-none");
    } else {
      $this.find(".successIcon").removeClass("d-none");
    }
  });

  // ======= Accordion ======= //
  $(document).on("click", ".accordion-btn", function () {
    // showing or hiding the text
    $(this).next().toggleClass("show-text");
    // changing the icon
    $(this).children(".vertical").toggleClass("icon-rotate");
    // changing other buttons' icon
    $(this).siblings(".accordion-btn").children(".vertical").removeClass("icon-rotate");
    // hiding other text that is active
    $(this).next().siblings(".accordion-text").removeClass("show-text");
  });

  // ======= Showing the bottom content when click the Radio button ======= //
  $(document).on("click", ".payment-method input", function () {
    $(this).next().next().addClass(".payment-method show-msg");
    $(this).next().next().siblings().removeClass(".payment-method show-msg");
  });

  // ======= Type Writer Effect ======= //
  var typed = new Typed(".text-type", {
    strings: ['Holiday', 'Mountain', 'Adventure'],
    typeSpeed: 70,
    backSpeed: 70,
    loop: true
  });
});