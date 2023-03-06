let blogs = data;


function makeOverlayCard(blog){
    let image  =  blog.img1;
    let link = "http://www.brmcontractors.net" + image.slice(2);

    const wrapper = document.getElementById("cardOverlay");

    let cover = document.createElement("div");
    cover.className = "card-cover";
    cover.style.background = `linear-gradient(180deg, rgba(19, 16, 34, 0.58) 0%, rgba(19, 16, 34, 0.78) 100%)`;
    cover.style.backgroundImage = `url(${link})`;
    cover.style.backgroundSize = "contain";
    cover.style.backgroundPosition = "center";
    cover.style.backgroundRepeat = "no-repeat";
    cover.style.backgroundColor = "rgb(163,30,30)";
    cover.style.borderRadius = "20px";

    wrapper.appendChild(cover);

      let card = document.createElement("div");
      card.classList = "card";
      cover.appendChild(card);



        let div2 = document.createElement("div");
        div2.classList = "card-content";
        card.appendChild(div2);

          let htag = document.createElement("h2");
          htag.innerHTML = blog.category;
          div2.appendChild(htag);

          let ptag = document.createElement("p");
          ptag.innerHTML = blog.body;
          div2.appendChild(ptag);

          let imgIcon = document.createElement("img");
          imgIcon.src = "http://www.brmcontractors.net/assets/logo/brm-red.ico";
          imgIcon.style.width = "80px";
          div2.appendChild(imgIcon);
};



