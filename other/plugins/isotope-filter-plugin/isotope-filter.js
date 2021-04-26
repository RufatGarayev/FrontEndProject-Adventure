$(".tour-holder").isotope({
    itemSelector: ".item-col",
    layoutMode: "fitRows"
});

$(document).on("click", ".category-btns li a", function (e) {
    e.preventDefault();
    $(this).addClass("active-btn");
    $(this).parent().siblings().children().removeClass("active-btn");

    let selector = $(this).attr("data-filter");
    $(".tour-holder").isotope({
        filter: selector
    });
    return false;
});