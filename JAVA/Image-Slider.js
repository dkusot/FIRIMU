
//Buttons 

const buttonPrev = document.querySelector(".buttonPrev");
const buttonNext = document.querySelector(".buttonNext");

/*Array imageCarousel is populated with images with locations in Board Images*/

const imageCarousel = [
    {
        title:"image 1",
        location: "Board-Images/img042.jpg"
    },
    {
        title: "image 2",
        location: "Board-Images/CNV00031.JPG"

    },
    {
        title:"image 3",
        location: "Board-Images/img023.jpg"
    },
    {
        title:"image 4",
        location: "Board-Images/img042.jpg"
    },
    {
        title:"image 5",
        location: "Board-Images/CNV00031.JPG"
    }
]

/* Sets the first image at location in to appear in the board slide which is the container for the carousel, it returns the title and location and prints in console for testing*/
const carousel = document.querySelector(".board-slide")
let img = document.createElement("img");
img.className = "imgCarousel";
img.src = imageCarousel[0].location;
img.alt = imageCarousel[0].title;
console.log(img);
carousel.append(img);

/*Sets time for carousel to 6 seconds, where it will call the function getImage*/
let timer = setInterval(nextImage ,6000);

/*Iteration for going through the array, and showing each image at each location in the carousel - starts with next image first at location 1 then once the length of the array has been done, it restarts the iteration and loops forever*/

let i = 1;

function nextImage() {
    img.src = imageCarousel[i].location;
    img.alt = imageCarousel[i].title;
    i++;
    if(i >= imageCarousel.length){
        i = 0;
    }
}

/* Buttons can interrupt the loop by incremented or decrementing i by one to the next image location before restarting the timer. */

buttonNext.addEventListener("click", () => {
    clearInterval(timer)
    i++;
    if(i >= imageCarousel.length){
        i = 0;
    }
    img.src = imageCarousel[i].location;
    img.alt = imageCarousel[i].title;
    timer = setInterval(nextImage ,6000);
});

buttonPrev.addEventListener("click", () => {
    clearInterval(timer)
    if(i <= 0){
        i = imageCarousel.length - 1;
    }else {
        i--;
    }
    console.log(i);
    img.src = imageCarousel[i].location;
    img.alt = imageCarousel[i].title;

    timer = setInterval(nextImage ,6000);
});