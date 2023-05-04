



document.addEventListener("DOMContentLoaded", () => {
    records = data;
})




let selectTitleEl = document.getElementById("selectTitle");
let selectCategoryEl = document.getElementById("selectCategory");

let displayCard = document.getElementById('displayCard');
let cardTitleEl = document.getElementById("displayCardTitle");
let cardBodyEl = document.getElementById("displayCardBody");
let cardCategoryEl = document.getElementById("displayCardCategory");
let cardImgEl = document.getElementById("displayCardImg");





const clearDisplayCard = function() {
    displayCard.innerHTML = "";
};

const loadOptions = function () {
    let optionEl;

    // populate
    for (let i = 0; i < records .length; i++) {
        let title = records[i].title;

        optionEl = document.createElement('option');
        optionEl.value = title;
        optionEl.innerHTML = title;
        selectTitleEl.appendChild(optionEl);
    }

};

const searchSelectedTitle = function () {
    clearDisplayCard();
    let selectTitleValue = selectTitleEl.value;
    let filteredSelectTitleValue = selectTitleValue.toLowerCase();
    
    records.forEach((blog, index) => {

        let blogTitle = blog.title;
        let filterBlogTitle = blogTitle.toLowerCase();
 
        if (filterBlogTitle === filteredSelectTitleValue) {
            showBlog(index);
        }
    });

};

const loadOptionsCategory = function () {
    let optionEl;
    let arr = [];

    // populate
    for (let i = 0; i < records .length - 4; i++) {
        let category = records[i].category.trim();
    
        if (!arr.includes(category)) {
            optionEl = document.createElement('option');
            optionEl.value = category;
            optionEl.innerHTML = category;
            selectCategoryEl.appendChild(optionEl);
            arr.push(category);
        }
    }
};

const searchSelectedCategory = function () {
    clearDisplayCard();
    let selectCategoryValue = selectCategoryEl.value;
    let filteredSelectCategoryValue = selectCategoryValue.toLowerCase();
    
    records.forEach((blog, index) => {

        let blogCategory = blog.category;
        let filterBlogCategory = blogCategory.toLowerCase();
 
        if (filterBlogCategory.trim() === filteredSelectCategoryValue.trim()) {
            showBlog(index);
        }
    });

};


const showBlog = function (index) {
   let blog = records[index];
   let blogImage1 = blog.img1;
   let blogImage2 = blog.img2;

   (!blog.img1.includes("http")) ? blogImage1 = `https://www.brmcontractors.net/${blog.img1}` : blogImage1 = blog.img1;
   (!blog.img2.includes("http")) ? blogImage2 = `https://www.brmcontractors.net/${blog.img2}` : blogImage2 = blog.img2;

    let html = `
    
    <div class="card shadow-lg bg-light border border-dark col-sm-11 col-lg-6" style="min-width:auto; width:42rem; margin: 2rem auto;">
      <div class="flex-row-reverse row g-0">
        <div class="col-md-4 mx-auto ps-2">
          <small class="badge bg-dark text-light fs-6">Blog ID ${blog.id}</small> <br>
          <img src="${blogImage1}" class="img-fluid rounded-start mt-3" alt="${blog.title}" style="width:190px;height:200px;">
            <a href="${blogImage1}" class="btn btn-sm btn-secondary m-1">Img 1</a> <br>
          <img src="${blogImage2}" class="img-fluid rounded-start mt-3" alt="${blog.title}" style="width:190px;height:200px;">
          <a href="${blogImage2}" class="btn btn-sm btn-secondary m-1">Img 2</a>
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h3 class="card-title">${blog.title}</h3>
              <p class="fs-3 badge bg-dark text-light p-2">${blog.category}</p>
            <p class="card-text">What an awesome transformation on this house. We installed new vinyl siding, soffit and fascia, window wraps and more. This is a 2-story company house so its tall. We handle steep and tall - so give us a call.     </p>
            <p class="card-text">
            <img src="https://www.brmcontractors.net/blog/assets/gallery/brian.jpg" class="img-fluid mx-auto d-block shadow-xl" alt="Profile Picture" style="width:80px;height:80px;border-radius:50%;">
              </p><p class="text-center">Brian McGee<br>
                <small>${blog.date}</small> <br>
                <small>${blog.purpose} / </small>
                <small>${blog.project}</small>               
              </p> 
          </div>
        </div>
      </div>
    </div>
    
    `;
    displayCard.innerHTML += html;
};



document.addEventListener("DOMContentLoaded", loadOptions);
document.addEventListener("DOMContentLoaded", loadOptionsCategory);

selectTitleEl.addEventListener("input", searchSelectedTitle);
selectCategoryEl.addEventListener("input", searchSelectedCategory);


