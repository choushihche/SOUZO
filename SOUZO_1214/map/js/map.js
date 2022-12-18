// 更多內容的開闔
// $(".chooseBtn").click(function () {
//   var x = $(this).siblings("div");
//   if (x.css("display") == "none") {
//     x.slideDown();
//   } else {
//     x.slideUp();
//   }
// });

//篩選 setting
let choosebarText = document.querySelector(".choosebartext");
let choose = document.querySelector(".choose");
let chooseBtn = document.querySelector(".chooseBtn");

chooseBtn.addEventListener("click", (e) => {
  e.preventDefault();

  choosebarText.classList.toggle("hidden");
  if (choosebarText.classList.contains("hidden")) {
    choosebarText.style = "display: none;";
    choose.style = "display: flex;";
  } else {
    choosebarText.style = "";
    choose.style = "display: none;";
  }
});

//mapList RWD setting
$(".shopList li").click(function () {
  var x = document.getElementById("mapList2");
  x.style.left = "0";
});
$(".choosebar2").click(function () {
  var x = document.getElementById("mapList2");
  x.style.left = "-100%";
});

//mapList setting
let shopInfoBtn = document.querySelector("div.info i");
let shopLocationBtn = document.querySelector("div.location i");
let shopInformation = document.querySelector("div.saleWhat");
let shopInfoPage1 = document.querySelector("div.saleWhat div.page1");
let shopInfoPage2 = document.querySelector("div.saleWhat div.page2");
shopInfoPage2.style = "display: none;";
let insertMap = document.querySelector("div.saleWhat div.page2 div.mapBox");

shopInfoBtn.addEventListener("click", () => {
  //改變Btn顏色
  shopLocationBtn.style = "color: #d98c667a;";
  shopInfoBtn.style = "color: #d98c66;";

  //加入商店資訊
  shopInfoPage1.style = "";
  shopInformation.style = "";

  //隱藏商店地圖
  shopInfoPage2.style = "display: none;";
});

shopLocationBtn.addEventListener("click", () => {
  //改變Btn顏色
  shopLocationBtn.style = "color: #d98c66;";
  shopInfoBtn.style = "color: #d98c667a;";

  //隱藏商店資訊
  shopInfoPage1.style = "display: none;";
  shopInformation.style = "padding: 0px; height:100%;";

  //加入商店地圖
  shopInfoPage2.style = "display: block;";
  insertMap.style = "display: block;";
});
