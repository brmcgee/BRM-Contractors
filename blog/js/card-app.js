
let myData;
let data;

async function getBlogs() {
  let url = 'https://www.brmcontractors.net/assets/data/brm.json';
  try {
      let res = await fetch(url);
      return await res.json();
  } catch (error) {
      console.log(error);
  }
}


async function renderBlogs() {
  let blogs = await getBlogs();
  let html = '';
  blogs.forEach(blog => {
      let htmlSegment = `<div id="bCards" class="user" style="border:1px solid #333;max-width:800px;display:none;">
                          <h2>${blog.category}</h2>
                          <img src="${blog.img2}" style="width:300px;margin-bottom:2px;" >
                          <img src="${blog.img1}" style="width:300px" >
                          <p>${blog.author}</p>
                          <p>${blog.date}</p>
                          <div class="content">
                            <h2>${blog.title}</h2>
                            <p>${blog.body}</p>
                            <p>${blog.project}</p>
                            <p>${blog.avatar}</p>
                          </div>
                      </div>`;

      html += htmlSegment;
  });

  let container = document.querySelector('.container-bm');
  container.innerHTML = html;
}


renderBlogs();

let array = [
  {
    purpose: "blog",
    category: 'Roofing',
    title: "New galvalume standing seam metal roof.",
    date: "May 03, 2020",
    author: "Brian McGee",
    body: 'We enjoyed this one helping a good client out with there metal roof on a vacation home on the beach. Nice weather and tan was a bonus too. This is a snap lock 1.5" 16" panel. I just love the look and the detail here at the posts. What a beautiful pool cabana. ',
    img1: "../assets/gallery/sseam1.jpg",
    img2: "../assets/gallery/sseam2.jpg",
    project: ""
  }
];

let arr = [];
let myBlogs = [];
let counter = 1;
let myNum = 0;

function getIt(){
  let seg;
  let allBlogs = document.querySelectorAll('#bCards');
  let ct = document.querySelector('.container-tar');
  allBlogs.forEach((i) => {
    arr = {};
    arr.category = i.childNodes[1].innerHTML;
    arr.img1 = i.childNodes[3].src;
    arr.img2 = i.childNodes[5].src;
    arr.author = i.childNodes[7].innerHTML;
    arr.date = i.childNodes[9].innerHTML;
    arr.title = i.childNodes[11].children[0].innerHTML;
    arr.body = i.childNodes[11].children[1].innerHTML;
    arr.project = i.childNodes[11].children[2].innerHTML;
    arr.avatar = i.childNodes[11].children[3].innerHTML;

    myBlogs.push(arr);
    seg += + "<br>";


    let container = document.querySelector('.container-bm');
    container.innerHTML = "";
  
  });
  
  return myBlogs;

}

// on button click gets json file 
// button hidden now 

let check = getIt();

let btnLoad = document.getElementById("loadIt");
btnLoad.addEventListener("click", () => {
  fetchHandler();
})

function fetchHandler() {
  check = getIt();
  myData = check;
  data = check;
  createCard(welcome[0]);
  createAll();
}


// gets data from ./js/brmData.js 
myData = data;

let blogs = [];
let wrapper = document.getElementById("serviceCard");
// determines index of the title selected
function getIndex (phrase) {
  data = getIt();
  for (let i = 0; i < data.length; i++){
    let title = data[i].title.toLowerCase();
    if (title === phrase) {
        return i;
    }
  }
};


