let brmDataImport = [];
console.log('script running');

// let response = fetch("https://www.brmcontractors.net/js/brmData.json")
// .then(response => response.text())
// .then(data => console.log(data));

// async function fetchBRMdata() {
//     let brmDataUrl = "https://www.brmcontractors.net/js/brmData.json";

//     try {
//         let result = await fetch("brmData.json");
//         return await result.json();

//     } catch (error) {
//         console.log('error with fetch')
//     }
// }

async function fetchBRMdata() {
    let url = 'https://www.brmcontractors.net/js/brmData.json';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderUsers() {
    let users = await fetchBRMdata();
    let html = '';
    users.forEach(user => {
        let htmlSegment = `<div class="user">
                            <img src="${user.img1}" >
                            <h2>${user.title} </h2>
                            <div class="email"><p>${user.author}</p></div>
                        </div>`;

        html += htmlSegment;
    });

    let container = document.querySelector('.container');
    container.innerHTML = html;
}

renderUsers();




// async function renderBlogs(){
//     let blogs = await fetchBRMdata();
//     let html = "";

//     blogs.forEach((blog) => {
//         let htmlSegment = `<div class = "blog">
//                             <img src="${blog.img1} style='width:100px;'>"
//                              <h2>${blog.title}</h2>
//                               <p>${blog.body}</p>
//                             </div>`;
//         htmlSegment = "<p>hello</p>"
//         html += htmlSegment;
//     });

//     let targetContainer = document.querySelector(".target-container");
//     targetContainer.innerHTML = html;
// };


// renderBlogs();





    
    // }
    // let response = await fetch(brmDataUrl);
    

    //     //handle the response
    //     if (response.status === 200) {
    //         let data = await response.text();
    //     }