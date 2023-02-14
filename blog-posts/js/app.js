let blogData = [
    {
        title: "Kitchen Remodel",
        date: "Feb 08, 2023",
        author: "Brian McGee",
        body: "We have been working this on over a couple trips. First we refinished all the walls and rework the electrical for updated appliances and added some lights. We just recently went back, the homeowner had the walls painted and cabinets assemblied. We installed all the cabinets on the walls and trimmed out. We will be back after the counters to finish the plumbing.",
        img1: "../assets/gallery/kitchen-cabinet1.jpg",
        img2: "../assets/gallery/kitchen-cabinet2.jpg"
    },
    {
        title: "Custom Deck Build",
        date: "Nov 11, 2022",
        author: "Brian McGee, owner",
        body: "What an awesome deck we built here! We completed it winter time just before the snow. I know these clients will be enjoying this come spring. We installed this pressure treated deck over posts and beams, it is over 350 sqft - huge. It is a beatiful oasis and awesome addition to the new pool. ",
        img1: "../assets/gallery/custom-deck2.jpg",
        img2: "../assets/gallery/custom-deck3.jpg"
    },
    {
        title: "Floor Installation",
        date: "Oct 26, 2022",
        author: "Brian McGee",
        body: "Simply LVT flooring install here. We installaed a shower set and subfloor a couple months back. Now we return and finished the floors. Homeowner will be installing the trim.",
        img1: "../assets/gallery/flooring1.jpg",
        img2: "../assets/gallery/flooring2.jpg"
    },
    {
        title: "Bathroom Remodel",
        date: "Dec 14, 2022",
        author: "Brian McGee",
        body: "This project was great! We completed it winter time. We removed everything down to the wood studs and installed all new insulation and fixtures. A 4-piece acrylic bathtub/shower combo kit. All new elctrical and lighting with bathroom exhaust. New smooth finished drywall surface freshly painted to our clients likings. I know its a bathroom but this will be a fun place.",
        img1: "../assets/gallery/bathroom1.jpg",
        img2: "../assets/gallery/bathroom2.jpg"
    }

];



const title = document.getElementById("bTitle");
const date = document.getElementById("bDate");
const author = document.getElementById("bAuthor");
const content = document.getElementById("bBody");
const img1 = document.getElementById("bImg1");
const img2 = document.getElementById("bImg2");


function populate(i) {
    content.innerHTML = blogData[i].body;
    title.innerHTML = blogData[i].title;
    date.innerHTML = blogData[i].date;  
    author.innerHTML = blogData[i].author;
    console.log(blogData[i].img1)
    img1.src = blogData[i].img1;
    img2.src = blogData[i].img2;   
}
let current = 3;
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


document.addEventListener("DOMContentLoaded",populate(current));