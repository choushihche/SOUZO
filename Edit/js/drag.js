$(document).ready(function() {
    // SECTION BELOW IS FOR APPLICATION LOGIC
    // ======================================
  
    // 'X'.onclick remove item
    // and delete the node element
    $("body").on("click", ".deleteIcon", function() {
      $(this).parent("li").fadeOut(300, function() { $(this).remove(); });
    });
  
    // Create a way to add list items
    // appending them to the end using templating
    $("body").on("click", "#addItemButton", function() {
      $("#draggable").append("<li class='list-item'><input type='text' name='' id='' placeholder='材料名稱' maxlength='20' class='editContect_material' /><input type='text' name='' id='' placeholder='數量' maxlength='20' class='editContect_count' /><span class='editContect_icon' href=''><i class='fa-solid fa-location-dot'></i></span><span class='editContect_icon deleteIcon' href=''><i class='fa-solid fa-trash-can'></i></span><span class='editContect_icon drag' href=''><i class='fa-solid fa-grip-lines'></i></span></li>");
    });
  
  
    // Allow list-item to be dragged and moved
    $("#draggable").sortable({
      cursor: "move",
      containment: "body",
    });



    // 工具工具工具工具工具工具工具工具工具工具工具工具工具工具工具工具工具工具工具工具工具工具工具工具工具工具工具工具工具工具工具工具工具工具工具工具工具工具工具工具工具工具工具工具工具工具工具工具工具工具

    $("body").on("click", ".deleteIcon2", function() {
      $(this).parent("li").fadeOut(300, function() { $(this).remove(); });
    });
  
    // Create a way to add list items
    // appending them to the end using templating
    $("body").on("click", "#addItemButton2", function() {
      $("#draggable2").append("<li class='list-item'><input type='text' name='' id='' placeholder='工具名稱' maxlength='20' class='editContect_material' /><input type='text' name='' id='' placeholder='數量' maxlength='20' class='editContect_count' /><span class='editContect_icon' href=''><i class='fa-solid fa-location-dot'></i></span><span class='editContect_icon deleteIcon2' href=''><i class='fa-solid fa-trash-can'></i></span><span class='editContect_icon drag' href=''><i class='fa-solid fa-grip-lines'></i></span></li>");
    });
  
  
    // Allow list-item to be dragged and moved
    $("#draggable2").sortable({
      cursor: "move",
      containment: "body",
    });


  

    // 標題跟輸入標題同步
    $(function () {
      $("#Big_title").on("input", function () {
      //在輸入框中打印輸入的值
      $("#phase").text($(this).val());
      });
    });



    // 編輯步驟
    $("body").on("click", "#trashcan", function() {
      $(this).parent("li").fadeOut(300, function() { $(this).remove(); });
      
    });

    $(function () {
      var num = 1;
      var test = $("#steplist");
      $("#addstepButton").click(function () {
          test.append("<li class='stepRow'><span class='stepID_num'></span><span id='trashcan' class='del_step'><i class='fa-solid fa-trash-can'></i></span><div class='stepdetail'><div class='stepnum'><span>"+ num +"</span></div><textarea name='' id='' cols='30' rows='6' placeholder='請輸入教學步驟內容!'  maxlength='150' class='allStep_text'></textarea><div class='uploadStepPic'><div class='form'><div class='grid'><div class='form-element'><input type='file' id='file-"+ num +"-1' accept='image/*'><label for='file-"+ num +"-1' id='file-"+ num +"-1-preview'><img src='https://bit.ly/3ubuq5o' alt=''><div><span>+</span></div></label></div><div class='form-element'><input type='file' id='file-"+ num +"' accept='image/*'><label for='file-"+ num +"' id='file-"+ num +"-preview'><img src='https://bit.ly/3ubuq5o' alt=''><div><span>+</span></div></label></div><div class='form-element'><input type='file' id='file-"+ num +"' accept='image/*'><label for='file-"+ num +"' id='file-"+ num +"-preview'><img src='https://bit.ly/3ubuq5o' alt=''><div><span>+</span></div></label></div><div class='form-element'><input type='file' id='file-"+ num +"' accept='image/*'><label for='file-"+ num +"' id='file-"+ num +"-preview'><img src='https://bit.ly/3ubuq5o' alt=''><div><span>+</span></div></label></div></div></div></div><div class='clear'></div></li>");
          var items = test.find(".stepRow");
          var serials = test.find(".stepID_num");
          items.attr("id", "");
          serials.html("");
          $.each(items, function (k, v) {
              $(this).attr("id", "stepEdit" + k);
              serials.eq(k).html(k);
          });
          num++;
      });

      // $("#steplist #trashcan").live("click", function () {
      //     var dels = test.find("#trashcan");
      //     var delnum = dels.index($(this));
      //     var items = test.find(".stepRow");
      //     items.eq(delnum).detach();
      //     items.attr("id", "");
      //     var serials = test.find(".stepnum span");
      //     serials.html("");
      //     $.each(items, function (k, v) {
      //         $(this).attr("id", "stepEdit" + k);
      //         serials.eq(k).html(k);
      //     });
      // });

      $('#file').change(function() {
        var file = $('#file')[0].files[0];
        var reader = new FileReader;
        reader.onload = function(e) {
          $('#demo').attr('src', e.target.result);
        };
        reader.readAsDataURL(file);
      });
      $('#StepP1_1').change(function() {
        var file = $('#StepP1_1')[0].files[0];
        var reader = new FileReader;
        reader.onload = function(e) {
          $('#seePic1_1').attr('src', e.target.result);
        };
        reader.readAsDataURL(file);
      });

      
  });


  


    
  });
  



  function openFile(event){
    var input = event.target; //取得上傳檔案
    var reader = new FileReader(); //建立FileReader物件
  
    reader.readAsDataURL(input.files[0]); //以.readAsDataURL將上傳檔案轉換為base64字串
  
    reader.onload = function(){ //FileReader取得上傳檔案後執行以下內容
      var dataURL = reader.result; //設定變數dataURL為上傳圖檔的base64字串
      $('#output').attr('src', dataURL).show(); //將img的src設定為dataURL並顯示
    };
  }