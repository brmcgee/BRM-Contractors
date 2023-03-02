// gets data from ./js/brmData.js 
const myData = data;

let blogs = [];
let wrapper = document.getElementById("serviceCard");

function createCard (services) {

    let sCard = document.createElement('div');
    sCard.className = "service col-lg-4 col-md-6 col-sm-6";
    wrapper.appendChild(sCard);

    let card = document.createElement('div');
    card.className = "card mx-auto d-block";
    sCard.appendChild(card);

    let cImg = document.createElement("div");
    cImg.className = "card-img ing-fluid";
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
    (services.authorImage === "" || services.authorImage === null || services.authorImage === undefined) ? userImage.src = "assets/brm-red.ico" : userImage.src = services.authorImage;
    services.authorImage = "assets/brm-red.ico";
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

    let blogId = document.createElement('p');
    blogId.classList = "text-russo mt-1 text-secondary small"
    blogId.innerHTML = "Phone 724.787.3758"
    cUserInfo.appendChild(blogId)


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
    hContent.className = "col-md-10"
    hContent.innerHTML = "Check out our blogs of recently completed work. We solve those common home repair and maintenance problems as well as full service remodel projects, inspection and consulting.  Call or connect with us today for a FREE estimate.";
    heading.appendChild(hContent);
}

// create title heading per 1st cards category
function createTitle(p) {
  let title = document.createElement('div');
  title.className = "mx-auto d-block bg-accent-hover mt-1";
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
    img1: "../assets/logo/brm-ico-black.png",
    img2: "../assets/logo/building.jpg",
    project: "welcome"
  }
]

document.addEventListener("DOMContentLoaded", () => {
  createCard(welcome[0]);
  // createCard(myData[myData.length - 1]);
})




//create and display post per .project selector
// accecpts string representing .project 
function selectProject (p) {
  clearScreen();

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
    console.log('ok')
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