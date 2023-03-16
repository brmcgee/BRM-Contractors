document.addEventListener("DOMContentLoaded", () => {
    allBlogs.forEach((blog) => {
     createCard(blog)
    })
 });

filterCards("all");
let cards = document.querySelectorAll("darkCards");


function filterCards(choice){

    console.log(choice)

    if (choice = "all") {
        choice = '';
    }
    

}


function removeCards() {
    const container = document.getElementById("serviceCard");
    container.replaceChildren("");
} 

