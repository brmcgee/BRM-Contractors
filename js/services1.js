

let wrapper = document.getElementById("products");
function createCard (services) {

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
    title.innerHTML = services.title;
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

function create () {
    let service = {
        title: document.getElementById("fTitle").value,
        content: document.getElementById("fBody").value,
        img1: document.getElementById("fImage").value
    };    
    createCard(service);
}








