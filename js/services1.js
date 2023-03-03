

let wrapper = document.getElementById("serviceCard");
function createCard (services) {

    let sCard = document.createElement('div');
    sCard.className = "service col-lg-4 col-md-6 col-sm-6";
    wrapper.appendChild(sCard);

    let card = document.createElement('div');
    card.className = "card mx-auto d-block";
    sCard.appendChild(card);

    let cTitle = document.createElement('div')
    cTitle.className = "card-title";
    card.appendChild(cTitle);

    let title = document.createElement("h4");
    title.innerHTML = services.title;
    title.className = ""
    cTitle.appendChild(title);

    let cBody = document.createElement("div");
    cBody.className = "card-body"
    card.appendChild(cBody);

    let body = document.createElement('p');
    body.innerHTML = services.content;
    cBody.appendChild(body);

    
    let cImg = document.createElement("div");
    cImg.className = "card-img";
    card.appendChild(cImg);
    
    let image = document.createElement('img');
    image.src = services.img1;
    cImg.appendChild(image);
};

function createHeading() {

    let heading = document.createElement('div');
    heading.className = "product-header mx-auto d-block";
    wrapper.appendChild(heading);
    
    let hTitle = document.createElement('h2');
    hTitle.innerHTML = "Services";
    heading.appendChild(hTitle);

    let hContent = document.createElement('p');
    hContent.className = "col-md-10"
    hContent.innerHTML = "BRM provides residential and commercial repair, building and maintenance. We solve those common home repair and maintenance problems as well as full service remodel projects, inspection and consulting. With decades of experience in the industry BRM has you covered. We are licensed and insured providing the Western PA area quality craftsmanship and affordable pricing. Call or connect with us today for a FREE estimate.";
    heading.appendChild(hContent);

    for (let i = 0; i < services.length; i++) {
        createCard(i);
    }
}




const products = [ 
    {
    title: "Building",
    content: 'BRM offers full replacement options for most household items. We install fencing, and decks. From repairs to major renovations and home remodeling we can handle all your homes needs. ',
    img1: "/assets/logo/builder.jpg"
},
{
    title: "Repairs",
    content: 'Whether you have a small project like patching a hole in your drywall, or a long maintenance list of repairs needed we are here to get the job done right. We offer a variety of repair services to fit your needs.',
    img1: "/assets/logo/repairs.jfif",
},
{
    title: "Maintenance",
    content: 'Changing seasons bringing on a whole new list of maintenance items, BRM can help. We handle tasks like gutter cleaning, clean up and debris removal. Often simply maintenance can extend the service life.',
    img1: "/assets/logo/maintenance.jpg",
},
{
    title: "Total Service",
    content: 'Please call today we can help!',
    img1: "../assets/logo/brm.ico",
},


];



function createAll() {
    for (let i = 0; i < products.length; i++) {
        createCard(products[i]);
    } 
}

document.addEventListener("DOMContentLoaded", createAll)




  function create () {
    let service = {
        title: document.getElementById("fTitle").value,
        content: document.getElementById("fBody").value,
        img1: document.getElementById("fImage").value
    }; 
    createCard(service);
}