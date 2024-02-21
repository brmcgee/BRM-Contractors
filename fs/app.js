function elem (str) {
    return document.querySelector(str);
}



let viewContainer = elem('#viewCont');
let commentHTML = '';

blogData.forEach(blog => {

    let html = `
    
    <div class="card">
        <div class="card-img-top">
            <img src="${blog.img}" alt="">
        </div>
        <div class="card-body">
            <div class="card-title">${blog.title}</div>
            <div class="card-body">${blog.body}</div>
        </div>
    </div>
    `;

    blogComment.forEach(comment => {
        commentHTML = '';
        if (comment.post_id == blog.id) {
            commentHTML +=  `
            <div class="comment">
                <div class="comment-img-top">
                    <img src="${comment.auth_avatar}" alt="">
                </div>
                <div class="comment-body">
                    <div class="comment-title">${comment.author}</div>
                    <div class="comment-body">${comment.comment}</div>
                </div>
            </div>        
            `;
        }
        viewContainer.innerHTML += commentHTML;
    }) 

    viewContainer.innerHTML += html;
    
});

