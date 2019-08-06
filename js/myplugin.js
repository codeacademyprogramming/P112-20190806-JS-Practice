(function ($) {
    $.fn.changeColor = function (options) {
        var sazlamalarim = $.extend({
            bgColor: "gray",
            fontSize : "20px",
            txtDecoration: "underline",
            txtTransform : "uppercase"
        }, options)

        return this.each(function() {
            var col = $(this).attr("data-color");
            $(this).css({
                "color": col,
                "background-color" : sazlamalarim.bgColor,
                "font-size" : sazlamalarim.fontSize,
                "text-decoration" : sazlamalarim.txtDecoration,
                "text-transform" : sazlamalarim.txtTransform
            });
        });
    };


    $.fn.createList = function(options){
        var settings = $.extend({
            count : 2,
            listStyle: "point",
            borderWidth : "1px",
            borderStyle : "solid",
            borderColor: "red"
        }, options);


        for(var i = 0; i < settings.count; i++){
            var liElem = $("<li>list item</li>");
            liElem.css({
                "border-color" : settings.borderColor,
                "border-width" : settings.borderWidth,
                "border-style" : settings.borderStyle
            });
            this.append(liElem);
        }

        return this;
    };

}(jQuery))

