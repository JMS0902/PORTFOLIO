//index.js
const contents = document.querySelectorAll("#container > div");
let deviceHeight = window.innerHeight;

window.addEventListener("resize", ()=>{
    deviceHeight = window.innerHeight;
});

for(var i=0; i<contents.length; i++){
	if(i=0){
		contents[i].style.height = `${deviceHeight}px`;
	}else{
		contents[i].style.height = `${deviceHeight}px`;
	}
}


//스크롤 할 때 한페이지씩 움직이기
// for(let i=0; i<contents.length; i++){
//   contents[i].addEventListener("wheel", (e)=>{
//     if(e.deltaY < 0){
//     //scroll up
//     let prev = e.currentTarget.previousElementSibling.offsetTop;
    
//     scrollAni(prev);

//     }else if(e.deltaY > 0){
//     //scroll down
//     let next = e.currentTarget.nextElementSibling.offsetTop;
    
//     scrollAni(next);
//     }
//   });
// }

//scrollAni 함수
// function scrollAni(topH){
//     window.scroll({
//         top: topH,
//         left: 0,
//         behavior: "smooth"
//     });
// }


// for(let i=0; i<contents.length; i++){
//     contents[i].addEventListener("wheel", (e) => {
//       if(e.deltaY < 0){
//         // scroll up
//         let prev = e.currentTarget.previousElementSibling.offsetTop;
//         if(i==0){
//             Wscroll(prev);
//         } else if(i==1){
//             Wscroll(prev);
//         } else if(i<=2 && i>3){
//             Wscroll(prev);
//         } else if(i==3){
//             Wscroll();
//         } else if(i==4){
//             Wscroll(prev);
//         } else{
//             Wscroll(prev);
//         }
//       } else if(e.deltaY > 0){
//         // scroll down
//         let next = e.currentTarget.nextElementSibling.offsetTop;
//         if(i==0){
//             Wscroll(next);
//         } else if(i==1){
//             Wscroll(next);
//         } else if(i==2){
//             Wscroll();
//         } else if(i==3){
//             Wscroll(next);
//         } else if(i==4){
//             Wscroll(next);
//         } else{
//             Wscroll(next);
//         }
//       }
//     })
// }
