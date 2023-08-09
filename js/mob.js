// 모바일 메뉴
const body = document.querySelector("body")
const mobileBg = document.querySelector(".bg");
const btnOpen = document.querySelector(".mobBtn > a");
const btnClose = document.querySelector(".mobBtn_close");
const menu = document.querySelector(".mob");
const btnCloseImg = document.querySelector(".mobBtn > a > img");


btnOpen.addEventListener("click", (e)=>{
  e.preventDefault();
  e.currentTarget.classList.toggle("on");


  if(btnOpen.classList.contains("on")){

    // mobileBg.classList.add("on");
    // body.classList.add("on");
    // btnOpen.setAttribute("title","메뉴 전체보기 닫기");
    menu.classList.add("on");
    // btnCloseImg.setAttribute("src","images/mob_close.png");
  }else{
    // mobileBg.classList.remove("on");
    // body.classList.remove("on");
    // btnOpen.setAttribute("title","메뉴 전체보기 열기");
    menu.classList.remove("on");
    // btnCloseImg.setAttribute("src","images/mob_menu.png");
  }
});


// btnOpen.addEventListener("click", (e)=>{
//   e.preventDefault();
//   menu.classList.add("on");
//   mobileBg.classList.add("on");
//   body.classList.add("on");
//   btnClose.classList.add("on");
// });

// btnClose.addEventListener("click", (e)=>{
//   e.preventDefault();
//   menu.classList.remove("on");
//   mobileBg.classList.remove("on");
//   body.classList.remove("on");
//   btnClose.classList.remove("on");
// });