function createCard (services) {
    
    wrapper.style.backgroundColor = "";

    let sCard = document.createElement('div');
    sCard.className = "service col-sm-12 col-xl-4 col-md-6 mx-auto d-block";
    wrapper.appendChild(sCard);

    let card = document.createElement('div');
    card.className = "card mx-auto d-block";
    card.id = "blogCard";
    sCard.appendChild(card);

    // on card click generate blog view 
    card.addEventListener("click", () => {
     let cardIndex = getIndex(services.title.toLowerCase());
     blogViewer(data, cardIndex);
    });

    let cImg = document.createElement("div");
    cImg.className = "card-img img-fluid";
    card.appendChild(cImg);

    let image = document.createElement('img');
    (services.img1 === '') ? image.src = "assets/gallery/placeholder.jpg": image.src = services.img1;
    cImg.appendChild(image);

    let image2 = document.createElement('img');
    (services.img2 === '') ? image2.src = "assets/gallery/placeholder.jpg": image2.src = services.img2;
    cImg.appendChild(image2);

    let cPrice = document.createElement("div");
    cPrice.className = "card-price";
    card.appendChild(cPrice);

    let price = document.createElement('p');
    (services.category === '' || services.category === null) ? price.innerHTML = "n/a" : price.innerHTML =  services.category ;
    cPrice.appendChild(price);

    let cBody = document.createElement("div");
    cBody.className = "card-body";
    card.appendChild(cBody);

    let title = document.createElement("h4");
    (services.title === '') ? title.innerHTML = "...": title.innerHTML = services.title;
    title.className = ""
    cBody.appendChild(title);

    let body = document.createElement('p');
    (services.body === '') ? body.innerHTML = "content unavailable" : body.innerHTML = services.body;
    cBody.appendChild(body);

    let cUser = document.createElement('div')
    cUser.className = "card-user";
    card.appendChild(cUser);

    let userImage = document.createElement('img');
    (services.authorImage === "" || services.authorImage === null || services.authorImage === undefined) ? userImage.src = services.avatar : userImage.src = services.authorImage;
    // services.authorImage = "assets/brm-red.ico";
    cUser.appendChild(userImage);

    let  cUserInfo = document.createElement('div');
    cUserInfo.className = 'user-info';
    cUser.appendChild(cUserInfo);

    let myUser = document.createElement("h5");
    (services.user === '') ? myUser.innerHTML = "bm": myUser.innerHTML = services.author;
    cUserInfo.appendChild(myUser);

    let date = document.createElement("small");
    (services.date === '') ? date.innerHTML = "-" : date.innerHTML = services.date;
    cUserInfo.appendChild(date);

    // let blogId = document.createElement('p');
    // blogId.classList = "text-russo mt-1 text-secondary small"
    // blogId.innerHTML = "Phone 724.787.3758"
    // cUserInfo.appendChild(blogId)


};

// document.addEventListener("DOMContentLoaded", () => {
//   createHeading();
// });
let banner = document.getElementById("top");

function createHeading() {

    let heading = document.createElement('div');
    heading.className = "product-header mx-auto d-block bg-accent-hover mt-1";
    banner.appendChild(heading);
    
    let image = document.createElement('img');
    image.src = "assets/brm-red.ico";
    image.style.height = "100px";
    image.style.width = "100px";
    image.classList = "p-1 mt-3 ms-1 float-end"
    heading.appendChild(image);
    
    let hTitle = document.createElement('h2');
    hTitle.innerHTML = "Blogs by BRM";
    hTitle.classList = "text-russo";
    heading.appendChild(hTitle);

    let hContent = document.createElement('p');
    hContent.className = "col-md-12"
    hContent.innerHTML = "Check out our blogs of recently completed work. We solve those common home repair and maintenance problems as well as full service remodel projects, inspection and consulting.  Call or connect with us today for a FREE estimate.";
    heading.appendChild(hContent);
}

