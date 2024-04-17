



function makePostTemplate(blog) {
    let html = `
    
    <div class="card shadow-lg px-0 bg-light" style="width:100%; max-width:39rem;margin:auto;border-radius:8px;">
      
      <div class="card-body d-flex flex-row align-items-center">
        <img src="${blog.avatar}" class="rounded-circle me-3" height="50px" width="50px" alt="Image of ${blog.author}">
        <div>
          <h4 class="card-title m-0 oswald"><strong>${blog.author}</strong></h4>
          <p class="card-title m-0 mt-1" style="line-height:10px;">${blog.date}</p>
        </div>
      </div>

      <div class="justify-content-center d-flex ">
        <a href="https://boxcar.site/view.php?q=${blog.title}">
          <div class="mask" style="background-color: rgba(251, 251, 251, 0.85);">
            <img class="img-fluid blog-image mx-auto" src="${blog.img1}" alt="Image ${blog.category}" style="max-height:490px;">
          </div>
        </a>
      </div>

      <div class="card-body">
        <h4 class="card-title font-weight-bold mb-0 oswald"><strong>${blog.title}</strong></h4>
          <p class="card-text fs-5">${blog.body}</p>
          <div class="d-flex justify-content-between">
            <p class="card-text bg-main text-light badge py-1 px-3 fs-6">${blog.category}</p>
          <div>
            <a href="https://boxcar.site/view.php?q=${blog.title}" class="text-dark">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-folder2-open" viewBox="0 0 16 16"><path d="M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v.64c.57.265.94.876.856 1.546l-.64 5.124A2.5 2.5 0 0 1 12.733 15H3.266a2.5 2.5 0 0 1-2.481-2.19l-.64-5.124A1.5 1.5 0 0 1 1 6.14zM2 6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5a.5.5 0 0 0-.5.5zm-.367 1a.5.5 0 0 0-.496.562l.64 5.124A1.5 1.5 0 0 0 3.266 14h9.468a1.5 1.5 0 0 0 1.489-1.314l.64-5.124A.5.5 0 0 0 14.367 7z"/></svg></a>
            <a href="https://boxcar.site/edit.php?q=${blog.title}">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square text-main" viewBox="0 0 16 16"><path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/><path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </div>

    
    
    `;

    

  let html2= `
  
      <div class="card border-0">
          <a href=""><img alt="" class="img-fluid rounded" src="${blog.img1}"></a>
          <div class="card-body px-2">
          <h4 class="text-primary badge bg-main text-light" href="">${blog.category}</h4>
          <h3 class="fw-semibold my-2"><a class="text-decoration-none text-dark oswald" href="">${blog.title}</a></h3>
              <p>${blog.body}</p>
          </div>
      </div>

  `;


    return html;
};

function smallPost(blog)
{
  let html_segment = 
  `
  <div class="card border-0">
            <a href=""><img alt="" class="img-fluid rounded" src="${blog.img1}"></a>
            <div class="card-body px-2">
                <p class="text-primary badge bg-main text-light" href="">${blog.category}</p>
                <h5 class="fw-semibold oswald" style="height:70px;"><a class="text-decoration-none text-dark" href="">${blog.title}</a></h5>
            </div>
            </div>
  `;
  return html_segment;
}
function error404() {
  let html_segment = 
  `
  <h4 class='alert alert-secondary py-2 m-0 mt-1 w-100 text-center'>404 Resource unavailable</h4>
  <img src='https://www.aut.ac.nz/__data/assets/image/0006/92328/placeholder-image10.jpg' class='img-fluid'>
  `;
  return html_segment;
}

// returns json from api to blog template by id 
// postId --> blog id to grab
// targetId --> id of element to inject html to

