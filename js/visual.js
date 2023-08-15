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
let slideW = bnnFrame.clientWidth;

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

// 이전버튼 클릭
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
  });
  closeBtn.classList.remove("on");
});