
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

let shortBlog = document.getElementById('shortBlog');
let htmlSegment = '';
htmlSegment += makeSmallBlog(brm[8]);
htmlSegment += makeSmallBlog(brm[54]);
htmlSegment += makeSmallBlog(brm[22]);
htmlSegment += makeSmallBlog(brm[59]);
shortBlog.innerHTML = htmlSegment;


function makeBigBlog(blog) {
    let html= `
    
        <div class="card border-0">
            <a href="https://boxcar.site/view.php?q=${blog.title}"><img alt="" class="img-fluid rounded" src="${blog.img1}"></a>
            <div class="card-body px-2">
            <h4 class="text-primary badge bg-main text-light" href="">${blog.category}</h4>
            <h3 class="fw-semibold my-2"><a class="text-decoration-none text-dark oswald" href="">${blog.title}</a></h3>
                <p>${blog.body}</p>
            </div>
        </div>

    `;
    return html;
};

let bigBlog = document.getElementById('bigBlog');
// let bigHtmlSegment = makeBigBlog(brm[9]);
// bigBlog.innerHTML = bigHtmlSegment;