// create title heading per 1st cards category
function createTitle(p) {
  let title = document.createElement('div');
  title.className = "mx-auto d-block bg-accent-hover  rounded-bottom shadow-lg border-top border-start border-end border-dark";
  title.id = "tDiv";
  wrapper.appendChild(title);
  
  let image = document.createElement('img');
  image.src = "assets/brm-red.ico";
  image.style.height = "100px";
  image.style.width = "100px";
  image.classList = "p-1 mt-3 ms-1 float-end"
  image.id = "tImg";
  title.appendChild(image);

  let hTitle = document.createElement('h2');
  hTitle.innerHTML = p.category;
  hTitle.classList = "text-russo";
  hTitle.id = "tTitle";
  title.appendChild(hTitle);

  let hContent = document.createElement('p');
  hContent.className = "col-md-10";
  hContent.id = "tContent";
  hContent.innerHTML = "Check out our blogs of recently completed work. We solve those common home repair and maintenance problems as well as full service remodel projects, inspection and consulting. Call or connect with us today for a FREE estimate.";
  title.appendChild(hContent);
}
//clears title card
function clearTitle() {
  let titleDiv = document.getElementById("tDiv");
  let img = document.getElementById("tImg");
  let title = document.getElementById("tTitle");
  let content = document.getElementById("tContent");
  
  titleDiv.removeChild(img);
  titleDiv.removeChild(title);
  titleDiv.removeChild(content);
  wrapper.removeChild(titleDiv);
}


function createSingle() {
  if (document.getElementById("tDiv")) {
    clearTitle();
    clearScreen();
  }

    let service = {
        title: document.getElementById("fTitle").value,
        category: document.getElementById("fCategory").value,
        body: document.getElementById("fBody").value,
        img1: document.getElementById("fImage").value,
        img2: document.getElementById("fImage2").value,
        authorImage: document.getElementById("fAuthorImage").value,
        date: document.getElementById("fPrice").value,
        author: document.getElementById("fUser").value,
    }; 
    createCard(service);
    document.getElementById("blogCard").removeEventListener("click", () => {
      card.addEventListener("click", () => {
        let cardIndex = getIndex(services.title.toLowerCase());
        blogViewer(data, cardIndex);
       })
    }, true);
    closeNav() || closeRight();
};


// function createAll100() {
//   createAll();
// }
// document.addEventListener("DOMContentLoaded", createAll100)

function clearScreen() {
 let serviceContainer = document.getElementById("serviceCard");
 let cards = document.querySelectorAll('.service');

 for (let i = 0; i < cards.length; i++) {
  serviceContainer.removeChild(cards[i]);
  blogs.shift();
 }
 closeNav();
     //removes current blog card
     let blogWide = document.querySelectorAll(".blog-wide");
     if (blogWide.length !== 0 ) {
      
         let serviceContainer = document.getElementById("serviceCard");
         let cards = document.querySelectorAll('.blog-wide');
        
         for (let i = 0; i < cards.length; i++) {
          serviceContainer.removeChild(cards[i]);
          blogs.shift();
         }
         closeNav();
           
     }
}



// all cards title card
let myAllCard = [
  {
    category: 'All blog posts @ BRM',
  }
];

let welcome = [
  {
    category: 'BRM Blog Posts',
    title: "New and exciting project blog posts at BRM!",
    date: "Current",
    author: "Office @ BRM",
    body: "Go ahead and select from the menu for posts of different projects we are working on. Check out our blogs of recently completed work. ",
    img1: "https://www.brmcontractors.net/assets/logo/builder.jpg",
    img2: "https://www.brmcontractors.net/assets/logo/brm-phone.jpg",
    project: "welcome",
    avatar: "https://www.brmcontractors.net/assets/logo/brm-ico-black.png"
  }
]





//create and display post per .project selector
// accecpts string representing .project 
function selectProject (p) {
  clearScreen();
  myData = check;
  let activeProjects = [];
  let allProjects = [];

  // copy all posts to active 
  for (let j = 0; j < myData.length; j++) {
    allProjects.push(myData[j]);
  }
  
  // creates project array that includes project string 
  for (let i = 0; i < allProjects.length ; i++) {
    let current = allProjects[i];
    if (current.project === p) {
      activeProjects.push(current);
    }
  }
  // clears title if present 
  let title = document.getElementById("tTitle");
  if (title === null) {

  } else {
    clearTitle();
  }

  createTitle(activeProjects[0] || "Error")

  // prints activeprojects to screen
  for (let x = 0; x < activeProjects.length; x++) {
    createCard(activeProjects[x]);
  }
  return activeProjects;
}