function getBlogFromId(postId, targetId){
    const httpRequest = new XMLHttpRequest;
    httpRequest.onreadystatechange = function () {
        if (this.readyState = 4 && this.status == 200) {
            const result = httpRequest.responseText;
            const blogArr = JSON.parse(result);     

            const blogObj = {
                id: blogArr['id'],
                purpose: blogArr['purpose'],
                category: blogArr['category'],
                title: blogArr['title'],
                date: blogArr['date'],
                author: blogArr['author'],
                avatar: blogArr['avatar'],
                body: blogArr['body'],
                img1: (blogArr['img1'].includes('http')) ? blogArr['img1'] : 'https://www.brmcontractors.net/' + blogArr['img1'],
                img2: (blogArr['img2'].includes('http')) ? blogArr['img2'] : 'https://www.brmcontractors.net/' + blogArr['img2'],
                project: blogArr['project'],
                isHero: blogArr['isHero']
            };
            
            document.getElementById(targetId).innerHTML = makePostTemplate(blogObj);   
        }
        if (this.status == 404) {
            document.getElementById(targetId).innerHTML = error404();
        }
    }
    httpRequest.open("GET", `https://brm.boxcar.site/blogs/${postId}`, false);
    httpRequest.withCredentials = false;
    httpRequest.send();
}

// returns json from to blog template api  
// key --> category author project purpose title isHero
// val --> query search field
// targetId --> id of element to inject html to

function getBlogFromKey (key, val, targetId) {
  let target = document.getElementById(targetId);
  target.innerHTML = '';
  const httpRequest = new XMLHttpRequest;
  httpRequest.onreadystatechange = function () {
      if (this.readyState = 4 && this.status == 200) {
          const result = httpRequest.responseText;
          const blogArr = JSON.parse(result);     
          
          blogArr.forEach(blogArr => {
              const blogObj = {
                id: blogArr['id'],
                purpose: blogArr['purpose'],
                category: blogArr['category'],
                title: blogArr['title'],
                date: blogArr['date'],
                author: blogArr['author'],
                avatar: (blogArr['avatar'].includes('http')) ? blogArr['avatar'] : 'https://www.boxcar.site/' + blogArr['avatar'],
                body: blogArr['body'],
                img1: (blogArr['img1'].includes('http')) ? blogArr['img1'] : 'https://www.boxcar.site/' + blogArr['img1'],
                img2: (blogArr['img2'].includes('http')) ? blogArr['img2'] : 'https://www.brmcontractors.net/' + blogArr['img2'],
                project: blogArr['project'],
                isHero: blogArr['isHero']
              };
              (blogObj[`${key}`] == val || val == 'all' || key == 'all' ) ?  
                target.innerHTML += makePostTemplate(blogObj): clearInterval();
          });

          clearSelects(key);
      }
      if (this.status == 404) {
          document.getElementById(targetId).innerHTML = error404();
      }
  }
  httpRequest.open("GET", `https://brm.boxcar.site/blogs/`, false);
  httpRequest.withCredentials = false;
  httpRequest.send();
}

function getAllValuesToSelect (key, targetId) {
  let target = document.getElementById(targetId);
  let array = [];
  const httpRequest = new XMLHttpRequest;
  // httpRequest.setRequestHeader('X-Requsted-With', XMLHttpRequest)
  httpRequest.onreadystatechange = function () {
      if (this.readyState = 4 && this.status == 200) {
          const result = httpRequest.responseText;
          const blogArr = JSON.parse(result);     

          blogArr.forEach(blog => {

            if (!array.includes(blog[`${key}`].trim())) {
              array.push(blog[`${key}`].trim())
            } 
          })
          let newArr = [];
          for(let i=0; i<array.length; i++){
                target.innerHTML += `<option value="${array[i]}">${array[i]}</option>`;  
          }

          
      }

      if (this.status == 404) {
          document.getElementById(targetId).innerHTML = error404();
      }
      
    }
  httpRequest.open("GET", `https://brm.boxcar.site/blogs/`, false);
  httpRequest.withCredentials = false;
  httpRequest.send();
}
function clearSelects(k) {

  let selects = document.querySelectorAll('.selects');
  selects.forEach(s => {
    if (!s.id.includes(k)){
      s.value = 'Select ..';
    }
  });
}





