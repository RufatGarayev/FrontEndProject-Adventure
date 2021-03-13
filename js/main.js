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
      $("nav").css("background-color", "black");
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
    $(".sidebar-filter-toggle").toggleClass("hide-filter-btn");

    if ($(".navbar-items").hasClass("active")) {
      $(document.body).addClass("stop-scroll");
    }else{
      $(document.body).removeClass("stop-scroll");
    }


    // processes when click outside
    $(document).mouseup(function(e) {
      if (!$("header").is(e.target) && $("header").has(e.target).length === 0 && 
        !$("#top-header").is(e.target) && $("#top-header").has(e.target).length === 0)
      {
        $(document.body).removeClass("stop-scroll");
        $(".navbar-items").removeClass("active");
        $(".hamburger").removeClass("change");
        $(".sidebar-filter-toggle").removeClass("hide-filter-btn");
      }
      else{
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
        max: 100,
        values: [ 55, 100 ],
        slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + "  -  $" + ui.values[ 1 ] );
        }
        });
        $( "#amount" ).val( "$" + $( ".slider-tour-sorting" ).slider( "values", 0 ) +
        "  -  $" + $( ".slider-tour-sorting" ).slider( "values", 1 ) );
    } );
   }
  // ======= Price Range Filter - End ======= //


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
    $(".sidebar-area").toggleClass("show-sidebar");
    $(".dark-bgcolor").toggleClass("show-dark-bgcolor");

    if ($(".sidebar-area").hasClass("show-sidebar")) {
      $(document.body).addClass("stop-scroll");
    }else{
      $(document.body).removeClass("stop-scroll");
    }

    // processes when click outside
    $(document).mouseup(function(e) {
      if (!$(".sidebar-area").is(e.target) && $(".sidebar-area").has(e.target).length === 0)
      {
        $(".sidebar-area").removeClass("show-sidebar");
        $(".dark-bgcolor").removeClass("show-dark-bgcolor");
        $(document.body).removeClass("stop-scroll");
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
    let eventDate = new Date('Mart 13, 2023 00:00:00');
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


  // ======= Add To Cart Btn - Start ======= //
  $(document).on("click", ".addToCartBtn", function(){
    // taking this
    let $this = $(this);
    // hiding this
    $this.addClass("d-none");
    // showing spinner
    $this.next(".spinner").removeClass("d-none");
    
    setTimeout(function(){
      // hiding spinner 0.5s later
      $this.next(".spinner").addClass("d-none");
      // showing successIcon 0.5s later
      $this.siblings(".successIcon").removeClass("d-none");
    }, 500);
  });

  $(document).on("click", ".addToCartBtnBig", function(){
    // taking this
    let $this = $(this);
    // showing spinner
    $this.find(".spinner").removeClass("d-none");
    // for not adding d-none when click on this
    $this.removeClass("d-none");
    
    setTimeout(function(){
      // hiding spinner 0.5s later
      $this.find(".spinner").addClass("d-none");
      // showing success-icon 0.5s later
      $this.find(".successIcon").removeClass("d-none");
    }, 700);

    // if the spinner is visible, hide the success-icon
    if (!$this.find(".spinner").hasClass("d-none")) {
      $this.find(".successIcon").addClass("d-none");
    }else{
      $this.find(".successIcon").removeClass("d-none");
    }
  });
  // ======= Add To Cart Btn - End ======= //


  // ======= Accordion - Start ======= //
  $(document).on("click", ".accordion-btn", function(){
      // showing or hiding the text
      $(this).next().toggleClass("show-text");
      // changing the icon
      $(this).children(".vertical").toggleClass("icon-rotate");
      // changing other buttons' icon
      $(this).siblings(".accordion-btn").children(".vertical").removeClass("icon-rotate");
      // hiding other text that is active
      $(this).next().siblings(".accordion-text").removeClass("show-text");
  });
  // ======= Accordion - End ======= //


  // ======= Tour Filter and Background-color of Button when click on it - Start ======= //
  $(".tour-holder").isotope({
    itemSelector: ".item-col",
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