// create all blog cards 
function createAll () {
  clearScreen();
  let allBlogs = [];

  myData = getIt();
  for (let i = 0; i < myData.length; i++) {
      allBlogs.push(myData[i]);
  }

  let title = document.getElementById("tTitle");
  if (title === null) {
    
  } else {
    clearTitle();
  }

  createTitle(myAllCard[0])
  for (let j = 0; j < allBlogs.length; j++) {
    createCard(allBlogs[j]);
  }
}

// create cards - accepts array of blogs 
function createFromArray (array) {
  createCard(array);
}

// set event listener for enter key @ search input 
let searchValue = document.getElementById("fSearch");

searchValue.addEventListener("keypress", (e) => {
  console.log(e)
  getIt();
});

searchValue.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    searchBlog();
  }
});

function searchBlog () {
  let copys = [];
  let blogs = [];
  let searchPhrase = document.getElementById("fSearch").value;
  clearScreen();

  // clear title if present 
  let title = document.getElementById("tTitle");
  if (title === null) {
    console.log('err')
  } else {
    clearTitle();
  }

  // create copy of myData 
  for (let x = 0; x < myData.length; x++){
    copys.push(myData[x]);
  }

  //search per title and string build array
  for (let i = 0; i < copys.length; i++) {
    let copy = copys[i];
    if (copy.title.toLowerCase().indexOf(searchPhrase.toLowerCase()) > -1) {
      blogs.push(copy);
    }
  }
  //create card per search array
  for (let j = 0; j < blogs.length; j++) {
    let blog = blogs[j];
    createFromArray(blog)
  }
  //clear search bar
  searchValue.value = "";
}


let currentBlogWide = -1;
let indexBlog;
let wideBlogs;
let nextB;

// large format blog view .blog-wide 
function blogViewer(arr, i){
    // clear title if present 
    let title = document.getElementById("tTitle");
    if (title === null) {
      
    } else {
      clearTitle();
    }

    //removes current blog card
    let blogWide = document.querySelectorAll(".blog-wide");
    if (blogWide.length !== 0 ) {
     
        let serviceContainer = document.getElementById("serviceCard");
        let cards = document.querySelectorAll('.blog-wide');
       
        for (let i = 0; i < cards.length; i++) {
         serviceContainer.removeChild(cards[i]);
         blogs.shift();
        }
        closeNav();
          
    }

    //add new class for styling
    clearScreen();
    createCard(arr[i]);
    
    let cards = document.querySelectorAll(".service");
    cards.forEach((c) => {
      //removes standard service styling
      let newClass = c.className.slice(7);
      c.className = "blog-wide col-xl-8 col-md-10 col-sm-12 mx-auto d-block";
    });
          
    let cUser = document.getElementsByClassName('user-info')
    let purposeCont = document.createElement("div");
    cUser[0].appendChild(purposeCont);

      let userBody = document.querySelector('.card-user');
      let purp = document.createElement("p");
      purp.classList = "ms-5 pt-1 small color-dark"
      if (arr[i].project === "") {
        arr[i].project = "brmhandy";
      }

      purp.innerHTML = i + "<br>" + arr[i].project + '<br>' + arr[i].purpose;
      userBody.appendChild(purp);


      if (currentBlogWide === -1) {
        currentBlogWide = Number(i); 
      }

      wideBlogs = arr;
      nextB = document.querySelectorAll("#nextBtn");
}



//movement button events
blogNext.addEventListener("click", () => {
  currentBlogWide ++;
  data = getIt();
  if (currentBlogWide === data.length - 1){
    currentBlogWide = 0;
  }  
  blogViewer(getIt(), currentBlogWide);
});

