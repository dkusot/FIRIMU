const boardSlide = document.querySelector('.board-slide');
const boardImages = document.querySelectorAll(".board-slide img");

//Buttons 

const buttonPrev = document.querySelector("#buttonPrev");
const buttonNext = document.querySelector("#buttonNext");

//Counter 

let counter = 1; 
const size = boardImages[0].clientWidth;
console.log(counter)

boardSlide.style.transform = "translateX(" +(-size*counter) + "px)";
console.log(counter)
//Button Listener

/*buttonNext.addEventListener("click",()=>{
		boardSlide.style.transition = "transform 0.4s ease in-out";
		counter++;
		console.log();
							}); */