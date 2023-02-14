let blogData = [
    {
        id: '0',
        title: "Kitchen Remodel",
        date: "Feb 08, 2023",
        author: "Brian McGee",
        body: "We have been working this on over a couple trips. First we refinished all the walls and rework the electrical for updated appliances and added some lights. We just recently went back, the homeowner had the walls painted and cabinets assemblied. We installed all the cabinets on the walls and trimmed out. We will be back after the counters to finish the plumbing.",
        img1: "../assets/gallery/kitchen-cabinet1.jpg",
        img2: "../assets/gallery/kitchen-cabinet2.jpg"
    },    
    {
        id: '1',
        title: "Plumbing Repair",
        date: "Jan 29, 2023",
        author: "Brian McGee",
        body: "There was some mositure damaged drywall and a loose shower arm so we fixed it all on this one. Added some blocking for the shower arm and removed and replaced the damaged drywall. Oh yeah we added a clean access panel for the plumbing. Another happy client!",
        img1: "../assets/gallery/plumbing-repair1.jpg",
        img2: "../assets/gallery/plumbing-repair2.jpg"
    },
    {
        id: '2',
        title: "Custom Deck Build",
        date: "Nov 11, 2022",
        author: "Brian McGee, owner",
        body: "What an awesome deck we built here! We completed it winter time just before the snow. I know these clients will be enjoying this come spring. We installed this pressure treated deck over posts and beams, it is over 350 sqft - huge. It is a beatiful oasis and awesome addition to the new pool. ",
        img1: "../assets/gallery/custom-deck2.jpg",
        img2: "../assets/gallery/custom-deck3.jpg"
    },
    {
        id: '3',
        title: "Floor Installation",
        date: "Oct 26, 2022",
        author: "Brian McGee",
        body: "Simply LVT flooring install here. We installaed a shower set and subfloor a couple months back. Now we return and finished the floors. Homeowner will be installing the trim.",
        img1: "../assets/gallery/flooring1.jpg",
        img2: "../assets/gallery/flooring2.jpg"
    },
    {
        id: '4',
        title: "Drywall Install",
        date: "July 23, 2022",
        author: "Brian McGee",
        body: "We had good time here with general framing and windows as well as the electrical re-wire. We installed the drywall which we will finish later. Also added blocking for the TV. Someone will enjoy the games.",
        img1: "../assets/gallery/drywall-hang1.jpg",
        img2: "../assets/gallery/drywall-hang2.jpg"
    },
    {
        id: '5',
        title: "Drywall Finsihing",
        date: "Aug 20, 2022",
        author: "Brian McGee",
        body: "He have returned from installting the original 30 sheets and are finishing this board on with a smooth finish. We have taken extra caution in protecting the floors. We are all sanded down and ready to for clean up here. This is beautiful but we wont be painting it. The homeowner will finish the rest.",
        img1: "../assets/gallery/drywall-finish.jpg",
        img2: "../assets/gallery/drywall-finish2.jpg"
    },
    {
        id: '6',
        title: "Bathroom Remodel",
        date: "Dec 14, 2022",
        author: "Brian McGee",
        body: "This project was great! We completed it winter time. We removed everything down to the wood studs and installed all new insulation and fixtures. A 4-piece acrylic bathtub/shower combo kit. All new elctrical and lighting with bathroom exhaust. New smooth finished drywall surface freshly painted to our clients likings. I know its a bathroom but this will be a fun place.",
        img1: "../assets/gallery/bathroom1.jpg",
        img2: "../assets/gallery/bathroom2.jpg"
    },
    {
        id: '7',
        title: "OMG - 4 flights of Stairs Painting",
        date: "July 11, 2022",
        author: "Brian McGee",
        body: "Wow when I got wind of this one. 4-flights of stairs to be painted here. Had to be careful not to get trapped on the top floor with wet paint... Well anyways it turned out awesome and paint lines were crisp. Another job DONE right!",
        img1: "../assets/gallery/paint1.jpg",
        img2: "../assets/gallery/paint2.jpg"
    }

];


// blog post populater 
const title = document.getElementById("bTitle");
const date = document.getElementById("bDate");
const author = document.getElementById("bAuthor");
const content = document.getElementById("bBody");
const img1 = document.getElementById("bImg1");
const img2 = document.getElementById("bImg2");
// populate DOM
function populate(i) {
    content.innerHTML = blogData[i].body;
    title.innerHTML = blogData[i].title;
    date.innerHTML = blogData[i].date;  
    author.innerHTML = blogData[i].author;
    img1.src = blogData[i].img1;
    img2.src = blogData[i].img2;   
}
// next or prev movement
let current = 0;
function next(index){
    console.log(blogData.length);
    if (index === 0) {
        if (current === 0) {
            current = blogData.length;
        }
        current -= 1;
    } 
    if (index === 1) {
        if (current === blogData.length - 1) {
            current = 0;
        }
        current += 1;
    }

    content.innerHTML = blogData[current].body;
    title.innerHTML = blogData[current].title;
    date.innerHTML = blogData[current].date;  
    author.innerHTML = blogData[current].author;

    img1.src = blogData[current].img1;
    img2.src = blogData[current].img2;   
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
// content loading
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let randomLoader = getRandomInt(blogData.length - 1);
document.addEventListener("DOMContentLoaded",populate(randomLoader));

// box 1 
const groupOne = document.getElementById('group1');
const titleOne = document.getElementById('title1');
const dateOne = document.getElementById('date1');
const contentOne = document.getElementById('content1');
const imageOne = document.getElementById('image1');
const buttonOne = document.getElementById('btn1')



let randomOne = getRandomInt(blogData.length - 1);
titleOne.innerHTML = blogData[randomOne].title;
dateOne.innerHTML = blogData[randomOne].date;
contentOne.innerHTML = blogData[randomOne].body;
imageOne.src = blogData[randomOne].img1;


buttonOne.addEventListener("click", function () {
   populate(randomOne);
});






// box 2 
const groupTwo = document.getElementById('group2');
const titleTwo = document.getElementById('title2');
const dateTwo = document.getElementById('date2');
const contentTwo = document.getElementById('content2');
const imageTwo = document.getElementById('image2');
const buttonTwo = document.getElementById('btn2')



let randomTwo = getRandomInt(blogData.length - 1);
if (randomTwo === randomOne) {
    randomTwo = getRandomInt(blogData.length - 1);
}
if (randomTwo === randomOne) {
    randomTwo = getRandomInt(blogData.length - 1);
}

titleTwo.innerHTML = blogData[randomTwo].title;
dateTwo.innerHTML = blogData[randomTwo].date;
contentTwo.innerHTML = blogData[randomTwo].body;
imageTwo.src = blogData[randomTwo].img2;

buttonTwo.addEventListener("click", function () {
    populate(randomTwo);
 });