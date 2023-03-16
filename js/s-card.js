// gets data from ./js/brmData.js
// service card dark overlay  
// patched in blogs via HTML


// const sCardServices = [ 
//   {
//   title: "Custom Decks",
//   content: 'BRM builds and repairs all sorts of deck, handrail, posts and fences and more. Full service deck builds and fence installs. We repair and install anything wood.',
//   img1: "assets/gallery/custom-deck2.jpg"
// },
// {
//   title: "Bathrooms",
//   content: 'We repair all things bathroom! BRM offers installation services for fixtures, lights, plumbing flooring and more. We also offer full bathroom remodel.',
//   img1: "assets/gallery/--bg-bath.jpg",
// },
// {
//   title: "Painting",
//   content: 'We offer full service drywall patching and painting. Interior or exterior paint, stain, caulk or sealing available. Drywall and painting to complete install.',
//   img1: "assets/gallery/paint1.jpg",
// },
// {
//   title: "Siding",
//   content: 'BRM installs and repairs sidings. Wind damage we can help. We offer full service siding installation services, resealing and replacement of missing pieces.',
//   img1: "assets/gallery/siding-corner.jpg",
// },
// {
//   title: "Doors",
//   content: 'We repair and install interior and exterior doors to your likings. Repairs, reasealing, adjustments and door knob and handle set repalcement also available.',
//   img1: "assets/gallery/door2.jpg",
// },
// {
//   title: "Handyman",
//   content: 'Need something fixed or repaired, maybe even hung on a wall? We can help - we install your products! We also access steep and tall and repair those common home problems.',
//   img1: "assets/gallery/siding-lift.png",
// },
// {
//   title: "Kitchens",
//   content: 'We repair all things kitchen! BRM offers installation services for fixtures, lights, plumbing flooring and more. We also offer full kitchen remodel and appliance installation.',
//   img1: "assets/gallery/kitchen.png",
// },
// {
//   title: "Flooring",
//   content: 'BRM installs all kinds of floors. We offer services in tile, wood laminate, LVT vinyl flooing, and rolled flooring. Soft spot in floors we can repair that too.',
//   img1: "assets/gallery/flooring1b.jpg",
// },
// {
//   title: "Windows",
//   content: 'Leaking or drafty windows, We repair and install all sorts of exterior items including windows, doors, mailboxes, wood trim and complete resealing.',
//   img1: "assets/gallery/windows.png",
// },
// {
//   title: "Installations",
//   content: 'Have a product and just need it installed or assemblied, maybe even hung on a wall? We can help. BRM installs shelves, desks, applicances, tvs and more.',
//   img1: "assets/gallery/carport.png",
// },
// {
//   title: "Roofing",
//   content: 'BRM offers repairs and maintenance for most common roof and siding projects. We can extened the life with maintenance or simply install new.',
//   img1: "assets/gallery/roof.png",
// },
// {
//   title: "Drywall",
//   content: 'BRM offers complete drywall services. Drywall installation and finishing options available. We repair those pesky stains and offer painting.',
//   img1: "assets/gallery/drywall-finish.jpg",
// }
// ];

let sCardServices = productData;
// gets data from b-card.js productData 
let blogs = [];
let contentWrapper = document.getElementById("serviceCard");
let count = 0;
function createCardS (services) {

    let sCard = document.createElement('div');
    sCard.className = "col-md-6 col-xl-4";
    contentWrapper.appendChild(sCard);

      let card = document.createElement('div');
      card.className = "card mx-auto d-block blog-item m-3";
      card.style.width = "390px";
      sCard.appendChild(card);

        let cImg = document.createElement("div");
        cImg.className = "rounded-top";
        card.appendChild(cImg);

        let image = document.createElement('img');
        image.classList = "img-fluid";
        (services.img1 === '') ? image.src = "assets/logo/brm.jpg" : image.src = services.img1;

        image.style.width = "390px";
        image.style.height = "300px";
        image.style.objectFit = "cover"
        image.classList = "img-fluid";
        cImg.appendChild(image);

      let cPrice = document.createElement("div");
      cPrice.className = "card-price";
      cPrice.classList = "display-4 color-red text-russo"
      card.appendChild(cPrice);

        let price = document.createElement('p');
        (services.category === '' || services.category === null) ? price.innerHTML = "n/a" : price.innerHTML =  services.category ;
        price.style.position = "absolute";
        price.style.top = "1px";
        price.style.color = "white";
        price.classList = "p-3 h4 text-uppercase bg-red btn-rounded ms-2 mt-2 py-1 px-3"
        cPrice.appendChild(price);

      let cBody = document.createElement("div");
      cBody.className = "card-body";
      cBody.classList = "bg-dark d-flex-column align-items-center p-4 p-1"
      card.appendChild(cBody);

        let title = document.createElement("h4");
        (services.title === '') ? title.innerHTML = "...": title.innerHTML = services.title;
        title.className = "fs-5 text-uppercase text-light me-3 d-flex"
        cBody.appendChild(title);

    if (services.authorImage != "skip") {
      let userImage = document.createElement('img');
      (services.authorImage === "" || services.authorImage === null || services.authorImage === undefined) 
                                    ? userImage.src = "assets/logo/brm.ico" : userImage.src = services.authorImage;
      // services.authorImage = "assets/brm-red.ico";
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

      let  cUserInfo = document.createElement('div');
      cUserInfo.className = 'user-info bg-dark';
      cUser.appendChild(cUserInfo);

        let myUser = document.createElement("a");
        (services.user === '') ? myUser.innerHTML = "bm": myUser.innerHTML = services.author;
        myUser.classList ="text-light text-roboto ps-5 mb-0 pb-0";
        myUser.href = sCardServices[count].link[0];
        count++;
        cUserInfo.appendChild(myUser);

        let date = document.createElement("small");
        (services.date === '') ? date.innerHTML = "-" : date.innerHTML = services.date;
        date.classList ="text-roboto ps-5 small mt-0 pt-0 pb-2";
        cUserInfo.appendChild(date);

};
