

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
    (services.title === '') ? title.innerHTML = "...": title.innerHTML = services.title;
    title.className = ""
    cTitle.appendChild(title);

    let cBody = document.createElement("div");
    cBody.className = "card-body";
    card.appendChild(cBody);

    let body = document.createElement('p');
    (services.content === '') ? body.innerHTML = "content unavailable" : body.innerHTML = services.content;
    cBody.appendChild(body);

    let cPrice = document.createElement("div");
    cPrice.className = "card-price";
    card.appendChild(cPrice);

    let price = document.createElement('p');
    (services.price === '' || services.price === null) ? price.innerHTML = "Price $" : price.innerHTML = "Price: $" + services.price + ".00";
    cPrice.appendChild(price);

    let cImg = document.createElement("div");
    cImg.className = "card-img";
    card.appendChild(cImg);
    
    let image = document.createElement('img');
    (services.img1 === '') ? image.src = "assets/gallery/placeholder.jpg": image.src = services.img1;
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




function create() {
    let service = {
        title: document.getElementById("fTitle").value,
        content: document.getElementById("fBody").value,
        img1: document.getElementById("fImage").value,
        price: document.getElementById("fPrice").value
    }; 
    createCard(service);
};


function createAll100() {
  createAll();
}

// document.addEventListener("DOMContentLoaded", createAll100)



