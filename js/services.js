// hover over card 

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


let wrapper = document.getElementById("products");
function createCard (i) {

    let sCard = document.createElement('div');
    sCard.className = "col-lg-4 col-md-6 p-1";
    wrapper.appendChild(sCard);

        let card = document.createElement('div');
        card.className = "service-item position-relative";
        card.style.userSelect = "none";
        sCard.appendChild(card);

            let div1 = document.createElement("div");
            div1.className = "position-relative overflow-hidden rounded";
            card.appendChild(div1);

                let cImg = document.createElement("div");
                cImg.className = "img-fluid w-100";
                div1.appendChild(cImg);
                
                let image = document.createElement('img');
                image.src = services[i].img1;
                image.style.height = "480px";
                image.style.width = "100%"
                cImg.appendChild(image);

                let div2 = document.createElement("div");
                div2.classList = "service-overlay";
                div1.appendChild(div2);

                    let cBody = document.createElement("div");
                    cBody.className = "service-overlay"
                    card.appendChild(cBody);

                    let div3 = document.createElement("div");
                    div3.classList = "px-4 pb-4";
                    cBody.appendChild(div3);

                        let body = document.createElement('p');
                        body.classList = "text-light fs-6";
                        body.innerHTML = services[i].content;
                        div3.appendChild(body);

                        let alink = document.createElement('a');
                        alink.classList = "btn btn-outline p-1";
                        alink.href = "/about.html";
                        alink.innerHTML = "About BRM"
                        div3.appendChild(alink);


    let cTitle = document.createElement('div')
    cTitle.style.backgroundColor = "#333";
    cTitle.className = "position-absolute start-0 bottom-0 w-100 rounded-bottom text-center p-4";
    card.appendChild(cTitle);

    let title = document.createElement("h4");
    title.classList = "text-uppercase text-light"
    title.innerHTML = services[i].title;
    cTitle.appendChild(title);

    let iSpan = document.createElement("span");
    title.appendChild(iSpan);

    let imgIcon = document.createElement("i");
    imgIcon.classList = "fa fa-2x fa-bolt  color-red fs-1 ms-5";
    iSpan.appendChild(imgIcon);

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



// .service-item img {
//     transition: .5s;
// }

// .service-item:hover img {
//     transform: scale(1.2);
// }

// .service-item .service-overlay {
//     position: absolute;
//     top: 50%;
//     right: 50%;
//     bottom: 50%;
//     left: 50%;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     background: rgba(34, 36, 41, .9);
//     transition: .2s ease;
//     opacity: 0;
// }

// .service-item:hover .service-overlay {
//     top: 0;
//     right: 0;
//     bottom: 0;
//     left: 0;
//     opacity: 1;
// }
// .service-item  i {
//     color: var(--bg-icon);
// }
// .service-item:hover  i
// {
//     color: var(--bg-primary)
// }




/* HTML target tag
 <div class="product-container container-fluid">
<main class="row products " id="products"><!-- js content injection  --></main>

</div> */