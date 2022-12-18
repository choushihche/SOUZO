var btnContainer = document.getElementById("btnContainer");
var btns = btnContainer.getElementsByClassName("category");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("homebar_active");
    current[0].className = current[0].className.replace(" homebar_active", "");
    this.className += " homebar_active";
  });
}