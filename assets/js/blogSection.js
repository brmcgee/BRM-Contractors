const bigBlogElem = document.getElementById('#bigBlog');
const smallBlogElem = document.getElementById('#smallBlog'); 


function makeSmallBlog(blog) {
    let html= `
        <div class="col-6">
        <div class="card border-0">
            <a href="https://boxcar.site/view.php?q=${blog.title}"><img alt="" class="img-fluid rounded" src="${blog.img1}"></a>
            <div class="card-body px-2">
                <p class="text-primary badge bg-main text-light" href="">${blog.category}</p>
                <h5 class="fw-semibold oswald" style="height:70px;"><a class="text-decoration-none text-dark" href="">${blog.title}</a></h5>
            </div>
            </div>
        </div>
    `;
    return html;
}

function makeBigBlog(blog) {
    let html= `
    
        <div class="card border-0">
            <a href="https://boxcar.site/view.php?q=${blog.title}"><img alt="" class="img-fluid rounded" src="${blog.img1}"></a>
            <div class="card-body px-2">
            <h4 class="text-primary badge bg-main text-light" href="">${blog.category}</h4>
            <h3 class="fw-semibold my-2"><a class="text-decoration-none text-dark oswald" href="">${blog.title}</a></h3>
                <p class="pb-5">${blog.body}</p>
            </div>
        </div>

    `;
    return html;
};

let query = 'roofing'
let category = [];

var xhr = $.get(`${host}/brm`, function(){
    console.log('connected')
})
    let filtered = [];
    xhr.done(function(data){
        data.map((d) => { (d.category.toLowerCase() == query.toLowerCase() && filtered.push(d)) })

    })
    xhr.done(function(data){
        data.map((d) => { (!category.includes(d.category)  && category.push(d.category))})
        let catHtml = '';
        category.forEach(c => {
            catHtml += `<option value="${c}">${c}</option>`
        })
        document.getElementById('categorySelect').innerHTML = catHtml;
    })

function filterBlogs(query){
    let filtered = [];
    brm.forEach((d) => { (d.category.toLowerCase() == query.toLowerCase() && filtered.push(d)) })
    return filtered;
}

function blogCard(data){
    return `
    <div class="card mb-3 mx-1 rounded-0 p-3 border border-dark shadow" style="max-width: 540px;">
        <div class="row g-0">
            <div class="col-md-4 d-flex flex-column justify-content-between">
                <div class="text-center"><img src="${data.img1}" class="img-fluid rounded-start img-thumbnail" alt="..." style="height:150px;"></div>
                <div class="text-center"><img src="${data.img2}" class="img-fluid rounded-start img-thumbnail mt-3" alt="..." style="height:150px;"></div>
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${data.title}</h5>
                    <p class="card-text">${data.body}</p>
                    <p class="card-text"><small class="text-body-secondary">${data.date}</small></p>
                </div>
            </div>
        </div>
        <div class="mx-auto mb-2">
                <p class="card-text"><small class="text-body-secondary">
                    <img src="${data.avatar}" class="img-fluid rounded-circle" width="40"> 
                    ${data.author}</small>
                </p>
        </div>
    </div>
    `
}
function getSelectCategory(value){
    let blogs = filterBlogs(value);
    let html = '';

    blogs.forEach(b => {
        html += blogCard(b)

    })
    document.getElementById('notification').innerHTML 
        = `<h2 class="p-2 text-center bg-dark text-light mt-2">${value}</h2>`
    document.getElementById('root').innerHTML = html
    

}

document.getElementById('bigBlog').innerHTML = makeBigBlog(brm[59])
document.getElementById('smallBlog').innerHTML = makeSmallBlog(brm[22])
document.getElementById('smallBlog').innerHTML += makeSmallBlog(brm[48])
document.getElementById('smallBlog').innerHTML += makeSmallBlog(brm[17])
document.getElementById('smallBlog').innerHTML += makeSmallBlog(brm[51])






