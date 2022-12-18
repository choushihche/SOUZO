var btnContainer = document.getElementById("btnContainer");
var btns = btnContainer.getElementsByClassName("category");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("homebar_active");
    current[0].className = current[0].className.replace(" homebar_active", "");
    this.className += " homebar_active";
  });
}


$(document).ready(function() {

    const checkbox1 = document.getElementById('check_follow')
    checkbox1.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
        $(".check_span").text('已追蹤');
    } else {
        $(".check_span").text('追蹤');
    }
    })

    $(".articlesBtn").click(function(){
      $(".allArticles").addClass("appear");
      $(".allArticles").removeClass("disappear");
      $(".introduction").addClass("disappear");
      $(".introduction").removeClass("appear");
    })
    $(".teachBtn").click(function(){
      $(".allArticles").addClass("appear");
      $(".allArticles").removeClass("disappear");
      $(".introduction").addClass("disappear");
      $(".introduction").removeClass("appear");
    })
    $(".introductionBtn").click(function(){
      $(".allArticles").addClass("disappear");
      $(".allArticles").removeClass("appear");
      $(".introduction").addClass("appear");
      $(".introduction").removeClass("disappear");
    })

})