document.addEventListener("keydown", (e) => {
  let value = e.key;
  if (value === "ArrowRight"){
    currentBlogWide ++;
    data = getIt();
    if (currentBlogWide === data.length - 1){
      currentBlogWide = 0;
    }  
    blogViewer(getIt(), currentBlogWide);
  }
});

blogPrev.addEventListener("click", () => {
  currentBlogWide --;
  if (currentBlogWide === -1){
    data = getIt();
    currentBlogWide = data.length - 1;
  }  
  blogViewer(getIt(), currentBlogWide);
});

document.addEventListener("keydown", (e) => {
  let value = e.key;
  if (value === "ArrowLeft"){
    currentBlogWide --;
    if (currentBlogWide === -1){
      data = getIt();
      currentBlogWide = data.length - 1;
    }  
    blogViewer(data, currentBlogWide);
  }
});

document.getElementById("blogNum").addEventListener("keydown", (e) => {
  if (e.key === "Enter"){
    blogViewer(getIt(), document.getElementById("blogNum").value);
  }
})


// search declarations 
let phrase;
const wideListTarget = document.getElementById("wideList");
const wideSearchBar = document.getElementById("searchBarWide");
const links = document.getElementById("wideList");


//creat link
function createWideLink (arr, i) {
  wideListTarget.style.height = "100vh";
  let wideLink = document.createElement("a");
  wideLink.href = "#brmBlogs";
  wideLink.innerHTML = "" + i  + "- " + arr[i].title;
  wideLink.id = "widePost";
  wideLink.classList = "p-1"
  wideLink.className = "wide-blog-list ps-2";
  wideLink.style.backgroundColor = "rgb(201, 201, 201)";
  wideLink.style.textDecoration = "none";
  wideLink.style.maxWidth = "690px";
  wideLink.style.color = "rgb(163,30,30)"
  wideLink.style.display = "block";
  wideLink.style.margin = "auto";
  wideListTarget.appendChild(wideLink); 
  wideListTarget.style.borderRadius = "5px";
}



let searchResults;
// search bar
function searchWide() {
  phrase = document.getElementById("searchBarWide").value.toLowerCase();
  data = getIt();
  for (let i = 0; i < data.length; i++) {
    let post = data[i].title;
    if (post.toLowerCase().indexOf(phrase) > -1) {
      createWideLink(data, i);
    }
  }

  searchResults = document.querySelectorAll("#widePost");
  if (phrase === "") {
    wideListTarget.style.height = "1px";
    for (let i = 0; i < searchResults.length; i++){
      wideListTarget.removeChild(searchResults[i]);
    }
  }


  
  for (let x = 0; x < searchResults.length; x++) {
    let post = searchResults[x];
    post.addEventListener("click", () => {
      
      //remove index # from begining
      let title = post.innerHTML.toLowerCase();
      let split = title.split(" ");
      title = split.splice(1).join(" ");

      let index = getIndex(title);
      wideListTarget.style.height = "1px";
      blogViewer(data, index);
      
      for (let i = 0; i < searchResults.length; i++){
        wideListTarget.removeChild(searchResults[i]);
      };
      document.getElementById("searchBarWide").value = "";

      if (currentBlogWide != x) {
        currentBlogWide = x + 2;
      }
    })
  }
}



//search bar removes querys on keydown, keyup adds new
wideSearchBar.addEventListener("keydown", () => {

  const wideTitle = document.getElementById("tDiv");
  if (wideTitle) {
    clearTitle();
  }
  let wideList = document.querySelectorAll("#widePost");
  if (wideList.length > 0) {
    for(let i = 0; i < wideList.length; i ++){
      wideListTarget.removeChild(wideList[i]);
  }
  }
});











// document.addEventListener("DOMContentLoaded", () => {
//   createCard(welcome[0]);
//   // createCard(myData[myData.length - 1]);
// })

