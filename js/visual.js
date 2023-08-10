// visual.js

// 프로젝트 슬라이드
const btnNext =document.querySelector(".arrow_R");
const btnPrev =document.querySelector(".arrow_L");
const bnnFrame =document.querySelector(".content1_inner > ul");
const bnnSection =document.querySelectorAll(".content1_inner > ul > li");
const widthBnn = document.querySelector(".container1_inner");


let lastNum = 1;
let bnnNum = 0;
let bnnW = document.body.clientWidth;

window.addEventListener("resize", ()=>{
  bnnW = document.body.clientWidth;
});
console.log(bnnW);


// 슬라이드

// if(bnnW < 787){
//   // 모바일
//   conSlide(500);
// }else{
//   //pc
//   conSlide(320);
// }

  // 다음버튼클릭
btnNext.addEventListener("click",(e)=>{
  e.preventDefault();
  bnnNum++;
  if(bnnNum > lastNum)bnnNum=0;

  bnnFrame.style.left = `${320*-bnnNum}px`;
});

btnPrev.addEventListener("click",(e)=>{
  e.preventDefault();
  bnnNum--;
  if(bnnNum < 0){bnnNum=lastNum};

  bnnFrame.style.left = `${320*-bnnNum}px`;
}); 


// 팝업창
const popup = document.querySelector('.popup');
const sections = document.querySelectorAll('.popup>section');
const closeBtn = document.querySelector(".popBtn_close");

for(let i=0; i<bnnSection.length; i++){
  bnnSection[i].addEventListener('click', (e) => {
        e.preventDefault();
        popup.classList.add('on');
        sections.forEach(item => {
            item.classList.remove('on');
        });
        sections[i].classList.add('on');
        closeBtn.classList.add('on');
    })
}

closeBtn.addEventListener("click", e=>{
  e.preventDefault();
  popup.classList.remove("on");
  sections.forEach(item=>{
    item.classList.remove("on");
  })
  closeBtn.classList.remove("on");
});







































// const webAccBtn = document.querySelector("a.btn");
// const popup = document.querySelector(".popup");
// const popClose = document.querySelector("a.popBtn_close");
// const popupBg =document.querySelector(".popup_bg");

// webAccBtn.addEventListener("click", e=>{
//     e.preventDefault();
//     popup.classList.toggle("on");

//     if(popup.classList.contains("on")){
//        popupBg.classList.add("on");
//     }else{
//         popupBg.classList.remove("on");
//     }
// });

// popClose.addEventListener("click",e=>{
//     e.preventDefault();
//     popup.classList.remove("on");
//     popupBg.classList.remove("on");
// });


// // 검사 페이지 슬라이드
// const btnPrev = document.querySelector("a.popup_prev");
// const btnNext = document.querySelector("a.popup_next");
// const popFrame = document.querySelector(".popup > section > ul");
// const popEach = document.querySelectorAll(".popup > section > ul > li");
// const popTitle = document.querySelector(".popup > h2");
// const slideRoll = document.querySelectorAll(".slide_roll li");

// let LastNum = popEach.length -1;
// let popNum = 0;
// let popW = document.querySelector(".popup").clientWidth;

// function slideAll(name, popNum, className){
//     name.forEach(item=>{
//       item.classList.remove(className);
//     });
//     name[popNum].classList.add(className); 
// }

// // next버튼 클릭
// btnNext.addEventListener("click", (e)=>{
//     e.preventDefault();
//     popNum++;
//     if(popNum>LastNum){
//       popNum=0;
//     }
//     // next버튼클릭 > 배너와 롤 넘어감
//     slideAll(popEach, popNum, "active");
//     slideAll(slideRoll, popNum, "on");

// });  

// // prev버튼 클릭
// btnPrev.addEventListener("click", (e)=>{
//     e.preventDefault();
//     popNum--;
//     if(popNum<0){
//       popNum=LastNum;
//     }
//     slideAll(popEach, popNum, "active");
//     slideAll(slideRoll, popNum, "on");
// });

