let stepPicNum = 0; //formElement id數目
let j = 1; //照片id數目
let stepCount = 1; //步驟數目

let step_ul = document.querySelector("ul#steplist");

let stepRow_li = document.createElement("li");
stepRow_li.classList.add("stepRow");
let deleteStepBtn = document.createElement("button");
deleteStepBtn.classList.add("deleteStep");
deleteStepBtn.innerHTML = '<i class="fa-solid fa-trash-can fa-2x"></i>';

let clear_div = document.createElement("div");
clear_div.classList.add("clear");

let stepID = document.createElement("span");
stepID.classList.add("stepID_num");

let stepDetail = document.createElement("div");
stepDetail.classList.add("stepdetail");

let stepNum = document.createElement("div");
stepNum.classList.add("stepnum");
let stepNum_span = document.createElement("span");
stepNum_span.innerHTML = stepCount++;
stepNum.appendChild(stepNum_span);

let stepText = document.createElement("textarea");
stepText.classList.add("allStep_text");
stepText.name = "";
stepText.id = "";
stepText.cols = "30";
stepText.rows = "6";
stepText.placeholder = "請輸入教學步驟內容!";
stepText.maxLength = "150";

let upload_div = document.createElement("div");
upload_div.classList.add("uploadStepPic");

let form_div = document.createElement("div");
form_div.classList.add("form");
upload_div.appendChild(form_div);

let grid_div = document.createElement("div");
grid_div.classList.add("grid");
form_div.appendChild(grid_div);

function fourFormElement(count) {
  for (let i = 1; i <= count; i++) {
    let formElement = document.createElement("div");
    formElement.classList.add("form-element");
    formElement.id = "step" + ++stepPicNum;
    grid_div.appendChild(formElement);

    let file_input = document.createElement("input");
    file_input.type = "file";
    file_input.id = "file-" + j;
    file_input.accept = "image/*";
    let file_label = document.createElement("label");
    file_label.setAttribute("for", "file-" + j);
    file_label.id = "file-" + j + "-preview";
    let loadPic = document.createElement("img");
    loadPic.src = "https://bit.ly/3ubuq5o";
    let addPicButton = document.createElement("div");
    let addIcon = document.createElement("span");
    addIcon.innerText = "+";
    addPicButton.appendChild(addIcon);
    file_label.appendChild(loadPic);
    file_label.appendChild(addPicButton);

    let deleteBtn = document.createElement("div");
    deleteBtn.classList.add("delete-img");
    deleteBtn.id = "delete-img" + j;
    deleteBtn.innerHTML = "✖";
    // deleteBtn.style =
    //   "color: #eee; background: none; position: absolute; top: 2rem; z-index:1;";

    formElement.appendChild(deleteBtn);
    formElement.appendChild(file_input);
    formElement.appendChild(file_label);

    j++;
  }
}

fourFormElement(4);

// //刪除步驟
// deleteStepBtn.addEventListener("click", (e) => {
//   e.preventDefault();

//   stepRow_li.remove();
//   // stepNumber = stepNumber - 1;
//   // console.log(stepNumber);

//   let stepCount = document.querySelectorAll("div.stepnum span");
//   stepCount.forEach((n) => {
//     console.log(n.innerText);
//   });
// });

stepDetail.appendChild(stepNum);
stepDetail.appendChild(stepText);
stepDetail.appendChild(upload_div);
stepRow_li.appendChild(stepID);
stepRow_li.appendChild(stepDetail);
stepRow_li.appendChild(deleteStepBtn);
stepRow_li.appendChild(clear_div);
step_ul.appendChild(stepRow_li);

//加入照片檔案
let stepForm = document.querySelectorAll("div.form-element");
// console.log(stepForm);
stepForm.forEach((n) => {
  // console.log(n.childNodes);
  n.childNodes[1].addEventListener("click", (e) => {
    // console.log(e.target.parentElement.id);
    // console.log(e.target.id);

    // e.stopPropagation();

    let uploadImage = document.querySelector("#" + e.target.id);
    let add_Icon = document.querySelector("#" + e.target.id + "-preview div");
    let add_ImgUrl = document.querySelector("#" + e.target.id + "-preview img");

    let deleteButton = document.querySelector(
      "#" + e.target.parentElement.childNodes[0].id
    );

    uploadImage.addEventListener("change", (e) => {
      if (e.target.files.length == 0) {
        return;
      }
      let file = e.target.files[0];
      let url = URL.createObjectURL(file);
      add_Icon.innerText = file.name;
      add_Icon.style = " font-size: 16px; ";
      add_ImgUrl.src = url;

      if (add_ImgUrl.src != "https://bit.ly/3ubuq5o") {
        deleteButton.style = "display: block;";
      } else {
        deleteButton.style = "";
        console.log(add_ImgUrl);
      }
    });
  });

  n.childNodes[0].addEventListener("click", (e) => {
    let deleteButton = document.querySelector("#" + e.target.id);

    let add_ImgUrl = document.querySelector(
      "#" + e.target.parentElement.childNodes[2].id + " img"
    );
    let add_Icon = document.querySelector(
      "#" + e.target.parentElement.childNodes[2].id + " div"
    );
    if (add_ImgUrl.src != "https://bit.ly/3ubuq5o") {
      add_ImgUrl.src = "https://bit.ly/3ubuq5o";
      add_Icon.innerText = "+";
      add_Icon.style = " font-size: 40px; ";

      deleteButton.style = "display: none;";
    } else {
      deleteButton.style = "display: block;";
      return;
    }
  });
});

