// / 바야비본 팝업창
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
    // scrollAni(3*deviceHeight);
    // lisAni(lis, 3);
  
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
