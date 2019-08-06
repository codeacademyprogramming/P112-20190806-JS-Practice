$(function(){
    let items = $(".slider-wrapper .item");
    let itemWidth = items.first().width();

    let counter = 0;
    items.each(function(){
        $(this).css("left", (counter * itemWidth));
        counter++;

    });
    
    let arrowLeft = $(".arrow-left");
    let arrowRight = $(".arrow-right");

    arrowLeft.click(function(){
        slide(-1);
    });

    arrowRight.click(function(){
        slide(1);
    });


    function slide(dir){
        
        let itemsElem = $(".items");
        let left = itemsElem.position().left;

        if(dir == -1){
            if(left < 0){
                let pos = (left + itemWidth);
                pos = Math.ceil(pos);
                console.log(pos);
    
                itemsElem.css({"transform": "translateX(" + pos + "px)"});
            } else {
                let pos = (items.length-1) * itemWidth ;
                pos = Math.ceil(pos);
                console.log(pos);
                itemsElem.css({"transform": "translateX(-" +  pos + "px)"});
            }
        } else if(dir == 1){

            if(Math.abs(left) < items.last().position().left){

                let pos = (Math.abs(left) + itemWidth);
                pos = Math.ceil(pos);
                itemsElem.css({"transform": "translateX(-" + pos + "px)"});
            } else {
               
                itemsElem.css({"transform": "translateX(0px)"});
            }
        }
    }
    
});