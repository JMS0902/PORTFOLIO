// 팝업창
// const contents = document.querySelectorAll(".content1_inner>ul>li");
// const popup = document.querySelector(".popup");
// const section = document.querySelectorAll(".popup > section");
// const closeBtn = document.querySelector(".popBtn_close");
const contents = document.querySelectorAll('.content1_inner>ul>li');
const popup = document.querySelector('.popup');
const sections = document.querySelectorAll('.popup>section');

for(let i=0; i<contents.length; i++){
    contents[i].addEventListener('click', (e) => {
        e.preventDefault();
        popup.classList.add('on');
        sections.forEach(item => {
            item.classList.remove('on');
        });
        sections[i].classList.add('on');
    })
}


// contents.forEach(item => {  
//   item.addEventListener("click", e=>{
//     e.preventDefault();
//     popup.classList.add("on");
//   });
// });



// contents.addEventListener("click", e=>{
//   e.preventDefault();
//   // section.forEach(image => {
//   //   image.classList.remove("on");
//   // });
//   // e.currentTarget.classList.add("on");
//   popup.style.display = "block";
// });



// closeBtn.addEventListener("click", e=>{
//   e.preventDefault();
//   popup.classList.remove("on");
//   section.forEach(item=>{
//     item.classList.remove("on");
//   })
//   closeBtn.classList.remove("on");
// });