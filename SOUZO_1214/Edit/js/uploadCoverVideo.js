const pcover = document.querySelector(".pcover");
const coverFile = document.querySelector(".coverFile");
const defaultBtn = document.querySelector("#default-btn");
const customBtn = document.querySelector("#custom-btn");
const cancelBtn = document.querySelector("#cancel-btn i");
const img = document.querySelector("#coverimg");
let regExp = /[0-9a-zA-Z\^\&\'\@\{\}\[\]\,\$\=\!\-\#\(\)\.\%\+\~\_ ]+$/;
function defaultBtnActive(){
defaultBtn.click();
}
defaultBtn.addEventListener("change", function(){
const file = this.files[0];
if(file){
    const reader = new FileReader();
    reader.onload = function(){
    const result = reader.result;
    img.src = result;
    pcover.classList.add("active");
    }
    cancelBtn.addEventListener("click", function(){
    img.src = "";
    pcover.classList.remove("active");
    })
    reader.readAsDataURL(file);
}
if(this.value){
    // let valueStore = this.value.match(regExp);
    let valueStore = file.name;
    coverFile.textContent = valueStore;
}
});


const pvideo = document.querySelector(".pvideo");
const videoFile = document.querySelector(".videoFile");
const videodefaultBtn = document.querySelector("#videodefault-btn");
const videocustomBtn = document.querySelector("#videocustom-btn");
const videocancelBtn = document.querySelector("#videocancel-btn i");
const videoimg = document.querySelector("#videoimg");
let videoregExp = /[0-9a-zA-Z\^\&\'\@\{\}\[\]\,\$\=\!\-\#\(\)\.\%\+\~\_ ]+$/;
function videodefaultBtnActive(){
    videodefaultBtn.click();
}
videodefaultBtn.addEventListener("change", function(){
const file2 = this.files[0];
if(file2){
    const videoreader = new FileReader();
    videoreader.onload = function(){
    const videoresult = videoreader.result;
    videoimg.src = videoresult;
    pvideo.classList.add("active");
    }
    videocancelBtn.addEventListener("click", function(){
    videoimg.src = "https://bit.ly/3ubuq5o";
    pvideo.classList.remove("active");
    })
    videoreader.readAsDataURL(file2);
}
if(this.value){
    // let videoFilevalueStore = this.value.match(videoregExp);
    let videoFilevalueStore = file2.name;
    videoFile.textContent = videoFilevalueStore;
}
});
