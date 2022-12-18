// 更多內容的開闔
$(".chooseBtn").click(function(){
    var x =  $(this).siblings("div")
    if( x.css("display") == "none"  ){
        x.slideDown(); 
    }else{
        x.slideUp();
    };
});


$(document).ready(function() {

    $(".information").click(function(){
      $(".leftBar").addClass("appear");
      $(".leftBar").removeClass("disappear");
      $(".rightBar").addClass("disappear");
      $(".rightBar").removeClass("appear");
    })
    $(".step_info").click(function(){
      $(".rightBar").addClass("appear");
      $(".rightBar").removeClass("disappear");
      $(".leftBar").addClass("disappear");
      $(".leftBar").removeClass("appear");
    })

})


var btnContainer = document.getElementById("infoBtns");
var btns = btnContainer.getElementsByClassName("info");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("info_active");
    current[0].className = current[0].className.replace(" info_active", "");
    this.className += " info_active";
  });
}