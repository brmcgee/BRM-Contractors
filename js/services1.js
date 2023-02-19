

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
    "title": "Adonis Factor, The",
    "content": "Adverse effect of macrolides, sequela",
    "img1": "http://dummyimage.com/207x100.png/5fa2dd/ffffff"
  }, {
    "title": "Delbaran",
    "content": "Garden or yard of residential institution as place",
    "img1": "http://dummyimage.com/232x100.png/ff4444/ffffff"
  }, {
    "title": "How to Train Your Dragon 2",
    "content": "Lac w/o fb of right eyelid and periocular area, sequela",
    "img1": "http://dummyimage.com/201x100.png/cc0000/ffffff"
  }, {
    "title": "Hitting Home",
    "content": "Nondisp seg fx shaft of ulna, l arm, 7thF",
    "img1": "http://dummyimage.com/240x100.png/dddddd/000000"
  }, {
    "title": "Unrated II: Scary as Hell",
    "content": "Exposure to bed fire due to unsp burning material, sequela",
    "img1": "http://dummyimage.com/195x100.png/cc0000/ffffff"
  }, {
    "title": "Providence",
    "content": "Occupant of hv veh injured in collision w 2/3-whl mv",
    "img1": "http://dummyimage.com/187x100.png/cc0000/ffffff"
  }, {
    "title": "Tropical Fish (Re dai yu)",
    "content": "Nondisp fx of dist phalanx of unsp fngr, 7thD",
    "img1": "http://dummyimage.com/180x100.png/dddddd/000000"
  }, {
    "title": "Jacqueline Susann's Once Is Not Enough",
    "content": "Postprocedural subglottic stenosis",
    "img1": "http://dummyimage.com/168x100.png/5fa2dd/ffffff"
  }, {
    "title": "Your Friends and Neighbors",
    "content": "Fracture of coronoid process of right mandible, 7thK",
    "img1": "http://dummyimage.com/112x100.png/dddddd/000000"
  }, {
    "title": "Hilary and Jackie",
    "content": "Maternal care for intrauterine death, fetus 4",
    "img1": "http://dummyimage.com/245x100.png/cc0000/ffffff"
  }, {
    "title": "Uncovered",
    "content": "Corros 60-69% of body surface w 50-59% third degree corros",
    "img1": "http://dummyimage.com/165x100.png/5fa2dd/ffffff"
  }, {
    "title": "Golden Coach, The (Le carrosse d'or)",
    "content": "Rh incompatibility w hemolytic transfs react, unsp, subs",
    "img1": "http://dummyimage.com/108x100.png/cc0000/ffffff"
  }, {
    "title": "Legend of Drunken Master, The (Jui kuen II)",
    "content": "Placental infarction, first trimester",
    "img1": "http://dummyimage.com/209x100.png/5fa2dd/ffffff"
  }, {
    "title": "Woochi: The Demon Slayer",
    "content": "Hemiplegia, unspecified affecting right nondominant side",
    "img1": "http://dummyimage.com/176x100.png/dddddd/000000"
  }, {
    "title": "Night Gallery",
    "content": "Pasngr in pk-up/van inj in clsn w nonmtr veh nontraf, sqla",
    "img1": "http://dummyimage.com/168x100.png/dddddd/000000"
  }, {
    "title": "Living Death",
    "content": "Burn of 3rd deg mu fingers (nail), including thumb",
    "img1": "http://dummyimage.com/181x100.png/5fa2dd/ffffff"
  }, {
    "title": "Don't Change Your Husband",
    "content": "Driver of pk-up/van injured in clsn w 2/3-whl mv nontraf",
    "img1": "http://dummyimage.com/213x100.png/cc0000/ffffff"
  }, {
    "title": "Inner Life of Martin Frost, The",
    "content": "Activity, string instrument playing",
    "img1": "http://dummyimage.com/148x100.png/dddddd/000000"
  }, {
    "title": "2AM: The Smiling Man",
    "content": "Cyst and mucocele of nose and nasal sinus",
    "img1": "http://dummyimage.com/102x100.png/ff4444/ffffff"
  }, {
    "title": "The Grump",
    "content": "Open bite of right great toe without damage to nail, sequela",
    "img1": "http://dummyimage.com/184x100.png/cc0000/ffffff"
  }, {
    "title": "Libeled Lady",
    "content": "Filariasis",
    "img1": "http://dummyimage.com/209x100.png/ff4444/ffffff"
  }, {
    "title": "Final Destination, The (Final Destination 4) (Final Destination in 3-D, The)",
    "content": "Corrosion of second degree of left knee, initial encounter",
    "img1": "http://dummyimage.com/136x100.png/5fa2dd/ffffff"
  }, {
    "title": "Strange Brew",
    "content": "Prph T-cell lymph, not class, nodes of axilla and upper limb",
    "img1": "http://dummyimage.com/137x100.png/5fa2dd/ffffff"
  }, {
    "title": "Memories of Matsuko (Kiraware Matsuko no isshô)",
    "content": "Erythema in diseases classified elsewhere",
    "img1": "http://dummyimage.com/205x100.png/ff4444/ffffff"
  }, {
    "title": "Romantic Englishwoman, The",
    "content": "Sprain of interphalangeal joint of unsp lesser toe(s), subs",
    "img1": "http://dummyimage.com/199x100.png/dddddd/000000"
  }, {
    "title": "Boy Called Hate, A",
    "content": "Burn first deg of unsp site unsp lower limb, except ank/ft",
    "img1": "http://dummyimage.com/124x100.png/ff4444/ffffff"
  }, {
    "title": "Zero Years, The",
    "content": "Contusion of unspecified shoulder, sequela",
    "img1": "http://dummyimage.com/220x100.png/dddddd/000000"
  }, {
    "title": "Middle Men",
    "content": "Athscl nonautologous biological CABG w unsp angina pectoris",
    "img1": "http://dummyimage.com/138x100.png/ff4444/ffffff"
  }, {
    "title": "Cobweb, The",
    "content": "Puncture wound with foreign body of unspecified part of head",
    "img1": "http://dummyimage.com/108x100.png/5fa2dd/ffffff"
  }, {
    "title": "1941",
    "content": "Traum hemor l cereb w LOC of 1-5 hrs 59 minutes, sequela",
    "img1": "http://dummyimage.com/178x100.png/5fa2dd/ffffff"
  }, {
    "title": "Mr. Warmth: The Don Rickles Project",
    "content": "Other instability, hip",
    "img1": "http://dummyimage.com/177x100.png/5fa2dd/ffffff"
  }, {
    "title": "Love Walked In",
    "content": "Nondisp apophyseal fx r femur, subs for clos fx w malunion",
    "img1": "http://dummyimage.com/144x100.png/5fa2dd/ffffff"
  }, {
    "title": "Names of Love, The (Le nom des gens)",
    "content": "Burns of 40-49% of body surface w 10-19% third degree burns",
    "img1": "http://dummyimage.com/199x100.png/dddddd/000000"
  }, {
    "title": "Topper Takes a Trip",
    "content": "Osteomyelitis of vertebra, lumbar region",
    "img1": "http://dummyimage.com/115x100.png/cc0000/ffffff"
  }, {
    "title": "It's Love I'm After",
    "content": "Displaced bicondylar fx r tibia, init for opn fx type I/2",
    "img1": "http://dummyimage.com/199x100.png/ff4444/ffffff"
  }, {
    "title": "Dead Genesis",
    "content": "Nondisplaced fracture of posterior process of right talus",
    "img1": "http://dummyimage.com/180x100.png/dddddd/000000"
  }, {
    "title": "Holiday, The",
    "content": "Myositis ossificans traumatica, unspecified thigh",
    "img1": "http://dummyimage.com/131x100.png/cc0000/ffffff"
  }, {
    "title": "Corto Maltese: Ballad of the Salt Sea (Corto Maltese - La ballade de la mer salée)",
    "content": "Corrosion of unsp deg mult sites of left ank/ft, sequela",
    "img1": "http://dummyimage.com/150x100.png/5fa2dd/ffffff"
  }, {
    "title": "X from Outer Space, The (Uchû daikaijû Girara)",
    "content": "Central retinal vein occlusion, left eye",
    "img1": "http://dummyimage.com/203x100.png/cc0000/ffffff"
  }, {
    "title": "The Golden Cage",
    "content": "Toxic effect of lacrimogenic gas, self-harm, init",
    "img1": "http://dummyimage.com/245x100.png/ff4444/ffffff"
  }, {
    "title": "Church, The (Chiesa, La)",
    "content": "Other contact with parrot",
    "img1": "http://dummyimage.com/248x100.png/5fa2dd/ffffff"
  }, {
    "title": "Firestarter",
    "content": "Unsp pedl cyclst injured in clsn w hv veh in traf, sequela",
    "img1": "http://dummyimage.com/152x100.png/ff4444/ffffff"
  }, {
    "title": "Fear and Loathing in Las Vegas",
    "content": "Laceration of duodenum, sequela",
    "img1": "http://dummyimage.com/181x100.png/5fa2dd/ffffff"
  }, {
    "title": "American Strays",
    "content": "Alcohol abuse with intoxication",
    "img1": "http://dummyimage.com/193x100.png/cc0000/ffffff"
  }, {
    "title": "It's Love I'm After",
    "content": "Contusion of unspecified part of small intestine, sequela",
    "img1": "http://dummyimage.com/197x100.png/5fa2dd/ffffff"
  }, {
    "title": "Chess Players, The (Shatranj Ke Khilari)",
    "content": "Other primary thrombophilia",
    "img1": "http://dummyimage.com/119x100.png/5fa2dd/ffffff"
  }, {
    "title": "Memories of Murder (Salinui chueok)",
    "content": "Other injury of unsp urinary and pelvic organ, subs encntr",
    "img1": "http://dummyimage.com/115x100.png/ff4444/ffffff"
  }, {
    "title": "American Werewolf in London, An",
    "content": "Open bite of nose, sequela",
    "img1": "http://dummyimage.com/218x100.png/5fa2dd/ffffff"
  }, {
    "title": "Biggie and Tupac",
    "content": "Toxic effect of carbon monoxide from incmpl combst dmst fuel",
    "img1": "http://dummyimage.com/186x100.png/5fa2dd/ffffff"
  }, {
    "title": "Gentlemen Broncos",
    "content": "Burn of third degree of other site of trunk, init encntr",
    "img1": "http://dummyimage.com/236x100.png/cc0000/ffffff"
  }, {
    "title": "Very Bad Things",
    "content": "Age-rel osteopor w crnt path fx, unsp hand, 7thP",
    "img1": "http://dummyimage.com/248x100.png/5fa2dd/ffffff"
  }, {
    "title": "No Escape",
    "content": "Sprain of interphalangeal joint of left lesser toe(s)",
    "img1": "http://dummyimage.com/247x100.png/ff4444/ffffff"
  }, {
    "title": "71 Fragments of a Chronology of Chance (71 Fragmente einer Chronologie des Zufalls)",
    "content": "Cutaneous chromomycosis",
    "img1": "http://dummyimage.com/193x100.png/ff4444/ffffff"
  }, {
    "title": "About Elly (Darbareye Elly)",
    "content": "Unspecified injury of popliteal artery, left leg, sequela",
    "img1": "http://dummyimage.com/229x100.png/cc0000/ffffff"
  }, {
    "title": "Street Scenes ",
    "content": "Snoring",
    "img1": "http://dummyimage.com/137x100.png/dddddd/000000"
  }, {
    "title": "Movie Movie",
    "content": "Poisn by electrolytic/caloric/wtr-bal agnt, slf-hrm, sequela",
    "img1": "http://dummyimage.com/245x100.png/5fa2dd/ffffff"
  }, {
    "title": "Leviathan",
    "content": "Corros 60-69% of body surface w 50-59% third degree corros",
    "img1": "http://dummyimage.com/119x100.png/cc0000/ffffff"
  }, {
    "title": "The Woman in Black 2: Angel of Death",
    "content": "Other specified abnormal products of conception",
    "img1": "http://dummyimage.com/185x100.png/dddddd/000000"
  }, {
    "title": "Strangers with Candy",
    "content": "Prsn inj in clsn betw mtr veh and 2/3-whl mv, nontraf, subs",
    "img1": "http://dummyimage.com/117x100.png/dddddd/000000"
  }, {
    "title": "Libre échange",
    "content": "Driver injured in collision w unsp mv in nontraffic accident",
    "img1": "http://dummyimage.com/239x100.png/ff4444/ffffff"
  }, {
    "title": "Arbor, The",
    "content": "Type 1 diab with prolif diab rtnop with comb detach, unsp",
    "img1": "http://dummyimage.com/215x100.png/5fa2dd/ffffff"
  }, {
    "title": "The Strength of Water",
    "content": "Car passenger injured in collision w pick-up nontraf, init",
    "img1": "http://dummyimage.com/170x100.png/5fa2dd/ffffff"
  }, {
    "title": "The Expelled",
    "content": "Allergic contact dermatitis, unspecified cause",
    "img1": "http://dummyimage.com/202x100.png/cc0000/ffffff"
  }, {
    "title": "Speedway",
    "content": "24 weeks gestation of pregnancy",
    "img1": "http://dummyimage.com/213x100.png/5fa2dd/ffffff"
  }, {
    "title": "From Morn to Midnight (Von morgens bis Mitternacht)",
    "content": "Unil post-trauma osteoarth of 1st carpometacarp jt,unsp hand",
    "img1": "http://dummyimage.com/224x100.png/dddddd/000000"
  }, {
    "title": "Jönssonligans största kupp",
    "content": "Tuberculous pleurisy",
    "img1": "http://dummyimage.com/138x100.png/ff4444/ffffff"
  }, {
    "title": "Illegal",
    "content": "Strain extn musc/fasc/tend unsp finger at wrs/hnd lv, sqla",
    "img1": "http://dummyimage.com/227x100.png/dddddd/000000"
  }, {
    "title": "Dragonball Evolution",
    "content": "Poisoning by unsp drugs acting on muscles, accidental",
    "img1": "http://dummyimage.com/234x100.png/5fa2dd/ffffff"
  }, {
    "title": "All Cheerleaders Die",
    "content": "Fx unsp metatarsal bone(s), right foot, init for opn fx",
    "img1": "http://dummyimage.com/133x100.png/dddddd/000000"
  }, {
    "title": "Danny Deckchair",
    "content": "Occupant of anml-drn vehicle injured in clsn w stcar, init",
    "img1": "http://dummyimage.com/140x100.png/cc0000/ffffff"
  }, {
    "title": "The Seven Males",
    "content": "Rheumatoid vasculitis w rheumatoid arthritis of ank/ft",
    "img1": "http://dummyimage.com/165x100.png/ff4444/ffffff"
  }, {
    "title": "Fly II, The",
    "content": "Labyrinthine fistula, bilateral",
    "img1": "http://dummyimage.com/241x100.png/5fa2dd/ffffff"
  }, {
    "title": "Mea Maxima Culpa: Silence in the House of God",
    "content": "Pain in unspecified upper arm",
    "img1": "http://dummyimage.com/127x100.png/ff4444/ffffff"
  }, {
    "title": "Pursuit of D.B. Cooper, The (a.k.a. Pursuit)",
    "content": "Pedl cyc passenger injured in clsn w oth mv in traf, sequela",
    "img1": "http://dummyimage.com/164x100.png/5fa2dd/ffffff"
  }, {
    "title": "Smiling Lieutenant, The",
    "content": "Other superficial bite of oth part of neck, subs encntr",
    "img1": "http://dummyimage.com/132x100.png/5fa2dd/ffffff"
  }, {
    "title": "Flight from Death: The Quest for Immortality",
    "content": "Unsp car occupant injured in collision w ped/anml nontraf",
    "img1": "http://dummyimage.com/127x100.png/cc0000/ffffff"
  }, {
    "title": "Adventureland",
    "content": "Paratyphoid fever C",
    "img1": "http://dummyimage.com/100x100.png/ff4444/ffffff"
  }, {
    "title": "Shamrock Handicap, The",
    "content": "Struck by other bat, racquet or club, sequela",
    "img1": "http://dummyimage.com/184x100.png/cc0000/ffffff"
  }, {
    "title": "Pervert's Guide to Ideology, The",
    "content": "Displ transverse fx shaft of l femr, 7thB",
    "img1": "http://dummyimage.com/133x100.png/5fa2dd/ffffff"
  }, {
    "title": "Teenagers from Outer Space",
    "content": "Osteonecrosis in diseases classified elsewhere, hand",
    "img1": "http://dummyimage.com/164x100.png/cc0000/ffffff"
  }, {
    "title": "Jonestown: The Life and Death of Peoples Temple",
    "content": "Puncture wound w foreign body of unsp part of thorax, subs",
    "img1": "http://dummyimage.com/202x100.png/5fa2dd/ffffff"
  }, {
    "title": "Exit to Eden",
    "content": "Superficial frostbite of unspecified wrist, init encntr",
    "img1": "http://dummyimage.com/217x100.png/5fa2dd/ffffff"
  }, {
    "title": "Paper Soldier (Bumazhnyy soldat)",
    "content": "Corrosion of second degree of left scapular region, subs",
    "img1": "http://dummyimage.com/177x100.png/cc0000/ffffff"
  }, {
    "title": "Charlie Chan in the Secret Service",
    "content": "Other specified noninflammatory disorders of cervix uteri",
    "img1": "http://dummyimage.com/190x100.png/ff4444/ffffff"
  }, {
    "title": "Dragon Lord (a.k.a. Dragon Strike) (Long Xiao Ye)",
    "content": "Toxic effect of venom of tarantula, accidental, subs",
    "img1": "http://dummyimage.com/106x100.png/cc0000/ffffff"
  }, {
    "title": "Stefano Quantestorie",
    "content": "Burn of third degree of left hand, unspecified site",
    "img1": "http://dummyimage.com/165x100.png/ff4444/ffffff"
  }, {
    "title": "Beneath",
    "content": "Partial traumatic MCP amputation of left middle finger",
    "img1": "http://dummyimage.com/125x100.png/dddddd/000000"
  }, {
    "title": "Home",
    "content": "Unsp injury of unsp msl/tnd at ank/ft level, right foot",
    "img1": "http://dummyimage.com/244x100.png/5fa2dd/ffffff"
  }, {
    "title": "Captive, The",
    "content": "Post disp fx of sternal end l clavicle, 7thP",
    "img1": "http://dummyimage.com/223x100.png/5fa2dd/ffffff"
  }, {
    "title": "Torso",
    "content": "Milt op w unsp fire/conflagr/hot subst, civilian, init",
    "img1": "http://dummyimage.com/113x100.png/5fa2dd/ffffff"
  }, {
    "title": "Mambo Italiano",
    "content": "Unsp injury of unspecified part of pancreas, init encntr",
    "img1": "http://dummyimage.com/119x100.png/ff4444/ffffff"
  }, {
    "title": "Suspicion",
    "content": "4-part fracture of surgical neck of left humerus",
    "img1": "http://dummyimage.com/187x100.png/5fa2dd/ffffff"
  }, {
    "title": "Virunga",
    "content": "Disp fx of shaft of unsp metacarpal bone, init for opn fx",
    "img1": "http://dummyimage.com/187x100.png/5fa2dd/ffffff"
  }, {
    "title": "Couples Retreat",
    "content": "Displ suprcndl fx w intrcndl extn low end r femr, 7thM",
    "img1": "http://dummyimage.com/130x100.png/ff4444/ffffff"
  }, {
    "title": "Frighteners, The",
    "content": "Poisoning by opth drugs and preparations, assault, init",
    "img1": "http://dummyimage.com/236x100.png/dddddd/000000"
  }, {
    "title": "Hellsinki (Rööperi)",
    "content": "Abnormal immunolog findings in specimens from resp org/thrx",
    "img1": "http://dummyimage.com/160x100.png/ff4444/ffffff"
  }, {
    "title": "Hamster Factor and Other Tales of Twelve Monkeys, The",
    "content": "Prsn brd/alit hv veh injured in clsn w statnry object, init",
    "img1": "http://dummyimage.com/177x100.png/cc0000/ffffff"
  }, {
    "title": "Born to Be Bad",
    "content": "Breakdown of int fix of bones of hand and fingers, init",
    "img1": "http://dummyimage.com/203x100.png/dddddd/000000"
  }, {
    "title": "Blue",
    "content": "Chronic venous hypertension w inflammation of r low extrem",
    "img1": "http://dummyimage.com/206x100.png/ff4444/ffffff"
  }, {
    "title": "Elvis on Tour",
    "content": "Nondisp avulsion fx left ilium, subs for fx w delay heal",
    "img1": "http://dummyimage.com/206x100.png/5fa2dd/ffffff"
  }];


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