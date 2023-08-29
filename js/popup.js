// 바야비본 팝업창
const body = document.querySelector("body")
const vayaBtn = document.querySelector(".slide_img .vaya_btn");
const vayaBtn2 = document.querySelector(".slide_img .vaya_btn2");
const popup = document.querySelector(".projects_popup");
const vayaPop = document.querySelector(".vaya_popup");
const backBtn = document.querySelector("a.back_btn");

const parentScrollHandler = (e) => {
    e.stopPropagation();
};

vayaBtn.addEventListener("click", e=>{
    e.preventDefault();
    popup.classList.add("on");
    vayaPop.classList.add("on");
    backBtn.classList.add("on");
    body.classList.add("on");
	popup.addEventListener('wheel', parentScrollHandler);
});

vayaBtn2.addEventListener("click", e=>{
    e.preventDefault();
    popup.classList.add("on");
    vayaPop.classList.add("on");
    backBtn.classList.add("on");
    body.classList.add("on");
	popup.addEventListener('wheel', parentScrollHandler);
});

backBtn.addEventListener("click", e=>{
    e.preventDefault();
    popup.classList.remove("on");
    vayaPop.classList.remove("on");
    backBtn.classList.remove("on");
    body.classList.remove("on");
    scrollAni(3*deviceHeight);
    lisAni(lis, 3);
  
    popup.removeEventListener('wheel', parentScrollHandler);
});