//增加步驟
let addStepBtn = document.querySelector("button.stepBtn");
addStepBtn.addEventListener("click", (e) => {
  e.preventDefault();

  let step_ul = document.querySelector("ul#steplist");

  let stepRow_li = document.createElement("li");
  stepRow_li.classList.add("stepRow");
  let deleteStepBtn = document.createElement("button");
  deleteStepBtn.classList.add("deleteStep");
  deleteStepBtn.innerHTML = '<i class="fa-solid fa-trash-can fa-2x"></i>';

  let clear_div = document.createElement("div");
  clear_div.classList.add("clear");

  let stepID = document.createElement("span");
  stepID.classList.add("stepID_num");

  let stepDetail = document.createElement("div");
  stepDetail.classList.add("stepdetail");

  let stepNum = document.createElement("div");
  stepNum.classList.add("stepnum");
  let stepNum_span = document.createElement("span");
  stepNum_span.innerHTML = stepCount++;
  stepNum.appendChild(stepNum_span);

  let stepText = document.createElement("textarea");
  stepText.classList.add("allStep_text");
  stepText.name = "";
  stepText.id = "";
  stepText.cols = "30";
  stepText.rows = "6";
  stepText.placeholder = "請輸入教學步驟內容!";
  stepText.maxLength = "150";

  let upload_div = document.createElement("div");
  upload_div.classList.add("uploadStepPic");

  let form_div = document.createElement("div");
  form_div.classList.add("form");
  upload_div.appendChild(form_div);

  let grid_div = document.createElement("div");
  grid_div.classList.add("grid");
  form_div.appendChild(grid_div);

  function fourFormElement(count) {
    for (let i = 1; i <= count; i++) {
      let formElement = document.createElement("div");
      formElement.classList.add("form-element");
      formElement.id = "step" + ++stepPicNum;
      grid_div.appendChild(formElement);

      let file_input = document.createElement("input");
      file_input.type = "file";
      file_input.id = "file-" + j;
      file_input.accept = "image/*";
      let file_label = document.createElement("label");
      file_label.setAttribute("for", "file-" + j);
      file_label.id = "file-" + j + "-preview";
      let loadPic = document.createElement("img");
      loadPic.src = "https://bit.ly/3ubuq5o";
      let addPicButton = document.createElement("div");
      let addIcon = document.createElement("span");
      addIcon.innerText = "+";
      addPicButton.appendChild(addIcon);
      file_label.appendChild(loadPic);
      file_label.appendChild(addPicButton);

      let deleteBtn = document.createElement("div");
      deleteBtn.classList.add("delete-img");
      deleteBtn.id = "delete-img" + j;
      deleteBtn.innerHTML = "✖";

      formElement.appendChild(deleteBtn);
      formElement.appendChild(file_input);
      formElement.appendChild(file_label);

      j++;
    }
  }

  fourFormElement(4);

  // //刪除步驟
  // deleteStepBtn.addEventListener("click", (e) => {
  //   e.preventDefault();

  //   stepCount--;
  //   let stepCountAll = document.querySelectorAll("div.stepnum span");
  //   console.log(stepCountAll.length);
  //   let a = stepCountAll.length;
  //   stepCountAll.forEach((n) => {
  //     if (Number(n.innerHTML) >= stepCountAll.length) {
  //       n.innerHTML = --a;
  //     }
  //   });

  //   stepRow_li.remove();
  //   // stepNumber = stepNumber - 1;
  //   // console.log(stepNumber);
  // });

  stepDetail.appendChild(stepNum);
  stepDetail.appendChild(stepText);
  stepDetail.appendChild(upload_div);
  stepRow_li.appendChild(stepID);
  stepRow_li.appendChild(stepDetail);
  stepRow_li.appendChild(deleteStepBtn);
  stepRow_li.appendChild(clear_div);
  step_ul.appendChild(stepRow_li);

  //加入照片檔案
  let stepForm = document.querySelectorAll("div.form-element");
  // console.log(stepForm);
  stepForm.forEach((n) => {
    // console.log(n.childNodes);
    n.childNodes[1].addEventListener("click", (e) => {
      // console.log(e.target.parentElement.id);
      // console.log(e.target.id);

      // e.stopPropagation();

      let uploadImage = document.querySelector("#" + e.target.id);
      let add_Icon = document.querySelector("#" + e.target.id + "-preview div");
      let add_ImgUrl = document.querySelector(
        "#" + e.target.id + "-preview img"
      );

      let deleteButton = document.querySelector(
        "#" + e.target.parentElement.childNodes[0].id
      );

      uploadImage.addEventListener("change", (e) => {
        if (e.target.files.length == 0) {
          return;
        }
        let file = e.target.files[0];
        let url = URL.createObjectURL(file);
        add_Icon.innerText = file.name;
        add_Icon.style = " font-size: 16px; ";
        add_ImgUrl.src = url;

        if (add_ImgUrl.src != "https://bit.ly/3ubuq5o") {
          deleteButton.style = "display: block;";
        } else {
          deleteButton.style = "";
          console.log(add_ImgUrl);
        }
      });
    });

    n.childNodes[0].addEventListener("click", (e) => {
      let deleteButton = document.querySelector("#" + e.target.id);

      let add_ImgUrl = document.querySelector(
        "#" + e.target.parentElement.childNodes[2].id + " img"
      );
      let add_Icon = document.querySelector(
        "#" + e.target.parentElement.childNodes[2].id + " div"
      );
      if (add_ImgUrl.src != "https://bit.ly/3ubuq5o") {
        add_ImgUrl.src = "https://bit.ly/3ubuq5o";
        add_Icon.innerText = "+";
        add_Icon.style = " font-size: 40px; ";

        deleteButton.style = "display: none;";
      } else {
        deleteButton.style = "display: block;";
        return;
      }
    });
  });
});
