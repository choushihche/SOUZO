function openAndClose() {
  var x = document.getElementById("mSearch_drop");
  if (x.style.top == "-100%") {
    x.style.top = "60px";
  } else {
    x.style.top = "-100%";
  }
}

$(document).ready(function(){
  $(".hamburger .hamburger__inner").click(function(){
    $(".wrapper").toggleClass("active");
    $(".Owncollection .follow span").toggleClass("padCSS2");
  })

  $(".top_navbar .fas").click(function(){
      $(".profile_dd").toggleClass("active");
  });
  
  if($(window).width() <= 1024){
    $(".wrapper").toggleClass("active");
    $(".hamburger .hamburger__inner").click(function(){
      $(".Owncollection .follow").toggleClass("padCSS");
      $(".Owncollection img").toggleClass("padCSS");
    })
  }

  // var y = document.getElementsByClassName(".main_container .sidebar .profile .img");
  // if($(window).width() <= 1024){
  //   $(".top_navbar .fas").click(function(){
  //     y.style.display = "none";
  //   });
  // } else {
  //   y.style.display = "block";
  // }



  
  
})
