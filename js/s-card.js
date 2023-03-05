// gets data from ./js/brmData.js 
const myData = data;
const services = [ 
  {
  title: "Custom Decks",
  content: 'BRM builds and repairs all sorts of deck, handrail, posts and fences and more. Full service deck builds and fence installs. We repair and install anything wood.',
  img1: "assets/gallery/custom-deck2.jpg"
},
{
  title: "Bathrooms",
  content: 'We repair all things bathroom! BRM offers installation services for fixtures, lights, plumbing flooring and more. We also offer full bathroom remodel.',
  img1: "assets/gallery/--bg-bath.jpg",
},
{
  title: "Painting",
  content: 'We offer full service drywall patching and painting. Interior or exterior paint, stain, caulk or sealing available. Drywall and painting to complete install.',
  img1: "assets/gallery/paint1.jpg",
},
{
  title: "Siding",
  content: 'BRM installs and repairs sidings. Wind damage we can help. We offer full service siding installation services, resealing and replacement of missing pieces.',
  img1: "assets/gallery/siding-corner.jpg",
},
{
  title: "Doors",
  content: 'We repair and install interior and exterior doors to your likings. Repairs, reasealing, adjustments and door knob and handle set repalcement also available.',
  img1: "assets/gallery/door2.jpg",
},
{
  title: "Handyman",
  content: 'Need something fixed or repaired, maybe even hung on a wall? We can help - we install your products! We also access steep and tall and repair those common home problems.',
  img1: "assets/gallery/siding-lift.png",
},
{
  title: "Kitchens",
  content: 'We repair all things kitchen! BRM offers installation services for fixtures, lights, plumbing flooring and more. We also offer full kitchen remodel and appliance installation.',
  img1: "assets/gallery/kitchen.png",
},
{
  title: "Flooring",
  content: 'BRM installs all kinds of floors. We offer services in tile, wood laminate, LVT vinyl flooing, and rolled flooring. Soft spot in floors we can repair that too.',
  img1: "assets/gallery/flooring1b.jpg",
},
{
  title: "Windows",
  content: 'Leaking or drafty windows, We repair and install all sorts of exterior items including windows, doors, mailboxes, wood trim and complete resealing.',
  img1: "assets/gallery/windows.png",
},
{
  title: "Installations",
  content: 'Have a product and just need it installed or assemblied, maybe even hung on a wall? We can help. BRM installs shelves, desks, applicances, tvs and more.',
  img1: "assets/gallery/carport.png",
},
{
  title: "Roofing",
  content: 'BRM offers repairs and maintenance for most common roof and siding projects. We can extened the life with maintenance or simply install new.',
  img1: "assets/gallery/roof.png",
},
{
  title: "Drywall",
  content: 'BRM offers complete drywall services. Drywall installation and finishing options available. We repair those pesky stains and offer painting.',
  img1: "assets/gallery/drywall-finish.jpg",
}
];
let blogs = [];
let wrapper = document.getElementById("serviceCard");

function createCard (services) {

    let sCard = document.createElement('div');
    sCard.className = "col-md-6 col-xl-4";
    wrapper.appendChild(sCard);

    let card = document.createElement('div');
    card.className = "card mx-auto d-block blog-item m-3 rounded-5";
    card.style.width = "390px";

    sCard.appendChild(card);

    let cImg = document.createElement("div");
    cImg.className = "rounded-top";
    card.appendChild(cImg);

    let image = document.createElement('img');
    image.classList = "img-fluid";
    (services.img1 === '') ? image.src = "assets/logo/brm.jpg": image.src = services.img1;

    image.style.width = "390px";
    image.style.height = "300px";
    image.style.objectFit = "cover"
    image.classList = "img-fluid";
    cImg.appendChild(image);

    // let image2 = document.createElement('img');
    // (services.img2 === '') ? image2.src = "assets/gallery/placeholder.jpg": image2.src = services.img2;
    // cImg.appendChild(image2);

    let cPrice = document.createElement("div");
    cPrice.className = "card-price";
    cPrice.classList = "display-4 color-red text-russo"
    card.appendChild(cPrice);

    let price = document.createElement('p');
    (services.category === '' || services.category === null) ? price.innerHTML = "n/a" : price.innerHTML =  services.category ;
    price.style.position = "absolute";
    price.style.top = "1px";
    price.style.color = "white";
    price.classList = "p-3 h4 text-uppercase"
    cPrice.appendChild(price);

    let cBody = document.createElement("div");
    cBody.className = "card-body";
    cBody.classList = "bg-dark d-flex-column align-items-center rounded-bottom p-4 p-1"
    card.appendChild(cBody);

    let title = document.createElement("h4");
    (services.title === '') ? title.innerHTML = "...": title.innerHTML = services.title;
    title.className = "fs-5 text-uppercase text-light me-3 d-flex"
    cBody.appendChild(title);


    if (services.authorImage != "skip") {
      let userImage = document.createElement('img');
      (services.authorImage === "" || services.authorImage === null || services.authorImage === undefined) ? userImage.src = "assets/logo/brm-red.ico" : userImage.src = services.authorImage;
      services.authorImage = "assets/brm-red.ico";
      userImage.classList = "img-fluid mx-auto d-block ms-1";
      userImage.style.width = "70px";
      userImage.style.height = "70px";
      title.appendChild(userImage);
    }

    // let blogId = document.createElement('p');
    // blogId.classList = "text-russo mt-3 text-white small text-center"
    // blogId.innerHTML = "724.787.3758"
    // title.appendChild(blogId)

    let body = document.createElement('p');
    (services.body === '') ? body.innerHTML = "content unavailable" : body.innerHTML = services.body;
    body.classList = "text-light text-roboto"
    cBody.appendChild(body);

    let cUser = document.createElement('div')
    cUser.className = "card-user";
    card.appendChild(cUser);



    // let  cUserInfo = document.createElement('div');
    // cUserInfo.className = 'user-info';
    // cUser.appendChild(cUserInfo);

    // let myUser = document.createElement("h5");
    // (services.user === '') ? myUser.innerHTML = "bm": myUser.innerHTML = services.author;
    // cUserInfo.appendChild(myUser);

    // let date = document.createElement("small");
    // (services.date === '') ? date.innerHTML = "-" : date.innerHTML = services.date;
    // cUserInfo.appendChild(date);




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

// document.addEventListener("DOMContentLoaded", () => {
//   createCard(welcome[0]);
//   // createCard(myData[myData.length - 1]);
// })




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