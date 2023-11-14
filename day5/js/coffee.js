
let bigPic = document.querySelector("#pic");
let smallPics = document.querySelectorAll(".small");

//실행 함수
for(let i=0; i<smallPics.length; i++){
  smallPics[i].onclick = function(){
    bigPic.setAttribute("src", this.src);
  };
}