$(".MoreChooseBtn").click(function(){
    var x =  $(".moremore").siblings("form")
    if( x.css("display") == "none"  ){
        x.slideDown(); 
    }else{
        x.slideUp();
    };
});
