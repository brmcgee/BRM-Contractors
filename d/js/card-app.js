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
    title.className = ""
    cUserInfo.appendChild(myUser);

    let date = document.createElement("small");
    (services.date === '') ? date.innerHTML = "-" : date.innerHTML = services.date;
    title.className = ""
    cUserInfo.appendChild(date);

    let image2 = document.createElement('img');
    (services.img2 === '') ? image2.src = "assets/gallery/placeholder.jpg": image2.src = services.img2;
    cImg.appendChild(image2);

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


const myData = [ 
  {
  category: 'Standing Seam metal roof',
  title: "New galvalume standing seam metal roof.",
  date: "May 03, 2020",
  author: "Brian McGee",
  body: 'We enjoyed this one helping a good client out with there metal roof on a vacation home on the beach. Nice weather and tan was a bonus too. This is a snap lock 1.5" 16" panel. I just love the look and the detail here at the posts. What a beautiful pool cabana. ',
  img1: "../assets/gallery/sseam1.jpg",
  img2: "../assets/gallery/sseam2.jpg",
  project: ""
},
{
  category: 'Kitchen backsplash',
  title: "Beautiful kitchen backsplash tile install",
  date: "May 28, 2022",
  author: "Brian McGee",
  body: "A simply elegant tile install for these homeowners in their already beautiful kitchen. We were able to add the speacial touch that they always wanted. Another satisfied homeowner!",
  img1: "../assets/gallery/backsplash1.jpg",
  img2: "../assets/gallery/backsplash2.jpg",
  project: ""
},    
{
  category: 'Deck Repair',
  title: "Maintenance deck repair boards and posts",
  date: "June 03, 2022",
  author: "Brian McGee",
  body: "We were able to make some maintenance repairs on this 10 year old deck. We saved the old composite deck boards and replaced the beams and posts in the troubled area. Back to enjoying the pool - Another satisfied homeowner!",
  img1: "../assets/gallery/deck-repair1.jpg",
  img2: "../assets/gallery/deck-repair2.jpg",
  project: ""
},
{
  category: 'Shingle repair',
  title: "Roof edge leak solved by BRM",
  date: "June 18, 2020",
  author: "Brian McGee",
  body: 'There was issues on the edge of the roof. The shingles were still in servicable condition so we were able to handle this with a simply maintenance repair and extend the life of this roof verses replacement. Our client was happy and able to set up a budget plan for roof replacment. Problem solved!',
  img1: "../assets/gallery/shingle-repair1.jpg",
  img2: "../assets/gallery/shingle-repair2.jpg",
  project: ""
},
{
  category: 'Siding and Roofing',
  title: "Home renovation project exterior siding, soffit and fascia",
  date: "June 23, 2021",
  author: "Brian McGee, owner",
  body: "What an awesome transformation on this house. We installed new vinyl siding, soffit and fascia, window wraps and more. This is a 2-story company house so its tall. We handle steep and tall - so give us a call.",
  img1: "../assets/gallery/house-before.jpg",
  img2: "../assets/gallery/house-after.jpg",
  project: "siding-roofing"
},
{
  category: 'Wood Repair',
  title: "Painted wood siding repair - Moisture damage",
  date: "June 13, 2022",
  author: "Brian McGee",
  body: "We brought out the walkboard on this one to make it easy. Just a little moisture damaged siding. This elevation is westward facing so it sees alot rougher weather. Finished and painted - Client happy!",
  img1: "../assets/gallery/siding1.jpg",
  img2: "../assets/gallery/siding2.jpg",
  project: "siding-roofing"
},
{
  category: 'Painting',
  title: "OMG - 4 flights of Stairs Painting",
  date: "July 11, 2022",
  author: "Brian McGee",
  body: "Wow when I got wind of this one. 4-flights of stairs to be painted here. Had to be careful not to get trapped on the top floor with wet paint... Well anyways it turned out awesome and paint lines were crisp. Another job DONE right!",
  img1: "../assets/gallery/paint1.jpg",
  img2: "../assets/gallery/paint2.jpg",
  project: ""
},
{
  category: 'Drywall Repair',
  title: "Bedroom blues... drywall repair and paint",
  date: "Oct 29, 2022",
  author: "Brian McGee",
  body: "Well for such a happy blue bedroom the wall had water damge at the window sill area. We removed the drywall and install new with extra caution at the carpet flooring. After a return trip sanded and repainted the complete room. Another happy client!",
  img2: "../assets/gallery/drywall-repair1.jpg",
  img1: "../assets/gallery/drywall-repair2.jpg",
  project: ""
},
{
  category: 'Deck Build',
  title: "Custom Deck Build",
  date: "Nov 08, 2022",
  author: "Brian McGee",
  body: "The weather is awesome and this deck is going to be beautiful! We are all framed in here and are going to be installing the deck boards next. This deck is over 350sqft and is being built with pressure treated lumber. Check back soon!",
  img1: "../assets/gallery/custom-deck4.jpg",
  img2: "../assets/gallery/custom-deck5.jpg",
  project: "custom-deck"
},
{
  category: 'Deck Build',
  title: "Wrapping up a wood deck with railing",
  date: "Nov 11, 2022",
  author: "Brian McGe",
  body: "What an awesome deck we built here! We completed it winter time just before the snow. I know these clients will be enjoying this come spring. We installed this pressure treated deck over posts and beams, it is over 350 sqft - huge. It is a beatiful oasis and awesome addition to the new pool. ",
  img1: "../assets/gallery/custom-deck2.jpg",
  img2: "../assets/gallery/custom-deck3.jpg",
  project: "custom-deck"
},
{
  category: 'Deck Build',
  title: "Pressure treated wood deck final touches",
  date: "Nov 12, 2022",
  author: "Brian McGee",
  body: "Well we are finishing up the final touches here on this deck. Final trim pieces and lattice install and routing  the edges.  We wont be staining this deck, it will dry and the homeowners will stain. This deck is sweet and is going to be a blast come spring time.",
  img1: "../assets/gallery/custom-deck6.jpg",
  img2: "../assets/gallery/custom-deck7.jpg",
  project: "custom-deck"
},
{
  category: 'Drywall Framing',
  title: "Hanging drywall board ",
  date: "July 23, 2022",
  author: "Brian McGee",
  body: "We had good time here with general framing and windows as well as the electrical re-wire. We installed the drywall which we will finish later. Also added blocking for the TV. Someone will enjoy the games.",
  img1: "../assets/gallery/drywall-hang1.jpg",
  img2: "../assets/gallery/drywall-hang2.jpg",
  project: ""
},
{
  category: 'Door Replacement',
  title: "Exterior door replacement ",
  date: "July 28, 2022",
  author: "Brian McGee",
  body: "Our clients door was rusting and not shutting correctly. We simply replaced an exterior door for one of our clients. Another happy client. ",
  img1: "../assets/gallery/door2.jpg",
  img2: "../assets/gallery/door1.jpg",
  project: ""
},
{
  category: 'Flooring',
  title: "Sub-floor replacement and flooring installation",
  date: "Aug 03, 2022",
  author: "Brian McGee",
  body: "This bathroom had a leaky toilet which rotted the subfloor and toilet flange. We removed all the old subfloor minus the tub area  and flange then installed new. Next we followed with a low maintenance LVT vinyl floor, new toilet vanity and mirror. Mini makeover for this bathroom here! Job well done!",
  img1: "../assets/gallery/flooring1a.jpg",
  img2: "../assets/gallery/flooring1b.jpg",
  project: ""
},
{
  category: 'Drywall finish',
  title: "Smooth finish drywall work today",
  date: "Aug 20, 2022",
  author: "Brian McGee",
  body: "He have returned from installing the original 30 sheets and are finishing this board on with a smooth finish. We have taken extra caution in protecting the floors. We are all sanded down and ready to for clean up here. This is beautiful but we wont be painting it. The homeowner will finish the rest.",
  img1: "../assets/gallery/drywall-finish.jpg",
  img2: "../assets/gallery/drywall-finish2.jpg",
  project: ""
},
{
  category: 'Custom Deck',
  title: "Custom covered wood deck for the RV",
  date: "Oct 6, 2022",
  author: "Brian McGee",
  body: "What an awesome job here building this custom wood deck with metal roof cover. Our clients got a new fifth wheel which is so cool inside. They needed a new covered deck to enjoy the fun weekends at the campground. BRM was able to deliever. We removed the old covered deck and assisted with the new RV hookup. Next we were able to deliver an awesome outdoor space just in time for Halloween.",
  img1: "../assets/gallery/deck-rv-2.jpg",
  img2: "../assets/gallery/deck-rv-1.jpg",
  project: "custom-deck"
},
{
  category: 'Flooring',
  title: "LVT Floor installation",
  date: "Oct 26, 2022",
  author: "Brian McGee",
  body: "Simply LVT flooring install here. We installaed a shower set and subfloor a couple months back. Now we return and finished the floors. Homeowner will be installing the trim.",
  img1: "../assets/gallery/flooring1.jpg",
  img2: "../assets/gallery/flooring2.jpg",
  project: ""
},
{
  category: 'Siding and Roofing',
  title: "Total transformation! BRM delivers new exteriors on this one.",
  date: "Nov 12, 2022",
  author: "Brian McGee",
  body: "This outbuilding in surrounded by trees and needed a low maintenance building system. We installed all new vinyl siding, soffit and fascia, gutters and a custom colored galvalume metal roof. This is beautiful.",
  img2: "../assets/gallery/siding-roof-before.jpg",
  img1: "../assets/gallery/siding-roof-after.jpg",
  project: "siding-roofing"
},
{
  category: 'Bathroom Remodel',
  title: "Bathroom with fresh electrical switches and lights",
  date: "Dec 14, 2022",
  author: "Brian McGee",
  body: "This project was great! We're completing it winter time. We are closing up this wall area after getting the electrical leads and boxes ran. We installed new exhaust vent, recessed lighting and a vanity light.",
  img2: "../assets/gallery/bathroom3.jpg",
  img1: "../assets/gallery/bathroom4.jpg",
  project: ""
},
{
  category: 'Bathroom Remodel',
  title: "Bathroom Renovation fresh update",
  date: "Dec 14, 2022",
  author: "Brian McGee",
  body: "This project was great! We're completing it winter time. We removed everything down to the wood studs and installed all new insulation and fixtures. A 4-piece acrylic bathtub/shower combo kit. All new elctrical and lighting with bathroom exhaust. New smooth finished drywall surface freshly painted to our clients likings. I know its a bathroom but this will be a fun place.",
  img2: "../assets/gallery/bathroom2.jpg",
  img1: "../assets/gallery/bathroom1.jpg",
  project: ""
},
{
  category: 'Bathroom Remodel',
  title: "Fresh bath tub install with new plumbing",
  date: "Dec 14, 2022",
  author: "Brian McGee",
  body: "This project was great! We're completing it winter time. We are installing new plumbing fixtures, valves and framing on this bathtub.",
  img2: "../assets/gallery/bathroom5.jpg",
  img1: "../assets/gallery/bathroom6.jpg",
  project: ""
},
{
  category: 'Kitchen Remodel',
  title: "Kitchen wall repairs with new drywall finish",
  date: "Dec 09, 2022",
  author: "Brian McGee",
  body: "Today we are refinishing our clients kitchen walls. Installating some new wall board and then skim coating the walls flat. We also added some upgraded appliance wiring and new recessed light. The homeowners is going to paint and we shall return to install cabinets.",
  img1: "../assets/gallery/kitchen-drywall2.jpg",
  img2: "../assets/gallery/kitchen-drywall1.jpg",
  project: "kitchen-remodel-ah"
},
{     
  category: 'Plumbing Repair',
  title: "Water damage and plumbing repair",
  date: "Jan 29, 2023",
  author: "Brian McGee",
  body: "There was some mositure damaged drywall and a loose shower arm so we fixed it all on this one. Added some blocking for the shower arm and removed and replaced the damaged drywall. Oh yeah we added a clean access panel for the plumbing. Another happy client!",
  img2: "../assets/gallery/plumbing-repair1.jpg",
  img1: "../assets/gallery/plumbing-repair2.jpg",
  project: ""
},
{
  category: 'Kitchen Remodel',
  title: "Kitchen Remodel",
  date: "Feb 08, 2023",
  author: "Brian McGee",
  body: "We have been working this on over a couple trips. First we refinished all the walls and rework the electrical for updated appliances and added some lights. We just recently went back, the homeowner had the walls painted and cabinets assemblied. We installed all the cabinets on the walls and trimmed out. We will be back after the counters to finish the plumbing.",
  img1: "../assets/gallery/kitchen-cabinet1.jpg",
  img2: "../assets/gallery/kitchen-cabinet2.jpg",
  project:  "kitchen-remodel-ah"
},  
{ //22
  category: 'Bathroom Remodel',
  title: "Demo day - Start of bathroom remodel",
  date: "Feb 14, 2023",
  author: "Brian McGee",
  body: "Great start day on this bathroom project here in Greensburg, the weather is awesome. Demo day - We are taking everything out down to the wood studs. This bathroom will be getting a complete update with all new fixtures, paint and flooring. Make sure to stop back to check the progress!",
  img1: "../assets/gallery/bathroom-demo1.jpg",
  img2: "../assets/gallery/bathroom-demo2.jpg",
  project: "bathroom-remodel-rm"
},
{
  category: 'Bathroom Remodel',
  title: "Bathroom all cleaned and gutted ready for install",
  date: "Feb 15, 2023",
  author: "Brian McGee",
  body: "Well today was great we got this bathroom all clean out. Vaccumed all the rocks and coal dust out and picked up all the material for the installation. We are all set and ready for a fresh start in the morning.",
  img1: "../assets/gallery/bathroom-demo4.jpg",
  img2: "../assets/gallery/bathroom-demo3.jpg",
  project: "bathroom-remodel-rm"
},
{
  category: 'Bathroom Remodel',
  title: "Acrylic tub/shower combo with fresh plumbing.",
  date: "Feb 17, 2023",
  author: "Brian McGee",
  body: "We finished installing the tub and shower acrylic combo and have the accesories installed all in oil-rubbed bronze finish. We've made the shower back available for use over the weekend. This shower looks awesome, even has a recessed niche for accent tile and all of the soaps - plus its low maintenance and super easy to clean.",
  img2: "../assets/gallery/plumbing-tub.jpg",
  img1: "../assets/gallery/bathroom3-gb.jpg",
  project: "bathroom-remodel-rm"
},
{
  category: 'Bathroom Remodel',
  title: "Drywall finishing smooth - bathroom remodel.",
  date: "Feb 21, 2023",
  author: "Brian McGee",
  body: "Rainy day today! We are currently in-progress on the bathroom remodel. All the drywall boards are installed and we are in progress of finishing the boards in a smooth finish. This bathroom is coming together quite nice! I just love the oil-rubbed bronze finish and subway tile look!",
  img1: "../assets/gallery/bathroom4-gb.jpg",
  img2: "../assets/gallery/bathroom5-gb.jpg",
  project: "bathroom-remodel-rm"
},
{
  category: 'Bathroom Remodel',
  title: "Finishing the smooth finish drywall",
  date: "Feb 22, 2023",
  author: "Brian McGee",
  body: "Well another wet day but we made it back on site and finished the mud work on the walls. It's still drying so we will have to wait to sand and paint. Thought a before and in-progress pic drop was necessary. Check back for completion of this awesome bathroom project!",
  img1: "../assets/gallery/bathroom-in-prog-gb.jpg",
  img2: "../assets/gallery/bathroom-before-gb.jpg",
  project: "bathroom-remodel-rm"
}
];

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




function searchBlog () {
  clearScreen();
  let title = document.getElementById("tTitle");
  if (title === null) {
    console.log('err')
  } else {
    clearTitle();
  }

  let copys = [];
  let blogs = [];
  let searchPhrase = document.getElementById("fSearch").value;
  // create copy of myData 
  for (let x = 0; x < myData.length; x++){
    copys.push(myData[x]);
  }

  for (let i = 0; i < copys.length; i++) {
    let copy = copys[i];
    if (copy.title.toLowerCase().indexOf(searchPhrase.toLowerCase()) > -1) {
      blogs.push(copy);
    }
  }
  for (let j = 0; j < blogs.length; j++) {
    let blog = blogs[j];
    createFromArray(blog)
  }
  // blogs.forEach((e) => {
  //   createCard(e);
  // })
}