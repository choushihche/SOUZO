function visibility(input, i) {
  input.classList.toggle("visible");
  if (input.classList.contains("visible")) {
    input.type = "text";
    i.classList.remove("fa-solid", "fa-eye-slash");
    i.classList.add("fa-solid", "fa-eye");
  } else {
    input.type = "password";
    i.classList.remove("fa-solid", "fa-eye");
    i.classList.add("fa-solid", "fa-eye-slash");
  }
}

//nowPassword setting
let nowPsw = document.querySelector("div input#nowPsw");
let nowPswButton = document.querySelector("button.nowPsw");
let nowPswEyes = document.querySelector("button.nowPsw i");

nowPswButton.addEventListener("click", (e) => {
  e.preventDefault();
  visibility(nowPsw, nowPswEyes);
});

//newPassword setting
let newPsw = document.querySelector("div input#newPsw");
let newPswButton = document.querySelector("button.newPsw");
let newPswEyes = document.querySelector("button.newPsw i");

newPswButton.addEventListener("click", (e) => {
  e.preventDefault();
  visibility(newPsw, newPswEyes);
});

//newPassword-Again setting
let newPswAgain = document.querySelector("div input#newPswAgain");
let newPswAgainButton = document.querySelector("button.newPswAgain");
let newPswAgainEyes = document.querySelector("button.newPswAgain i");

newPswAgainButton.addEventListener("click", (e) => {
  e.preventDefault();
  visibility(newPswAgain, newPswAgainEyes);
});

//save & cancel File
let userName = document.querySelector("div input#name");
let userEmail = document.querySelector("div input#email");
let saveButton = document.querySelector("div button.save");
let cancelButton = document.querySelector("div button.cancel");

let titleName = document.querySelector("div.top p");
let check = true;
//save
saveButton.addEventListener("click", (e) => {
  e.preventDefault();

  //userName setting
  let divName = userName.parentElement;
  let NewUserName = divName.children[1].value;
  if (NewUserName === "") {
    userName.placeholder = "請輸入名稱！";
    userName.style = "border:2px solid rgba(217, 140, 102, 0.7);";
    check = false;
    return;
  } else {
    userName.placeholder = "";
    userName.style = "";
    check = true;
  }

  //userEmail setting
  let divEmail = userEmail.parentElement;
  let NewEmail = divEmail.children[1].value;
  if (NewEmail === "") {
    userEmail.placeholder = "請輸入信箱！";
    userEmail.style = "border:2px solid rgba(217, 140, 102, 0.7);";
    check = false;
    return;
  } else {
    userEmail.placeholder = "";
    userEmail.style = "";
    check = true;
  }

  //new-password setting
  let divNewPsw = newPsw.parentElement;
  let NewUserPsw = divNewPsw.children[1].value;
  //   if (NewUserPsw === "") {
  //     newPsw.placeholder = "請輸入新密碼！";
  //     newPsw.style = "border:2px solid rgba(217, 140, 102, 0.7);";
  //     return;
  //   } else {
  //     newPsw.placeholder = "";
  //     newPsw.style = "";
  //   }

  let divNewPswAgain = newPswAgain.parentElement;
  let NewUserPswAgain = divNewPswAgain.children[1].value;
  //   if (NewUserPswAgain === "") {
  //     newPswAgain.placeholder = "請再次輸入新密碼！";
  //     newPswAgain.style = "border:2px solid rgba(217, 140, 102, 0.7);";
  //     return;
  //   } else {
  //     newPswAgain.placeholder = "";
  //     newPswAgain.style = "";
  //   }

  //update Now-password
  if (NewUserPsw !== "" || NewUserPswAgain !== "") {
    if (NewUserPsw !== NewUserPswAgain) {
      alert("密碼輸入錯誤！請確認新密碼輸入一致");
      newPsw.style = "border:2px solid rgba(217, 140, 102, 0.7);";
      newPswAgain.style = "border:2px solid rgba(217, 140, 102, 0.7);";
      return;
    } else {
      //變更密碼
      nowPsw.value = NewUserPsw;
      //清空新密碼value
      newPsw.value = "";
      newPswAgain.value = "";
      //reset新密碼style
      newPsw.style = "";
      newPswAgain.style = "";
    }
  } else {
    newPsw.style = "";
    newPswAgain.style = "";
  }

  //update titleName
  if ((check = true)) {
    titleName.innerHTML = NewUserName;
  }
});
//cancel
cancelButton.addEventListener("click", (e) => {
  e.preventDefault();

  newPsw.value = "";
  newPswAgain.value = "";
});
