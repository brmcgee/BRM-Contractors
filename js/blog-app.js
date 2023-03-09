// gets data from ./js/brmData.js 
const blogData = data;


// blog post container - random content initializer 
let title = document.getElementById("bTitle");
let date = document.getElementById("bDate");
let author = document.getElementById("bAuthor");
let content = document.getElementById("bBody");
let img1 = document.getElementById("bImg1");
let img2 = document.getElementById("bImg2");

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
// random number generator 
function getRandomInt(max) {
return Math.floor(Math.random() * max);
}

// content loaded populate with blog
let randomLoader = getRandomInt(blogData.length - 1);
document.addEventListener("DOMContentLoaded", populate(randomLoader));

// box 1 - current project
const groupOne = document.getElementById('group1');
const titleOne = document.getElementById('title1');
const dateOne = document.getElementById('date1');
const contentOne = document.getElementById('content1');
const imageOne = document.getElementById('image1');
const buttonOne = document.getElementById('btn1');

// last post entry
let randomOne = blogData.length - 1; 
// assigning values
titleOne.innerHTML = blogData[randomOne].title;
dateOne.innerHTML = blogData[randomOne].date;
contentOne.innerHTML = blogData[randomOne].body;
imageOne.src = blogData[randomOne].img1;


buttonOne.addEventListener("click", function () {
populate(randomOne);
});


// box 2 - from the vault
const groupTwo = document.getElementById('group2');
const titleTwo = document.getElementById('title2');
const dateTwo = document.getElementById('date2');
const contentTwo = document.getElementById('content2');
const imageTwo = document.getElementById('image2');
const buttonTwo = document.getElementById('btn2')

let randomTwo = getRandomInt(blogData.length - 1);

titleTwo.innerHTML = blogData[randomTwo].title;
dateTwo.innerHTML = blogData[randomTwo].date;
contentTwo.innerHTML = blogData[randomTwo].body;
imageTwo.src = blogData[randomTwo].img2;

buttonTwo.addEventListener("click", function () {
populate(randomTwo);
});

function setCardTwo(i) {
titleTwo.innerHTML = blogData[i].title;
dateTwo.innerHTML = blogData[i].date;
contentTwo.innerHTML = blogData[i].body;
imageTwo.src = blogData[i].img2;
randomTwo = i;
}

refreshTwo.addEventListener("click", function () {
setCardTwo(getRandomInt(blogData.length - 1)); 
});

// box 3 - in page post
const groupThree= document.getElementById('group3');
const titleThree = document.getElementById('title3');
const dateThree = document.getElementById('date3');
const contentThree = document.getElementById('content3');
const imageThree = document.getElementById('image3');
const buttonThree = document.getElementById('btn3')

let randomThree = getRandomInt(blogData.length - 1);

titleThree.innerHTML = blogData[randomThree].title;
dateThree.innerHTML = blogData[randomThree].date;
contentThree.innerHTML = blogData[randomThree].body;
imageThree.src = blogData[randomThree].img2;

buttonThree.addEventListener("click", function () {
populate(randomThree);
});

function setCardThree(i) {
titleThree.innerHTML = blogData[i].title;
dateThree.innerHTML = blogData[i].date;
contentThree.innerHTML = blogData[i].body;
imageThree.src = blogData[i].img1;
randomThree = i;
}

// archives
const aBtns = document.querySelectorAll("#aBtn");
let archRandom = getRandomInt(aBtns.length);
let select = []; // array of current list

function populateArch (num) {
for (let i = 0; i < aBtns.length; i++) {
  if (num === blogData.length) {
     num = 1;
  }
  blog = blogData[num];
  select.push(num);
  aBtns[i].innerHTML = blog.title + '<br> ' + "- " + blog.date;
  num ++;
}
};

populateArch(archRandom);

// populate post for active selection 
aBtns.forEach((e, i) => {
e.addEventListener("click", function () {
  populate(select[i]);
});
});


// search bar 
const blogTarget = document.getElementById('blogTarget');
const search = document.getElementById('searchBar');
const list = document.getElementById('blogLists');
let input, blogPost;
let count = 0;
let links;

function createLink (blog) {
  let link = document.createElement('a')
  link.href = '#blogPost';
  link.innerHTML = blog;
  link.id = "post" + count;
  link.className = "blog-lists";
  link.style.display = 'block';
  list.appendChild(link);
  count++;
}

// determines index of the title selected
function getIndex (phrase) {
for (let i = 0; i < blogData.length; i++){
  let title = blogData[i].title.toLowerCase();
  if (title === phrase) {
      return i;
  }
}
};

function searchBlogs() {
count = 0;
input = document.getElementById("searchBar").value.toLowerCase();
for (let i = 0; i < blogData.length; i++) {
  blogPost = blogData[i].title;
  if (blogPost.toLowerCase().indexOf(input) > -1) {
     createLink(blogPost);
  }
}


links = document.querySelectorAll(".blog-lists");

if (input === '') {
  for (let i = 0; i < links.length; i++) {
      list.removeChild(links[i]);
  }
}  

let posts = document.querySelectorAll('.blog-lists');
for (let y = 0; y < posts.length; y ++){
  posts[y].addEventListener("click", () => {    
      let value =  posts[y].innerHTML.toLowerCase();
      let index = getIndex(value);
      populate(index);
  })
}
};


search.addEventListener("keydown", function () {
for (let i = 0; i < links.length; i++) {
  list.removeChild(links[i]);
}
});











