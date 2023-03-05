/* 
<div id="b-products" class="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
</div> 
*/


const productData = [ 
    {
    title: "Custom Decks",
    content: 'BRM builds and repairs all sorts of deck, handrail, posts and fences and more. Full service deck builds and fence installs. We repair and install anything wood.',
    img1: "assets/gallery/custom-deck6.jpg",
    link: [["contact-brm.html"], ["Contact Us"]]
},
{
    title: "Bathrooms",
    content: 'We repair all things bathroom! BRM offers installation services for fixtures, lights, plumbing flooring and more. We also offer full bathroom remodel.',
    img1: "assets/gallery/--bg-bath.jpg",
    link: [["contact-brm.html"], ["Contact Us"]]
},
{
    title: "Painting",
    content: 'We offer full service drywall patching and painting. Interior or exterior paint, stain, caulk or sealing available. Drywall and painting to complete install.',
    img1: "assets/gallery/paint1.jpg",
    link: [["contact-brm.html"], ["Contact Us"]]
},
{
    title: "Siding",
    content: 'BRM installs and repairs sidings. Wind damage we can help. We offer full service siding installation services, resealing and replacement of missing pieces.',
    img1: "assets/gallery/siding-corner.jpg",
    link: [["contact-brm.html"], ["Contact Us"]]
},
{
    title: "Doors",
    content: 'We repair and install interior and exterior doors to your likings. Repairs, reasealing, adjustments and door knob and handle set repalcement also available.',
    img1: "assets/gallery/door2.jpg",
    link: [["about.html"], ["About BRM"]]
},
{
    title: "Handyman",
    content: 'Need something fixed or repaired, maybe even hung on a wall? We can help - we install your products! We also access steep and tall and repair those common home problems.',
    img1: "assets/gallery/plumbing-tub.jpg",
    link: [["contact-brm.html"], ["Contact Us"]]
},
{
    title: "Kitchens",
    content: 'We repair all things kitchen! BRM offers installation services for fixtures, lights, plumbing flooring and more. We also offer full kitchen remodel and appliance installation.',
    img1: "assets/gallery/kitchen-cabinet1.jpg",
    link: [["contact-brm.html"], ["Contact Us"]]
},
{
    title: "Flooring",
    content: 'BRM installs all kinds of floors. We offer services in tile, wood laminate, LVT vinyl flooing, and rolled flooring. Soft spot in floors we can repair that too.',
    img1: "assets/gallery/flooring1b.jpg",
    link: [["about.html"], ["About BRM"]]
},
{
    title: "Windows",
    content: 'Leaking or drafty windows, We repair and install all sorts of exterior items including windows, doors, mailboxes, wood trim and complete resealing.',
    img1: "assets/gallery/windows.png",
    link: [["contact-brm.html"], ["Contact Us"]]
},
{
    title: "Installations",
    content: 'Have a product and just need it installed or assemblied, maybe even hung on a wall? We can help. BRM installs shelves, desks, applicances, tvs and more.',
    img1: "assets/gallery/carport.png",
    link: [["about.html"], ["About BRM"]]
},
{
    title: "Roofing",
    content: 'BRM offers repairs and maintenance for most common roof and siding projects. We can extened the life with maintenance or simply install new.',
    img1: "assets/gallery/roof.png",
    link: [["contact-brm.html"], ["Contact Us"]]
},
{
    title: "Drywall",
    content: 'BRM offers complete drywall services. Drywall installation and finishing options available. We repair those pesky stains and offer painting.',
    img1: "assets/gallery/drywall-finish.jpg",
    link: [["contact-brm.html"], ["Contact Us"]]
}
];


const target = document.getElementById("b-products");

function createBCard (array){

        let cardContainer = document.createElement("div");
        cardContainer.classList = "col";
        target.appendChild(cardContainer);

            let cover = document.createElement("div");
            cover.classList = "card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-l";
            cover.style.background = `linear-gradient(180deg, rgba(19, 16, 34, 0.58) 0%, rgba(19, 16, 34, 0.78) 100%), 
            url(${array.img1})  center / cover no-repeat`;
            cover.style.backgroundSize = "cover";
            cardContainer.appendChild(cover);

                let body = document.createElement("div");
                body.classList = "d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1";
                cover.appendChild(body);

                    let header = document.createElement("div");
                    header.classList = "lc-block pt-5 mt-5 mb-4";
                    body.appendChild(header);

                        let htag = document.createElement("h2");
                        htag.classList = "display-6 lh-1 fw-bold";
                        htag.innerHTML = array.title;
                        header.appendChild(htag);

                        let ptag = document.createElement("p");
                        ptag.innerHTML = array.content;
                        header.appendChild(ptag);
                    
                    let list = document.createElement("ul");
                    list.classList = "d-flex list-unstyled mt-auto ms-auto";
                    body.appendChild(list);


                        let link = document.createElement("a");
                        link.classList = "btn btn-link btn-sm text-white";
                        link.href = array.link[0];
                        link.innerHTML = array.link[1];
                        link.role = "button";
                        list.appendChild(link);

                        
                        let linkImg = document.createElement("img");
                        linkImg.src = "assets/logo/brm-red.ico";
                        linkImg.style.height = "50px";
                        linkImg.classList = "float-start ms-5";
                        list.appendChild(linkImg);


}


function blogToCard (blogPost) {
    let blogArr = [];
    let blogArr2 = [];
    blogArr.title = blogPost.title;
    blogArr2.title = blogPost.title;
    blogArr.content = blogPost.body;
    blogArr2.content = blogPost.body;
    blogArr.img1 = blogPost.img1;
    blogArr2.img1 = blogPost.img2;
    blogArr.link = ['',''];
    blogArr2.link = ['',''];
    // blogArr.link = [[blogPost.img1], ["Expand"]];
    // blogArr2.link = [[blogPost.img2], ["Expand"]];

    createBCard(blogArr);
    createBCard(blogArr2);
}

// gets global blog data 
const allBlogs = data;






