

  const loginPopup = document.querySelector(".login-popup");
  const close = document.querySelector(".close");


  window.addEventListener("load",function(){
 
   showPopup();
   // setTimeout(function(){
   //   loginPopup.classList.add("show");
   // },5000)

  })

  function showPopup(){
        const timeLimit = 1 // seconds;
        let i=0;
        const timer = setInterval(function(){
         i++;
         if(i == timeLimit){
          clearInterval(timer);
          loginPopup.classList.add("show");
         } 
         console.log(i)
        },100);
  }


  close.addEventListener("click",function(){
    loginPopup.classList.remove("show");
  })

  var profile = document.getElementById("profile");
  profile.onclick=function showPopup(){
    const timeLimit = 1 // seconds;
    let i=0;
    const timer = setInterval(function(){
     i++;
     if(i == timeLimit){
      clearInterval(timer);
      loginPopup.classList.add("show");
     } 
     console.log(i)
    },100);
    }

jQuery(function ($) {
    var mediaArray = [];
    var selectedMediasId;
    var isMultipleAllowed = true;
    $('#allowmultiple').click(function () {
        isMultipleAllowed = $('#allowmultiple').is(':checked') ? true : false;
        $('.image-checkbox-checked').each(function () {
            $(this).removeClass('image-checkbox-checked');
        });
        mediaArray = [];
        $('#selectedmediapreview').html('');
    });


    $(".image-checkbox").on("click", function (e) {
        var selected = $(this).find('img').attr('su-media-id');
        //console.log(selected);
        if ($(this).hasClass('image-checkbox-checked')) {
            $(this).removeClass('image-checkbox-checked');
            // remove deselected item from array
            mediaArray = $.grep(mediaArray, function (value) {
                return value != selected;
            });
        }
        else {
            if (isMultipleAllowed == false) {
                $('.image-checkbox-checked').each(function () {
                    $(this).removeClass('image-checkbox-checked');
                });
                mediaArray = [];
                mediaArray.push(selected);
            } else {
                if (e.shiftKey) { //Shift+Ctrl key event
                    $(this).prevAll('.image-checkbox').each(function () {
                        if ($(this).is('.image-checkbox-checked')) {
                            return false; // next parent reached, stop
                        }
                        $(this).addClass('image-checkbox-checked');
                        mediaArray.push($(this).find('img').attr('su-media-id'));
                    });
                }
                if (mediaArray.indexOf(selected) === -1) {
                    mediaArray.push(selected);
                }
            }
            $(this).addClass('image-checkbox-checked');
        }
        //console.log(selected);
        console.log(mediaArray);
        selectedMediasId = mediaArray.join(",");
        console.log(selectedMediasId);
        $('#selectedmediapreview').html('<div class="alert alert-success"><pre lang="js">' + JSON.stringify(mediaArray.join(", "), null, 4) + '</pre></div>');
        //console.log(isMultipleAllowed);
        e.preventDefault();
    });

});
