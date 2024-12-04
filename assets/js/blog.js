function el(target) {
    return document.querySelector(target);
}

const bigBlogElem = el('#bigBlog');
const smallBlogElem = el('#smallBlog'); 

// async function fetchPostId (postId, target, size){
//     let url = `https://brm.boxcar.site/posts/${postId}`;

//     try {
        
//         let response = await fetch (url);
//         try {
//             let data = await response.json();
//             handleFetchPost(data, target, size)
//         } catch (parseError) {
//             console.log(parseError);
//         }
//     } catch (networkError) {
//         console.log(networkError);
//     }
// }




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

document.getElementById('bigBlog').innerHTML = makeBigBlog(brm[59])
document.getElementById('smallBlog').innerHTML = makeSmallBlog(brm[22])
document.getElementById('smallBlog').innerHTML += makeSmallBlog(brm[48])
document.getElementById('smallBlog').innerHTML += makeSmallBlog(brm[17])
document.getElementById('smallBlog').innerHTML += makeSmallBlog(brm[51])



