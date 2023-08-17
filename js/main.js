// main.js

// 바야비본 팝업창
const body = document.querySelector("body")
const vayaBtn = document.querySelector(".projects_inner .vaya_btn");
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
	backBtn.style.background = "url(../images/back_icon.png)";

	popup.addEventListener('wheel', parentScrollHandler);
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
  
    popup.removeEventListener('wheel', parentScrollHandler);
});

let winHeight = 0; // 브라우저 창 높이
let oPage = []; // 원페이지 시작 위치 배열
let oIdx = 0; // 현재 원페이지 인덱스
let isScroll = false; // 현재 스크롤 여부
let isOpage = true; // 현재 원페이지 여부
let isNone = false;
var posScroll = 0; // 현재 스크롤 위치


$(function(){
	winHeight = document.body.clientHeight;
	posScroll = window.scrollY;
	
	// opage 높이 설정
	$("[opage]").height(winHeight);
	$("[opage]").each(function(index){
		// Each starting position y	
		oPage.push( $(this).position().top ); 
	});
	
	$("[opage]").each(function(index){
		// Each starting position y	
		if( ( oPage[index] <= posScroll ) && ( ( oPage[index] + winHeight ) > posScroll ) ){
			oIdx = index;
		}
	});
	
	// 마우스 휠 했을때
	$('#container').on('scroll touchmove mousewheel', function(event) {
	
		var direct = event.originalEvent.wheelDelta; // scroll direction 세로방향
		posScroll = window.scrollY;
		
		// 일반 스크롤 도중 원페이지를 만났을 경우
		if( ( direct > 0 ) && isNone ){ // && ( oPage[oIdx-1] > posScroll )
			console.log(( oPage[oIdx] + winHeight + 100) + " / " + posScroll);
			return; 
		}
		
		if( ( direct > 0 ) && !isOpage && ( oPage[oIdx] + winHeight + 100 > posScroll ) ) { 
			// up
			isOpage = true;
			isScroll = true;
			$('body').animate({ scrollTop: oPage[oIdx]}, 500, function(){ isScroll = false; });
			return;
		}
		else if( ( direct <= 0 ) && !isOpage && ( ( oPage[oIdx+1] - 1000 <= posScroll ) && ( ( oPage[oIdx+1] - 1000 + winHeight ) > posScroll ) ) ) {			
			isOpage = true;
			isScroll = true;
			oIdx++;
			$('body').animate({ scrollTop: oPage[oIdx]}, 500, function(){ isScroll = false; });
			return;
		}		
		
		if( !isOpage ){
			// 원페이지가 아니라면 일반 스크롤
			return;
		}
		else{
			event.preventDefault();
			event.stopPropagation();
		}	
	
			
		if( isScroll ){
			return;
		}
		
				
		if(direct > 0){	
			// scroll up
			if( ( oPage[oIdx] <= posScroll ) && ( ( oPage[oIdx] + winHeight ) > posScroll ) ){
				//console.log("onpage section move on prev");
				isOpage = true;
				isScroll = true;
				oIdx--;
				if( oIdx <= 0 ){
					oIdx = 0;
				}
				
				if( oPage[oIdx] >= ( oPage[oIdx-1] + winHeight ) ){
					// none opage
					isOpage = false;
				}
				else{				
					$('body').animate({ scrollTop: oPage[oIdx]}, 500, function(){ isScroll = false; });
				}						
			}
			else{		
				isOpage = false;
			}
		}
		else{
			// scroll down
			if( ( oPage[oIdx] <= posScroll ) && ( ( oPage[oIdx] + winHeight ) > posScroll ) ){
				//console.log("onpage section move on next");
				
				isOpage = true;
				isScroll = true;
								
				if( oPage[oIdx+1] > ( oPage[oIdx] + winHeight ) && (oIdx != oPage.length - 1) ){
					// none opage
					isOpage = false;
					$('body').animate({ scrollTop: oPage[oIdx] + winHeight}, 500, function(){ isScroll = false; });
				}
				else{
					oIdx++;
					$('body').animate({ scrollTop: oPage[oIdx ]}, 500, function(){ isScroll = false; });
				}
				
								
				if( oIdx >= oPage.length ){
					oIdx = oPage.length - 1;
					isOpage = false;
				}
			}
			else{
				isOpage = false;								
			}
		}
	});
});

const contents = document.querySelectorAll('#container > section');
const lis = document.querySelectorAll('.side_roll > ul > li');
const logo = document.querySelector(".header_wrap > h1 > a");
const gnb = document.querySelectorAll(".header_wrap > ul > li");
const content = document.querySelectorAll("#contetts > .accordian > .tab");

let deviceHeight = window.innerHeight;

//스크롤 할 때 한페이지씩 움직이기
for(let i=0; i<contents.length; i++){
	contents[i].addEventListener("wheel", (e)=>{
	  if(e.deltaY < 0){
	  //scroll up
  
	  if(i>=3 && i<5){
		lisAni(lis, 3);
	  }else{
		lisAni(lis, i-1);
	  }
  
	  }else if(e.deltaY > 0){
	  //scroll down
	  
		if(i>=3 && i<5){
		  lisAni(lis, 3);
		}else{
		  lisAni(lis, i+1);
		}
	  }
	});
 }

//scrollAni 함수
function scrollAni(topH){
	window.scroll({
		top: topH,
		left: 0,
		behavior: "smooth"
	});
}

// lisAni 함수
function lisAni(className, value){
className.forEach(item=>{
item.classList.remove('on');
});
className[value].classList.add('on');
}

// 클릭하면 해당 페이지로 스크롤
for(let i=0; i<lis.length; i++){
  lis[i].addEventListener('click',(e)=>{
    e.preventDefault();

	if(i==4){
		lisAni(lis, 4);
		scrollAni(4*deviceHeight);
	}else{
		lisAni(lis, i);
		scrollAni(i*deviceHeight);
	}
 	});

  gnb[i].addEventListener("click", e=>{
	e.preventDefault();
	if(i==0){
		lisAni(lis, 2);
		scrollAni(2*deviceHeight);
	}else if(i==1){
		lisAni(lis, 3);
		scrollAni(3*deviceHeight);
	}else{
		lisAni(lis, 4);
		scrollAni(4*deviceHeight);
	}
 });

 content[i].addEventListener("click", e=>{
	e.preventDefault();
	if(i==0){
		lisAni(lis, 2);
		scrollAni(2*deviceHeight);
	}else if(i==1){
		lisAni(lis, 3);
		scrollAni(3*deviceHeight);
	}else{
		lisAni(lis, 4);
		scrollAni(4*deviceHeight);
	}
 });

  logo.addEventListener("click", e=>{
	e.preventDefault();
	scrollAni(0*deviceHeight);
	lisAni(lis, 0);
   });
   
}