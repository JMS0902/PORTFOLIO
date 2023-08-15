// 바야비본 팝업창
const body = document.querySelector("body")
const vayaBtn = document.querySelector(".projects_inner > ul > li > .vaya_btn");
const ottBtn = document.querySelector(".projects_inner > ul > li > .ottogi_btn");
const popup = document.querySelector(".projects_popup");
const vayaPop = document.querySelector(".vaya_popup");
const ottPop = document.querySelector(".ottogi_popup");
const backBtn = document.querySelector("a.back_btn");


// const parentScrollHandler = (e) => {
//     e.stopPropagation();
// };

vayaBtn.addEventListener("click", e=>{
    e.preventDefault();
    popup.classList.add("on");
    vayaPop.classList.add("on");
    backBtn.classList.add("on");
    body.classList.add("on");

    // popup.parentElement.addEventListener('wheel', parentScrollHandler);
});

backBtn.addEventListener("click", e=>{
    e.preventDefault();
    popup.classList.remove("on");
    vayaPop.classList.remove("on");
    ottPop.classList.remove("on");
    backBtn.classList.remove("on");
    body.classList.remove("on");
    scrollAni(3*deviceHeight);
    lisAni(lis, 3);
  
    // popup.parentElement.removeEventListener('wheel', parentScrollHandler);
});

ottBtn.addEventListener("click", e=>{
    e.preventDefault();
    popup.classList.add("on");
    ottPop.classList.add("on");
    backBtn.classList.add("on");
    backBtn.style.background = "url(../images/back_icon_b.png)";
    body.classList.add("on");

    // popup.parentElement.addEventListener('wheel', parentScrollHandler);
});



// 오뚜기 웹접근성 팝업
const webAccBtn = document.querySelector(".ottogi_popup_inner > a.btn");
const webPopup = document.querySelector(".popup");
const popClose = document.querySelector(".popBtn_close");
const popupBg =document.querySelector(".popup_bg");

if(ottPop.classList.contains("on")){
    webAccBtn.addEventListener("click", (e) =>{
        e.preventDefault();
        webPopup.classList.add("on");
        popupBg.classList.add("on");
    });
    popClose.addEventListener("click", e =>{
        e.preventDefault();
        webPopup.classList.remove("on");
        popupBg.classList.remove("on");
    });
}else{
}



// 검사 페이지 슬라이드
const btnPrev = document.querySelector(".popup_prev");
const btnNext = document.querySelector(".popup_next");
const popFrame = document.querySelector(".popup > section > ul");
const popEach = document.querySelectorAll(".popup > section > ul > li");
const popTitle = document.querySelector(".popup > h2");
const slideRoll = document.querySelectorAll(".slide_roll li");

let LastNum = popEach.length -1;
let popNum = 0;
let popW = document.querySelector(".popup").clientWidth;

function slideAll(name, popNum, className){
    name.forEach(item=>{
      item.classList.remove(className);
    });
    name[popNum].classList.add(className); 
}

// next버튼 클릭
btnNext.addEventListener("click", (e)=>{
    e.preventDefault();
    popNum++;
    if(popNum>LastNum){
      popNum=0;
    }
    // next버튼클릭 > 배너와 롤 넘어감
    slideAll(popEach, popNum, "active");
    slideAll(slideRoll, popNum, "on");

});  

// prev버튼 클릭
btnPrev.addEventListener("click", (e)=>{
    e.preventDefault();
    popNum--;
    if(popNum<0){
      popNum=LastNum;
    }
    slideAll(popEach, popNum, "active");
    slideAll(slideRoll, popNum, "on");
});






