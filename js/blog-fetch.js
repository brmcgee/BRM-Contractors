async function getBlogs() {
    let url = 'https://www.brmcontractors.net/js/brmBlogs.json';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}


async function renderBlogs() {
    let blogs = await getBlogs();
    let html = '';
    blogs.forEach(blog => {
        let htmlSegment = `<div class="user" style="border:1px solid #333; max-width:800px;">
                            <h2>${blog.category}</h2>
                            <img src="${blog.img2}" style="width:300px;margin-bottom:2px;" >
                            <img src="${blog.img1}" style="width:300px" >
                            <p>${blog.author}</p>
                            <p>${blog.date}</p>
                            <div class="content">
                              <h2>${blog.title}</h2>
                              <p>${blog.body}</p>
                              <p>${blog.project}</p>
                            </div>
                        </div>`;

        html += htmlSegment;
    });

    let container = document.querySelector('.container');
    container.innerHTML = html;
}

renderBlogs();