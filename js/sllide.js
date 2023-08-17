// 프로젝트 1번 2번 오토배너
const bnnFrame = document.querySelector(".slide_img"); //ul
const bnnEach = document.querySelectorAll(".slide_img > li"); // ul > li
const ottFrame = document.querySelector(".slide_img_02");
const ottEach = document.querySelectorAll(".slide_img_02 > li"); // ul > li

let lastNum = 1;
let bnnNum = 0;
let bnnW = document.querySelector(".slide_img > li:first-child").offsetWidth;
let ottW = document.querySelector(".slide_img_02 > li:first-child").offsetWidth;


function autoSlide(){
	bnnNum++;
	if(bnnNum>lastNum){
		bnnNum = 0;
	}
	bnnFrame.style.transform = `translateX(${bnnW*-bnnNum}px)`
    ottFrame.style.transform = `translateX(${ottW*-bnnNum}px)`
	auto = setTimeout(autoSlide, 5000);
}
let auto = setTimeout(autoSlide, 5000);

