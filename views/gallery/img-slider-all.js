let wrapper = document.getElementById("pageWrap");
let images = [];
let imgData = data;
let count = 0;
let time = 2000;

function showAllImages () {
    console.log('hello')

};

function createImages(imgPath) {
    let heading = document.createElement('div');
    heading.id = "slide";
    heading.className = "slide";
    heading.style.width = "90vw";
    heading.style.margin = "auto"
    wrapper.appendChild(heading);

    let image = document.createElement('img');
    image.src = imgPath[0];
    image.alt = "BRM";
    image.style.borderRadius = "10px"
    image.style.height = "80vh";
    image.style.width = "88vw";
    image.style.objectFit = "contain";
    heading.appendChild(image);


    let catTitle = document.createElement("h5");
    catTitle.classList = "img-slider-title text-uppercase w-100"
    catTitle.innerHTML = imgPath[1];
    heading.appendChild(catTitle);

    let catCategory = document.createElement("h3");
    catCategory.classList = "img-slider-category text-uppercase w-100"
    catCategory.innerHTML = imgPath[2];
    heading.appendChild(catCategory);
};


//creates array containing paths for images to display
for (let i=0; i < data.length; i++){
    let image1 = "../" + imgData[i].img1;
    let image2 = "../" + imgData[i].img2;
    let title = imgData[i].title;
    let category = imgData[i].category;

    images.push([image2, title, category]);
    images.push([image1, title, category]);
}


images.forEach((img) => {
    createImages(img);
})



// slideshow 
let slideshows = document.querySelectorAll('[data-component="slideshow"]');

slideshows.forEach(initSlideShow);

function initSlideShow(slideshow){
    let slides = document.querySelectorAll(`#${slideshow.id} [role="list"] .slide` )
    let index = 0;

    slides[index].classList.add('active');

    setInterval(() => {
        slides[index].classList.remove('active');
        index++;

        if (index === slides.length) {
            index = 0;
        }

        slides[index].classList.add('active');

    }, time);

}



