

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
    img1: "/assets/logo/building.jpg"
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
}
];



function createAll() {
    for (let i = 0; i < products.length; i++) {
        createCard(products[i]);
    } 
}

document.addEventListener("DOMContentLoaded", createAll)



let myData = 
[{
  "title": "HVAC",
  "content": "recontextualize world-class e-markets",
  "img1": "https://robohash.org/laboreomnisaut.png?size=50x50&set=set1"
}, {
  "title": "Boilermaker",
  "content": "unleash B2C systems",
  "img1": "https://robohash.org/etautemunde.png?size=50x50&set=set1"
}, {
  "title": "Ironworker",
  "content": "exploit magnetic deliverables",
  "img1": "https://robohash.org/illodeseruntea.png?size=50x50&set=set1"
}, {
  "title": "Boilermaker",
  "content": "incentivize revolutionary action-items",
  "img1": "https://robohash.org/ipsamolestiasperspiciatis.png?size=50x50&set=set1"
}, {
  "title": "Pipelayer",
  "content": "embrace user-centric e-services",
  "img1": "https://robohash.org/voluptatesquisvoluptas.png?size=50x50&set=set1"
}, {
  "title": "Boilermaker",
  "content": "revolutionize virtual niches",
  "img1": "https://robohash.org/quasoccaecatiratione.png?size=50x50&set=set1"
}, {
  "title": "Glazier",
  "content": "recontextualize compelling experiences",
  "img1": "https://robohash.org/voluptatehica.png?size=50x50&set=set1"
}, {
  "title": "Plasterers",
  "content": "transform cutting-edge metrics",
  "img1": "https://robohash.org/ipsammaximeasperiores.png?size=50x50&set=set1"
}, {
  "title": "Concrete Finisher",
  "content": "transform robust technologies",
  "img1": "https://robohash.org/ipsumquodconsequuntur.png?size=50x50&set=set1"
}, {
  "title": "Waterproofer",
  "content": "optimize killer platforms",
  "img1": "https://robohash.org/consequunturestvoluptatem.png?size=50x50&set=set1"
}, {
  "title": "Concrete Finisher",
  "content": "mesh clicks-and-mortar convergence",
  "img1": "https://robohash.org/natusquocupiditate.png?size=50x50&set=set1"
}, {
  "title": "Plumber",
  "content": "repurpose extensible experiences",
  "img1": "https://robohash.org/ullamsuntaut.png?size=50x50&set=set1"
}, {
  "title": "HVAC",
  "content": "optimize world-class convergence",
  "img1": "https://robohash.org/velevenieteum.png?size=50x50&set=set1"
}, {
  "title": "Tile Setter",
  "content": "deploy next-generation markets",
  "img1": "https://robohash.org/aliasvitaeest.png?size=50x50&set=set1"
}, {
  "title": "Equipment Operator",
  "content": "grow holistic models",
  "img1": "https://robohash.org/vitaequonobis.png?size=50x50&set=set1"
}, {
  "title": "Carpenter",
  "content": "leverage mission-critical interfaces",
  "img1": "https://robohash.org/nostrumdoloreprovident.png?size=50x50&set=set1"
}, {
  "title": "Carpenter",
  "content": "scale sexy markets",
  "img1": "https://robohash.org/quonemoquia.png?size=50x50&set=set1"
}, {
  "title": "Ironworker",
  "content": "revolutionize next-generation synergies",
  "img1": "https://robohash.org/veritatisdoloremasperiores.png?size=50x50&set=set1"
}, {
  "title": "Electrician",
  "content": "enhance seamless niches",
  "img1": "https://robohash.org/blanditiisexquia.png?size=50x50&set=set1"
}, {
  "title": "Linemen",
  "content": "enhance collaborative vortals",
  "img1": "https://robohash.org/deseruntvoluptatumquis.png?size=50x50&set=set1"
}, {
  "title": "Pipelayer",
  "content": "grow synergistic web-readiness",
  "img1": "https://robohash.org/cumdoloremharum.png?size=50x50&set=set1"
}, {
  "title": "Safety Officer",
  "content": "deploy enterprise relationships",
  "img1": "https://robohash.org/ipsumcorruptiid.png?size=50x50&set=set1"
}, {
  "title": "Equipment Operator",
  "content": "aggregate cross-media e-markets",
  "img1": "https://robohash.org/reprehenderitvelitet.png?size=50x50&set=set1"
}, {
  "title": "Laborer",
  "content": "utilize back-end schemas",
  "img1": "https://robohash.org/autemomnisut.png?size=50x50&set=set1"
}, {
  "title": "Glazier",
  "content": "e-enable viral infrastructures",
  "img1": "https://robohash.org/delenitiquiadoloremque.png?size=50x50&set=set1"
}, {
  "title": "Landscaper",
  "content": "grow B2C mindshare",
  "img1": "https://robohash.org/eiusutquis.png?size=50x50&set=set1"
}, {
  "title": "Concrete Finisher",
  "content": "engage customized bandwidth",
  "img1": "https://robohash.org/expeditacommodiaperiam.png?size=50x50&set=set1"
}, {
  "title": "Welder",
  "content": "architect intuitive eyeballs",
  "img1": "https://robohash.org/quiaeosnon.png?size=50x50&set=set1"
}, {
  "title": "Landscaper",
  "content": "e-enable proactive channels",
  "img1": "https://robohash.org/officiislaudantiumsunt.png?size=50x50&set=set1"
}, {
  "title": "HVAC",
  "content": "deliver 24/7 relationships",
  "img1": "https://robohash.org/omnisautet.png?size=50x50&set=set1"
}, {
  "title": "Refridgeration",
  "content": "envisioneer holistic applications",
  "img1": "https://robohash.org/porrodoloret.png?size=50x50&set=set1"
}, {
  "title": "Welder",
  "content": "exploit enterprise functionalities",
  "img1": "https://robohash.org/estliberoquis.png?size=50x50&set=set1"
}, {
  "title": "Pipelayer",
  "content": "synergize collaborative niches",
  "img1": "https://robohash.org/etcumquevoluptatem.png?size=50x50&set=set1"
}, {
  "title": "Landscaper",
  "content": "incentivize revolutionary functionalities",
  "img1": "https://robohash.org/velquoomnis.png?size=50x50&set=set1"
}, {
  "title": "Cement Mason",
  "content": "reintermediate enterprise e-business",
  "img1": "https://robohash.org/doloremvelnam.png?size=50x50&set=set1"
}, {
  "title": "Cement Mason",
  "content": "repurpose cutting-edge methodologies",
  "img1": "https://robohash.org/nonvelitearum.png?size=50x50&set=set1"
}, {
  "title": "Laborer",
  "content": "generate robust deliverables",
  "img1": "https://robohash.org/natusdoloremquesequi.png?size=50x50&set=set1"
}, {
  "title": "Linemen",
  "content": "harness 24/7 interfaces",
  "img1": "https://robohash.org/praesentiumautdolorum.png?size=50x50&set=set1"
}, {
  "title": "Plasterers",
  "content": "deliver integrated eyeballs",
  "img1": "https://robohash.org/accusamusfugitet.png?size=50x50&set=set1"
}, {
  "title": "Cement Mason",
  "content": "reinvent front-end paradigms",
  "img1": "https://robohash.org/utquiaipsa.png?size=50x50&set=set1"
}, {
  "title": "Pipefitter",
  "content": "reintermediate intuitive partnerships",
  "img1": "https://robohash.org/impeditrerumaccusantium.png?size=50x50&set=set1"
}, {
  "title": "Laborer",
  "content": "e-enable vertical vortals",
  "img1": "https://robohash.org/saepeestet.png?size=50x50&set=set1"
}, {
  "title": "Plumber",
  "content": "synthesize collaborative content",
  "img1": "https://robohash.org/dictaipsaoptio.png?size=50x50&set=set1"
}, {
  "title": "Pipefitter",
  "content": "orchestrate front-end networks",
  "img1": "https://robohash.org/architectoestest.png?size=50x50&set=set1"
}, {
  "title": "Waterproofer",
  "content": "envisioneer value-added e-commerce",
  "img1": "https://robohash.org/quisquout.png?size=50x50&set=set1"
}, {
  "title": "Refridgeration",
  "content": "embrace proactive solutions",
  "img1": "https://robohash.org/eosexcepturiconsequatur.png?size=50x50&set=set1"
}, {
  "title": "Painter",
  "content": "optimize holistic e-services",
  "img1": "https://robohash.org/doloremetnobis.png?size=50x50&set=set1"
}, {
  "title": "Sheet Metal Worker",
  "content": "embrace value-added platforms",
  "img1": "https://robohash.org/illoquibusdamdolores.png?size=50x50&set=set1"
}, {
  "title": "Tile Setter",
  "content": "maximize 24/365 portals",
  "img1": "https://robohash.org/totamvoluptateporro.png?size=50x50&set=set1"
}, {
  "title": "Ironworker",
  "content": "extend frictionless communities",
  "img1": "https://robohash.org/doloreeosadipisci.png?size=50x50&set=set1"
}, {
  "title": "Tile Setter",
  "content": "aggregate vertical solutions",
  "img1": "https://robohash.org/molestiasofficiaet.png?size=50x50&set=set1"
}, {
  "title": "Plumber",
  "content": "aggregate seamless e-business",
  "img1": "https://robohash.org/quosaliquamamet.png?size=50x50&set=set1"
}, {
  "title": "Sheet Metal Worker",
  "content": "strategize 24/365 bandwidth",
  "img1": "https://robohash.org/etconsequaturhic.png?size=50x50&set=set1"
}, {
  "title": "Welder",
  "content": "disintermediate granular infrastructures",
  "img1": "https://robohash.org/exercitationemdoloribuslabore.png?size=50x50&set=set1"
}, {
  "title": "Terrazzo",
  "content": "transition 24/7 models",
  "img1": "https://robohash.org/nonpossimusalias.png?size=50x50&set=set1"
}, {
  "title": "Pipelayer",
  "content": "architect killer content",
  "img1": "https://robohash.org/sintdoloremqueconsequatur.png?size=50x50&set=set1"
}, {
  "title": "Boilermaker",
  "content": "architect user-centric vortals",
  "img1": "https://robohash.org/minimaquaeratminus.png?size=50x50&set=set1"
}, {
  "title": "Plumber",
  "content": "incubate granular eyeballs",
  "img1": "https://robohash.org/quiconsequaturquasi.png?size=50x50&set=set1"
}, {
  "title": "Tile Setter",
  "content": "streamline front-end action-items",
  "img1": "https://robohash.org/ullamquisalias.png?size=50x50&set=set1"
}, {
  "title": "Painter",
  "content": "embrace best-of-breed channels",
  "img1": "https://robohash.org/enimreruminventore.png?size=50x50&set=set1"
}, {
  "title": "Welder",
  "content": "mesh dot-com applications",
  "img1": "https://robohash.org/sedidet.png?size=50x50&set=set1"
}, {
  "title": "Painter",
  "content": "drive leading-edge content",
  "img1": "https://robohash.org/ametnisimolestiae.png?size=50x50&set=set1"
}, {
  "title": "Millwright",
  "content": "reintermediate viral experiences",
  "img1": "https://robohash.org/eumevenietdolore.png?size=50x50&set=set1"
}, {
  "title": "Ironworker",
  "content": "deploy frictionless interfaces",
  "img1": "https://robohash.org/porrovelitnesciunt.png?size=50x50&set=set1"
}, {
  "title": "Waterproofer",
  "content": "empower end-to-end communities",
  "img1": "https://robohash.org/aliasnecessitatibusnam.png?size=50x50&set=set1"
}, {
  "title": "Landscaper",
  "content": "morph rich deliverables",
  "img1": "https://robohash.org/facereestfugit.png?size=50x50&set=set1"
}, {
  "title": "Brickmason",
  "content": "engineer frictionless e-markets",
  "img1": "https://robohash.org/consequaturbeataeullam.png?size=50x50&set=set1"
}, {
  "title": "Pipelayer",
  "content": "innovate cross-platform web services",
  "img1": "https://robohash.org/ullamexplicabosint.png?size=50x50&set=set1"
}, {
  "title": "Refridgeration",
  "content": "extend integrated supply-chains",
  "img1": "https://robohash.org/istevitaeprovident.png?size=50x50&set=set1"
}, {
  "title": "Stucco Mason",
  "content": "optimize customized initiatives",
  "img1": "https://robohash.org/autemveritatissunt.png?size=50x50&set=set1"
}, {
  "title": "Welder",
  "content": "facilitate e-business models",
  "img1": "https://robohash.org/sequivoluptaset.png?size=50x50&set=set1"
}, {
  "title": "Sheet Metal Worker",
  "content": "strategize robust communities",
  "img1": "https://robohash.org/recusandaesintsit.png?size=50x50&set=set1"
}, {
  "title": "Glazier",
  "content": "mesh enterprise vortals",
  "img1": "https://robohash.org/animinecessitatibusquam.png?size=50x50&set=set1"
}, {
  "title": "Carpenter",
  "content": "scale open-source ROI",
  "img1": "https://robohash.org/esseautsit.png?size=50x50&set=set1"
}, {
  "title": "Concrete Finisher",
  "content": "deliver end-to-end portals",
  "img1": "https://robohash.org/consequaturvoluptatibusut.png?size=50x50&set=set1"
}, {
  "title": "Sheet Metal Worker",
  "content": "generate integrated methodologies",
  "img1": "https://robohash.org/eligendinobissuscipit.png?size=50x50&set=set1"
}, {
  "title": "Safety Officer",
  "content": "drive impactful web services",
  "img1": "https://robohash.org/pariaturinventorepraesentium.png?size=50x50&set=set1"
}, {
  "title": "Ironworker",
  "content": "scale distributed solutions",
  "img1": "https://robohash.org/inetporro.png?size=50x50&set=set1"
}, {
  "title": "Refridgeration",
  "content": "incubate dot-com action-items",
  "img1": "https://robohash.org/similiquererummolestiae.png?size=50x50&set=set1"
}, {
  "title": "Millwright",
  "content": "generate compelling synergies",
  "img1": "https://robohash.org/etdoloreaque.png?size=50x50&set=set1"
}, {
  "title": "Pipefitter",
  "content": "transform leading-edge e-tailers",
  "img1": "https://robohash.org/estvoluptatesconsequuntur.png?size=50x50&set=set1"
}, {
  "title": "Cement Mason",
  "content": "transition scalable infomediaries",
  "img1": "https://robohash.org/autpossimuset.png?size=50x50&set=set1"
}, {
  "title": "Millwright",
  "content": "envisioneer collaborative content",
  "img1": "https://robohash.org/autdoloremratione.png?size=50x50&set=set1"
}, {
  "title": "Equipment Operator",
  "content": "harness bleeding-edge e-commerce",
  "img1": "https://robohash.org/harumporronemo.png?size=50x50&set=set1"
}, {
  "title": "Carpenter",
  "content": "optimize open-source relationships",
  "img1": "https://robohash.org/eosindolorem.png?size=50x50&set=set1"
}, {
  "title": "Linemen",
  "content": "recontextualize impactful partnerships",
  "img1": "https://robohash.org/etdolorsaepe.png?size=50x50&set=set1"
}, {
  "title": "Refridgeration",
  "content": "orchestrate next-generation channels",
  "img1": "https://robohash.org/distinctioeaquevoluptas.png?size=50x50&set=set1"
}, {
  "title": "Concrete Finisher",
  "content": "engineer plug-and-play e-business",
  "img1": "https://robohash.org/sunteosea.png?size=50x50&set=set1"
}, {
  "title": "Brickmason",
  "content": "grow collaborative networks",
  "img1": "https://robohash.org/providentlaboriosamomnis.png?size=50x50&set=set1"
}, {
  "title": "Brickmason",
  "content": "morph efficient e-commerce",
  "img1": "https://robohash.org/rerumomnissunt.png?size=50x50&set=set1"
}, {
  "title": "Millwright",
  "content": "engineer back-end action-items",
  "img1": "https://robohash.org/excepturiconsectetursint.png?size=50x50&set=set1"
}, {
  "title": "HVAC",
  "content": "target next-generation relationships",
  "img1": "https://robohash.org/consecteturperferendisnisi.png?size=50x50&set=set1"
}, {
  "title": "Landscaper",
  "content": "mesh world-class portals",
  "img1": "https://robohash.org/laboreautsunt.png?size=50x50&set=set1"
}, {
  "title": "Pipefitter",
  "content": "architect user-centric applications",
  "img1": "https://robohash.org/etprovidentcumque.png?size=50x50&set=set1"
}, {
  "title": "Waterproofer",
  "content": "mesh impactful systems",
  "img1": "https://robohash.org/quiaetlaudantium.png?size=50x50&set=set1"
}, {
  "title": "Concrete Finisher",
  "content": "maximize holistic architectures",
  "img1": "https://robohash.org/eumutnatus.png?size=50x50&set=set1"
}, {
  "title": "Millwright",
  "content": "target efficient synergies",
  "img1": "https://robohash.org/utquibusdamcorrupti.png?size=50x50&set=set1"
}, {
  "title": "Plumber",
  "content": "deploy turn-key systems",
  "img1": "https://robohash.org/facererecusandaealiquid.png?size=50x50&set=set1"
}, {
  "title": "HVAC",
  "content": "brand wireless networks",
  "img1": "https://robohash.org/asperioresaccusamusest.png?size=50x50&set=set1"
}, {
  "title": "Cement Mason",
  "content": "deploy value-added vortals",
  "img1": "https://robohash.org/etodiovoluptatem.png?size=50x50&set=set1"
}]
;


  function create () {
    // let service = {
    //     title: document.getElementById("fTitle").value,
    //     content: document.getElementById("fBody").value,
    //     img1: document.getElementById("fImage").value
    // }; 
    // createCard(service);

    for (let i = 0; i < myData.length; i++) {
        createCard(myData[i]);
    }
}