let myData = 
[{
    "title": "Contour",
    "img1": "https://robohash.org/aperiamdolorfacere.png?size=50x50&set=set1",
    "price": "6",
    "content": "Cross-group clear-thinking service-desk"
  }, {
    "title": "B2600",
    "img1": "https://robohash.org/commodiutrepudiandae.png?size=50x50&set=set1",
    "price": "2793",
    "content": "Multi-channelled fault-tolerant leverage"
  }, {
    "title": "F150",
    "img1": "https://robohash.org/eaqueadipiscidolor.png?size=50x50&set=set1",
    "price": "166",
    "content": "Persistent grid-enabled Graphic Interface"
  }, {
    "title": "Reatta",
    "img1": "https://robohash.org/culpamagnamvero.png?size=50x50&set=set1",
    "price": "481",
    "content": "De-engineered full-range encryption"
  }, {
    "title": "RSX",
    "img1": "https://robohash.org/delectusasperioressimilique.png?size=50x50&set=set1",
    "price": "35",
    "content": "Multi-layered non-volatile challenge"
  }, {
    "title": "Continental",
    "img1": "https://robohash.org/minimaveroqui.png?size=50x50&set=set1",
    "price": "81",
    "content": "Optimized uniform implementation"
  }, {
    "title": "New Yorker",
    "img1": "https://robohash.org/estisteomnis.png?size=50x50&set=set1",
    "price": "33",
    "content": "Switchable systemic system engine"
  }, {
    "title": "E-Class",
    "img1": "https://robohash.org/cumquesintest.png?size=50x50&set=set1",
    "price": "948",
    "content": "Triple-buffered full-range structure"
  }, {
    "title": "900",
    "img1": "https://robohash.org/doloreautquos.png?size=50x50&set=set1",
    "price": "1620",
    "content": "Re-contextualized upward-trending contingency"
  }, {
    "title": "Entourage",
    "img1": "https://robohash.org/quiadistinctiorerum.png?size=50x50&set=set1",
    "price": null,
    "content": "Fundamental reciprocal projection"
  }, {
    "title": "GX",
    "img1": "https://robohash.org/asperioresestperspiciatis.png?size=50x50&set=set1",
    "price": "-42",
    "content": "Advanced fault-tolerant concept"
  }, {
    "title": "Excel",
    "img1": "https://robohash.org/impeditcommodidolorem.png?size=50x50&set=set1",
    "price": "1224",
    "content": "Triple-buffered real-time application"
  }, {
    "title": "Legend",
    "img1": "https://robohash.org/enimquivero.png?size=50x50&set=set1",
    "price": "171",
    "content": "Fully-configurable 3rd generation attitude"
  }, {
    "title": "600",
    "img1": "https://robohash.org/quitemporibusquibusdam.png?size=50x50&set=set1",
    "price": "34",
    "content": "Enhanced national software"
  }, {
    "title": "Venture",
    "img1": "https://robohash.org/nobisevenietamet.png?size=50x50&set=set1",
    "price": "755",
    "content": "Compatible intermediate implementation"
  }, {
    "title": "Grand Voyager",
    "img1": "https://robohash.org/teneturporrovoluptatem.png?size=50x50&set=set1",
    "price": "2912",
    "content": "Managed real-time encoding"
  }, {
    "title": "Space",
    "img1": "https://robohash.org/odiorepellatnesciunt.png?size=50x50&set=set1",
    "price": "9",
    "content": "Monitored encompassing collaboration"
  }, {
    "title": "LS",
    "img1": "https://robohash.org/sitperspiciatisfugiat.png?size=50x50&set=set1",
    "price": "834",
    "content": "Automated local matrix"
  }, {
    "title": "XL-7",
    "img1": "https://robohash.org/verolaboriosameaque.png?size=50x50&set=set1",
    "price": "1048",
    "content": "Re-contextualized encompassing hub"
  }, {
    "title": "Dakota",
    "img1": "https://robohash.org/modiquosquidem.png?size=50x50&set=set1",
    "price": null,
    "content": "Optimized zero tolerance capability"
  }, {
    "title": "500SEL",
    "img1": "https://robohash.org/etasperiorestempora.png?size=50x50&set=set1",
    "price": null,
    "content": "Advanced incremental workforce"
  }, {
    "title": "LS",
    "img1": "https://robohash.org/laudantiumvoluptateset.png?size=50x50&set=set1",
    "price": "269",
    "content": "Fundamental fresh-thinking matrices"
  }, {
    "title": "Courier",
    "img1": "https://robohash.org/commodiipsalaboriosam.png?size=50x50&set=set1",
    "price": "569",
    "content": "Focused human-resource capacity"
  }, {
    "title": "RL",
    "img1": "https://robohash.org/omnisnisirerum.png?size=50x50&set=set1",
    "price": "600",
    "content": "Reactive foreground core"
  }, {
    "title": "Tercel",
    "img1": "https://robohash.org/aspernatursaepeofficia.png?size=50x50&set=set1",
    "price": "1255",
    "content": "Programmable homogeneous contingency"
  }, {
    "title": "DeVille",
    "img1": "https://robohash.org/adipisciexplicabomollitia.png?size=50x50&set=set1",
    "price": "33",
    "content": "Open-architected interactive utilisation"
  }, {
    "title": "Avalon",
    "img1": "https://robohash.org/suscipitullamet.png?size=50x50&set=set1",
    "price": "3445",
    "content": "Advanced even-keeled portal"
  }, {
    "title": "Cougar",
    "img1": "https://robohash.org/verotemporatenetur.png?size=50x50&set=set1",
    "price": "3250",
    "content": "Enhanced maximized implementation"
  }, {
    "title": "Suburban 1500",
    "img1": "https://robohash.org/minussuntrerum.png?size=50x50&set=set1",
    "price": "1082",
    "content": "Centralized actuating strategy"
  }, {
    "title": "xD",
    "img1": "https://robohash.org/quisnisidoloremque.png?size=50x50&set=set1",
    "price": "459",
    "content": "Optimized 6th generation open system"
  }, {
    "title": "900",
    "img1": "https://robohash.org/sintmaioresipsa.png?size=50x50&set=set1",
    "price": "1302",
    "content": "Reactive zero tolerance definition"
  }, {
    "title": "F430 Spider",
    "img1": "https://robohash.org/sedvoluptatemimpedit.png?size=50x50&set=set1",
    "price": "1591",
    "content": "Distributed multimedia circuit"
  }, {
    "title": "Swift",
    "img1": "https://robohash.org/doloresconsequaturvero.png?size=50x50&set=set1",
    "price": "2146",
    "content": "Fundamental systemic Graphic Interface"
  }, {
    "title": "Tucson",
    "img1": "https://robohash.org/voluptatemquaeratlaboriosam.png?size=50x50&set=set1",
    "price": "3530",
    "content": "Decentralized contextually-based core"
  }, {
    "title": "Discovery",
    "img1": "https://robohash.org/solutaquisquamvoluptas.png?size=50x50&set=set1",
    "price": "2740",
    "content": "Persistent full-range initiative"
  }, {
    "title": "Express 1500",
    "img1": "https://robohash.org/laboriosamnisidistinctio.png?size=50x50&set=set1",
    "price": "3146",
    "content": "Ameliorated dynamic time-frame"
  }, {
    "title": "IS-F",
    "img1": "https://robohash.org/exercitationemaliquamquos.png?size=50x50&set=set1",
    "price": "85",
    "content": "Optimized value-added Graphic Interface"
  }, {
    "title": "RSX",
    "img1": "https://robohash.org/sedasperiorespraesentium.png?size=50x50&set=set1",
    "price": "210",
    "content": "Right-sized multimedia archive"
  }, {
    "title": "G-Class",
    "img1": "https://robohash.org/animiconsequaturaliquam.png?size=50x50&set=set1",
    "price": "477",
    "content": "Horizontal systematic function"
  }, {
    "title": "A8",
    "img1": "https://robohash.org/cupiditateeumperspiciatis.png?size=50x50&set=set1",
    "price": "1056",
    "content": "Multi-lateral transitional projection"
  }, {
    "title": "Avalon",
    "img1": "https://robohash.org/sitnesciuntsit.png?size=50x50&set=set1",
    "price": "49",
    "content": "Horizontal fault-tolerant flexibility"
  }, {
    "title": "525",
    "img1": "https://robohash.org/undeaperiamquis.png?size=50x50&set=set1",
    "price": "1572",
    "content": "Future-proofed 3rd generation benchmark"
  }, {
    "title": "Outback",
    "img1": "https://robohash.org/sapienteaperferendis.png?size=50x50&set=set1",
    "price": "30",
    "content": "Proactive executive pricing structure"
  }, {
    "title": "Grand Am",
    "img1": "https://robohash.org/utducimusvoluptatem.png?size=50x50&set=set1",
    "price": "828",
    "content": "Open-source intangible array"
  }, {
    "title": "GS",
    "img1": "https://robohash.org/consecteturmolestiaenesciunt.png?size=50x50&set=set1",
    "price": "1096",
    "content": "Multi-channelled client-driven throughput"
  }, {
    "title": "Cherokee",
    "img1": "https://robohash.org/debitisreruminventore.png?size=50x50&set=set1",
    "price": "784",
    "content": "Switchable eco-centric monitoring"
  }, {
    "title": "Grand Prix",
    "img1": "https://robohash.org/quiaeaquequos.png?size=50x50&set=set1",
    "price": "212",
    "content": "Cloned web-enabled neural-net"
  }, {
    "title": "Safari",
    "img1": "https://robohash.org/quosquibusdamvoluptatem.png?size=50x50&set=set1",
    "price": "30",
    "content": "Triple-buffered bottom-line interface"
  }, {
    "title": "ES",
    "img1": "https://robohash.org/laboriosamvelaut.png?size=50x50&set=set1",
    "price": "80",
    "content": "Assimilated 5th generation emulation"
  }, {
    "title": "Sonata",
    "img1": "https://robohash.org/culpasapienteveritatis.png?size=50x50&set=set1",
    "price": "7820",
    "content": "Ameliorated empowering capability"
  }, {
    "title": "Defender 110",
    "img1": "https://robohash.org/ipsaquodneque.png?size=50x50&set=set1",
    "price": "968",
    "content": "Realigned 24/7 function"
  }, {
    "title": "T100",
    "img1": "https://robohash.org/quiaeligendiexercitationem.png?size=50x50&set=set1",
    "price": "234",
    "content": "Synchronised next generation service-desk"
  }, {
    "title": "Expo",
    "img1": "https://robohash.org/quiautaut.png?size=50x50&set=set1",
    "price": "98",
    "content": "Fully-configurable incremental knowledge base"
  }, {
    "title": "Evora",
    "img1": "https://robohash.org/assumendasedrepudiandae.png?size=50x50&set=set1",
    "price": "123",
    "content": "Secured zero administration software"
  }, {
    "title": "Imperial",
    "img1": "https://robohash.org/quiaeaquenihil.png?size=50x50&set=set1",
    "price": "9",
    "content": "Phased systematic functionalities"
  }, {
    "title": "Gemini",
    "img1": "https://robohash.org/velvoluptatemsimilique.png?size=50x50&set=set1",
    "price": "326",
    "content": "Integrated demand-driven help-desk"
  }, {
    "title": "Camry",
    "img1": "https://robohash.org/oditutsoluta.png?size=50x50&set=set1",
    "price": null,
    "content": "Balanced mobile functionalities"
  }, {
    "title": "Suburban 1500",
    "img1": "https://robohash.org/omnisducimusvoluptatem.png?size=50x50&set=set1",
    "price": "299",
    "content": "Function-based holistic Graphic Interface"
  }, {
    "title": "Quattro",
    "img1": "https://robohash.org/magnidoloresomnis.png?size=50x50&set=set1",
    "price": "427",
    "content": "Synchronised clear-thinking service-desk"
  }, {
    "title": "tC",
    "img1": "https://robohash.org/omnissedvoluptas.png?size=50x50&set=set1",
    "price": "2096",
    "content": "Profound non-volatile interface"
  }, {
    "title": "Scirocco",
    "img1": "https://robohash.org/etestcupiditate.png?size=50x50&set=set1",
    "price": "41",
    "content": "Decentralized encompassing superstructure"
  }, {
    "title": "Corolla",
    "img1": "https://robohash.org/rerumnonsed.png?size=50x50&set=set1",
    "price": "2211",
    "content": "Integrated exuding alliance"
  }, {
    "title": "Relay",
    "img1": "https://robohash.org/ipsumsintcorrupti.png?size=50x50&set=set1",
    "price": "700",
    "content": "Stand-alone empowering secured line"
  }, {
    "title": "Clubman",
    "img1": "https://robohash.org/temporeeosquasi.png?size=50x50&set=set1",
    "price": "9",
    "content": "Reduced foreground moratorium"
  }, {
    "title": "Rodeo Sport",
    "img1": "https://robohash.org/maioresquosveritatis.png?size=50x50&set=set1",
    "price": "640",
    "content": "Monitored zero administration productivity"
  }, {
    "title": "Camaro",
    "img1": "https://robohash.org/consecteturipsumaccusantium.png?size=50x50&set=set1",
    "price": "38",
    "content": "Public-key encompassing adapter"
  }, {
    "title": "Navajo",
    "img1": "https://robohash.org/liberoveniama.png?size=50x50&set=set1",
    "price": "213",
    "content": "Monitored optimal monitoring"
  }, {
    "title": "Econoline E250",
    "img1": "https://robohash.org/repudiandaequisquamomnis.png?size=50x50&set=set1",
    "price": "1100",
    "content": "Cross-platform optimizing orchestration"
  }, {
    "title": "Supra",
    "img1": "https://robohash.org/deseruntquiet.png?size=50x50&set=set1",
    "price": "227",
    "content": "Innovative homogeneous firmware"
  }, {
    "title": "Countryman",
    "img1": "https://robohash.org/remeumconsequatur.png?size=50x50&set=set1",
    "price": "698",
    "content": "Multi-tiered composite collaboration"
  }, {
    "title": "Mountaineer",
    "img1": "https://robohash.org/inciduntnonet.png?size=50x50&set=set1",
    "price": "7396",
    "content": "Seamless web-enabled throughput"
  }, {
    "title": "Camaro",
    "img1": "https://robohash.org/nonrationeeum.png?size=50x50&set=set1",
    "price": "1500",
    "content": "Synergized hybrid support"
  }, {
    "title": "B-Series",
    "img1": "https://robohash.org/possimusquisquisquam.png?size=50x50&set=set1",
    "price": "1526",
    "content": "Virtual mobile migration"
  }, {
    "title": "Discovery",
    "img1": "https://robohash.org/estaccusamusnumquam.png?size=50x50&set=set1",
    "price": "610",
    "content": "Open-architected 24 hour alliance"
  }, {
    "title": "Sonata",
    "img1": "https://robohash.org/eoseligendierror.png?size=50x50&set=set1",
    "price": "1930",
    "content": "Synchronised static productivity"
  }, {
    "title": "XC90",
    "img1": "https://robohash.org/quisquamassumendafuga.png?size=50x50&set=set1",
    "price": "50",
    "content": "Integrated grid-enabled encoding"
  }, {
    "title": "Sentra",
    "img1": "https://robohash.org/voluptatemullamprovident.png?size=50x50&set=set1",
    "price": "4900",
    "content": "Upgradable user-facing data-warehouse"
  }, {
    "title": "5 Series",
    "img1": "https://robohash.org/aliquidmollitiarerum.png?size=50x50&set=set1",
    "price": "18",
    "content": "Polarised zero defect encoding"
  }, {
    "title": "Beretta",
    "img1": "https://robohash.org/veniamsimiliqueaut.png?size=50x50&set=set1",
    "price": null,
    "content": "Business-focused user-facing orchestration"
  }, {
    "title": "Explorer Sport Trac",
    "img1": "https://robohash.org/quasiarchitectoqui.png?size=50x50&set=set1",
    "price": "42",
    "content": "Virtual real-time encryption"
  }, {
    "title": "Grand Marquis",
    "img1": "https://robohash.org/evenietutsunt.png?size=50x50&set=set1",
    "price": "75",
    "content": "Public-key non-volatile internet solution"
  }, {
    "title": "Safari",
    "img1": "https://robohash.org/sitmolestiaenisi.png?size=50x50&set=set1",
    "price": "595",
    "content": "Synchronised scalable encryption"
  }, {
    "title": "LeMans",
    "img1": "https://robohash.org/explicabovoluptatumaliquam.png?size=50x50&set=set1",
    "price": "1558",
    "content": "Multi-layered contextually-based service-desk"
  }, {
    "title": "Jetta",
    "img1": "https://robohash.org/facerevoluptatemaspernatur.png?size=50x50&set=set1",
    "price": "160",
    "content": "Object-based bandwidth-monitored project"
  }, {
    "title": "Mustang",
    "img1": "https://robohash.org/quiinciduntminus.png?size=50x50&set=set1",
    "price": "1329",
    "content": "Cross-group contextually-based internet solution"
  }, {
    "title": "S10",
    "img1": "https://robohash.org/sitnostrumsed.png?size=50x50&set=set1",
    "price": "-42",
    "content": "Vision-oriented responsive archive"
  }, {
    "title": "Mentor",
    "img1": "https://robohash.org/quiaeligendinatus.png?size=50x50&set=set1",
    "price": "1035",
    "content": "Vision-oriented national interface"
  }, {
    "title": "599 GTB Fiorano",
    "img1": "https://robohash.org/quimaximequisquam.png?size=50x50&set=set1",
    "price": "727",
    "content": "Seamless holistic orchestration"
  }, {
    "title": "MX-5",
    "img1": "https://robohash.org/sitfacerequibusdam.png?size=50x50&set=set1",
    "price": "1511",
    "content": "Decentralized value-added migration"
  }, {
    "title": "Cordia",
    "img1": "https://robohash.org/utlaboriosamimpedit.png?size=50x50&set=set1",
    "price": "1278",
    "content": "Persevering transitional middleware"
  }, {
    "title": "Caravan",
    "img1": "https://robohash.org/doloresdictadolorem.png?size=50x50&set=set1",
    "price": "-72",
    "content": "Reduced contextually-based instruction set"
  }, {
    "title": "H1",
    "img1": "https://robohash.org/autvoluptateaperiam.png?size=50x50&set=set1",
    "price": "50",
    "content": "Digitized upward-trending product"
  }, {
    "title": "Century",
    "img1": "https://robohash.org/repellatnondoloribus.png?size=50x50&set=set1",
    "price": "281",
    "content": "User-centric regional superstructure"
  }, {
    "title": "Escalade",
    "img1": "https://robohash.org/quaequilibero.png?size=50x50&set=set1",
    "price": "115",
    "content": "Fundamental stable Graphical User Interface"
  }, {
    "title": "CL-Class",
    "img1": "https://robohash.org/quasioditsed.png?size=50x50&set=set1",
    "price": "3162",
    "content": "Devolved context-sensitive analyzer"
  }, {
    "title": "Sonoma",
    "img1": "https://robohash.org/laudantiumexest.png?size=50x50&set=set1",
    "price": "744",
    "content": "Multi-channelled 5th generation core"
  }, {
    "title": "i-370",
    "img1": "https://robohash.org/quieosipsa.png?size=50x50&set=set1",
    "price": null,
    "content": "Decentralized fresh-thinking workforce"
  }, {
    "title": "Econoline E350",
    "img1": "https://robohash.org/laborumnamadipisci.png?size=50x50&set=set1",
    "price": "70",
    "content": "Horizontal client-server standardization"
  }, {
    "title": "GTI",
    "img1": "https://robohash.org/isteauttempore.png?size=50x50&set=set1",
    "price": "27",
    "content": "Progressive value-added analyzer"
  }, {
    "title": "Model T",
    "img1": "https://robohash.org/etestinventore.png?size=50x50&set=set1",
    "price": "3868",
    "content": "Streamlined foreground extranet"
  }]
;


  function createAll () {
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