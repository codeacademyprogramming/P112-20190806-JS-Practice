$(document).ready(function () {
    $(".owl-carousel").owlCarousel();

    $(".demo").changeColor({
        bgColor: "turquoise",
        fontSize: "50px"
    });


    $("#my-list").createList({
        borderColor: "blue"
    });
});