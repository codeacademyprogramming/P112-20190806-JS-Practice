$(function () {


    $(".btn-success").click(function () {
        var modal = $(".my-modal");
        modal.css("display", "block");
        modal.find(".closeBtn").click(function () {

            modal.css("animation-name", "slideUp");
            setTimeout(() => {
                modal.css({
                    "display": "none",
                    "animation-name": "slideDown"
                });
            }, (1000));

            // $(this).parent().css("display", "none");
        });
    });
});