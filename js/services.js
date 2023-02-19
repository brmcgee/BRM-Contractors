

const services = [ 
    {
    title: "Custom Decks",
    content: 'BRM builds and repairs all sorts of deck, handrail, posts and fences and more. Full service deck builds and fence installs. We repair and install anything wood.',
    img1: "assets/gallery/custom-deck2.jpg"
},
{
    title: "Bathrooms",
    content: 'We repair all things bathroom! BRM offers installation services for fixtures, lights, plumbing flooring and more. We also offer full bathroom remodel.',
    img1: "assets/gallery/bathroom1.jpg",
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

let wrapper = document.getElementById("products");
function createCard (i) {

    let sCard = document.createElement('div');
    sCard.className = "products col-lg-4 col-md-6 col-sm-6";
    wrapper.appendChild(sCard);

    let card = document.createElement('div');
    card.className = "card";
    sCard.appendChild(card);

    let cTitle = document.createElement('div')
    cTitle.className = "card-title";
    card.appendChild(cTitle);

    let title = document.createElement("h4");
    title.innerHTML = services[i].title;
    cTitle.appendChild(title);

    let cBody = document.createElement("div");
    cBody.className = "card-body"
    card.appendChild(cBody);

    let body = document.createElement('p');
    body.innerHTML = services[i].content;
    cBody.appendChild(body);

    
    let cImg = document.createElement("div");
    cImg.className = "card-img";
    card.appendChild(cImg);
    
    let image = document.createElement('img');
    image.src = services[i].img1;
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
    hContent.className = "col-md-"
    hContent.innerHTML = "BRM provides residential and commercial repair, building and maintenance. We solve those common home repair and maintenance problems as well as full service remodel projects, inspection and consulting. With decades of experience in the industry BRM has you covered. We are licensed and insured providing the Western PA area quality craftsmanship and affordable pricing. Call or connect with us today for a FREE estimate.";
    heading.appendChild(hContent);

    for (let i = 0; i < services.length; i++) {
        createCard(i);
    }
}



