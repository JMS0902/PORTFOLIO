// 모바일
const body = document.querySelector("body")
const mobileBg = document.querySelector(".bg");
const btnOpen = document.querySelector(".mobBtn > a");
const btnClose = document.querySelector(".mobBtn_close > a");
const menu = document.querySelector("div.mob");
const btnCloseImg = document.querySelector(".mobBtn > a > img");

btnOpen.addEventListener("click", (e)=>{
e.preventDefault();
e.currentTarget.classList.toggle("on");

  if(btnOpen.classList.contains("on")){
    menu.classList.add("on");
    mobileBg.classList.add("on");
    body.classList.add("on");
    btnOpen.setAttribute("title","메뉴 전체보기 닫기");
    btnCloseImg.setAttribute("src","images/mob_close.png");
  }else{
    menu.classList.remove("on");
    mobileBg.classList.remove("on");
    body.classList.remove("on");
    btnOpen.setAttribute("title","메뉴 전체보기 열기");
    btnCloseImg.setAttribute("src","images/mob_menu.png");
  }

});